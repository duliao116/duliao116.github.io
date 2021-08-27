---
title: python学习笔记(2)
tags:
  - python
  - 笔记
---
## 函数
函数本身也是一个对象，类似于js（只是类似，但不能对函数增加属性：'function' object does not support item assignment），可以直接赋值给另一个变量。
```python
result = abs(-1)
# result == 1
# 将函数abs赋值给a
a = abs
result = a(-1)
# result == 1
```
> 函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个“别名”

### 神奇的pass
这东西我理解就是python没有花括号了，如果想写一个空函数体，没办法使用function(){}这种方式了，怎么办呢，python里都是缩进啊，要定义空函数体咋弄，定义个关键字吧——pass
```python
def nop():
    pass
```
以上的写法可以用作占位，后期添加函数体，类似java的写法
```java
public void nop(){
    //TODO
}
```
### 参数数据类型
由于python中的变量都是没有类型的，那函数的形参也是没有类型的，但是在函数体中依照某种类型对参数做了处理，如果不在函数中做参数类型检查，就会在函数执行时报出不确定的错误
```python
def add(a, b):
    return a + b
```
正常调用
```python
print('1 + 2 =', add(1, 2))
#输出：1 + 2 = 3
```
异常调用
```python
print('a + 2 =', add('a', 2))

Traceback (most recent call last):
  File "D:\study\python\fun.py", line 6, in <module>
    print('a + 2 =', add('a', 2))
  File "D:\study\python\fun.py", line 2, in add
    return a + b
TypeError: can only concatenate str (not "int") to str
```
增加参数类型校验，抛出期望的异常
```python
def add(a, b):
    if (not isinstance(a, (int, float))) or (not isinstance(a, (int, float))):
        raise TypeError("参数类型错误")
    return a + b

add('a', 2)

Traceback (most recent call last):
  File "D:\study\python\fun.py", line 8, in <module>
    print('a + 2 =', add('a', 2))
  File "D:\study\python\fun.py", line 3, in add
    raise TypeError("参数类型错误")
TypeError: 参数类型错误
```

### 返回值
函数的返回值可以返回多个
```python
def p():
    return 2, 3
r1, r2 = p()
print(r1, r2)
#输出：2 3
```
这其实是假象，其真正的返回值是一个tuple。只不过在语法上，返回一个tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值，所以，Python的函数返回多值其实就是返回一个tuple，但写起来更方便。
```python
t = 3, 4, 5
print(t)  # (3, 4, 5)
t1, t2, t3 = t
print(t1, t2, t3) # 3 4 5
t1, t2, t3 = 4, 5, 6
print(t1, t2, t3) # 4 5 6
```

### 默认参数
可以设置参数默认值，参数有了默认值之后在调用时就不必需传值了
```python
def add(a, b=0, c=0):
    return a + b + c

print("1 =", add(1))                #1 = 1
print("1 + 2 =", add(1, 2))         #1 + 2 = 3
print("1 + 2 + 3 =", add(1, 2, 3))  #1 + 2 + 3 = 6

#脚本语言的强大(过于灵活)之处，还可以再定义一个函数
def add(a, b):
    return a * b

print(add(3, 4)) # 12

#可见后面定义的函数会覆盖之前定义的函数

```
参数默认值是一个函数关联的一个实例，如果参数默认值被函数逻辑改变了，会改变默认值，导致其再次被调用时初始值改变
```python
def addList(list = []):
    list.append(1)
    return list

print(addList())    # [1]
print(addList())    # [1, 1]
print(addList())    # [1, 1, 1]
```
::: danger
默认参数必须指向不变对象！否则重复调用会出问题！
:::
### 可变参数
*args是可变参数，args接收的是一个tuple
```python
def add(*args):
    sum = 0
    for n in args:
        sum += n
    return sum

print(add(1, 2, 3))   # 6
param = [1, 2, 3, 4]
print(add(*param))    # 10 类似于js的解构赋值
print(param)          # [1, 2, 3, 4]
print(*param)         # 1 2 3 4

```

### 关键字参数
**kw是关键字参数，kw接收的是一个dict
```python
def add(**kw):
    print(kw)

#一个一个传
add(name="leo", age=23)           # {'name': 'leo', 'age': 23} 
#解构一个对象传
add(**{"name": "leo", "age": 23}) # {'name': 'leo', 'age': 23} 
```
