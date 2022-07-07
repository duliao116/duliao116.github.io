---
title: SpringMVC路径匹配
categories: java
---
# 路径匹配优先级
在写controller时，时长会遇到多个RequestMapping都能匹配一个请求uri的情况，那么spring是如何确定选择哪个的呢？请看下面的代码，核心就是这个类——<b>PatternsRequestCondition</b>。
```java
    @Test
    void testBestMatch() {
        String[] paths = {"/sys/user/{op}", "/sys/{model}/{op}", "/sys/user/add", "/sys/user"};
        PatternsRequestCondition patternsRequestCondition = new PatternsRequestCondition(paths);
        List<String> matchingPatterns = patternsRequestCondition.getMatchingPatterns("/sys/user/add");
        //三个pattern能匹配上/sys/user/add
        Assertions.assertEquals(3, matchingPatterns.size());
        //第一个就是适配优先级最高的
        Assertions.assertEquals("/sys/user/add", matchingPatterns.get(0));
        //其次
        Assertions.assertEquals("/sys/user/{op}", matchingPatterns.get(1));
        //最次
        Assertions.assertEquals("/sys/{model}/{op}", matchingPatterns.get(2));
    }
```