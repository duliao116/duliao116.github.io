# class.getResource VS classLoader.getResource

## class

~~~java
Test.class.getResource("/"), Test.class.getResource("/app.properties")
~~~

"/"获取到的是classpath路径，"/app.properties"获取的是classpath路径下的app.properties文件的信息。

~~~java
Test.class.getResource(""), Test.class.getResource("app.properties")
~~~

""获取到的是Test类所在的包路径，"app.properties"获取的是Test类包路径下的app.properties文件的信息。

> class.getResourceAsStream()的路径访问方式也是这样。

## classLoader
~~~java
Test.class.getClassLoader().getResource("/")
~~~

不支持绝对路径。

~~~java
Test.class.getClassLoader().getResource(""), Test.class.getResource("app.properties")
~~~

""获取到的是classpath路径，"app.properties"获取的是classpath路径下的app.properties文件的信息。

> class.getClassLoader().getResourceAsStream()的路径访问方式也是这样。

## 代码示例

![image-20230711111947293](assets/image-20230711111947293.png)


~~~java
package org.dly.java;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;

public class GetResourceTest {

    @Nested
    class ClassGetResource{

        @Test
        void should_get_classpath_with_absolute_path(){
            URL resource = GetResourceTest.class.getResource("/");
            assertTrue(resource.getPath().endsWith("build/classes/java/test/"));
        }

        @Test
        void should_get_from_classpath_file_with_absolute_path() throws IOException {
            //file:/D:/code/java/java/build/classes/java/test/classpath.properties
            InputStream resourceAsStream = GetResourceTest.class.getResourceAsStream("/classpath.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            String path = properties.getProperty("path");
            assertEquals("classpath", path);
        }

        @Test
        void should_get_package_path_with_relative_path(){
            URL resource = GetResourceTest.class.getResource("");
            assertTrue(resource.getPath().endsWith("build/classes/java/test/org/dly/java/"));
        }

        @Test
        void should_get_from_package_file_with_relative_path() throws IOException {
            //file:/D:/code/java/java/build/classes/java/test/org/dly/java/package.properties
            InputStream resourceAsStream = GetResourceTest.class.getResourceAsStream("package.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            String path = properties.getProperty("path");
            assertEquals("package", path);
        }

    }

    @Nested
    class ClassLoaderGetResource{
        private ClassLoader classLoader;
        
        @BeforeEach
        void init(){
            classLoader = GetResourceTest.class.getClassLoader();
        }

        @Test
        void not_support_absolute_path(){
            URL resource = classLoader.getResource("/");
            assertNull(resource);
        }

        @Test
        void should_get_classpath_with_relative_path(){
            URL resource = classLoader.getResource("");
            assertTrue(resource.getPath().endsWith("build/classes/java/test/"));
        }

        @Test
        void should_get_classpath_file_with_relative_path() throws IOException {
            InputStream resourceAsStream = classLoader.getResourceAsStream("classpath.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            String path = properties.getProperty("path");
            assertEquals("classpath", path);
        }

        @Test
        void should_add_package_path_when_read_package_file() throws IOException {
            InputStream resourceAsStream = classLoader.getResourceAsStream("org/dly/java/package.properties");
            Properties properties = new Properties();
            properties.load(resourceAsStream);
            String path = properties.getProperty("path");
            assertEquals("package", path);
        }
    }

    @Test
    void should_equal_when_class_get_absolute_and_classloader_get_relative(){
        URL resource1 = GetResourceTest.class.getResource("/");
        URL resource2 = GetResourceTest.class.getClassLoader().getResource("");
        assertEquals(resource1, resource2);
    }
}

~~~

