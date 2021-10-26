---
title: maven使用技巧
---

## 单元测试
### 多模块项目中单独运行一个类
```
mvn test -DfailIfNoTests=false -Dtest={test_class_name} -am
```

### 多模块项目中单独运行一个模块
```
mvn test -DfailIfNoTests=false -am -pl {test_module}
```