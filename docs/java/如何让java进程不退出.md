# Java进程优雅结束

## 线程间的关系

线程分为**守护线程**和**非守护线程**。

主线程是非守护线程，从主线程新建的子线程默认也是非守护线程。

要创建守护线程，需要调用setDaemon(true)方法。

主线程和其它的非守护线程在jvm底层来看没有区别。

唯一的区别就是主线程是程序的入口，其它线程是由主线程或者其子孙线程创建的。

## 进程何时退出

当所有的**非守护线程**都执行完毕，全部退出时，Java进程就退出了。

一般有一个很大的误解，就是主线程执行完后，程序就退出了。

其实不然，如果在主线程中启动的有其它的**非守护线程**，那程序时不会退出的。

```java
import java.util.concurrent.TimeUnit;

public class ThreadTest {
    public static void main(String[] args) {
        System.out.println("main thread start");
 
        ChildThread t1 = new ChildThread("thread1");
        ChildThread t2 = new ChildThread("thread2");
        //thread1设置为守护线程，改方法要在线程启动前调用，在线程启动后不能在调用
        t1.setDaemon(true);
        
        //启动线程
        t1.start();
        t2.start();
 
        System.out.println("main thread end ");
    }
}
 
class ChildThread extends Thread {
    private String name = null;
 
    public ChildThread(String name) {
        this.name = name;
    }
 
    @Override
    public void run() {
        System.out.println(this.name + " start");
 
        try {
            //thread1 sleep 2秒
            if("thread1".equals(this.name)){
                TimeUnit.SECONDS.sleep(2);
            }

            //thrad2 sleep 1秒
            if("thread2".equals(this.name)){
                TimeUnit.SECONDS.sleep(1);
            }

        } catch (InterruptedException e) {
            System.out.println(e);
        }
 
        System.out.println(this.name + " end");
    }
}
```

输出：

```
main thread start
main thread end 
thread1 start
thread2 start
thread2 end
```

说明：

1. 主线程没有任何阻塞，main方法运行完后立马结束。
2. thread2 sleep 1s，在主线程后运行完。
3. thread1 sleep 2s，还没有运行完，但是所有**非守护线程**都执行完退出了，导致进程退出，thread1等不到2s了，直接退出不再执行。

## 阻止进程退出

了解了进程退出的原理，现在可以想办法不让进程退出了。

只要有一个**非守护线程**没有退出，进程就不会退出，那想办法弄一个不退出的**非守护进程**就行了。

巧了，主线程就是一个**非守护线程**，想法子让主线程阻塞，不退出，那进程就不会退出了。

```java
package com.example.sbdemo;

public class ShutdownTest {
    private static final Object monitor = new Object();

    public static void main(String[] args) throws InterruptedException {
        synchronized (monitor) {
            monitor.wait();
        }
    }
}
```

ok，主线程阻塞了，程序退不出来了。

## 如何优雅退出

程序既然启动了，就总有结束的时候。

在结束的时候如何**优雅**的收场？

```java
public class ShutdownTest {
    private static final Object monitor = new Object();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("主进程启动");
        //添加shutdown hook，这样在执行kill -15或ctrl+c终止程序时，会执行钩子中的代码。
        Runtime.getRuntime().addShutdownHook(new Thread(()->{
            System.out.println("开始关闭程序");
            synchronized (monitor) {
                //唤醒主进程
                monitor.notifyAll();
            }
        }));
        synchronized (monitor) {
            System.out.println("主进程阻塞");
            monitor.wait();
        }
        System.out.println("主进程退出");
    }
}
```

输出：

```
主进程启动
主进程阻塞
```

执行：ctrl+c

```
开始关闭程序
主进程退出
```

换一种实现，使用Java中的Lock。

```java
package com.example.sbdemo;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ShutdownTest {
    private static final Lock lock = new ReentrantLock();
    private static final Condition condition = lock.newCondition();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("主进程启动");
        Runtime.getRuntime().addShutdownHook(new Thread(()->{
            System.out.println("开始关闭程序");
            lock.lock();
            try {
                condition.signalAll();
            }finally {
                lock.unlock();
            }
        }));

        lock.lock();
        try{
            System.out.println("主进程阻塞");
            condition.await();
        }finally {
            lock.unlock();
        }
        System.out.println("主进程退出");
    }
}
```

## springboot 程序

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@SpringBootApplication
public class ShutdownTest {
    private static final Lock lock = new ReentrantLock();
    private static final Condition condition = lock.newCondition();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("主进程启动");
        //启动springboot相关
        SpringApplication.run(ShutdownTest.class, args);
        //阻塞主线程
        mainThreadWait();
    }

    private static void mainThreadWait() throws InterruptedException {
        Runtime.getRuntime().addShutdownHook(new Thread(()->{
            System.out.println("开始关闭程序");
            lock.lock();
            try {
                condition.signalAll();
            }finally {
                lock.unlock();
            }
        }));

        lock.lock();
        try{
            System.out.println("主进程阻塞");
            condition.await();
        }finally {
            lock.unlock();
        }
        System.out.println("主进程退出");
    }
}
```





