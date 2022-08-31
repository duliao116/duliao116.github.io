# 国际化MessageSource
Spring中定义了一个MessageSource接口，以用于支持信息的国际化和包含参数的信息的替换。MessageSource接口的定义如下，对应的方法说明已经在方法上注释了。
```java
public interface MessageSource {

	/**
	 * 解析code对应的信息进行返回，如果对应的code不能被解析则返回默认信息defaultMessage。
	 * @param 需要进行解析的code，对应资源文件中的一个属性名
	 * @param 需要用来替换code对应的信息中包含参数的内容，如：{0},{1,date},{2,time}
	 * @param defaultMessage 当对应code对应的信息不存在时需要返回的默认值
	 * @param locale 对应的Locale
	 * @return
	 */
	String getMessage(String code, Object[] args, String defaultMessage, Locale locale);

	/**
	 * 解析code对应的信息进行返回，如果对应的code不能被解析则抛出异常NoSuchMessageException
	 * @param code 需要进行解析的code，对应资源文件中的一个属性名
	 * @param args 需要用来替换code对应的信息中包含参数的内容，如：{0},{1,date},{2,time}
	 * @param locale 对应的Locale
	 * @return 
	 * @throws NoSuchMessageException 如果对应的code不能被解析则抛出该异常
	 */
	String getMessage(String code, Object[] args, Locale locale) throws NoSuchMessageException;

	/**
	 * 通过传递的MessageSourceResolvable对应来解析对应的信息
	 * @param resolvable 
	 * @param locale 对应的Locale
	 * @return 
	 * @throws NoSuchMessageException 如不能解析则抛出该异常
	 */
	String getMessage(MessageSourceResolvable resolvable, Locale locale) throws NoSuchMessageException;

}
```

我们熟悉的ApplicationContext接口继承了MessageSource接口，所以我们所有的ApplicationContext实现类都实现了MessageSource接口，也就是我们我们可以通过ApplicationContext来调用MessageSource接口方法以实现信息的国际化和替换信息中包含的参数。所有ApplicationContext实现类对MessageSource接口的实现都是在AbstractApplicationContext中实现的，其对MessageSource接口实现的源码如下：
```java
@Override
public String getMessage(String code, Object args[], String defaultMessage, Locale locale) {
	return getMessageSource().getMessage(code, args, defaultMessage, locale);
}

@Override
public String getMessage(String code, Object args[], Locale locale) throws NoSuchMessageException {
	return getMessageSource().getMessage(code, args, locale);
}

@Override
public String getMessage(MessageSourceResolvable resolvable, Locale locale) throws NoSuchMessageException {
	return getMessageSource().getMessage(resolvable, locale);
}

/**
 * Return the internal MessageSource used by the context.
 * @return the internal MessageSource (never {@code null})
 * @throws IllegalStateException if the context has not been initialized yet
 */
private MessageSource getMessageSource() throws IllegalStateException {
	if (this.messageSource == null) {
		throw new IllegalStateException("MessageSource not initialized - " +
				"call 'refresh' before accessing messages via the context: " + this);
	}
	return this.messageSource;
}
```

