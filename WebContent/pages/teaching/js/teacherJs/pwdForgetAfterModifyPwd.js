var email;//邮箱
$(function(){
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];  
	email= getval.split("=")[1]; //解析URL获取email
	
});

//修改密码
function pwdForgetAfterModifyPwd(){
	var pwd = $("#password").val();//新密码
	var comPwd = $("#passwordConfirm").val();//确认密码
	
	if(pwd==''){
		alert("新密码不能为空");
		return;
	}
	if(comPwd==''){
		alert("确认密码不能为空");
		return;
	}
	if(comPwd!=pwd){
		alert("两次密码不一致");
		return;
	}
	$.ajax({
		url:'../../pwdForgetAfterModifyPwd.do',
		data:'email='+email+'&pwd='+pwd,
		type:'post',
		dataType:'json',
		success:function(data){
			
			if(data.resultcode=="200"){//修改密码成功后跳转至登录页面
				alert(data.resultmsg);
				location.href="../../pages/teaching/login.html";
			}
		}
	});
}