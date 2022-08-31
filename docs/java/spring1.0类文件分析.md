# spring1.0类文件分析

## 所有源文件
| 类 |代码行|源码行|描述|日期|
|:---|:---:|:---:|:---|:---|
|AbstractAdvisorAutoProxyCreator|123|48|||
|AbstractApplicationContext|502|224|||
|AbstractAutoProxyCreator|319|134|||
|~~AbstractAutowireCapableBeanFactory~~|841|565||20220808|
|~~AbstractBeanDefinition~~|121|42||20220816|
|AbstractBeanDefinitionReader|62|17|||
|~~AbstractBeanFactory~~|579|319||20220808|
|AbstractCachingViewResolver|119|47|||
|AbstractCommandController|97|25|||
|AbstractController|131|27|||
|AbstractDataFieldMaxValueIncrementer|126|55|||
|AbstractDataSource|64|21|||
|AbstractEnterpriseBean|165|44|||
|AbstractExcelView|256|111|||
|AbstractFormController|462|117|||
|AbstractHandlerMapping|120|47|||
|AbstractJmsMessageDrivenBean|34|6|||
|AbstractJndiLocator|180|59|||
|AbstractMessageDrivenBean|90|21|||
|AbstractMessageSource|187|102|||
|AbstractMultipartHttpServletRequest|64|29|||
|AbstractPathMapHandlerMapping|119|43|||
|AbstractPdfView|115|38|||
|AbstractPlatformTransactionManager|619|312|||
|AbstractPoolingTargetSource|115|36|||
|AbstractPoolingTargetSourceCreator|63|23|||
|AbstractPrototypeTargetSource|110|48|||
|AbstractPrototypeTargetSourceCreator|84|34|||
|AbstractRemoteSlsbInvokerInterceptor|50|15|||
|~~AbstractResource~~|110|42|资源抽象，设置了默认的方法实现，基本都是NotSupport，避免其子类实现不需要的方法|20220802|
|AbstractSequenceMaxValueIncrementer|68|36|||
|AbstractSessionBean|55|12|||
|AbstractSlsbInvokerInterceptor|102|38|||
|AbstractStatefulSessionBean|71|11|||
|AbstractStatelessSessionBean|94|19|||
|AbstractThemeResolver|60|17|||
|AbstractUrlBasedView|53|15|||
|AbstractUrlHandlerMapping|170|63|||
|AbstractUrlMethodNameResolver|107|28|||
|AbstractView|235|89|||
|AbstractWizardFormController|475|160|||
|AbstractXmlApplicationContext|125|50|||
|AbstractXsltView|282|140|||
|AcceptHeaderLocaleResolver|46|13|||
|Advised|169|22|||
|AdvisedSupport|498|278|||
|AdvisedSupportListener|38|5|||
|Advisor|57|6|||
|AdvisorAdapter|59|8|||
|AdvisorAdapterRegistrationManager|54|16|||
|AdvisorAdapterRegistry|65|8|||
|AdvisorChainFactory|34|6|||
|AdvisorChainFactoryUtils|98|50|||
|AfterReturningAdvice|33|6|||
|AfterReturningAdviceAdapter|49|14|||
|AfterReturningAdviceInterceptor|50|15|||
|AopConfigException|37|10|||
|AopContext|85|15|||
|AopProxy|35|5|||
|AopProxyFactory|35|4|||
|AopProxyUtils|94|48|||
|AopUtils|196|98|||
|ApplicationContext|84|11|||
|ApplicationContextAware|68|5|||
|ApplicationContextAwareProcessor|74|33|||
|ApplicationContextException|45|10|||
|ApplicationEvent|49|12|||
|ApplicationEventMulticaster|48|7|||
|ApplicationEventMulticasterImpl|68|25|||
|ApplicationListener|37|5|||
|ApplicationObjectSupport|123|44|||
|AttributeException|38|10|||
|Attributes|98|12|||
|AttributesPoolingTargetSourceCreator|56|26|||
|AttributesPrototypeTargetSourceCreator|55|23|||
|AttributesThreadLocalTargetSourceCreator|55|23|||
|AttributesTransactionAttributeSource|190|86|||
|~~AutowireCapableBeanFactory~~|116|17||20220808|
|BadSqlGrammarException|70|18|||
|BaseCommandController|333|84|||
|BatchPreparedStatementSetter|56|7|||
|BeanCreationException|44|16|||
|~~BeanDefinition~~|56|7||20200816|
|BeanDefinitionRegistry|98|14|||
|BeanDefinitionStoreException|55|23|||
|BeanDefinitionValidationException|37|10|||
|~~BeanFactory~~|142|9|Bean工厂，提供获取bean实例的接口|20220729|
|~~BeanFactoryAware~~|51|5|只有设置Bean工厂的方法|20220729|
|BeanFactoryBootstrap|126|55|||
|BeanFactoryLocator|62|5|||
|BeanFactoryPostProcessor|51|5|||
|BeanFactoryReference|50|7|||
|BeanFactoryUtils|189|85|||
|BeanInitializationException|44|10|||
|BeanIsNotAFactoryException|35|6|||
|BeanNameAutoProxyCreator|75|28|||
|BeanNameAware|41|4|||
|BeanNameUrlHandlerMapping|86|37|||
|BeanNameViewResolver|53|11|||
|BeanNotOfRequiredTypeException|69|26|||
|BeanPostProcessor|64|6|||
|BeansDtdResolver|71|33|||
|BeansException|50|10|||
|BeanUtils|180|92|||
|~~BeanWrapper~~|204|24||20220816|
|~~BeanWrapperImpl~~|912|631||20220816|
|BeforeAdvice|32|4|||
|BeforeAdviceAdapter|46|14|||
|BindErrorsTag|57|23|||
|BindException|266|157|||
|BindInitializer|47|7|||
|BindStatus|147|51|||
|BindTag|192|100|||
|BindUtils|105|35|||
|BootstrapException|36|10|||
|BurlapClientInterceptor|96|48|||
|BurlapProxyFactoryBean|56|20|||
|BurlapServiceExporter|90|42|||
|ByteArrayMultipartFileEditor|49|21|||
|CachedIntrospectionResults|118|58|||
|CallableStatementCallback|65|6|||
|CallableStatementCreator|56|7|||
|CallableStatementCreatorFactory|217|118|||
|CannotCloseJdbcConnectionException|41|8|||
|CannotCreateTransactionException|36|9|||
|CannotGetJdbcConnectionException|58|15|||
|Cglib2AopProxy|396|205|||
|CharacterEncodingFilter|76|23|||
|~~ChildBeanDefinition~~|58|21||20220816|
|ClassEditor|45|17|||
|ClassFilter|49|9|||
|ClassFilters|72|38|||
|~~ClassLoaderAnalyzerInterceptor~~|49|20|动态代理，打印类加载器继承体系的日志信息||
|~~ClassLoaderUtils~~|66|22|类加载器的继承体系获取||
|~~ClassPathResource~~|118|61|通过类路径下的一个Path获取资源|20220802|
|ClassPathXmlApplicationContext|82|23|||
|CleanupFailureDataAccessException|38|6|||
|ClobStringType|118|61|||
|CommonsAttributes|88|25|||
|CommonsDbcpNativeJdbcExtractor|106|56|||
|CommonsLogFactoryBean|61|22|||
|CommonsLoggingLogSystem|55|26|||
|CommonsMultipartFile|129|80|||
|CommonsMultipartResolver|270|137|||
|CommonsPathMapHandlerMapping|78|20|||
|CommonsPoolTargetSource|126|50|||
|ComponentControllerSupport|88|35|||
|ComposablePointcut|87|43|||
|ConcurrencyThrottleInterceptor|85|45|||
|ConfigurableApplicationContext|83|11|||
|~~ConfigurableBeanFactory~~|118|15||20220808|
|~~ConfigurableListableBeanFactory~~|40|6||20220808|
|ConfigurableWebApplicationContext|70|9|||
|ConnectionHolder|50|12|||
|ConsoleListener|40|8|||
|ConstantException|49|9|||
|Constants|213|91|||
|~~ConstructorArgumentValues~~|202|86||20220816|
|ContextBeanFactoryReference|48|19|||
|ContextClosedEvent|41|11|||
|ContextJndiBeanFactoryLocator|42|10|||
|ContextLoader|182|81|||
|ContextLoaderListener|66|16|||
|ContextLoaderServlet|114|28|||
|ContextRefreshedEvent|41|11|||
|ContextResourceEditor|50|13||20220805|
|ContextSingletonBeanFactoryLocator|132|49|||
|ControlFlow|37|6|||
|ControlFlowFactory|154|66|||
|ControlFlowPointcut|99|42|||
|Controller|77|7|||
|CookieLocaleResolver|152|75|||
|CookieThemeResolver|131|58|||
|CosMailSenderImpl|96|53|||
|CosMultipartHttpServletRequest|172|113|||
|CosMultipartResolver|240|119|||
|CronTriggerBean|101|41|||
|CustomBooleanEditor|68|21|||
|CustomDateEditor|87|29|||
|CustomEditorConfigurer|110|51|||
|CustomNumberEditor|118|63|||
|DataAccessException|58|10|||
|DataAccessResourceFailureException|44|9|||
|DatabaseStartupValidator|157|84|||
|DataBinder|261|103|||
|DataFieldMaxValueIncrementer|56|7|||
|DataIntegrityViolationException|38|6|||
|DataRetrievalFailureException|36|9|||
|DataSourceTransactionManager|286|168|||
|DataSourceTransactionObject|79|29|||
|DataSourceUtils|257|125|||
|DeadlockLoserDataAccessException|36|6|||
|DebugInterceptor|52|17|||
|DefaultAdvisorAdapterRegistry|84|50|||
|DefaultAdvisorAutoProxyCreator|115|45|||
|DefaultAopProxyFactory|51|17|||
|DefaultBeanFactoryReference|46|17|||
|DefaultIntroductionAdvisor|111|63|||
|~~DefaultListableBeanFactory~~|266|174||20220808|
|DefaultLobHandler|133|76|||
|DefaultLocatorFactory|49|11|||
|DefaultMessageSourceResolvable|137|69|||
|DefaultMultipartHttpServletRequest|67|26|||
|DefaultPointcutAdvisor|95|50|||
|DefaultPropertiesPersister|330|226|||
|~~DefaultResourceLoader~~|70|22||20220805|
|DefaultTransactionAttribute|65|20|||
|DefaultTransactionDefinition|180|86|||
|DefaultTransactionStatus|122|45|||
|DefaultXmlBeanDefinitionParser|595|450|||
|DelegatingIntroductionInterceptor|137|46|||
|DispatcherServlet|564|296|||
|~~DisposableBean~~|44|4|Bean销毁时的接口|20220729|
|DriverManagerDataSource|156|71|||
|DynamicMethodMatcher|41|11|||
|DynamicMethodMatcherPointcutAdvisor|77|41|||
|ErrorCoded|43|4|||
|Errors|171|23|||
|EscapedErrors|163|102|||
|EventPublicationInterceptor|57|22|||
|ExpectedLookupTemplate|59|17|||
|ExpressionEvaluationUtils|131|43|||
|~~FactoryBean~~|68|6|工厂bean，如果配置了一个FactoryBean，其通过spring获取到的Bean是其getObject方法的返回值，而不是FactoryBean类型的对象|20220728|
|FactoryBeanCircularReferenceException|38|6|||
|FatalBeanException|45|9|||
|FieldError|102|35|||
|FileCopyUtils|155|83|||
|FileEditor|39|11|||
|~~FileSystemResource~~|72|30|通过传入一个文件，将文件封装成资源|20220802|
|FileSystemXmlApplicationContext|98|31|||
|FilterConfigPropertyValues|107|50|||
|FixedThemeResolver|44|11|||
|FormatHelper|175|74|||
|FrameworkServlet|397|180|||
|FreeMarkerConfig|42|5|||
|FreeMarkerConfigurationFactory|219|85|||
|FreeMarkerConfigurationFactoryBean|63|23|||
|FreeMarkerConfigurer|96|22|||
|FreeMarkerTemplateUtils|49|13|||
|FreeMarkerView|180|72|||
|GenericFilterBean|141|50|||
|GlobalAdvisorAdapterRegistry|42|9|||
|HandlerAdapter|84|8|||
|HandlerExceptionResolver|48|7|||
|HandlerExecutionChain|70|18|||
|HandlerInterceptor|117|11|||
|HandlerInterceptorAdapter|46|17|||
|HandlerMapping|70|5|||
|HashMapCachingAdvisorChainFactory|78|32|||
|HessianClientInterceptor|99|51|||
|HessianProxyFactoryBean|56|20|||
|HessianServiceExporter|91|43|||
|HeuristicCompletionException|63|27|||
|HibernateAccessor|242|79|||
|HibernateCallback|71|7|||
|HibernateDaoSupport|163|55|||
|HibernateInterceptor|118|42|||
|HibernateJdbcException|44|12|||
|HibernateObjectRetrievalFailureException|51|20|||
|HibernateOperations|472|57|||
|HibernateOptimisticLockingFailureException|35|8|||
|HibernateQueryException|41|11|||
|HibernateSystemException|39|8|||
|HibernateTemplate|585|396|||
|HibernateTransactionManager|550|307|||
|HibernateTransactionObject|96|39|||
|~~HierarchicalBeanFactory~~|39|4|提供设置父级Bean工厂的能力|20200729|
|HierarchicalMessageSource|41|5|||
|HierarchicalThemeSource|41|5|||
|HotSwappableTargetSource|98|35|||
|HsqlMaxValueIncrementer|166|77|||
|HtmlEscapeTag|81|30|||
|HtmlUtils|700|609|||
|HttpServletBean|102|35|||
|IllegalTransactionStateException|36|9|||
|IncorrectUpdateSemanticsDataAccessException|53|10|||
|InitializingBean|49|4|初始化bean接口||
|~~InputStreamResource~~|79|32|直接传入一个输入流，封装成资源|20220802|
|~~InputStreamSource~~|38|6|资源抽象，返回一个输入流|20220802|
|InterceptorAndDynamicMethodMatcher|42|11|||
|InternalPathMethodNameResolver|51|15|||
|InternalResourceView|141|60|||
|InternalResourceViewResolver|58|9|||
|IntroductionAdvisor|56|7|||
|IntroductionInterceptor|40|5|||
|InvalidDataAccessApiUsageException|48|9|||
|InvalidDataAccessResourceUsageException|44|9|||
|InvalidIsolationLevelException|32|6|||
|InvalidTimeoutException|38|11|||
|JavaMailSender|91|11|||
|JavaMailSenderImpl|269|157|||
|JaxRpcPortClientInterceptor|318|162|||
|JaxRpcPortProxyFactoryBean|68|20|||
|JBossNativeJdbcExtractor|95|52|||
|JdbcAccessor|90|27|||
|JdbcBeanDefinitionReader|91|34|||
|JdbcDaoSupport|127|44|||
|JdbcOperations|423|39|||
|JdbcTemplate|838|605|||
|JdbcUpdateAffectedIncorrectNumberOfRowsException|53|20|||
|JdbcUtils|140|67|||
|JdkDynamicAopProxy|227|95|||
|JdkVersion|58|19|||
|JdoAccessor|158|54|||
|JdoCallback|69|6|||
|JdoDaoSupport|151|50|||
|JdoDialect|87|10|||
|JdoInterceptor|107|33|||
|JdoSystemException|39|8|||
|JdoTemplate|146|39|||
|JdoTransactionManager|357|210|||
|JdoTransactionObject|73|25|||
|JdoUsageException|39|8|||
|JndiBeanFactoryLocator|90|37|||
|JndiCallback|49|6|||
|JndiObjectFactoryBean|65|17|||
|JndiTemplate|161|70|||
|JndiTemplateEditor|51|20|||
|JobDetailAwareTrigger|47|5|||
|JobDetailBean|63|23|||
|JotmFactoryBean|114|36|||
|JstlUtils|65|22|||
|JstlView|47|11|||
|JtaTransactionManager|423|242|||
|LastModified|46|5|||
|~~ListableBeanFactory~~|116|11|提供批量获取工厂内Bean信息的能力|20220729|
|ListFactoryBean|101|52|||
|LobCreator|129|21|||
|LobHandler|127|13|||
|LocalDataSourceConnectionProvider|93|44|||
|LocaleChangeInterceptor|64|27|||
|LocaleEditor|41|13|||
|LocaleResolver|59|8|||
|LocalJaxRpcServiceFactory|157|64|||
|LocalJaxRpcServiceFactoryBean|59|21|||
|LocalPersistenceManagerFactoryBean|182|69|||
|LocalSessionFactoryBean|568|229|||
|LocalSlsbInvokerInterceptor|85|37|||
|LocalStatelessSessionProxyFactoryBean|98|29|||
|LocalTransactionManagerLookup|73|21|||
|Log4jConfigListener|51|11|||
|Log4jConfigServlet|71|20|||
|Log4jConfigurer|86|30|||
|Log4jWebConfigurer|113|34|||
|MailAuthenticationException|39|12|||
|MailException|36|10|||
|MailParseException|39|12|||
|MailSender|49|5|||
|MailSendException|118|65|||
|ManagedList|30|4|||
|ManagedMap|30|4|||
|ManagedSet|29|4|||
|MapFactoryBean|101|52|||
|MappingSqlQuery|79|16|||
|MappingSqlQueryWithParameters|132|38|||
|MatchAlwaysTransactionAttributeSource|51|11|||
|MessageSource|81|7|||
|MessageSourceAccessor|173|47|||
|MessageSourceResolvable|50|6|||
|MessageSourceResourceBundle|67|25|||
|MessageTag|151|80|||
|MethodBeforeAdvice|42|5|||
|MethodBeforeAdviceInterceptor|49|14|||
|MethodInvocationException|42|10|||
|MethodInvocationFactory|38|10|||
|~~MethodInvoker~~|226|92|方法反射调用||
|~~MethodInvokingFactoryBean~~|121|33|方法反射调用的工厂bean||
|MethodInvokingJobDetailFactoryBean|144|71|||
|MethodInvokingTimerTaskFactoryBean|105|48|||
|MethodMapTransactionAttributeSource|162|82|||
|MethodMatcher|105|18|||
|MethodMatchers|93|47|||
|MethodNameResolver|41|5|||
|MimeMessageHelper|422|233|||
|MimeMessagePreparator|54|7|||
|ModelAndView|200|67|||
|ModelAndViewDefiningException|58|15|||
|MultiActionController|426|195|||
|MultipartException|37|10|||
|MultipartFile|106|14|||
|MultipartFilter|133|57|||
|MultipartHttpServletRequest|65|9|||
|MultipartResolver|78|7|||
|~~MutablePropertyValues~~|181|91||20220816|
|MutableSortDefinition|126|75|||
|MySQLMaxValueIncrementer|174|77|||
|NameMatchMethodPointcut|73|24|||
|NameMatchMethodPointcutAdvisor|69|33|||
|NameMatchTransactionAttributeSource|113|52|||
|NativeJdbcExtractor|162|18|||
|NestedCheckedException|117|43|||
|NestedRuntimeException|117|43|||
|NoRollbackRuleAttribute|51|12|||
|~~NoSuchBeanDefinitionException~~|71|20|找不到bean时抛出的异常|20220802|
|NoSuchMessageException|45|10|||
|NoSuchRequestHandlingMethodException|45|17|||
|NoTransactionException|38|9|||
|NotWritablePropertyException|40|9|||
|NullValueInNestedPathException|55|16|||
|ObjectError|59|18|||
|ObjectOptimisticLockingFailureException|73|22|||
|ObjectRetrievalFailureException|72|21|||
|ObjectUtils|40|6|||
|OncePerRequestFilter|111|33|||
|OpenSessionInViewFilter|171|60|||
|OpenSessionInViewInterceptor|127|46|||
|OptimisticLockingFailureException|35|9|||
|OracleLobHandler|421|264|||
|OracleSequenceMaxValueIncrementer|51|14|||
|OrderComparator|47|14|||
|Ordered|45|4|||
|PagedListHolder|284|111|||
|PagedListSourceProvider|46|6|||
|ParameterizableViewController|92|21|||
|ParameterMapper|46|7|||
|ParameterMethodNameResolver|66|22|||
|PathMap|50|10|||
|PathMatcher|330|215|||
|PerformanceMonitorInterceptor|55|20|||
|PerformanceMonitorListener|56|23|||
|PersistenceManagerFactoryUtils|171|86|||
|PersistenceManagerHolder|49|13|||
|PlatformTransactionManager|76|7|||
|Pointcut|53|16|||
|PointcutAdvisor|30|4|||
|Pointcuts|65|28|||
|PoolingAttribute|36|10|||
|PoolingConfig|32|6|||
|PostgreSQLSequenceMaxValueIncrementer|49|14|||
|PreferencesPlaceholderConfigurer|95|32|||
|PreparedStatementCallback|68|6|||
|PreparedStatementCreator|57|7|||
|PreparedStatementCreatorFactory|193|94|||
|PreparedStatementSetter|52|6|||
|PropertiesBeanDefinitionReader|389|181|||
|PropertiesEditor|90|39|||
|PropertiesFactoryBean|193|91|||
|PropertiesMethodNameResolver|80|30|||
|PropertiesPersister|82|13|||
|PropertyAccessException|50|17|||
|PropertyAccessExceptionsException|135|68|||
|PropertyComparator|113|60|||
|PropertyOverrideConfigurer|81|26|||
|PropertyPlaceholderConfigurer|370|193|||
|PropertyResourceConfigurer|150|71|||
|PropertyValue|93|35|||
|PropertyValues|56|7|||
|PropertyValuesEditor|51|13|||
|PrototypeAttribute|27|3|||
|PrototypeTargetSource|35|8|||
|ProxyConfig|197|58|||
|ProxyFactory|80|27|||
|ProxyFactoryBean|401|198|||
|QuartzJobBean|63|15|||
|QuickTargetSourceCreator|58|26|||
|RdbmsOperation|259|112|||
|RedirectView|147|61|||
|ReflectiveMethodInvocation|172|69|||
|RefreshablePagedListHolder|177|51|||
|RegexpMethodPointcut|131|51|||
|RegexpMethodPointcutAdvisor|69|33|||
|ReloadableResourceBundleMessageSource|460|238|||
|RemoteAccessException|55|7|||
|RemoteAccessor|59|16|||
|RemoteExporter|107|43|||
|RemoteInvocation|95|38|||
|RequestContext|288|117|||
|RequestContextAwareTag|115|47|||
|RequestContextUtils|143|58|||
|RequestHandledEvent|91|49|||
|RequestUtils|249|149|||
|~~Resource~~|72|11|一些资源的基本方法，可以获取URL、File、InputStream|20220802|
|ResourceBundleMessageSource|160|69|||
|ResourceBundleThemeSource|105|56|||
|ResourceBundleViewResolver|112|46|||
|ResourceEditor|91|33||20220805|
|ResourceEntityResolver|85|40|||
|ResourceFactoryBean|56|18|||
|ResourceHolderSupport|94|28|||
|~~ResourceLoader~~|58|5||20220805|
|ResourceLoaderAware|54|5|||
|ResourceServlet|79|32|||
|ResponseTimeMonitor|55|7|||
|ResponseTimeMonitorImpl|132|47|||
|ResultReader|36|5|||
|ResultSetExtractor|51|6|||
|RmiClientInterceptor|157|82|||
|RmiInvocationHandler|51|9|||
|RmiInvocationWrapper|51|16|||
|RmiProxyFactoryBean|78|22|||
|RmiServiceExporter|207|93|||
|RollbackRuleAttribute|103|33|||
|~~RootBeanDefinition~~|343|150||20220816|
|RootClassFilter|38|11|||
|RowCallbackHandler|43|6|||
|RowCountCallbackHandler|122|37|||
|RowMapper|43|6|||
|RuleBasedTransactionAttribute|112|59|||
|RuntimeBeanReference|48|13|||
|ScheduledTimerTask|124|40|||
|SchedulerFactoryBean|294|132|||
|~~ServletConfigPropertyValues~~|74|31||20220816|
|ServletContextAware|45|5|||
|ServletContextAwareProcessor|68|26|||
|ServletContextResource|98|42|||
|ServletEndpointSupport|132|47|||
|ServletRequestBindingException|36|10|||
|ServletRequestDataBinder|108|39|||
|~~ServletRequestParameterPropertyValues~~|71|16||20220816|
|SessionFactoryUtils|359|196|||
|SessionHolder|69|27|||
|SessionLocaleResolver|58|16|||
|SessionRequiredException|37|10|||
|SessionThemeResolver|56|14|||
|SetFactoryBean|102|52|||
|SimpleControllerHandlerAdapter|55|20|||
|SimpleFormController|266|64|||
|SimpleMailMessage|150|84|||
|SimpleMappingExceptionResolver|149|68|||
|SimpleNamingContext|329|210|||
|SimpleNamingContextBuilder|164|47|||
|SimpleNativeJdbcExtractor|133|57|||
|SimpleRemoteSlsbInvokerInterceptor|131|60|||
|SimpleRemoteStatelessSessionProxyFactoryBean|109|29|||
|SimpleTheme|47|17|||
|SimpleTriggerBean|131|49|||
|SimpleUrlHandlerMapping|89|30|||
|SingleConnectionDataSource|172|69|||
|SingletonBeanFactoryLocator|533|306|||
|SingletonTargetSource|75|32|||
|SmartDataSource|53|6|||
|SortDefinition|41|6|||
|SpringResourceLoader|100|51|||
|SpringTemplateLoader|83|36|||
|SqlCall|146|57|||
|SQLErrorCodes|125|47|||
|SQLErrorCodesFactory|221|123|||
|SQLErrorCodeSQLExceptionTranslator|176|73|||
|SQLExceptionTranslator|48|6|||
|SqlFunction|219|84|||
|SqlMapCallback|65|7|||
|SqlMapClientCallback|68|6|||
|SqlMapClientDaoSupport|99|35|||
|SqlMapClientFactoryBean|88|39|||
|SqlMapClientOperations|69|22|||
|SqlMapClientTemplate|237|139|||
|SqlMapDaoSupport|98|34|||
|SqlMapFactoryBean|88|39|||
|SqlMapOperations|69|24|||
|SqlMapTemplate|224|122|||
|SqlOperation|128|45|||
|SqlOutParameter|94|41|||
|SqlParameter|129|58|||
|SqlProvider|40|4|||
|SqlQuery|320|100|||
|SqlReturnResultSet|74|29|||
|SQLStateSQLExceptionTranslator|92|50|||
|SqlUpdate|185|56|||
|SQLWarningException|51|11|||
|StatementCallback|61|6|||
|StaticApplicationContext|104|37|||
|~~StaticListableBeanFactory~~|147|104||20220808|
|StaticMessageSource|62|21|||
|StaticMethodMatcher|38|11|||
|StaticMethodMatcherPointcut|41|12|||
|StaticMethodMatcherPointcutAdvisor|68|33|||
|StaticWebApplicationContext|90|44|||
|StopWatch|293|132|||
|StoredProcedure|128|36|||
|StringArrayPropertyEditor|41|13|||
|StringMultipartFileEditor|69|29|||
|StringTrimmerEditor|57|22|||
|StringUtils|363|175|||
|TagUtils|75|26|||
|TargetSource|41|7|||
|TargetSourceCreator|45|6|||
|Theme|45|6|||
|ThemeChangeInterceptor|59|23|||
|ThemeResolver|65|7|||
|ThemeSource|38|4|||
|ThemeTag|61|13|||
|ThreadLocalAttribute|28|3|||
|ThreadLocalTargetSource|140|61|||
|ThreadLocalTargetSourceStats|41|6|||
|ThrowawayController|67|5|||
|ThrowawayControllerHandlerAdapter|50|22|||
|ThrowsAdvice|36|4|||
|ThrowsAdviceAdapter|45|13|||
|ThrowsAdviceInterceptor|134|80|||
|TilesConfigurer|133|44|||
|TilesJstlView|48|11|||
|TilesView|203|82|||
|TimerFactoryBean|124|50|||
|TimerTaskExecutionException|27|7|||
|TransactionAttribute|40|5|||
|TransactionAttributeEditor|89|41|||
|TransactionAttributeSource|41|5|||
|TransactionAttributeSourceAdvisor|54|18|||
|TransactionAttributeSourceEditor|84|29|||
|TransactionCallback|55|5|||
|TransactionCallbackWithoutResult|56|9|||
|TransactionDefinition|145|22|||
|TransactionException|37|10|||
|TransactionInterceptor|222|112|||
|TransactionProxyFactoryBean|268|117|||
|TransactionStatus|59|6|||
|TransactionSynchronization|89|11|||
|TransactionSynchronizationAdapter|43|13|||
|TransactionSynchronizationManager|219|82|||
|TransactionSystemException|35|9|||
|TransactionTemplate|149|56|||
|TransactionUsageException|36|9|||
|TransformTag|125|58|||
|TypeMismatchDataAccessException|37|6|||
|TypeMismatchException|53|25|||
|UiApplicationContextUtils|74|29|||
|UncategorizedDataAccessException|39|6|||
|UncategorizedSQLException|59|16|||
|UnexpectedRollbackException|32|6|||
|UnionPointcut|79|33|||
|UnknownAdviceTypeException|33|7|||
|UnsatisfiedDependencyException|41|13|||
|UpdatableSqlQuery|118|38|||
|UrlBasedRemoteAccessor|44|10|||
|UrlBasedViewResolver|138|46|||
|URLEditor|44|17|||
|UrlFilenameViewController|57|31|||
|UrlPathHelper|257|89|||
|~~UrlResource~~|75|33|通过URL对象获取资源|20220802|
|UserRoleAuthorizationInterceptor|73|27|||
|ValidationUtils|74|27|||
|Validator|42|5|||
|VelocityConfig|39|5|||
|VelocityConfigurer|93|22|||
|VelocityEngineFactory|251|108|||
|VelocityEngineFactoryBean|64|23|||
|VelocityEngineUtils|133|58|||
|VelocityView|320|133|||
|VelocityViewResolver|102|31|||
|View|56|7|||
|ViewResolver|46|5|||
|WebApplicationContext|63|8|||
|WebApplicationContextUtils|74|29|||
|WebApplicationObjectSupport|62|20|||
|WebAppRootListener|62|10|||
|WebContentGenerator|249|95|||
|WebContentInterceptor|56|20|||
|WebSphereTransactionManagerFactoryBean|68|27|||
|WebUtils|260|123|||
|XAPoolNativeJdbcExtractor|86|44|||
|XmlBeanDefinitionParser|56|9|||
|XmlBeanDefinitionReader|188|96|||
|~~XmlBeanFactory~~|87|20||20220808|
|XmlViewResolver|107|43|||
|XmlWebApplicationContext|166|76|||

