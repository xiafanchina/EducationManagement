/**
 * 教师的个人档案
 */
$(function(){
	var roleId=GetQueryString("roleId");
	var id=GetQueryString("id");
	$.ajax({
		url:"../../gettecherListById.do",
		type:"post",
		dataType:"json",
		data:"id="+id,
		success:function(data){
			if(data.teacher.accountStatus==1){
				data.teacher.accountStatus="正常";
			}else{
				data.teacher.accountStatus="冻结";
			}
			$("#accountStatus").text(data.teacher.accountStatus);
			$("#id").text(data.teacher.id);
			$("#department").text(data.teacher.department);
			$("#course").text(data.teacher.course);
			$("#workingWay").text(data.teacher.workingWay);
			$("#workingPlace").text(data.teacher.workingPlace);
			$("#email").text(data.teacher.email);
			$("#idCard").text(data.teacher.idCard);
			$(".name").text(data.teacher.name);
			$("#sex").text(data.teacher.sex);
			$("#phone").text(data.teacher.phone);
			$("#qq").text(data.teacher.qq);
			$("#nation").text(data.teacher.nation);
			$("#birthPlace").text(data.teacher.birthPlace);
			$("#political").text(data.teacher.political);
			$("#education").text(data.teacher.education);
			$("#school").text(data.teacher.school);
			$("#major").text(data.teacher.major);
		}
	})
})
/**
 * 通过上个页面传递过来的名字，获取上个页面传递过来的值
 */
function GetQueryString(name)
    {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
    }