从中我们可以看到AbstractApplicationContext对MessageSource的实现都是自身所持有的MessageSource类型的messageSource对象来实现的。那么对应的messageSource又是如何初始化的呢？在其中定义了一个initMessageSource()来做对应的初始化工作，其源码如下。
```java
/**
 * Initialize the MessageSource.
 * Use parent's if none defined in this context.
 */
protected void initMessageSource() {
	ConfigurableListableBeanFactory beanFactory = getBeanFactory();
	if (beanFactory.containsLocalBean(MESSAGE_SOURCE_BEAN_NAME)) {
		this.messageSource = beanFactory.getBean(MESSAGE_SOURCE_BEAN_NAME, MessageSource.class);
		// Make MessageSource aware of parent MessageSource.
		if (this.parent != null && this.messageSource instanceof HierarchicalMessageSource) {
			HierarchicalMessageSource hms = (HierarchicalMessageSource) this.messageSource;
			if (hms.getParentMessageSource() == null) {
				// Only set parent context as parent MessageSource if no parent MessageSource
				// registered already.
				hms.setParentMessageSource(getInternalParentMessageSource());
			}
		}
		if (logger.isDebugEnabled()) {
			logger.debug("Using MessageSource [" + this.messageSource + "]");
		}
	}
	else {
		// Use empty MessageSource to be able to accept getMessage calls.
		DelegatingMessageSource dms = new DelegatingMessageSource();
		dms.setParentMessageSource(getInternalParentMessageSource());
		this.messageSource = dms;
		beanFactory.registerSingleton(MESSAGE_SOURCE_BEAN_NAME, this.messageSource);
		if (logger.isDebugEnabled()) {
			logger.debug("Unable to locate MessageSource with name '" + MESSAGE_SOURCE_BEAN_NAME +
					"': using default [" + this.messageSource + "]");
		}
	}
}
```

从上述源码中我们可以看到如果bean容器中存在一个名为messageSource（MESSAGE_SOURCE_BEAN_NAME常量对应的值为messageSource）的bean，则取该bean作为messageSource，如果对应的messageSource是一个HierarchicalMessageSource，则会在父容器存在的情况下取父容器对应的messageSource作为当前messageSource的parentMessageSource。如果当前bean容器中不存在beanName为messageSource的bean，则会生成一个DelegatingMessageSource来作为当前的MessageSource。DelegatingMessageSource基本算是对MessageSource的一个空的实现，在对应父容器的messageSource存在时就使用父容器的messageSource处理，否则就不处理，具体可以参考Spring的API文档或查看DelegatingMessageSource的源码。  

鉴于ApplicationContext实现类对MessageSource接口实现的这种机制，如果我们需要通过ApplicationContext来获取国际化信息，那么我们只需要在对应的ApplicationContext中定义一个MessageSource类型的bean，并且指定对应的beanName为messageSource即可。Spring中对MessageSource提供了三个实现类，分别是ReloadableResourceBundleMessageSource、StaticMessageSource和ResourceBundleMessageSource。

## 21.1 ResourceBundleMessageSource
ResourceBundleMessageSource是基于JDK ResourceBundle的MessageSource接口实现类。它会将访问过的ResourceBundle缓存起来，以便于下次直接从缓存中获取进行使用。

### 21.1.1示例
如下我们在bean容器中定义了一个messageSource和一个名为hello的bean，并指定了messageSource的basename为message，即根资源文件应为类路径下的message.properties，其它的都是需要带Locale后缀的，如中国大陆是message_zh_CN.properties。
```xml
<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
	<property name="basename" value="message"/>
</bean>

<bean id="hello" class="com.app.Hello"/>
```

其中类Hello的代码如下所示，我们可以看到其通过实现ApplicationContextAware接口注入了当前的ApplicationContext对象，然后在其doSomething()方法中我们通过注入的ApplicationContext对象以code为“appName”获取从对应的国际化信息，这里在中文环境下默认就会从message\_zh\_CN.properties文件中获取。
```java
public class Hello implements ApplicationContextAware {

	private ApplicationContext context;
	
	public void doSomething() {
		String appName = context.getMessage("appName", null, null);
		System.out.println(appName);
	}
	
	public void setApplicationContext(ApplicationContext applicationContext)
			throws BeansException {
		this.context = applicationContext;
	}

}
```

接下来我们在类路径下分别建立message_zh_CN.properties文件和message.properties文件。其内容分别对应如下。
* 1、message.properties文件内容
```properties
appName=test
```

* 2、message_zh_CN.properties文件内容
```properties
appName=测试
```

