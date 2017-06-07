/**
 * 审核个人详细信息
 */
var searchStr = location.search;//获取超链接除了地址以外的其他字符串
searchStr = searchStr.substr(1);// 由于searchStr属性值包括“?”，所以除去该字符
var searchs = searchStr.split("&");// 将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
var parameter = searchs[0].split("=");// 获得第一个参数和值
var id = parameter[1];
//加载被选中的待审核教师的详细信息,使用id(主键)选中
function init() {
	$.ajax({
		type : "post",
		dataType : "json",
		url : "../../init.do",
		data : "id=" + id,
		success : function(data) {	
         //往静态页面里面赋值
			$("#name1").html(data.name);
			$("#name2").html(data.name);	
			$("#zt").text("待审核");
			$("#id").html(data.id);
			$("#bm").html(data.department);
			$("#zw").html(data.role.role_name);
			$("#dkfx").html(data.course);			
			$("#bgfs").html(data.workingWay);
			$("#czd").html(data.workingPlace);
			$("#sjh").html(data.phone);
			$("#qq").html(data.qq);
			$("#mz").html(data.nation);
			$("#jg").html(data.birthPlace);
			$("#zzmm").html(data.political);
			$("#xl").html(data.education);
			$("#byyx").html(data.school);
			$("#sxzy").html(data.major);
			$("#yx").html(data.email);
			$("#sfzh").html(data.idCard);
			$("#sex").html(data.sex);
		}
	})
}
//通过审核的教师,使用email(主键)选中某个教师
function agree() {
	var email = $("#yx").text();
	$.ajax({
		type : "post",
		dataType : "json",
		url : "../../agree.do",
		data : "email=" + email,
		success : function(data) {
			alert("操作成功")
			location.href="../../pages/teaching/base_teacherAudit.html"
		}
	})
}
//未通过审核的教师
function disagree(reason) {
	var email =$("#yx").text() ;
	var wrong = "";
	$("li.auditWarning").each(function() {
		if ($(this).find("input[type='checkbox']").attr("checked") != undefined) {
			wrong = wrong + ","+ $(this).find("span:eq(0)").html();
			}	
	});
	$.ajax({
		type : "post",
		dataType : "json",
		url : "../../disagree.do",
		data : "wrong=" + wrong+"&reason="+reason+"&email=" + email,
		success : function(data) {
			alert("操作成功")
			location.href="../../pages/teaching/base_teacherAudit.html"
		}
	})

}