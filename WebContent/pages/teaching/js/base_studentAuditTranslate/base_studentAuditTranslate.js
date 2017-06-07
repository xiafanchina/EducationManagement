/**
 * 查询
 */
var ind = 1;//页面中的学生标号
var showval;//学生列表的标号
var thisURL = document.URL;//获取双击学生信息时，传输过来的学生的id
var getval = thisURL.split('?')[1];//对信息流进行分解，找出？号后面的学生id
showval = getval.split("=")[1];// 解析url获取学生ID
var class_id=0;
$(function() {
	$.ajax({
		url : "../../studentData.do",//发送一.do为后缀的studentData请求
		type : "post",
		data : "id=" + showval,
		dataType : "json",
		success : function(data) {
			$.each(data, function(i, data1) {
				console.log(data1);
				class_id=data1.class_sid;
				console.log(class_id);
				classdata(class_id);
				$("#paging span:eq(2)").html(data1.id);// 学号
				$("#paging span:eq(0)").html(data1.stus_name);// 名字
				$("#paging span:eq(8)").html(data1.email);// 邮箱
				$("#paging span:eq(10)").html(data1.id_card);// 省份证号
				$("#pageing span:eq(1)").html(data1.stus_name);// 姓名
				if (data1.sex == 1) {
					$("#pageing span:eq(3)").html("男");// 性别
				} else {
					$("#pageing span:eq(3)").html("女");// 性别
				}
				$("#pageing span:eq(5)").html(data1.phone);// 手机号
				$("#pageing span:eq(7)").html(data1.qq);// qq号
				$("#pageing span:eq(9)").html(data1.nation);// 民族
				$("#pageing span:eq(11)").html(data1.brith_place);// 籍贯
				$("#pageing span:eq(13)").html(data1.political);// 政治面貌
				$("#pageing span:eq(15)").html(data1.education);// 当前学历
				$("#pageing span:eq(17)").html(data1.school);// 生源院校
				$("#pageing span:eq(19)").html(data1.major);// 所学专业
				$("#pageing span:eq(21)").html(data1.schooldate);// 入学年份
			});
		}
	});
});
/**
 * 查询学生的班级情况
 */
function classdata(class_id){
	$(function() {
		$.ajax({
			url : "../../classstu.do",//发送后缀为.do的请求
			type : "post",
			data : "class_sid=" + class_id,
			dataType : "json",
			success : function(data) {
				console.log(data);
				console.log(data[0].name);
				console.log(data[0].class_place);
				$("#paging span:eq(4)").html(data[0].name);// 班级id
				$("#paging span:eq(6)").html(data[0].class_place);//开班地点
			}
		});
	});
}
/**
 * 实现学生信息的审核通过的提交
 */
function studenttrue() {
	$(function() {
		$.ajax({
			url : "../../studenttrue.do",//发送后缀为.do的请求
			type : "post",
			data : "showval=" + showval,
			dataType : "json",
			success : function(data) {
				console.log(data);
				if (data == 1) {
					alert("信息审核成功");//审核通过时，跳转页面
					location.href = "../../pages/teaching/base_informationAuditStudent.html";
				}else{
					alert("不能重复操作!");
				}
			}
		});
	});
};

/**
 * 学生信息的审核退回
 */
function sendback() {
	var wrong="";//学生审核中存在错误的信息项
		/**
		 * 用循环的形式，将存在错误的信息项找出来
		 */
	  $("li.auditWarning").each(function () {
          if($(this).find("input[type='checkbox']").attr("checked") != undefined){
        	  wrong =$(this).find("span:eq(0)").html()+","+wrong;//将错误项存到wrong变量中
          }
      });
	var stu_result = $("#stu_result").val();//获得学生审核不合格时，老师给出意见。
	if(stu_result==""||stu_result==null){//退回理由不能为空
		alert("退回理由不能为空！");
		return;
	}
	/**
	 * 运用ajax进行数据的传递
	 */
	$(function() {
		$.ajax({
			url : "../../sendback.do",//发出后缀为.do的请求
			type : "post",
			data : "showval=" + showval + "&stu_result=" + stu_result+"&wrong="+wrong,
			dataType : "json",
			success : function(data) {
				console.log(data);
				if (data == 1) {
					alert("已退回");//退回成功时，跳转页面
					location.href = "../../pages/teaching/base_informationAuditStudent.html";
				}else{
					alert("失败");
				}
			}
		});
	});
}