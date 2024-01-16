# Tomcat在Windows下启动日志乱码

## 问题描述

执行bin/startup.bat时，如果启动信息中包含中文，会显示乱码。

如图：

![image-20240116164425282](D:\doc\doc\Java\tomcat\assets\image-20240116164425282.png)

解决方案有以下三种

## 修改Tomcat配置文件

在tomcat/conf/目录下找到**logging.properties**文件，打开文件，将其中默认的UTF-8修改为GBK。

![image-20240116164808701](D:\doc\doc\Java\tomcat\assets\image-20240116164808701.png)

## 修改Windows默认字符集



![image-20240116164917964](D:\doc\doc\Java\tomcat\assets\image-20240116164917964.png)

![image-20240116165027558](D:\doc\doc\Java\tomcat\assets\image-20240116165027558.png)

<img src="D:\doc\doc\Java\tomcat\assets\image-20240116165117902.png" alt="image-20240116165117902" style="zoom:50%;" />

<img src="D:\doc\doc\Java\tomcat\assets\image-20240116165203296.png" alt="image-20240116165203296" style="zoom:50%;" />

需要重启才能生效。

## 扩展

### 临时修改cmd控制台默认编码

执行chcp命令，可以查看。

![image-20240116171439004](D:\doc\doc\Java\tomcat\assets\image-20240116171439004.png)

其中65001标识UTF-8，936标识GBK。

使用此命令也可以临时修改控制台编码，只在当前控制台有效，新打开的还是默认编码。

~~~powershell
chcp 936
~~~



### 持久修改cmd控制台默认编码

新建一个文件change.reg，把下面的内容粘贴上去，保存后双击运行该文件。

```ini
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Console\%SystemRoot%_system32_cmd.exe]
"CodePage"=dword:0000fde9
"FontFamily"=dword:00000036
"FontWeight"=dword:00000190
"FaceName"="Consolas"
"ScreenBufferSize"=dword:232900d2
"WindowSize"=dword:002b00d2
```

如果要恢复原来的编码，打开注册表，把这个条目**HKEY_CURRENT_USER\Console\%SystemRoot%_system32_cmd.exe**删除即可。