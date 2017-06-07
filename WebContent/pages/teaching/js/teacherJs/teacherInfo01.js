/**
 * 教师完善信息第一步
 */

var email; 
var name; 
var IDNo;
$(function(){//接收注册页面传过来的 email name IDNo的值
	var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	email =param.split(",")[0]; 
	name =unescape(param.split(",")[1]); 
	IDNo =param.split(",")[2]; 
	$("#email").text(email);
	$("#name").text(name);
	$("#idCard").text(IDNo);
});


function teacherInfo01(){
	var info = $("#info").val();//备注
	$.ajax({
		url:'../../teacherInfo01.do',
		data:'name='+name+'&email='+email+'&idCard='+IDNo+'&info='+info,
		type:'post',
		dataType:'json',
		success:function(data){
			location.href="../../pages/teaching/tch_teacherPerfect02.html";
		}
	});
}