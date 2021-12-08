# DateFormat的TimeZone

## 问题
json转换工具jackson的ObjectMapper类，实例化时其默认的DateBasedDeserializer类中有一个DateFormat依赖，而这个DateFormat对象默认的初始化时区是0，也就是格林威治时间（UTC=GMT）。  
```java
public final class BaseSettings implements java.io.Serializable
{
    // for 2.6
    private static final long serialVersionUID = 1L;

    /**
     * We will use a default TimeZone as the baseline.
     */
    private static final TimeZone DEFAULT_TIMEZONE = 
            //  TimeZone.getDefault()
            /* [databind#915] 05-Nov-2015, tatu: Changed to UTC, from earlier
             * baseline of GMT (up to 2.6)
             */
            TimeZone.getTimeZone("UTC");
            
    //以下省略.....
}
```

这就导致了一个问题，我们一般的开发环境的时区一般都是东八区，使用ObjectMapper将一个时间字符串转化为对象时，对象的时间就不对了。

```java
public static class DateObj{
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
```

```java
ObjectMapper ob = new ObjectMapper();
DateObj dateObj = ob.readValue("{\"date\":\"2021-12-07 00:00:00\"}", DateObj.class);
System.out.println(dateObj.getDate());
//输出Tue Dec 07 08:00:00 CST 2021
```
这件时间反序列化出来，比预期增加了8小时。

## 原理
其根源就是DateFormat的时区设置的不对，我们来用SimpleDateFormat模拟一下这个问题：

```java
//将默认时区修改为东八区（其实开发环境默认就是东八区，此处明确设置设置一下）
TimeZone.setDefault(TimeZone.getTimeZone("GMT+8"));
//定义一个时间字符串
String timeStr = "2021-12-07 00:00:00";
//构建一个DateFormat对象
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//设置时区时0，即格林威治时间
dateFormat.setTimeZone(TimeZone.getTimeZone("GMT+0"));

Date date = dateFormat.parse(timeStr);
System.out.println(date);
//输出Tue Dec 07 08:00:00 GMT+08:00 2021
```
DateFormat的时区是什么意思呢，就是format的时候把系统时区的时间（Date对象），format为foramt指定时区的字符串。  
反过来parse就是把format指定时区的字符串转化为系统时区的Date对象。
上面例子就是说，把格林威治时间```2021-12-07 00:00:00```转换为东八区的时间，那自然就会变成```Tue Dec 07 08:00:00 GMT+08:00 2021```。

## 解决
### 方案1
改变全局配置，这种方式可以修改ObjectMapper对象的默认时区，从而使所有使用该对象做序列化和反序列化的时间对象按照指定时区转化。
```java
ObjectMapper ob = new ObjectMapper();
//给ObjectMapper设定时区，和系统保持一致
ob.setTimeZone(TimeZone.getTimeZone("GMT+8"));
```

### 方案2
在需要转化的date对象上面指定时区，这样只对当前对象有效，不影响ObjectMapper序列号的其它对象。
```java
public static class DateObj{
    //在注释上面给timezone赋值
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
```
