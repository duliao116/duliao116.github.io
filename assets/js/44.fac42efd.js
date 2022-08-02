(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{403:function(s,a,t){"use strict";t.r(a);var e=t(45),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-8-0-30免安装版启动流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-8-0-30免安装版启动流程"}},[s._v("#")]),s._v(" mysql 8.0.30免安装版启动流程")]),s._v(" "),t("h2",{attrs:{id:"下载mysql免安装压缩包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载mysql免安装压缩包"}},[s._v("#")]),s._v(" 下载mysql免安装压缩包")]),s._v(" "),t("p",[s._v("下载地址：https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.30-winx64.zip")]),s._v(" "),t("h2",{attrs:{id:"解压到任意目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压到任意目录"}},[s._v("#")]),s._v(" 解压到任意目录")]),s._v(" "),t("p",[s._v("我的解压目录是：D:\\soft\\mysql-8.0.30-winx64")]),s._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("h3",{attrs:{id:"创建文件夹data和文件my-ini"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹data和文件my-ini"}},[s._v("#")]),s._v(" 创建文件夹data和文件my.ini")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801151607076.png",alt:"image-20220801151607076"}})]),s._v(" "),t("h3",{attrs:{id:"在my-ini中编写配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在my-ini中编写配置信息"}},[s._v("#")]),s._v(" 在my.ini中编写配置信息")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql客户端默认字符集")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-character-set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token header"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("mysqld")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置3306端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("basedir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:/soft/mysql-8.0.30-winx64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置mysql数据库的数据的存放目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("datadir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("D:/soft/mysql-8.0.30-winx64/data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许最大连接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("max_connect_errors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("20")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端使用的字符集默认为8比特编码的latin1字符集")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("character-set-server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("utf8mb4")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建新表时将使用的默认存储引擎")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("default-storage-engine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("INNODB")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# skip-grant-tables")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"执行初始化命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行初始化命令"}},[s._v("#")]),s._v(" 执行初始化命令")]),s._v(" "),t("h3",{attrs:{id:"以管理员身份运行power-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#以管理员身份运行power-shell"}},[s._v("#")]),s._v(" 以管理员身份运行power shell")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801152221342.png",alt:"image-20220801152221342"}})]),s._v(" "),t("h3",{attrs:{id:"进入到mysql解压后的bin目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入到mysql解压后的bin目录"}},[s._v("#")]),s._v(" 进入到mysql解压后的bin目录")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801152322516.png",alt:"image-20220801152322516"}})]),s._v(" "),t("h3",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("mysqld "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("initialize "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("console\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801152446305.png",alt:"image-20220801152446305"}})]),s._v(" "),t("p",[s._v("执行成功时，会得到一个临时密码，我这里得到的是：_DuTepo_P1+t。")]),s._v(" "),t("p",[s._v("data目录也会生成一些初始化文件：")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801152707912.png",alt:"image-20220801152707912"}})]),s._v(" "),t("h2",{attrs:{id:"安装mysql服务-并启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql服务-并启动服务"}},[s._v("#")]),s._v(" 安装MySQL服务，并启动服务")]),s._v(" "),t("p",[s._v("执行命令：mysqld --install [服务名]")]),s._v(" "),t("p",[s._v("因为之前安装过mysql 5.7版本，此处我用了服务名mysql8")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801153048178.png",alt:"image-20220801153048178"}})]),s._v(" "),t("p",[s._v("执行命令：net start [服务名]")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801153142715.png",alt:"image-20220801153142715"}})]),s._v(" "),t("h2",{attrs:{id:"登录并修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录并修改密码"}},[s._v("#")]),s._v(" 登录并修改密码")]),s._v(" "),t("h3",{attrs:{id:"使用临时密码登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用临时密码登录"}},[s._v("#")]),s._v(" 使用临时密码登录")]),s._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p_DuTepo_P1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801153427244.png",alt:"image-20220801153427244"}})]),s._v(" "),t("h3",{attrs:{id:"修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[s._v("#")]),s._v(" 修改密码")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypassword'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801154731559.png",alt:"image-20220801154731559"}})]),s._v(" "),t("p",[s._v("修改完刷新一下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("flush "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"测试密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试密码"}},[s._v("#")]),s._v(" 测试密码")]),s._v(" "),t("p",[s._v("退出，测试旧密码，已经不能登录。")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801154856887.png",alt:"image-20220801154856887"}})]),s._v(" "),t("p",[s._v("使用新密码，登录成功。")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801154950875.png",alt:"image-20220801154950875"}})]),s._v(" "),t("h2",{attrs:{id:"使用navicat登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用navicat登录"}},[s._v("#")]),s._v(" 使用navicat登录")]),s._v(" "),t("p",[s._v("报错。")]),s._v(" "),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801155309611.png",alt:"image-20220801155309611"}})]),s._v(" "),t("p",[s._v("执行命令：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'localhost'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" mysql_native_password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mypassword'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"assets%5Cimage-20220801155553072.png",alt:"image-20220801155553072"}})]),s._v(" "),t("p",[s._v("再次连接成功。")])])}),[],!1,null,null,null);a.default=r.exports}}]);