接下来我们运行如下测试代码，将看到控制台将输出“测试”，因为在获取对应信息时我们没有指定Locale，所以默认会取当前的Locale，即zh\_CN，所以对应的信息将从message\_zh\_CN.properties文件中获取。
```java
@ContextConfiguration({"classpath:/applicationContext.xml"})
@RunWith(SpringJUnit4ClassRunner.class)
public class ApplicationContextTest {

	@Autowired
	private ApplicationContext context;
	
	@Test
	public void test() {
		Hello hello = context.getBean("hello", Hello.class);
		hello.doSomething();
	}
	
}
```
### 21.1.2 指定多个basename

在上述示例中我们通过setBasename()指定了ResourceBundleMessageSource的一个对应资源文件的基名称。但有时候我们可能会存在多种分类的资源文件，它们对应不同的基名称，如view.properties、remind.properties等，对于这种情况我们就可以通过ResourceBundleMessageSource的setBasenames()方法来指定多个basename。
```xml
<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
	<property name="basenames">
		<array>
			<value>remind</value>
			<value>view</value>
		</array>
	</property>
</bean>
```
### 21.1.3 defaultEncoding
可以通过setDefaultEncoding()来指定将用来加载对应资源文件时使用的编码，默认为空，表示将使用默认的编码进行获取。

### 21.1.4 fallbackToSystemLocale

默认情况下，当指定Locale不存在某code对应的属性时，默认将尝试从系统对应的Locale中解析对应的code，只有都不能解析时才会使用基文件进行解析，如果还不能解析则将抛出异常。打个比方针对基名称“message”我们有两个属性文件， message.properties和message\_zh\_CN.properties，其中前者定义了appName=test，且定义了hello=hello，而后者只定义了appName=测试，那么当我们通过如下代码获取对应code对应的信息时，输出将如代码中注释所示，即输出两个“测试”，一个“hello”。
```java
System.out.println(this.messageSource.getMessage("appName", null, null));//测试
System.out.println(this.messageSource.getMessage("appName", null, Locale.ENGLISH));//测试
System.out.println(this.messageSource.getMessage("hello", null, Locale.CHINA));//hello
```

第一个输出因为我们没有指定Locale，则默认会使用当前系统的Locale，即中文环境，此时将从message\_zh\_CN.properties中获取对应code对应的信息，所以输出为“测试”。第二个是因为我们没有定义Locale.ENGLISH对应的本地资源文件，默认将使用当前系统的Locale，即Locale.CHINA，所以输出为“测试”。第三个是因为Locale.CHINA对应的资源文件message\_zh\_CN.properties文件中不存在对应code的属性，所以将从基文件message.properties中获取，即输出为“hello”。

前面已经提到了当指定Locale不能解析指定的code时，默认将使用系统当前的Locale来解析对应的code，这是通过ResourceBundleMessageSource的fallbackToSystemLocale属性来定义的，默认为true，我们可以通过对应的set方法来设置其值为false，以使在指定的Locale不能解析指定的code时将使用基文件来解析对应的code。
```xml
<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
	<property name="basename" value="message"/>
	<property name="fallbackToSystemLocale" value="false"/>
</bean>
```

当我们指定了fallbackToSystemLocale为false后，再运行上述测试代码时对应结果将如下。其中第一个跟第三个的输出结果将不变，第二个将变为“test”，因为此时使用Locale.ENGLISH不能解析appName时将使用基文件message.properties来解析。
```java
System.out.println(this.messageSource.getMessage("appName", null, null));//测试
System.out.println(this.messageSource.getMessage("appName", null, Locale.ENGLISH));//test
System.out.println(this.messageSource.getMessage("hello", null, Locale.CHINA));//hello
```

关于ResourceBundleMessageSource的更多信息请参考Spring API文档，或查看对应的源码。

