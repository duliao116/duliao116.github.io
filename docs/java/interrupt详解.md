# interrupt详解

## 概要说明

本文旨在说明Thread类中的interrupt方法的作用及其造成的影响。

如果你觉得调用了interrupt方法之后，对应的线程就会中断，不再继续执行，恭喜你，你想错了。

让线程退出执行逻辑，不再继续的方法只有一个，那就是run方法执行完。无论我们怎么构建run方法里面的代码逻辑，只要没有执行完run方法里面的代码，线程就不会退出。

一般我们怎么让一个方法执行“完”呢，一个就是方法里面的代码逻辑走完了，一个就是执行过程中发生异常，退出了代码执行。对待run方法，也是同样的道理，想退出，要么正常执走完逻辑，要么就抛出异常。

回到interrupt方法，调用之后并不会对run方法有什么实际影响，所以不会影响线程的执行。那这个方法有什么用呢？

1. 将线程的中断标识设为true。
2. 如果线程中有能响应中断的方法执行，会抛出InterruptedException。如：Thread.sleep()，BlockingQueue.take()等。

## 中断标识

##### 测试1，interrupt方法是否可以重复调用

```java
@Test
void can_repeat_call_interrupt() {
    Thread.currentThread().interrupt();
    Thread.currentThread().interrupt();
    Thread.currentThread().interrupt();
}
```

经过测试，没有抛出异常，说明可以重复调用。

##### 测试2，interrupt是否改变了标识

~~~java
@Test
void only_set_interrupt_flag_not_interrupt_thread() {
    Thread.currentThread().interrupt();
    assertTrue(Thread.currentThread().isInterrupted());
}
~~~

调用了interrupt方法后，线程的interrupted标识就被设为了true。

> 调用interrupt()方法后，线程还在继续执行，并没有中断、停止执行之类的现象。

##### 测试3，isInterrupted方法调用是否会改变标识

```java
@Test
void can_repeat_get_interrupt_flag_by_instance_method() {
	assertFalse(Thread.currentThread().isInterrupted());
    Thread.currentThread().interrupt();
    assertTrue(Thread.currentThread().isInterrupted());
    assertTrue(Thread.currentThread().isInterrupted());
}
```

isInterrupted()方法是可以重复调用的，不会改变内部状态，属于“查询”。

##### 测试4，interrupted方法调用是否会改变标识

```java
@Test
void cannot_repeat_get_interrupt_flag_by_static_method() {
    assertFalse(Thread.currentThread().isInterrupted());
    Thread.currentThread().interrupt();
    assertTrue(Thread.interrupted());
    assertFalse(Thread.currentThread().isInterrupted());
    assertFalse(Thread.interrupted());
}
```

interrupted()方法是不能重复调用的，会改变内部状态，属于“查询+更新”。

## 异常响应

##### 测试1，TIMED_WAITING状态的中断响应

```java
@Test
void cannot_timed_waiting_when_interrupted() throws InterruptedException {
    CountDownLatch countDownLatch = new CountDownLatch(1);
    List<Exception> exceptions = new ArrayList<>(1);
    Thread thread = new Thread(() -> {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            exceptions.add(e);
        } finally {
            countDownLatch.countDown();
        }
    });
    thread.start();
    thread.interrupt();
    countDownLatch.await();
    assertEquals(1, exceptions.size());
}
```

线程sleep之后，就进入了TIMED_WAITING状态，此时调用interrupt方法中断线程，就会抛出异常。

##### 测试2，WAITING状态的中断响应

```java
@Test
void cannot_waiting_when_interrupted() throws InterruptedException {
    CountDownLatch countDownLatch = new CountDownLatch(1);
    List<Exception> exceptions = new ArrayList<>(1);
    LinkedBlockingQueue<String> queue = new LinkedBlockingQueue<>();
    Thread thread = new Thread(() -> {
        try {
            queue.take();
        } catch (InterruptedException e) {
            exceptions.add(e);
        } finally {
            countDownLatch.countDown();
        }
    });
    thread.start();
    thread.interrupt();
    countDownLatch.await();
    assertEquals(1, exceptions.size());
}
```

queue的take()之后，就进入了WAITING状态，此时调用interrupt方法中断线程，就会抛出异常。

##### 测试3，抛出InterruptedException异常后，线程的interrupted状态是否还在

```java
@Test
void interrupted_flag_is_false_when_throw_exception() throws InterruptedException {
    CountDownLatch countDownLatch = new CountDownLatch(1);
    LinkedBlockingQueue<String> queue = new LinkedBlockingQueue<>();
    boolean[] interruptedFlags = new boolean[3];
    Thread thread = new Thread(() -> {
        try {
            // 中断标志仍然是true
            interruptedFlags[1] = Thread.currentThread().isInterrupted();
            queue.take();
        } catch (InterruptedException e) {
            // 中断标志变为false
            interruptedFlags[2] = Thread.currentThread().isInterrupted();
        } finally {
            countDownLatch.countDown();
        }
    });
    // 先设置中断标志，然后再启动，保证遇到take()就抛异常
    thread.interrupt();
    // 中断标志已经是true
    interruptedFlags[0] = thread.isInterrupted();
    thread.start();
    countDownLatch.await();
    assertArrayEquals(new boolean[]{true, true, false}, interruptedFlags);
}
```

抛出异常后，interrupted标识就被重置为了false。如果我们希望通过异常来退出线程，那在异常处理的部分重新抛出合适异常就行。如果我们希望捕获到异常之后，通过外部来处理是否退出，那最好在catch语句中恢复中断标识。

```java
while(!Thread.currentThread().isInterrupted()){
    try{
        Thread.sleep(1000);
    }catch(InterruptedException e){
        //恢复线程的中断标识
        Thread.currentThread().interrupt();
    }
}
```

