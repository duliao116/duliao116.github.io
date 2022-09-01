# 资源绑定ResourceBundle

## 查找配置文件的顺序

```java
/**
	构建了一个从类路径下的message.properties文件获取的资源绑定
	因为指定了Locale，因此查找文件的顺序为：
	message_zh_CN.properties,
	message_zh.properties，
	message_[system_language]_[system_country].properties,
	message_[system_language].properties,
	message.properties
	其中system_language为系统默认的语言，system_country为系统默认的国家
	按照这个顺序，如果依然没有找到对于的配置文件，则报错
*/
ResourceBundle bundle = ResourceBundle.getBundle("message", new Locale("zh", "CN"));
```

## 获取配置内容

ResourceBundle是一个抽象类，上一节获取的实际是其子类实现PropertyResourceBundle，顾名思义，就是从配置文件获取的配置信息。其底层还是使用的Properties类的load加载了配置文件。

```java
	/**
     * Creates a property resource bundle from an {@link java.io.InputStream
     * InputStream}.  The property file read with this constructor
     * must be encoded in ISO-8859-1.
     *
     * @param stream an InputStream that represents a property file to read from.
     * @throws IOException if an I/O error occurs
     * @throws NullPointerException if <code>stream</code> is null
     * @throws IllegalArgumentException if {@code stream} contains a
     *     malformed Unicode escape sequence.
     */
    @SuppressWarnings({"unchecked", "rawtypes"})
    public PropertyResourceBundle (InputStream stream) throws IOException {
        Properties properties = new Properties();
        properties.load(stream);
        lookup = new HashMap(properties);
    }
```

> The property file read with this constructor must be encoded in ISO-8859-1.

看注释，以ISO-8859-1的编码读取文件，这就要求，文件最好以ISO-8859-1编码，否则就会有乱码。

```java
//从配置文件中获取配置项greeting信息
String greeting = bundle.getString("greeting");
//如果配置文件采用的UTF-8编码，要正确获取其中的中文字符，就需要做一个转换
greeting = new String(greeting.getBytes(StandardCharsets.ISO_8859_1), 
                      StandardCharsets.UTF_8)

```

## ResourceBundleMessageSource

spring的ResourceBundleMessageSource可以指定指定编码，其底层还是使用的PropertyResourceBundle，区别就是它采用了另一个构造方法。

```java
/**
     * Creates a property resource bundle from a {@link java.io.Reader
     * Reader}.  Unlike the constructor
     * {@link #PropertyResourceBundle(java.io.InputStream) 	PropertyResourceBundle(InputStream)},
     * there is no limitation as to the encoding of the input property file.
     *
     * @param reader a Reader that represents a property file to
     *        read from.
     * @throws IOException if an I/O error occurs
     * @throws NullPointerException if <code>reader</code> is null
     * @throws IllegalArgumentException if a malformed Unicode escape sequence appears
     *     from {@code reader}.
     * @since 1.6
     */
    @SuppressWarnings({"unchecked", "rawtypes"})
    public PropertyResourceBundle (Reader reader) throws IOException {
        Properties properties = new Properties();
        properties.load(reader);
        lookup = new HashMap(properties);
    }
```

> Unlike the constructor PropertyResourceBundle(InputStream), there is no limitation as to the encoding of the input property file.

看注释，这个方法就对文件的编码没有要求了，只要文件编码和MessageResource的默认编码保持一致，就能正确的读取到配置信息。