## org.springframework.core.io.ResourceLoader
@startuml
!theme plain

skinparam linetype ortho

interface ResourceLoader

class DefaultResourceLoader

interface ApplicationContext


ResourceLoader         <|.[#008200]. DefaultResourceLoader
ResourceLoader         <|-[#008200]- ApplicationContext 


note right of ResourceLoader
资源加载接口，返回一个资源
end note

note bottom of DefaultResourceLoader
主要是实现了通过<b>类路径</b>加载资源的方法
end note

note bottom of ApplicationContext
留给子类实现加载资源的方法，不同的加载方式构建成了不同的子类
end note

@enduml

## PropertyEditor 

@startuml
!theme plain
top to bottom direction
skinparam linetype ortho

class ByteArrayMultipartFileEditor
class ClassEditor
class ContextResourceEditor
class CustomBooleanEditor
class CustomDateEditor
class CustomNumberEditor
class FileEditor
class JndiTemplateEditor
class LocaleEditor
class PropertiesEditor
interface PropertyEditor << interface >>
class PropertyEditorSupport
class PropertyValuesEditor
class ResourceEditor
class StringArrayPropertyEditor
class StringMultipartFileEditor
class StringTrimmerEditor
class TransactionAttributeEditor
class TransactionAttributeSourceEditor
class URLEditor

ByteArrayMultipartFileEditor      -[#000082,plain]-^  PropertyEditorSupport            
ClassEditor                       -[#000082,plain]-^  PropertyEditorSupport            
ContextResourceEditor             -[#000082,plain]-^  ResourceEditor                   
CustomBooleanEditor               -[#000082,plain]-^  PropertyEditorSupport            
CustomDateEditor                  -[#000082,plain]-^  PropertyEditorSupport            
CustomNumberEditor                -[#000082,plain]-^  PropertyEditorSupport            
FileEditor                        -[#000082,plain]-^  PropertyEditorSupport            
JndiTemplateEditor                -[#000082,plain]-^  PropertyEditorSupport            
LocaleEditor                      -[#000082,plain]-^  PropertyEditorSupport            
PropertiesEditor                  -[#000082,plain]-^  PropertyEditorSupport            
PropertyEditorSupport             -[#008200,dashed]-^  PropertyEditor                   
PropertyValuesEditor              -[#000082,plain]-^  PropertyEditorSupport            
ResourceEditor                    -[#000082,plain]-^  PropertyEditorSupport            
StringArrayPropertyEditor         -[#000082,plain]-^  PropertyEditorSupport            
StringMultipartFileEditor         -[#000082,plain]-^  PropertyEditorSupport            
StringTrimmerEditor               -[#000082,plain]-^  PropertyEditorSupport            
TransactionAttributeEditor        -[#000082,plain]-^  PropertyEditorSupport            
TransactionAttributeSourceEditor  -[#000082,plain]-^  PropertyEditorSupport            
URLEditor                         -[#000082,plain]-^  PropertyEditorSupport
@enduml

将配置文件中的各种格式的字符串，转换为各种对象。

## org.springframework.core.io.ResourceEditor
@startuml
!theme plain
top to bottom direction
skinparam linetype ortho

interface PropertyEditor << interface >>
note right: 对象的属性编辑器，之前主要针对IDE的可视化操作<b>可编辑的字符串</b>和java对象的转换

class PropertyEditorSupport
note right: 属性编辑器的Support类，实现了默认的方法，以及属性值变化时的时间通知

class ResourceEditor
note right: 资源属性的编辑器，将文本转换为Resource，其实就是配置的资源路径转换为Resource对象

class ContextResourceEditor
note right: 通过ApplicationContext加载指定路径得到Resource对象

PropertyEditor <|.[#008200]. PropertyEditorSupport
PropertyEditorSupport <|-[#000082]- ResourceEditor
ResourceEditor <|-[#000082]-  ContextResourceEditor
@enduml

## org.springframework.beans.factory.BeanFactory

@startuml
!theme mars
top to bottom direction
skinparam linetype ortho

interface BeanFactory << interface >>

interface HierarchicalBeanFactory << interface >>

interface ListableBeanFactory << interface >>

interface AutowireCapableBeanFactory << interface >>


interface ConfigurableBeanFactory << interface >>

interface ConfigurableListableBeanFactory << interface >>

class AbstractBeanFactory

class AbstractAutowireCapableBeanFactory

class DefaultListableBeanFactory

class StaticListableBeanFactory

class XmlBeanFactory



BeanFactory <|-[#008200]- HierarchicalBeanFactory
BeanFactory <|-[#008200]- ListableBeanFactory
BeanFactory <|-[#008200]- AutowireCapableBeanFactory

HierarchicalBeanFactory <|-[#008200]- ConfigurableBeanFactory
HierarchicalBeanFactory <|.[#008200]. AbstractBeanFactory                 

ListableBeanFactory <|.[#008200]. StaticListableBeanFactory
ListableBeanFactory <|-[#008200]- ConfigurableListableBeanFactory

AutowireCapableBeanFactory <|.[#008200]. AbstractAutowireCapableBeanFactory
AutowireCapableBeanFactory <|-[#008200]- ConfigurableListableBeanFactory

ConfigurableBeanFactory <|.[#008200]. AbstractBeanFactory
ConfigurableBeanFactory <|-[#008200]- ConfigurableListableBeanFactory

AbstractBeanFactory <|-[#008200]- AbstractAutowireCapableBeanFactory
           
AbstractAutowireCapableBeanFactory <|-[#008200]- DefaultListableBeanFactory

ConfigurableListableBeanFactory <|.[#008200]. DefaultListableBeanFactory   

DefaultListableBeanFactory <|-[#008200]- XmlBeanFactory

json 类图说明 {
   "BeanFactory":"Bean工厂，加载Bena的配置并生成Bean对象",
   "HierarchicalBeanFactory":"增加了获取父级BeanFactory的方法,如果当前工厂找不到bean，就去父级工厂找",
   "ListableBeanFactory":"增加了遍历工厂内所有Bean的能力",
   "AutowireCapableBeanFactory":"增加Bean已经Bean属性的Autowire能力",
   "ConfigurableBeanFactory":"可配置的BeanFactory",
   "ConfigurableListableBeanFactory":"继承多种特性，并且增加了预实例化单例Bean的方法",
   "AbstractBeanFactory":"Bean工厂模板类，实现了getBean的基本逻辑",
   "AbstractAutowireCapableBeanFactory":"实现了autowire bean的相关方法",
   "DefaultListableBeanFactory":"实现了一些访问Bean集合的方法",
   "StaticListableBeanFactory":"内部维护一个map，可以通过编程添加已经存在的bean",
   "XmlBeanFactory":"构造方法中开始加载spring xml配置文件"
}

@enduml

## org.springframework.beans.BeanWrapper

@startuml
!theme plain
top to bottom direction
skinparam linetype ortho

interface BeanWrapper << interface >>
note right: Bean的包装，可以读取、赋值Bean的属性
class BeanWrapperImpl
note right: Bean的包装，提供setPropertyValue和getPropertyValue相关的方法，是能够通过字符串的表示设置、获取Bean的属性值

BeanWrapper <|.[#008200]. BeanWrapperImpl
@enduml

## org.springframework.beans.factory.config.BeanDefinition

@startuml
!theme mars
top to bottom direction
skinparam linetype ortho

interface BeanDefinition << interface >> {
  + getResourceDescription(): String
  + getPropertyValues(): MutablePropertyValues
  + getConstructorArgumentValues(): ConstructorArgumentValues
}

class AbstractBeanDefinition 
class RootBeanDefinition
class ChildBeanDefinition 
class ConstructorArgumentValues 
class MutablePropertyValues 

BeanDefinition <|.[#008200].  AbstractBeanDefinition
AbstractBeanDefinition <|-[#000082]- RootBeanDefinition
AbstractBeanDefinition <|-[#000082]- ChildBeanDefinition

BeanDefinition --> MutablePropertyValues
BeanDefinition --> ConstructorArgumentValues



@enduml

| 类                        | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| BeanDefinition            | Bean定义，获取Bean的属性、构造方法                           |
| AbstractBeanDefinition    | 定义是否单例、是否懒加载等逻辑                               |
| RootBeanDefinition        | 增加autowire，依赖坚持，初始化方法，销毁方法的等配置         |
| ChildBeanDefinition       | 子类Bean的定义，可以覆盖父类的属性值                         |
| ConstructorArgumentValues | 构造方法的参数集合，内部两个集合，一个按照顺序，另一个按照参数类型 |
| MutablePropertyValues     | Bean定义的属性信息                                           |

## org.springframework.beans.PropertyValues

@startuml
!theme mars
top to bottom direction
skinparam linetype ortho

interface PropertyValues << interface >>
note right: 配置属性集合
class MutablePropertyValues
note right: 可变的配置属性集合，可以对集合增删改查
class ServletConfigPropertyValues
note bottom: 从ServletConfig获取配置属性集合
class ServletRequestParameterPropertyValues
note bottom: 从HttpRequest中获取配置属性集合

PropertyValues <|.. MutablePropertyValues
MutablePropertyValues <|-- ServletConfigPropertyValues
MutablePropertyValues <|-- ServletRequestParameterPropertyValues


@enduml

## org.springframework.context.MessageSource

@startuml
!theme mars
top to bottom direction
skinparam linetype ortho

class AbstractMessageSource
interface HierarchicalMessageSource << interface >>
interface MessageSource << interface >>
class ReloadableResourceBundleMessageSource
class ResourceBundleMessageSource

AbstractMessageSource                  -[#008200,dashed]-^  HierarchicalMessageSource             
HierarchicalMessageSource              -[#008200,plain]-^  MessageSource                         
ReloadableResourceBundleMessageSource  -[#000082,plain]-^  AbstractMessageSource                 
ResourceBundleMessageSource            -[#000082,plain]-^  AbstractMessageSource
@enduml

参考[国际化MessageSource](./国际化MessageSource.md)