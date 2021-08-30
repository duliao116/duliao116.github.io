---
title: Controller层如何做单元测试
tags:
  - 单元测试
  - java
---
## 工作
### Spring Web Test
最近一直在想怎么在测试controller层的时候不实例化service和数据库等依赖，今天就专门研究了一下。发现强大的Spring已经给我们提供了专门测试Controller层的方式，详见[测试 Web 层](https://spring.io/guides/gs/testing-web/)。

之前是设想的把Service的接口定义和实现分离，让controller单独依赖Service接口的想法，然后给测试单独定义一个application，这样可以指定扫描的包，只扫描controller和service接口所在的包，这样就避免了测试一个controller接口也要实例化所有的bean和其它依赖的资源（数据库、redis、mq、注册中心等等）。不成想spring已经实现了，逻辑差不多，单独定义了一个测试用注解
```@WebMvcTest```，这个注解可以只扫描@Controller相关的注解，给予实例化，其它@Service注解、@Repository注解都不扫描，比指定包名更加的方便。而且这个注解可以单独指定特定的Controller类做测试，Spring容器就会只实例化指定的类，不会实例化其它的Controller类。果然，这种活还是框架给做比较好，完美解决依赖问题。

这个注解呢，有个问题，使用junit5的话在类上面只注解这个就可以了
```java
@WebMvcTest
public class WebMockTest{

}
```
但是使用junit4的话，就得在上面多加一个注解
```java
@Runwith(SpringRunner.class)
@WebMvcTest
public class WebMockTest{

}
```
至此，controller层单元测试可以算是有眉目了，后续要完善用例，规范即可。
