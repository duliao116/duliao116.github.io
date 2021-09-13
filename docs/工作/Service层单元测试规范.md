---
title: Service层集成测试规范
autoGroup-1: 单元测试规范
autoSort: 98
tags:
  -- 单元测试
  -- 规范
---
1. 依赖外部的不测
2. 直接调用dao层的不测
3. 主要测试业务逻辑
4. 不依赖外部框架，手工生成实例，使用spring注入时最好采用构造器注入，这样方面构造对象
5. 依赖的其它service进行mock，不要依赖过多service，否则构造对象时很困难
6. 依赖的dao层给mock掉
7. 复杂的私有方法可以使用@VisibleForTesting标识，进行单独的测试
8. 没有返回值的方法使用verify经断言