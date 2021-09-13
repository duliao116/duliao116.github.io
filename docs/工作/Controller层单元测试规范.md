---
title: Controller层单元测试规范
autoGroup-1: 单元测试规范
autoSort: 99
tags:
  -- 单元测试
  -- 规范
---

## 测试Controller层的目的
1. 测试接口路径、参数、返回值
2. 参数校验
3. 框架升级后的质量保障

## 面临的问题
1. 依赖过多，单独测试Controller层需要将其它各层都实例化，包括外部外部组件的客户端。
2. 测试复杂，一个接口的输入参数如果都校验的话写的测试用例太多
3. 

## 使用@WebMvcTest

## 使用Spring MockMvc

## 使用@Mockito将Service层mock掉
1. Controller层不要依赖过多的Service
