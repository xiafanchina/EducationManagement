/*
Navicat MySQL Data Transfer

Source Server         : xia
Source Server Version : 50546
Source Host           : localhost:3306
Source Database       : bysj

Target Server Type    : MYSQL
Target Server Version : 50546
File Encoding         : 65001

Date: 2017-01-07 19:12:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class_info
-- ----------------------------
DROP TABLE IF EXISTS `class_info`;
CREATE TABLE `class_info` (
  `class_id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `lesson` varchar(30) DEFAULT NULL,
  `lecturer` varchar(30) DEFAULT NULL,
  `assistant` varchar(30) DEFAULT NULL,
  `teacher` varchar(30) DEFAULT NULL,
  `class_num` int(50) DEFAULT NULL,
  `course_start` date DEFAULT NULL,
  `course_end` date DEFAULT NULL,
  `class_way` varchar(30) DEFAULT NULL,
  `class_start` date DEFAULT NULL,
  `class_place` varchar(50) DEFAULT NULL,
  `job_num` int(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of class_info
-- ----------------------------
INSERT INTO `class_info` VALUES ('1', '201609湖北工程学院', 'JAVA方向', '张锐', '梁栋飞', '卢锡文', '21', '2016-08-20', '2016-11-10', '新创建', '2016-08-15', '湖北省孝感市湖工', '11', '停课中');
INSERT INTO `class_info` VALUES ('6', '201701湖北武汉二班', 'JAVA方向', '张锐', '祁袁', '刘妍妍', '0', '2016-12-20', '2017-01-10', '新创建', '2016-11-01', '湖北省武汉市古田一路', '0', '开课前');
INSERT INTO `class_info` VALUES ('29', '201609湖北工程学院', 'JAVA方向', '校长测试', '周典', '李帅飞', '1', '2016-12-20', '2017-02-10', '新创建', '2016-12-12', '湖北省孝感市湖工', '0', '上课中');
INSERT INTO `class_info` VALUES ('30', '20160104孝感1班', 'JAVA方向', '张锐', '周典', '李帅飞', '0', '2016-01-12', '2016-05-10', '新创建', '2016-01-04', '湖北省孝感市湖工', '0', '开课前');
INSERT INTO `class_info` VALUES ('31', '201610北京一班', 'JAVA方向', '校长测试', '周典', '卢锡文', '1', '2016-10-10', '2017-03-12', '新创建', '2016-10-01', '北京市经济开发区', '0', '停课中');

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `lesson_id` int(30) DEFAULT NULL,
  `teacher_id` int(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('14', '课程2', '1', '1039');
INSERT INTO `course` VALUES ('15', '课程3', '3', '1045');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `dep_id` varchar(30) NOT NULL,
  `dep_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`dep_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('001', '教学部');
INSERT INTO `department` VALUES ('002', '开发部');
INSERT INTO `department` VALUES ('003', '后勤部');

-- ----------------------------
-- Table structure for exam_info
-- ----------------------------
DROP TABLE IF EXISTS `exam_info`;
CREATE TABLE `exam_info` (
  `ex_idcard` varchar(30) NOT NULL,
  `ex_name` varchar(30) DEFAULT NULL,
  `ex_school` varchar(50) DEFAULT NULL,
  `ex_choice` varchar(50) DEFAULT NULL,
  `ex_score` int(30) DEFAULT NULL,
  `ex_date` date DEFAULT NULL,
  `ex_status` int(30) DEFAULT NULL,
  PRIMARY KEY (`ex_idcard`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of exam_info
-- ----------------------------
INSERT INTO `exam_info` VALUES ('610624199601010654', '李燚', '北京大学', 'JAVA方向', '40', '2016-03-07', '0');
INSERT INTO `exam_info` VALUES ('610624199501010765', '张徐辉', '北京大学', 'JAVA方向', '80', '2016-03-07', '0');
INSERT INTO `exam_info` VALUES ('610624199501010766', '冯海斌', '北京大学', 'JAVA方向', '99', '2016-09-01', '0');
INSERT INTO `exam_info` VALUES ('610624199501010234', '王忠强', '北京大学', 'JAVA方向', '77', '2016-11-13', '0');
INSERT INTO `exam_info` VALUES ('610624199501010123', '李松伟', '北京大学', 'JAVA方向', '54', '2016-10-05', '0');
INSERT INTO `exam_info` VALUES ('610624199501010345', '曹亚东', '北京大学', 'JAVA方向', '100', '2016-08-06', '0');
INSERT INTO `exam_info` VALUES ('610624199501010231', '刘阳', '北京大学', 'JAVA方向', '20', '2016-08-06', '0');
INSERT INTO `exam_info` VALUES ('610624199501010232', '李争', '北京大学', 'JAVA方向', '88', '0000-00-00', '0');
INSERT INTO `exam_info` VALUES ('410426199303073518', '刘治龙', '北京大学', 'JAVA方向', '55', '2106-08-03', '1');
INSERT INTO `exam_info` VALUES ('610624199501010255', '杨晓葵', '北京大学', 'JAVA方向', '20', '2017-01-07', '1');
INSERT INTO `exam_info` VALUES ('610624199501010266', '李鹏卫', '北京大学', 'JAVA方向', '57', '2016-06-05', '1');
INSERT INTO `exam_info` VALUES ('610624199501010277', '李团诚', '北京大学', 'JAVA方向', '52', '2016-06-05', '1');
INSERT INTO `exam_info` VALUES ('610624199501010278', '李敬刚', '北京大学', 'JAVA方向', '0', '2017-01-07', '1');
INSERT INTO `exam_info` VALUES ('610321199406100433', '郭煜', '北京大学', 'JAVA方向', '65', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('410426199303073501', '薛奥迪', '北京大学', 'JAVA方向', '44', '2016-10-12', '1');
INSERT INTO `exam_info` VALUES ('410426199303073502', '高姜伟', '北京大学', 'JAVA方向', '90', '2016-11-29', '0');
INSERT INTO `exam_info` VALUES ('410426199303073503', '牛晨阳', '北京大学', 'JAVA方向', '55', '2016-10-23', '1');
INSERT INTO `exam_info` VALUES ('410426199303073504', '程自豪', '北京大学', 'JAVA方向', '20', '2017-01-07', '1');
INSERT INTO `exam_info` VALUES ('410426199303073505', '王彬', '北京大学', 'JAVA方向', '58', '2016-10-25', '0');
INSERT INTO `exam_info` VALUES ('410426199303073506', '王洪超', '北京大学', 'JAVA方向', '67', '2016-11-09', '0');
INSERT INTO `exam_info` VALUES ('410426199303073507', '马春兰', '北京大学', 'JAVA方向', '59', '2016-11-11', '1');
INSERT INTO `exam_info` VALUES ('610321199406100434', '何平', '北京大学', 'JAVA方向', '86', '2016-10-25', '0');
INSERT INTO `exam_info` VALUES ('410426199303073508', '孙娇', '北京大学', 'JAVA方向', '86', '2016-11-01', '0');
INSERT INTO `exam_info` VALUES ('410426199303073509', '孔丹凤', '北京大学', 'JAVA方向', '56', '2016-10-25', '1');
INSERT INTO `exam_info` VALUES ('610321199406100435', '田盼龙', '北京大学', 'JAVA方向', '45', '2016-10-25', '1');
INSERT INTO `exam_info` VALUES ('610321199406100436', '曾祥咏', '北京大学', 'JAVA方向', '99', '2016-10-25', '0');
INSERT INTO `exam_info` VALUES ('610321199406100437', '王双全', '北京大学', 'JAVA方向', '87', '2016-10-25', '0');
INSERT INTO `exam_info` VALUES ('610321199406100438', '梁政', '北京大学', 'JAVA方向', '20', '2017-01-07', '1');
INSERT INTO `exam_info` VALUES ('610321199406100439', '王瑞杰', '北京大学', 'JAVA方向', '87', '2016-10-25', '0');
INSERT INTO `exam_info` VALUES ('610321199406100440', '陈光辉', '北京大学', 'JAVA方向', '65', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100441', '贾孟洁', '北京大学', 'JAVA方向', '97', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100442', '翟晓慧', '北京大学', 'JAVA方向', '79', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100443', '陈富林', '北京大学', 'JAVA方向', '54', '2016-11-03', '1');
INSERT INTO `exam_info` VALUES ('610321199406100444', '孙浩力', '北京大学', 'JAVA方向', '89', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100445', '李娅', '北京大学', 'JAVA方向', '68', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100446', '李兵', '北京大学', 'JAVA方向', '77', '2016-10-31', '0');
INSERT INTO `exam_info` VALUES ('610321199406100447', '黄凯利', '北京大学', 'JAVA方向', '88', '2016-11-05', '0');
INSERT INTO `exam_info` VALUES ('610321199406100448', '戚立凡', '北京大学', 'JAVA方向', '68', '2016-11-05', '0');
INSERT INTO `exam_info` VALUES ('610321199406100449', '王悦', '北京大学', 'JAVA方向', '86', '2016-11-05', '0');
INSERT INTO `exam_info` VALUES ('610321199406100450', '韩萌丽', '北京大学', 'JAVA方向', '47', '2016-11-05', '1');
INSERT INTO `exam_info` VALUES ('610321199406100451', '邢美玲', '北京大学', 'JAVA方向', '89', '2016-10-31', '0');
INSERT INTO `exam_info` VALUES ('610321199406100452', '熊雨会', '北京大学', 'JAVA方向', '93', '2016-11-05', '0');
INSERT INTO `exam_info` VALUES ('610321199406100453', '李晓刚', '北京大学', 'JAVA方向', '94', '2016-10-27', '0');
INSERT INTO `exam_info` VALUES ('610321199406100454', '杨军', '北京大学', 'JAVA方向', '57', '2016-10-27', '1');
INSERT INTO `exam_info` VALUES ('610321199406100455', '李浩', '北京大学', 'JAVA方向', '98', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100456', '肖可', '北京大学', 'JAVA方向', '84', '2016-10-27', '0');
INSERT INTO `exam_info` VALUES ('610321199406100457', '王冲林', '清华大学', 'JAVA方向', '57', '2016-10-27', '1');
INSERT INTO `exam_info` VALUES ('610321199406100458', '王彦', '清华大学', 'JAVA方向', '68', '2016-10-31', '0');
INSERT INTO `exam_info` VALUES ('610321199406100459', '杨天串', '清华大学', 'JAVA方向', '79', '2016-11-12', '0');
INSERT INTO `exam_info` VALUES ('610321199406100460', '朱凡', '清华大学', 'JAVA方向', '87', '2016-11-07', '0');
INSERT INTO `exam_info` VALUES ('610321199406100461', '熊日', '清华大学', 'JAVA方向', '48', '2016-10-27', '0');
INSERT INTO `exam_info` VALUES ('610321199406100462', '冷封', '清华大学', 'JAVA方向', '76', '2016-11-05', '0');
INSERT INTO `exam_info` VALUES ('610321199406100463', '黄海涛', '清华大学', 'JAVA方向', '99', '2016-10-31', '0');
INSERT INTO `exam_info` VALUES ('610321199406115588', '张三', '清华大学', 'JAVA方向', '88', '2016-11-13', '0');
INSERT INTO `exam_info` VALUES ('610321199406558864', '李四', '北京大学', 'JAVA方向', '61', '2016-11-13', '0');
INSERT INTO `exam_info` VALUES ('420116199012129999', '测试', '湖北工程学院', 'JAVA方向', '60', '2016-12-21', '0');
INSERT INTO `exam_info` VALUES ('420116199509231111', '夏天', '湖北工程学院', 'JAVA方向', '60', '2016-12-28', '0');

-- ----------------------------
-- Table structure for exam_question
-- ----------------------------
DROP TABLE IF EXISTS `exam_question`;
CREATE TABLE `exam_question` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `lesson_id` int(30) DEFAULT NULL,
  `type_id` int(30) DEFAULT NULL COMMENT '考试类型 0为入学考试',
  `question` varchar(255) DEFAULT NULL,
  `answer1` varchar(255) DEFAULT NULL,
  `answer2` varchar(255) DEFAULT NULL,
  `answer3` varchar(255) DEFAULT NULL,
  `answer4` varchar(255) DEFAULT NULL,
  `answer` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of exam_question
-- ----------------------------
INSERT INTO `exam_question` VALUES ('1', '1', '0', '1、事务隔离级别是由谁实现的？', 'Java应用程序', 'Hibernate', '数据库系统', 'JDBC驱动程序', 'C');
INSERT INTO `exam_question` VALUES ('2', '1', '0', '2、在类设计中，类的成员变量要求仅仅能够被同一package下的类访问，请问应该使用下列哪个修饰词（）', 'protected', 'public', 'private', '不需要任何修饰词', 'D');
INSERT INTO `exam_question` VALUES ('3', '1', '0', '3、在Java中，以下关于方法重载和方法重写描述正确的是？', '方法重载和方法的重写实现的功能相同', '方法重载出现在父子关系中，方法重写是在同一类中', '方法重载的返回值类型必须一致，参数项必须不同', '方法重写的返回值类型必须相同或相容。（或是其子类）', 'D');
INSERT INTO `exam_question` VALUES ('4', '1', '0', '4、关于依赖注入，下列选项中说法错误的是（）', '依赖注入能够独立开发各组件，然后根据组件间关系进行组装依赖注入能够独立开发各组件，然后根据组件间关系进行组装', '依赖注入使组件之间相互依赖，相互制约', '依赖注入提供使用接口编程', '依赖注入指对象在使用时动态注入', 'B');
INSERT INTO `exam_question` VALUES ('5', '1', '0', '5、下面有关重载函数的说法中正确的是', '重载函数必须具有不同的返回值类型', '重载函数形参个数必须不同', '重载函数必须有不同的形参列表', '重载函数名可以不同', 'C');
INSERT INTO `exam_question` VALUES ('6', '1', '0', '6、如下Java语句：double x= 3.0; int y=5; x/=--y;执行后，x的值是（）', '3', '0.6', '0.4', '0.75', 'D');
INSERT INTO `exam_question` VALUES ('7', '1', '0', '7、关于中间件特点的描述.不正确的是（）', '中间件运行于客户机/服务器的操作系统内核中，提高内核运行效率', '中间件应支持标准的协议和接口', '中间件可运行于多种硬件和操作系统平台上', '跨越网络,硬件，操作系统平台的应用或服务可通过中间件透明交互', 'A');
INSERT INTO `exam_question` VALUES ('8', '1', '0', '8、java中，用（ ）关键字定义常量？', 'final', '#define', 'float', 'const', 'A');
INSERT INTO `exam_question` VALUES ('9', '1', '0', '9、对错题', '对', '错', '111', '2', 'B');
INSERT INTO `exam_question` VALUES ('10', '1', '0', '10、一个以“.java”为后缀的源文件', '只能包含一个类，类名必须与文件名相同', '只能包含与文件名相同的类以及其中的内部类', '只能有一个与文件名相同的类，可以包含其他类', '可以包含任意类', 'C');
INSERT INTO `exam_question` VALUES ('11', '2', '0', '1、决定C++语言中函数的返回值类型的是（）', 'return语句中的表达式类型', '调用该函数时系统随机产生的类型', '调用该函数时的主调用函数类型', '在定义该函数时所指定的数据类型', 'D');
INSERT INTO `exam_question` VALUES ('12', '2', '0', '2、下面叙述不正确的是（）', '派生类一般都用公有派生', '对基类成员的访问必须是无二义性的', '赋值兼容规则也适用于多重继承的组合', '基类的公有成员在派生类中仍然是公有的', 'D');
INSERT INTO `exam_question` VALUES ('13', '2', '0', '3、编写C++程序一般需经过的几个步骤依次是（）', '编辑、调试、编译、连接', '编辑、编译、连接、运行', '编译、调试、编辑、连接', '编译、编辑、连接、运行', 'B');
INSERT INTO `exam_question` VALUES ('14', '2', '0', '4、所谓数据封装就是将一组数据和与这组数据有关操作组装在一起，形成一个实体，这实体 也就是（）', '类', '对象', '函数体', '数据块', 'A');
INSERT INTO `exam_question` VALUES ('15', '2', '0', '5、在公有派生类的成员函数不能直接访问基类中继承来的某个成员，则该成员一定是基类中 的（）', '私有成员', '公有成员', '保护成员', '保护成员或私有成员', 'A');
INSERT INTO `exam_question` VALUES ('16', '2', '0', '6、对基类和派生类的关系描述中，错误的是（）', '派生类是基类的具体化', '基类继承了派生类的属性', '派生类是基类定义的延续', '派生类是基类的特殊化', 'B');
INSERT INTO `exam_question` VALUES ('17', '2', '0', '7、关于this指针使用说法正确的是（）', '保证每个对象拥有自己的数据成员，但共享处理这些数据的代码', '保证基类私有成员在子类中可以被访问。', '保证基类保护成员在子类中可以被访问。', '保证基类公有成员在子类中可以被访问。', 'A');
INSERT INTO `exam_question` VALUES ('18', '2', '0', '8、所谓多态性是指 （）', '不同的对象调用不同名称的函数 ', '不同的对象调用相同名称的函数', '一个对象调用不同名称的函数', '一个对象调用不同名称的对象', 'B');
INSERT INTO `exam_question` VALUES ('19', '2', '0', '9、一个函数功能不太复杂，但要求被频繁调用，则应把它定义为 （）', '内联函数', '重载函数', '递归函数', '嵌套函数 ', 'A');
INSERT INTO `exam_question` VALUES ('20', '2', '0', '10、适宜采用inline定义函数情况是（）', '函数体含有循环语句', '函数体含有递归语句', '函数代码少、频繁调用 ', '函数代码多、不常调用', 'C');
INSERT INTO `exam_question` VALUES ('21', '3', '0', '1、及时聊天app不会采用的网络传输方式是', 'UDP', 'TCP', 'Http', 'FTP', 'D');
INSERT INTO `exam_question` VALUES ('22', '3', '0', '2、下列技术不属于多线程的是', 'Block', 'NSThread', 'NSOperation', 'GCD', 'A');
INSERT INTO `exam_question` VALUES ('23', '3', '0', '3、线程和进程的区别不正确的是', '进程和线程都是由操作系统所体会的程序运行的基本单元', '线程之间有单独的地址空间', '进程和线程的主要差别在于它们是不同的操作系统资源管理方式', '线程有自己的堆栈和局部变量', 'B');
INSERT INTO `exam_question` VALUES ('24', '3', '0', '4、堆和栈的区别正确的是', '对于栈来讲，我们需要手工控制，容易产生memory leak', '对于堆来说，释放工作由编译器自动管理，无需我们手工控制', '在Windows下,栈是向高地址扩展的数据结构，是连续的内存区域，栈顶的地址和栈的最大容量是系统预先规定好的', '对于堆来讲，频繁的new/delete势必会造成内存空间的不连续，从而造成大量的碎片，使程序效率降低', 'D');
INSERT INTO `exam_question` VALUES ('25', '3', '0', '5、下列回调机制的理解不正确的是', '目标动作对：当两个对象之间有⽐比较紧密的关系时，如视图控制器与其下的某个视图', '代理：也叫委托，当某个对象收到多个事件，并要求同一个对象来处理所有事件时。委托机制必须依赖于某个协议定义的⽅方法来发送消息', '通告机制：当需要多个对象或两个⽆无关对象处理同一个事件时', 'Block：适⽤于回调只发⽣生一次的简单任务', 'B');
INSERT INTO `exam_question` VALUES ('26', '3', '0', '6、对于runloop的理解不正确的是', '每一个线程都有其对应的RunLoop', '默认非主线程的RunLoop是没有运行的', '在一个单独的线程中没有必要去启用RunLoop', '可以将NSTimer添加到runloop中', 'C');
INSERT INTO `exam_question` VALUES ('27', '3', '0', '7、UITableView中cell的复用是由几个数组实现的', '1', '2', '3', '3或4', 'B');
INSERT INTO `exam_question` VALUES ('28', '3', '0', '8、在线播放视频一般访问服务器中的 类型文件', 'M3U8', 'flv', 'MP4', 'data', 'A');
INSERT INTO `exam_question` VALUES ('29', '3', '0', '9、点击Button响应链中最终得到响应的是', 'Window', 'Application', 'AppDelegate', 'UIViewController', 'B');
INSERT INTO `exam_question` VALUES ('30', '3', '0', '10、post传输的最大文件限制为', '1G', '2G', '4G', '8G', 'C');
INSERT INTO `exam_question` VALUES ('31', '4', '0', '1、下列选项哪个不是Activity启动的方法', ' goToActivity', 'startActivity', 'startActivityFromChild', 'startActivityForResult', 'A');
INSERT INTO `exam_question` VALUES ('32', '4', '0', '2、下列哪一个不属于Activity的生命周期方法', 'onInit( )', 'onStart( )', 'onStop( )', 'onPause( )', 'A');
INSERT INTO `exam_question` VALUES ('33', '4', '0', '3、对于XML布局文件中的视图控件，layout_width属性的属性值不可以是什么？', 'match_parent ', 'fill_parent', 'wrap_content ', 'match_content', 'D');
INSERT INTO `exam_question` VALUES ('34', '4', '0', '4、对一些资源以及状态的操作保存，最好是保存在Activity生命周期的哪个函数中进行？', 'onStart( ) ', 'onPause( ) ', 'onCreate( ) ', 'onResume( ) ', 'A');
INSERT INTO `exam_question` VALUES ('35', '4', '0', '5、关于视图控件的常用事件描述中，不正确的是？', 'Click事件只能使用在按钮上，表示按钮的点击动作', '当TextView类视图控件失去焦点或获得焦点时，将触发FocusChange事件', '当单选框中某一选项被选择时，将触发CheckedChange事件', '当多选框中某一选项被选择时，将触发CheckedChange事件', 'A');
INSERT INTO `exam_question` VALUES ('36', '4', '0', '6、下列关于Android布局文件常用的长度/大小单位的描述中，不正确的是？', 'dp是设备独立像素，不依赖于设备，是最常用的长度单位', 'sp代表放大像素，主要用于字体大小的显示', 'px是像素单位，在不同的设备上显示效果相同，因此推荐在布局中使用该单位', '在设置空间长度等相对距离时，推荐使用dp单位，该单位随设备密度的变化而变化', 'C');
INSERT INTO `exam_question` VALUES ('37', '4', '0', '7、下列哪一个选项不属于Android中预定义的布局方式？', 'TabLayout', 'RelativeLayout', 'AbsoluteLayout', 'LinearLayout', 'A');
INSERT INTO `exam_question` VALUES ('38', '4', '0', '8、下列哪一款移动设备搭载的是Android平台？', 'NOKIA手机', '小米手机', 'iPhone手机', 'iPad', 'A');
INSERT INTO `exam_question` VALUES ('39', '4', '0', '9、下列关于内存回收的说明，哪个是正确的？', '程序员必须创建一个线程来释放内存', '内存回收程序允许程序员直接释放内存', '内存回收程序负责释放无用内存', '内存回收程序可以在指定的时间释放内存对象', 'C');
INSERT INTO `exam_question` VALUES ('40', '4', '0', '10、Math.round(11.5)等于多少(). Math.round(-11.5)等于多少？', '11 ,-11', '11 ,-12', '12 ,-11', '12 ,-12', 'C');

-- ----------------------------
-- Table structure for fun
-- ----------------------------
DROP TABLE IF EXISTS `fun`;
CREATE TABLE `fun` (
  `role_id` varchar(20) DEFAULT NULL,
  `function_name` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of fun
-- ----------------------------
INSERT INTO `fun` VALUES ('1', '修改密码');
INSERT INTO `fun` VALUES ('1', '角色管理');
INSERT INTO `fun` VALUES ('1', '学生管理');
INSERT INTO `fun` VALUES ('1', '班级管理');
INSERT INTO `fun` VALUES ('1', '教师管理');
INSERT INTO `fun` VALUES ('1', '就业信息');
INSERT INTO `fun` VALUES ('1', '学生审核');
INSERT INTO `fun` VALUES ('2', '教师管理');
INSERT INTO `fun` VALUES ('2', '就业信息');
INSERT INTO `fun` VALUES ('2', '学生审核');
INSERT INTO `fun` VALUES ('5', '我的班级');
INSERT INTO `fun` VALUES ('5', '学生管理');
INSERT INTO `fun` VALUES ('4', '我的班级');
INSERT INTO `fun` VALUES ('4', '学生管理');
INSERT INTO `fun` VALUES ('23', '角色管理');
INSERT INTO `fun` VALUES ('23', '班级管理');
INSERT INTO `fun` VALUES ('23', '就业信息');
INSERT INTO `fun` VALUES ('23', '教师管理');
INSERT INTO `fun` VALUES ('3', '修改密码');
INSERT INTO `fun` VALUES ('3', '学生管理');
INSERT INTO `fun` VALUES ('4', '修改密码');
INSERT INTO `fun` VALUES ('3', '就业信息');
INSERT INTO `fun` VALUES ('3', '我的班级');
INSERT INTO `fun` VALUES ('1', '我的班级');
INSERT INTO `fun` VALUES ('2', '班级管理');
INSERT INTO `fun` VALUES ('2', '角色管理');
INSERT INTO `fun` VALUES ('23', '学生管理');
INSERT INTO `fun` VALUES ('5', '修改密码');
INSERT INTO `fun` VALUES ('2', '修改密码');
INSERT INTO `fun` VALUES ('24', '角色管理');
INSERT INTO `fun` VALUES ('24', '学生管理');
INSERT INTO `fun` VALUES ('24', '修改密码');
INSERT INTO `fun` VALUES ('25', '角色管理');
INSERT INTO `fun` VALUES ('25', '学生管理');
INSERT INTO `fun` VALUES ('25', '班级管理');
INSERT INTO `fun` VALUES ('1', '课程管理');
INSERT INTO `fun` VALUES ('1', '考试管理');

-- ----------------------------
-- Table structure for function
-- ----------------------------
DROP TABLE IF EXISTS `function`;
CREATE TABLE `function` (
  `function_id` varchar(20) NOT NULL,
  `function_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`function_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of function
-- ----------------------------
INSERT INTO `function` VALUES ('1', '我的班级');
INSERT INTO `function` VALUES ('2', '学生审核');
INSERT INTO `function` VALUES ('3', '就业信息');
INSERT INTO `function` VALUES ('4', '教师管理');
INSERT INTO `function` VALUES ('5', '班级管理');
INSERT INTO `function` VALUES ('6', '学生管理');
INSERT INTO `function` VALUES ('7', '角色管理');
INSERT INTO `function` VALUES ('8', '课程管理');
INSERT INTO `function` VALUES ('9', '考试管理');

-- ----------------------------
-- Table structure for job_info
-- ----------------------------
DROP TABLE IF EXISTS `job_info`;
CREATE TABLE `job_info` (
  `job_id` int(10) NOT NULL AUTO_INCREMENT,
  `student_id` varchar(30) NOT NULL,
  `com_name` varchar(30) DEFAULT NULL,
  `com_phone` varchar(30) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `job` varchar(30) DEFAULT NULL,
  `entry_date` date DEFAULT NULL,
  `salary` varchar(30) DEFAULT NULL,
  `submit_date` date DEFAULT NULL,
  `submit_person` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of job_info
-- ----------------------------
INSERT INTO `job_info` VALUES ('1', '130645057', '网易', '010-6765432', '北京市海淀区中关村东路1号院清华科技园科技大厦A座5层501号/502号', '开发', '2016-08-16', '6600', '2016-08-28', '校长测试');
INSERT INTO `job_info` VALUES ('2', '130645058', '网易', '010-8967654', '北京市海淀区中关村东路1号院清华科技园科技大厦A座5层501号/502号', '助理', '2016-11-14', '4400', '2016-11-06', '校长测试');
INSERT INTO `job_info` VALUES ('3', '130645051', '金山', '010-9845876', '北京市海淀区苏州桥万柳亿城A座13层 ', '产品助理', '2016-11-07', '4200', '2016-11-18', '校长测试');
INSERT INTO `job_info` VALUES ('4', '130645048', '金山', '010-63691501', '北京市海淀区小营西路33号金山软件大厦', '项目经理', '2016-10-31', '6500', '2016-11-03', '校长测试');
INSERT INTO `job_info` VALUES ('5', '130645046', '金山', '010-8967654', '北京市海淀区小营西路33号金山软件大厦', '助理', '2016-10-30', '4400', '2016-11-04', '校长测试');
INSERT INTO `job_info` VALUES ('6', '130645023', '金山', '010-9845876', '北京市海淀区小营西路33号金山软件大厦', '产品助理', '2016-11-02', '4600', '2016-11-10', '校长测试');
INSERT INTO `job_info` VALUES ('7', '130645034', '百度', '010-63691501', '北京海淀区上地十街10号百度大厦', '开发', '2016-10-31', '5400', '2016-11-09', '校长测试');
INSERT INTO `job_info` VALUES ('8', '130645029', '百度', '010-6765432', '北京海淀区上地十街10号百度大厦', '助教', '2016-11-07', '4800', '2016-11-16', '校长测试');
INSERT INTO `job_info` VALUES ('9', '130645008', '百度', '010-8967654', '北京海淀区上地十街10号百度大厦', '开发', '2016-10-31', '5500', '2016-11-03', '校长测试');
INSERT INTO `job_info` VALUES ('10', '130645008', '腾讯', '010-8967654', '广东省深圳市南山区深南大道10000号腾讯大厦', '开发', '2016-10-31', '5500', '2016-11-03', '校长测试');
INSERT INTO `job_info` VALUES ('11', '130645008', '腾讯', '010-8967654', '广东省深圳市南山区深南大道10000号腾讯大厦', '开发', '2016-11-03', '5500', '2016-11-07', '校长测试');
INSERT INTO `job_info` VALUES ('12', '130645008', '腾讯', '010-8967654', '广东省深圳市南山区深南大道10000号腾讯大厦', '开发', '2016-10-31', '5500', '2016-11-02', '校长测试');
INSERT INTO `job_info` VALUES ('21', '130645025', '京东', '010-9846541', '北京市海淀区苏州街20号院银丰大厦2号楼（苏州街路口东北角）1层', '助教', '2016-10-23', '5000', '2016-11-13', '校长测试');
INSERT INTO `job_info` VALUES ('22', '130645029', '京东', '01064856', '北京市海淀区苏州街20号院银丰大厦2号楼（苏州街路口东北角）1层', '5000', '2016-10-23', '8000', '2016-11-13', '校长测试');
INSERT INTO `job_info` VALUES ('15', '130645003', '京东', '15706084675', '北京市海淀区苏州街20号院银丰大厦2号楼（苏州街路口东北角）1层', '助教', '2016-10-23', '5000', '2016-11-06', '校长测试');
INSERT INTO `job_info` VALUES ('16', '130645003', '京东', '15706084675', '北京市海淀区苏州街20号院银丰大厦2号楼（苏州街路口东北角）1层', '助教', '2016-10-23', '5000', '2016-11-06', '校长测试');
INSERT INTO `job_info` VALUES ('17', '130645003', '百度', '24234234234', '北京海淀区上地十街10号百度大厦', '助理', '2016-10-23', '7800', '2016-11-06', '校长测试');
INSERT INTO `job_info` VALUES ('18', '130645019', '腾讯', '010-6668845', '广东省深圳市南山区深南大道10000号腾讯大厦', '助教', '2016-10-23', '5000', '2016-11-12', '校长测试');
INSERT INTO `job_info` VALUES ('19', '130645019', '百度', '010-66598452', '北京海淀区上地十街10号百度大厦', 'JAVA工程师', '2016-10-23', '10000', '2016-11-12', '校长测试');
INSERT INTO `job_info` VALUES ('20', '130645021', '阿里巴巴', '0109988222', '杭州市滨江区 网商路699号', 'JAVA测试', '2016-10-23', '8000', '2016-11-12', '校长测试');
INSERT INTO `job_info` VALUES ('33', '130645021', '测试', '789456', '内蒙古通辽市456', '111', '2016-10-23', '5000', '2016-12-28', '校长测试');
INSERT INTO `job_info` VALUES ('32', '130645021', 'asds', '1516', '重庆市九龙坡区sadasd', 'sad', '2016-10-23', '1230', '2016-12-16', '校长测试');

-- ----------------------------
-- Table structure for lesson
-- ----------------------------
DROP TABLE IF EXISTS `lesson`;
CREATE TABLE `lesson` (
  `lesson_id` int(20) NOT NULL AUTO_INCREMENT,
  `lesson_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`lesson_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of lesson
-- ----------------------------
INSERT INTO `lesson` VALUES ('1', 'JAVA方向');
INSERT INTO `lesson` VALUES ('2', 'C++方向');
INSERT INTO `lesson` VALUES ('3', 'IOS方向');
INSERT INTO `lesson` VALUES ('4', 'Android方向');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `role_id` int(10) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(30) DEFAULT NULL,
  `role_info` varchar(50) DEFAULT NULL,
  `role_status` int(2) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '校长', '具有全部功能', '1');
INSERT INTO `role` VALUES ('2', '教学总监', '教学总监基本具有全功能', '1');
INSERT INTO `role` VALUES ('3', '班主任', '测试编辑角色信息', '1');
INSERT INTO `role` VALUES ('4', '讲师', '我的班级、就业信息、学生管理', '1');
INSERT INTO `role` VALUES ('5', '助教', '我的班级、学生管理', '1');
INSERT INTO `role` VALUES ('24', '测试', '1', '1');
INSERT INTO `role` VALUES ('25', 'ceshi', '', '1');

-- ----------------------------
-- Table structure for score_info
-- ----------------------------
DROP TABLE IF EXISTS `score_info`;
CREATE TABLE `score_info` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `scid` int(30) DEFAULT NULL,
  `score` int(30) DEFAULT NULL,
  `exam_date` date DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `comment` varchar(255) DEFAULT NULL COMMENT '教师评语',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of score_info
-- ----------------------------
INSERT INTO `score_info` VALUES ('6', '10', '10', '2017-01-05', '11', 'wu');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `stus_name` varchar(30) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `id_card` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `qq` varchar(15) DEFAULT NULL,
  `nation` varchar(10) DEFAULT NULL,
  `brith_place` varchar(40) DEFAULT NULL,
  `political` varchar(10) DEFAULT NULL,
  `education` varchar(20) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `major` varchar(30) DEFAULT NULL,
  `schooldate` date DEFAULT NULL,
  `imag` varchar(50) DEFAULT NULL,
  `info` varchar(100) DEFAULT NULL,
  `stu_status` varchar(10) DEFAULT NULL,
  `account_status` int(2) DEFAULT NULL,
  `class_sid` int(30) DEFAULT NULL,
  `job_id` varchar(30) DEFAULT NULL,
  `submit_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=130645076 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('130645002', '张徐辉', '1', '610624199501010765', '1126006788@qq.com', '15706084675', '972442210', '汉族', '陕西', '中共党员', '本科未毕业', '北京大学', '应用电子技术教育', '2017-06-10', null, null, '1', '1', '27', '1', '2016-10-27');
INSERT INTO `student` VALUES ('130645003', '冯海斌', '1', '610624199501010766', '1692745169@qq.com', '15706084675', '182345167', '高山族', '四川', '中共党员', '本科已毕业', '北京大学', '应用电子技术教育', '2017-11-10', null, null, '2', '1', '27', '1', '2016-10-27');
INSERT INTO `student` VALUES ('130645006', '曹亚东', '1', '610624199501010345', '1126006746@qq.com', '15706084688', '1126006746', '汉族', '江西', '共青团员', '本科未毕业', '北京大学', '应用电子技术教育', '2016-10-29', '', '', '1', '1', '26', '1', '2016-10-27');
INSERT INTO `student` VALUES ('130645008', '李争', '1', '610624199501010232', '1126006702@qq.com', '15706082334', '1126006702', '汉族', '江西', '共青团员', '本科未毕业', '北京大学', '电气工程及其自动化', '2016-10-29', '', '', '2', '1', '26', '1', '2016-10-27');
INSERT INTO `student` VALUES ('130645010', '杨晓葵', '1', '610624199501010255', '1126026703@qq.com', '15706085366', '1126026703', '满族', '湖北', '共青团员', '本科未毕业', '北京大学', '电气工程及其自动化', '2017-06-10', null, null, '2', '1', '27', '1', '2016-11-01');
INSERT INTO `student` VALUES ('130645018', '李敬刚', '1', '610624199501010278', '1126046706@qq.com', '13265788908', '6532356777', '回族', '山东', '普通公民', '本科已毕业', '北京大学', '通信工程', '2013-09-01', null, '桃花潭水深千尺', '2', '1', '26', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645019', '郭煜', '1', '610321199406100433', '1126046707@qq.com', '15706084675', '1126006596', '瑶族', '陕西', '中共党员', '本科未毕业', '北京大学', '通信工程', '2013-09-01', null, '班级信息', '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645021', '高姜伟', '1', '410426199303073502', '1126046709@qq.com', '15706086366', '1126006742', '汉族', '河南', '共青团员', '本科未毕业', '北京大学', '通信工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645023', '程自豪', '1', '410426199303073504', '1126046711@qq.com', '15706086366', '1126006743', '汉族', '山东', '共青团员', '本科未毕业', '北京大学', '通信工程', '2013-09-01', null, null, '3', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645025', '王洪超', '1', '410426199303073506', '1126046713@qq.com', '13265788908', '1126006742', '汉族', '黑龙江', '共青团员', '本科未毕业', '北京大学', '通信工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645027', '孙娇', '2', '410426199303073508', '1126046715@qq.com', '15706086366', '6532356777', '汉族', '河南', '共青团员', '本科未毕业', '北京大学', '通信工程', '2013-09-01', null, null, '1', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645029', '何平', '2', '610321199406100434', '1126046717@qq.com', '13265788908', '1126006742', '汉族', '山西', '普通公民', '本科已毕业', '北京大学', '通信工程', '2013-09-01', null, null, '1', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645031', '曾祥咏', '1', '610321199406100436', '1126046719@qq.com', '13265788908', '1126006742', '汉族', '山东', '中共党员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645032', '王双全', '1', '610321199406100437', '1126046720@qq.com', '13265788908', '6532356777', '满族', '黑龙江', '共青团员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645033', '梁政', '1', '610321199406100438', '1126046721@qq.com', '15706086366', '1126006743', '瑶族', '河南', '共青团员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645034', '王瑞杰', '1', '610321199406100439', '1126046722@qq.com', '13265788908', '1126006742', '汉族', '黑龙江', '共青团员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645035', '陈光辉', '1', '610321199406100440', '1126046723@qq.com', '15706086366', '1126006742', '鄂温克族', '江西', '中共党员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645036', '贾孟洁', '2', '610321199406100441', '1126046724@qq.com', '15706086366', '1126006743', '汉族', '江西', '共青团员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645037', '翟晓慧', '2', '610321199406100442', '1126046725@qq.com', '15706086366', '1126006742', '鄂温克族', '江西', '共青团员', '本科未毕业', '北京大学', '信息工程', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645039', '孙浩力', '1', '610321199406100444', '1126046727@qq.com', '15706086745', '1126006742', '瑶族', '湖北', '中共党员', '本科未毕业', '北京大学', '信息管理与信息系统', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645040', '李娅', '2', '610321199406100445', '1126046728@qq.com', '15706086366', '1126006743', '满族', '山东', '共青团员', '本科未毕业', '北京大学', '信息管理与信息系统', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645041', '李兵', '1', '610321199406100446', '1126046729@qq.com', '15706086366', '1126006742', '汉族', '山东', '共青团员', '本科未毕业', '北京大学', '信息管理与信息系统', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645042', '黄凯利', '2', '610321199406100447', '1126046730@qq.com', '13265788908', '1126006742', '瑶族', '陕西', '共青团员', '本科未毕业', '北京大学', '信息管理与信息系统', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645043', '戚立凡', '1', '610321199406100448', '1126046731@qq.com', '15706084688', '6532356777', '瑶族', '湖北', '共青团员', '本科未毕业', '北京大学', '数学与应用数学', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645044', '王悦', '2', '610321199406100449', '1126046732@qq.com', '15706086745', '1126006743', '回族', '湖北', '共青团员', '本科未毕业', '北京大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645046', '邢美玲', '2', '610321199406100451', '1126046734@qq.com', '15706086366', '6532356777', '回族', '四川', '共青团员', '本科未毕业', '北京大学', '软件工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645047', '熊雨会', '2', '610321199406100452', '1126046735@qq.com', '13265788908', '1126006742', '汉族', '陕西', '共青团员', '本科未毕业', '北京大学', '软件工程', '2013-09-01', null, null, '1', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645048', '李晓刚', '1', '610321199406100453', '1126046736@qq.com', '15706084688', '1126006742', '满族', '四川', '共青团员', '本科未毕业', '北京大学', '软件工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645050', '李浩', '1', '610321199406100455', '1126046738@qq.com', '15706086745', '1126006742', '瑶族', '陕西', '共青团员', '本科未毕业', '北京大学', '软件工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645051', '肖可', '1', '610321199406100456', '1126046739@qq.com', '15706086366', '6532356777', '汉族', '山西', '共青团员', '本科未毕业', '北京大学', '软件工程', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645053', '王彦', '1', '610321199406100458', '1126046741@qq.com', '15706084688', '1126006742', '瑶族', '湖北', '共青团员', '本科未毕业', '清华大学', '软件工程', '2013-09-01', null, null, '1', '1', '1', null, '2016-11-02');
INSERT INTO `student` VALUES ('130645055', '朱凡', '1', '610321199406100460', '1126046743@qq.com', '13265788908', '6532356777', '回族', '湖北', '共青团员', '本科未毕业', '清华大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645057', '冷封', '1', '610321199406100462', '1126046745@qq.com', '15706084688', '1126006743', '汉族', '四川', '普通公民', '本科未毕业', '清华大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '31', null, '2016-11-11');
INSERT INTO `student` VALUES ('130645058', '黄海涛', '1', '610321199406100463', '1126046746@qq.com', '13265788908', '1126006742', '回族', '四川', '共青团员', '本科未毕业', '清华大学', '计算机科学与技术', '2013-09-01', null, null, '2', '1', '1', null, '2016-10-27');
INSERT INTO `student` VALUES ('130645068', '张三', '2', '610321199406115588', '987654321@qq.com', '15706084499', '98765432221', '满族', '北京', '中共党员', '本科未毕业', '清华大学', '软件工程', '2013-09-01', null, '', '1', '1', '29', null, '2016-11-13');
INSERT INTO `student` VALUES ('130645074', '测试', '1', '420116199012129999', '123987564@163.com', '13320019876', '12345678900', '汉族', '湖北', '共青团员', '本科未毕业', '湖北工程学院', '计算机科学与技术', '2013-09-01', null, '无', null, null, '1', null, '2016-12-21');
INSERT INTO `student` VALUES ('130645073', '下下', '1', '420116', '352098650@qq.com', '123', '2542', '汉族', '北京', '共青团员', '专科未毕业', '北京大学', '2542', '2013-09-01', null, 'wu', null, null, '1', null, '2016-12-16');
INSERT INTO `student` VALUES ('130645075', '夏天', '1', '420116199509231111', 'xiafan123@qq.com', '13329903782', '352098650', '景颇族', '湖北', '中共党员', '本科未毕业', '湖北工程学院', '计算机科学与技术', '2013-09-01', null, '无', null, null, '1', null, '2016-12-28');

-- ----------------------------
-- Table structure for stu_course
-- ----------------------------
DROP TABLE IF EXISTS `stu_course`;
CREATE TABLE `stu_course` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `cid` int(30) DEFAULT NULL,
  `sid` int(30) NOT NULL,
  `sdate` date DEFAULT NULL COMMENT '选课日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu_course
-- ----------------------------
INSERT INTO `stu_course` VALUES ('10', '14', '130645008', '2017-01-05');
INSERT INTO `stu_course` VALUES ('11', '14', '130645018', '2017-01-05');

-- ----------------------------
-- Table structure for stu_register
-- ----------------------------
DROP TABLE IF EXISTS `stu_register`;
CREATE TABLE `stu_register` (
  `stu_email` varchar(20) NOT NULL,
  `stu_pwd` varchar(30) DEFAULT NULL,
  `stu_name` varchar(30) DEFAULT NULL,
  `stu_idcard` varchar(30) DEFAULT NULL,
  `stu_status` int(10) DEFAULT NULL,
  `stu_reason` varchar(50) DEFAULT NULL,
  `stu_result` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`stu_email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of stu_register
-- ----------------------------
INSERT INTO `stu_register` VALUES ('1126006742@qq.com', 'a123456', '李燚', '610624199601010654', '3', '', '');
INSERT INTO `stu_register` VALUES ('1126006788@qq.com', 'a123456', '张徐辉', '610624199501010765', '7', '所学专业,生源院校,', '不符');
INSERT INTO `stu_register` VALUES ('1692745169@qq.com', 'a123456', '冯海斌', '610624199501010766', '6', '', '');
INSERT INTO `stu_register` VALUES ('1126006745@qq.com', 'a123456', '王忠强', '610624199501010234', '3', '当前学历,政治面貌,籍贯,民族,', '');
INSERT INTO `stu_register` VALUES ('1126006743@qq.com', 'a123456', '李松伟', '610624199501010123', '3', '', '');
INSERT INTO `stu_register` VALUES ('1126006746@qq.com', 'a123456', '曹亚东', '610624199501010345', '5', '当前学历,所学专业，毕业院校', '');
INSERT INTO `stu_register` VALUES ('1126006701@qq.com', 'a123456', '刘阳', '610624199501010231', '3', null, '');
INSERT INTO `stu_register` VALUES ('1126006702@qq.com', 'a123456', '李争', '610624199501010232', '6', null, '');
INSERT INTO `stu_register` VALUES ('1395569310@qq.com', 'a123456', '刘治龙', '410426199303073518', '4', null, '');
INSERT INTO `stu_register` VALUES ('1126026703@qq.com', 'a123456', '杨晓葵', '610624199501010255', '4', null, '');
INSERT INTO `stu_register` VALUES ('1126036704@qq.com', 'a123456', '李鹏卫', '610624199501010266', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046705@qq.com', 'a123456', '李团诚', '610624199501010277', '4', '', '');
INSERT INTO `stu_register` VALUES ('1126046706@qq.com', 'a123456', '李敬刚', '610624199501010278', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046707@qq.com', 'a123456', '郭煜', '610321199406100433', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046708@qq.com', 'a123456', '薛奥迪', '410426199303073501', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046709@qq.com', 'a123456', '高姜伟', '410426199303073502', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046710@qq.com', 'a123456', '牛晨阳', '410426199303073503', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046711@qq.com', 'a123456', '程自豪', '410426199303073504', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046712@qq.com', 'a123456', '王彬', '410426199303073505', '2', null, null);
INSERT INTO `stu_register` VALUES ('1126046713@qq.com', 'a123456', '王洪超', '410426199303073506', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046714@qq.com', 'a123456', '马春兰', '410426199303073507', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046715@qq.com', 'a123456', '孙娇', '410426199303073508', '7', '', '地点');
INSERT INTO `stu_register` VALUES ('1126046716@qq.com', 'a123456', '孔丹凤', '410426199303073509', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046717@qq.com', 'a123456', '何平', '610321199406100434', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046718@qq.com', 'a123456', '田盼龙', '610321199406100435', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046719@qq.com', 'a123456', '曾祥咏', '610321199406100436', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046720@qq.com', 'a123456', '王双全', '610321199406100437', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046721@qq.com', 'a123456', '梁政', '610321199406100438', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046722@qq.com', 'a123456', '王瑞杰', '610321199406100439', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046723@qq.com', 'a123456', '陈光辉', '610321199406100440', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046724@qq.com', 'a123456', '贾孟洁', '610321199406100441', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046725@qq.com', 'a123456', '翟晓慧', '610321199406100442', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046726@qq.com', 'a123456', '陈富林', '610321199406100443', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046727@qq.com', 'a123456', '孙浩力', '610321199406100444', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046728@qq.com', 'a123456', '李娅', '610321199406100445', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046729@qq.com', 'a123456', '李兵', '610321199406100446', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046730@qq.com', 'a123456', '黄凯利', '610321199406100447', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046731@qq.com', 'a123456', '戚立凡', '610321199406100448', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046732@qq.com', 'a123456', '王悦', '610321199406100449', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046733@qq.com', 'a123456', '韩萌丽', '610321199406100450', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046734@qq.com', 'a123456', '邢美玲', '610321199406100451', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046735@qq.com', 'a123456', '熊雨会', '610321199406100452', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046736@qq.com', 'a123456', '李晓刚', '610321199406100453', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046737@qq.com', 'a123456', '杨军', '610321199406100454', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046738@qq.com', 'a123456', '李浩', '610321199406100455', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046739@qq.com', 'a123456', '肖可', '610321199406100456', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046740@qq.com', 'a123456', '王冲林', '610321199406100457', '4', null, null);
INSERT INTO `stu_register` VALUES ('1126046741@qq.com', 'a123456', '王彦', '610321199406100458', '5', null, null);
INSERT INTO `stu_register` VALUES ('1126046742@qq.com', 'a123456', '杨天串', '610321199406100459', '3', null, null);
INSERT INTO `stu_register` VALUES ('1126046743@qq.com', 'a123456', '朱凡', '610321199406100460', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046744@qq.com', 'a123456', '熊日', '610321199406100461', '3', null, null);
INSERT INTO `stu_register` VALUES ('1126046745@qq.com', 'a123456', '冷封', '610321199406100462', '6', null, null);
INSERT INTO `stu_register` VALUES ('1126046746@qq.com', 'a123456', '黄海涛', '610321199406100463', '6', null, null);
INSERT INTO `stu_register` VALUES ('987654321@qq.com', '123qwe', '张三', '610321199406115588', '6', '', '');
INSERT INTO `stu_register` VALUES ('123456789@qq.com', '123qwe', '李四', '610321199406558864', '3', null, null);
INSERT INTO `stu_register` VALUES ('xiafan123@qq.com', 'Xf1995', '夏天', '420116199509231111', '6', '', '');
INSERT INTO `stu_register` VALUES ('352098650@qq.com', '123456', '下下', '420116', '5', null, null);
INSERT INTO `stu_register` VALUES ('123987564@163.com', 'Cs123456', '测试', '420116199012129999', '6', null, null);

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `id_card` varchar(30) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `qq` varchar(15) DEFAULT NULL,
  `nation` varchar(10) DEFAULT NULL,
  `birth_place` varchar(40) DEFAULT NULL,
  `political` varchar(10) DEFAULT NULL,
  `education` varchar(20) DEFAULT NULL,
  `school` varchar(50) DEFAULT NULL,
  `major` varchar(20) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  `info` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `account_status` int(2) DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `role_id` int(20) DEFAULT NULL,
  `course` varchar(20) DEFAULT NULL,
  `working_way` varchar(20) DEFAULT NULL,
  `working_place` varchar(30) DEFAULT NULL,
  `submit_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1060 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1001', '卢锡文', '110909876567898765', '男', '1127665342@qq.com', '18829210933', '1127665342', '回族', '河北', '普通公民', '硕士研究生', '西安交通大学', '计算机', '1.jpg', 'a', '2', '教学部', '3', 'JAVA方向', '基地授课', '河北省石家庄市', '2016-10-27');
INSERT INTO `teacher` VALUES ('1002', '李照亮', '610121199409245000', '男', '1127665301@qq.com', '157060869299', '164750350', ' 苗族', '黑龙江', '中共党员', '博士研究生', '清华大学', '电子竞技', null, null, '1', '教学部', '5', 'Android方向', '基地研发', '陕西省西安市', '2016-10-28');
INSERT INTO `teacher` VALUES ('1003', '高洁', '610121199409245001', '女', '1127665302@qq.com', '13246546556', '3654565456', '汉族', '陕西', '共青团员', '本科毕业', '西安石油大学', '软件工程', null, null, '1', '教学部', '3', 'IOS方向', '基地授课', '北京市海淀区', '2016-10-28');
INSERT INTO `teacher` VALUES ('1004', '葛荣世', '610121199409245002', '男', '911391953@qq.com', '15706065997', '165487', '满族', '河北', '中共党员', '博士研究生', '上海交通大学', '软件工程', null, null, '1', '教学部', '4', 'Android方向', '在家办公', '广东省深圳市', '2016-10-28');
INSERT INTO `teacher` VALUES ('1005', '蔡东升', '610121199409245003', '男', '1127665304@qq.com', '18191454545', '1351485444', '仫佬族', '天津', '共青团员', '本科毕业', '西安工程大学', '软件工程', null, null, '1', '后勤部', '3', 'Android方向', '在家办公', '广东省深圳市', '2016-10-28');
INSERT INTO `teacher` VALUES ('1006', '李帅飞', '610121199409245004', '男', '1127665305@qq.com', '19595651651', '1519595195', '满族', '河北', '中共党员', '硕士研究生', '上海交通大学', '软件工程', null, null, '2', '教学部', '3', 'JAVA方向', '在家办公', '广东省深圳市', '2016-11-09');
INSERT INTO `teacher` VALUES ('1022', '马雪彦', '610121199409245000', '男', '972442210@qq.com', '15706084675', '972442210', '汉族', '陕西', '共青团员', '专科毕业', '渭南师范学院', '软件工程', null, '系统管理员', '2', '教学部', '1', 'JAVA方向', '基地授课', '广东省深圳市', '2016-11-06');
INSERT INTO `teacher` VALUES ('1008', '周典', '610121199409245005', '男', '1127665306@qq.com', '15987623556', '3652685265', '汉族', '北京', '中共党员', '专科毕业', '上海交通大学', '计算机', null, null, '1', '教学部', '5', 'JAVA方向', '基地授课', '广东省深圳市', '2016-10-29');
INSERT INTO `teacher` VALUES ('1009', '张锐', '610121199409245007', '男', '164750350@qq.com', '15706086929', '164750350', '汉族', '陕西', '共青团员', '本科毕业', '渭南师范学院', '软件工程', null, null, '1', '教学部', '4', 'JAVA方向', '基地授课', '广东省深圳市', '2016-11-02');
INSERT INTO `teacher` VALUES ('1023', '梁栋飞', '610121199409245006', '女', '1127665307@qq.com', '15788888888', '8787888', '回族', '河北', '共青团员', '本科毕业', '北京科技大学', '软件工程', null, '哈哈哈', '1', '教学部', '5', 'Android方向', '在家办公', '黑龙江哈尔滨', '2016-11-04');
INSERT INTO `teacher` VALUES ('1012', '赵阳光', '610121199409245008', '男', '1127665309@qq.com', '15789999999', '666666666', '汉族', '北京', '中共党员', '专科毕业', '太原科技大学', '信息管理', null, '', '1', '教学部', '4', 'JAVA方向', '基地授课', '湖北省武汉市', '2016-11-09');
INSERT INTO `teacher` VALUES ('1013', '柳位世', '610121199409245009', '男', '1127665310@qq.com', '15789634945', '87878889797', '汉族', '北京', '中共党员', '专科毕业', '哈尔滨工程大学', '信息管理', null, '', '1', '教学部', '3', 'JAVA方向', '在家办公', '湖北省武汉市', '2016-11-09');
INSERT INTO `teacher` VALUES ('1015', '祁袁', '610121199409245011', '男', '1127665312@qq.com', '15455555555', '8787878787', '满族', '河北', '中共党员', '硕士研究生', '杭州电子科技大学', '信息管理', null, '中国行政', '1', '教学部', '5', 'JAVA方向', '在家办公', '湖北省武汉市', '2016-11-09');
INSERT INTO `teacher` VALUES ('1016', '刘珊珊', '610121199409245012', '女', '1127665313@qq.com', '15465656565', '54564568', '汉族', '四川', '普通公民', '专科毕业', '大连大学', '信息管理', null, '物料上世纪', '1', '教学部', '5', 'JAVA方向', '在家办公', '湖北省武汉市', '2016-11-04');
INSERT INTO `teacher` VALUES ('1017', '刘妍妍', '610121199409245013', '女', '1127665314@qq.com', '15723232323', '1234567', '汉族', '北京', '中共党员', '硕士研究生', '河北工程大学', '计算机', null, '你好', '1', '教学部', '3', 'JAVA方向', '基地授课', '北京市大兴区', '2016-11-04');
INSERT INTO `teacher` VALUES ('1019', '夏帆', '610121199409245010', '男', '1127665311@qq.com', '15789999888', '8787848454', '汉族', '四川', '普通公民', '本科毕业', '内蒙古民族大学', '信息管理', null, '更新', '1', '教学部', '3', 'JAVA方向', '外出办公', '北京市海淀区', '2016-11-04');
INSERT INTO `teacher` VALUES ('1024', '李希', '412345195911225898', '女', '84454548787@qq.com', '15237255778', '8845454', '汉族', '北京', '共青团员', '硕士研究生', '北京科技大学', '心理学', null, '作家需要有文采', '1', '教学部', '3', 'IOS方向', '外出办公', '北京市海淀区', '2016-11-04');
INSERT INTO `teacher` VALUES ('1027', '李小龙', '412355197712295435', '男', '85678989@qq.com', '15789999999', '843124988', '汉族', '武汉', '中共党员', '本科毕业', '武汉大学', '信息管理', null, '中国功夫', '1', '教学部', '3', 'JAVA方向', '基地授课', '北京市海淀区', '2016-11-04');
INSERT INTO `teacher` VALUES ('1041', '石冠洲', '610121199409245017', '男', '1127665317@qq.com', '15706088125', '843124982', '汉族', '武汉', '共青团员', '硕士研究生', '成都大学', '信息管理', null, null, '1', '教学部', '3', 'JAVA方向', '基地授课', '北京市海淀区', '2016-11-06');
INSERT INTO `teacher` VALUES ('1040', '唐磊', '610121199409245016', '男', '1127665316@qq.com', '15706088124', '843124981', '回族', '北京', '共青团员', '专科毕业', '成都大学', '信息管理', null, null, '1', '教学部', '3', 'IOS方向', '外出办公', '北京市海淀区', '2016-10-28');
INSERT INTO `teacher` VALUES ('1048', '刘武', '610321199406881565', '女', '1126006742@qq.com', '15706084699', '12345687911', ' 布朗族', '北京', '共青团员', '博士研究生', '河南理工大学', '软件工程', null, '', '1', '教学部', '2', 'JAVA方向', '基地授课', '北京市大兴区', '2016-11-04');
INSERT INTO `teacher` VALUES ('1039', '梁海鹏', '610121199409245015', '男', '1127665315@qq.com', '15706088123', '843124980', '汉族', '北京', '普通公民', '硕士研究生', '江南大学', '信息管理', null, null, '1', '教学部', '4', 'IOS方向', '外出办公', '北京市海淀区', '2016-10-28');
INSERT INTO `teacher` VALUES ('1044', '刘斌鹏', '610121199409245020', '男', '1127665320@qq.com', '15706088128', '843124985', '汉族', '武汉', '共青团员', '本科毕业', '厦门大学', '心理学', null, null, '1', '教学部', '5', 'IOS方向', '外出办公', '北京市海淀区', '2016-10-28');
INSERT INTO `teacher` VALUES ('1045', '孙尚香', '610121199409245021', '女', '1127665321@qq.com', '15706088129', '843124986', '汉族', '武汉', '普通公民', '本科毕业', '宁波大学', '计算机', null, null, '1', '教学部', '4', 'IOS方向', '基地授课', '北京市海淀区', '2016-11-06');
INSERT INTO `teacher` VALUES ('1046', '校长测试', '610000000000000000', '男', '123456@qq.com', '12345678900', '123456', '汉族', '孝感', '中共党员', '博士研究生', '湖北工程学院', '计算机', null, '测试院长功能', '1', '教学部', '1', 'JAVA方向', '基地授课', '湖北省武汉市', '2016-11-10');

-- ----------------------------
-- Table structure for tea_register
-- ----------------------------
DROP TABLE IF EXISTS `tea_register`;
CREATE TABLE `tea_register` (
  `tea_email` varchar(20) CHARACTER SET utf8 NOT NULL,
  `tea_pwd` varchar(30) DEFAULT NULL,
  `tea_name` varchar(30) DEFAULT NULL,
  `tea_idcard` varchar(30) DEFAULT NULL,
  `tea_status` int(10) DEFAULT NULL,
  `tea_reason` varchar(100) DEFAULT NULL,
  `tea_result` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tea_email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tea_register
-- ----------------------------
INSERT INTO `tea_register` VALUES ('1127665342@qq.com', '123qwea', '卢锡文', '110909876567898765', '3', 'aaaa', '');
INSERT INTO `tea_register` VALUES ('1127665301@qq.com', '123qwe', '李照亮', '610121199409245000', '4', 'aa', ',政治面貌');
INSERT INTO `tea_register` VALUES ('1127665302@qq.com', 'a123456', '高洁', '610121199409245001', '3', '', '');
INSERT INTO `tea_register` VALUES ('911391953@qq.com', '123qwe', '葛荣世', '610121199409245002', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665304@qq.com', '123qwe', '蔡东升', '610121199409245003', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665305@qq.com', '123qwe', '李帅飞', '610121199409245004', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665306@qq.com', '123qwe', '周典', '610121199409245005', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665307@qq.com', '123qwe', '梁栋飞', '610121199409245006', '3', null, null);
INSERT INTO `tea_register` VALUES ('164750350@qq.com', '123qwe', '张锐', '610121199409245007', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665309@qq.com', '123qwe', '赵阳光', '610121199409245008', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665310@qq.com', '123qwe', '柳位世', '610121199409245009', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665311@qq.com', '123qwe', '夏帆', '610121199409245010', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665312@qq.com', '123qwe', '祁袁', '610121199409245011', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665313@qq.com', '123qwe', '刘珊珊', '610121199409245012', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665314@qq.com', '123qwe', '刘妍妍', '610121199409245013', '3', null, null);
INSERT INTO `tea_register` VALUES ('972442210@qq.com', '123456', '马雪彦', '610121199409245000', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665315@qq.com', '123qwe', '梁海鹏', '610121199409245015', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665316@qq.com', '123qwe', '唐磊', '610121199409245016', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665317@qq.com', '123qwe', '石冠洲', '610121199409245017', '3', null, null);
INSERT INTO `tea_register` VALUES ('1126006742@qq.com', '123qwe', '刘武', '610321199406881565', '3', '不通过', ',职务,QQ号,民族');
INSERT INTO `tea_register` VALUES ('1127665319@qq.com', '123qwe', '刘星', '610121199409245019', '1', null, null);
INSERT INTO `tea_register` VALUES ('84454548787@qq.com', '123qwe', '李希', '412345195911225898', '4', '被退回', ',部门,职务,学历');
INSERT INTO `tea_register` VALUES ('1127665320@qq.com', '123qwe', '刘斌鹏', '610121199409245020', '3', null, null);
INSERT INTO `tea_register` VALUES ('1127665321@qq.com', '123qwe', '孙尚香', '610121199409245021', '2', null, null);
INSERT INTO `tea_register` VALUES ('85678989@qq.com', '123qwe', '李小龙', '412355197712295435', '4', '123', ',所学专业');
INSERT INTO `tea_register` VALUES ('123456789@qq.com', '123qwe', '李四', '610321199401015555', '3', '请核对再申请', ',职务,民族,政治面貌');
INSERT INTO `tea_register` VALUES ('123456@qq.com', '123456', '校长测试', '610000000000000000', '3', null, null);
