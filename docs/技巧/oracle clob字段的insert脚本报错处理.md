# oracle clob字段的insert脚本报错处理
## ​概述
oracle数据库，一次升级，将升级脚本导出为insert语句。

执行升级脚本时，出现了“ORA-01704:字符串文字太长”的错误。
## 解决方案
### 方案一 
采用oracle的imp、exp工具，将升级脚本导出成dmp文件。
 
这种方案的弊端是不能通过版本管理工具管理每次的变更内容，不能直观的看出来脚本的变更记录。  
### 方案二
修改脚本，将clob字段的值声明为clob变量，然后在insert语句中使用变量，不在直接使用值。

原语句：
```sql
insert into student(id, name, archives) values(1, '张三', '爱学习，爱生活，小学毕业于……')
```
当archives字段的值的长度超过4000时，就会报错。

大概就是oracle会把这个字符串当做varchar2，然后在入库时转换为clob，是自动的过程。

一旦超过的varchar2的最大长度限制，用varchar2做默认的接收类型时，就会报错。

只能想办法主动的把这一大串内容声明为clob。

修改为：
```sql
declare
  arc clob:='爱学习，爱生活，小学毕业于……';
begin
  insert into student(id, name, archives) values(1, '张三', arc);
end;
```
这样修改后，即便archives字段的值超过4000，也不会报错。