## 21.2 ReloadableResourceBundleMessageSource
ReloadableResourceBundleMessageSource是以ResourceBundleMessageSource结尾的，但实际上它跟ResourceBundleMessageSource没有什么直接的关系。ReloadableResourceBundleMessageSource也是对MessageSource的一种实现，其用法配置等和ResourceBundleMessageSource基本一致。所不同的是ReloadableResourceBundleMessageSource内部是使用PropertiesPersister来加载对应的文件，这包括properties文件和xml文件，然后使用java.util.Properties来保存对应的数据。  

另外，ReloadableResourceBundleMessageSource允许我们指定非类路径下的文件作为对应的资源文件，而ResourceBundleMessageSource是限制了我们只能将对应的资源文件放置在类路径下的。在指定basename时，我们还可以使用Spring支持的资源文件的前缀，如classpath等。
```xml
<bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
	<property name="basename" value="classpath:message"/>
	<property name="fallbackToSystemLocale" value="false"/>
	<property name="defaultEncoding" value="UTF-8"/>
</bean>
```
### 21.2.1 cacheSeconds
ReloadableResourceBundleMessageSource也是支持缓存对应的资源文件的，默认的缓存时间为永久，即获取了一次资源文件后就将其缓存起来，以后再也不重新去获取该文件。这个可以通过setCacheSeconds()方法来指定对应的缓存时间，单位为秒。前面我们已经说过ResourceBundleMessageSource也是会缓存对应的资源文件的，而且其也可以通过setCacheSeconds()方法指定对应的缓存时间，但是即使指定了也不会生效，其不会对缓存过的文件重新加载。
```xml
<bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
	<property name="basename" value="classpath:message"/>
	<property name="cacheSeconds" value="1200"/>
</bean>
```

### 21.2.2 concurrentRefresh
ReloadableResourceBundleMessageSource使用concurrentRefresh属性来控制是否允许并发刷新，默认为true。其表示当线程A正在刷新缓存的资源文件F时，线程B也准备刷新缓存的资源文件F，那么线程A将继续执行刷新缓存的资源文件F的动作，而线程B将直接获取到原来缓存的资源文件F，当然这里也可以是取的线程A刚刚刷新的那个资源文件F。如果我们设定concurrentRefresh为false，那么先获取到对应锁的线程A将先刷新缓存中的资源文件F，然后在其释放对应的锁后，线程B将获取到对应的锁并再一次刷新缓存中的资源文件F。

## 21.3 注入MessageSource

除了直接使用ApplicationContext对象来获取对应code的国际化信息外，我们还可以给对应的bean直接注入一个MessageSource对象以直接通过对应的MessageSource对象来获取对应code的国际化信息。给bean注入MessageSource主要有两种方式，一种是直接注入，一种是间接的通过实现MessageSourceAware接口进行注入。

### 21.3.1 直接注入
直接注入就可以跟普通bean注入一样进行注入，可以使用注解标注进行注入，也可以使用XML配置进行注入。以下是一个使用XML方式通过set方法进行注入的示例。
```xml
<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
	<property name="basename" value="message"/>
</bean>

<bean id="hello" class="com.app.Hello">
	<property name="messageSource" ref="messageSource"/>
</bean>
```
对应Hello的定义如下。
```java
public class Hello {

	private MessageSource messageSource;
	
	public void doSomething() {
		String appName = this.messageSource.getMessage("appName", null, null);
		System.out.println(appName);
	}
	
	public void setMessageSource(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

}
```

### 21.3.2 实现MessageSourceAware接口

当一个bean实现了MessageSourceAware接口时，ApplicationContext在实例化对应的bean后会将自己作为MessageSource回调MessageSourceAware实现类的setMessageSource()方法以实现MessageSource的注入。如下代码中Hello类就实现了MessageSourceAware接口。
```java
public class Hello implements MessageSourceAware {

	private MessageSource messageSource;
	
	public void doSomething() {
		String appName = this.messageSource.getMessage("appName", null, null);
		System.out.println(appName);
	}
	
	public void setMessageSource(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

}
```
（注：本文是基于Spring4.1.0所写）