//忘记密码
function forEmail(){	//根据地址获取email
	var email=$("#email").val();//邮箱
	var domain = email.substr(email.indexOf('@') + 1);
	var url = 'http://mail.' + domain + '/';
	window.open(url);  
	
}

function sendCode(){
	var email=$("#email").val();//邮箱
	$.ajax({
		url:'../../sendCode.do',
		dataType:'json',
		data:"email="+email,
		type:'post',
	});
}
function tchCheckEmail(){//检查邮箱
	var email=$("#email").val();//邮箱
	var code = $("#code").val();//获取用户输入的验证码
	$.ajax({
		url:"../../passwordForget.do",
		type:"post",
		dataType:"json",
		data:"email="+email+"&code="+code,
		success:function(data){
			console.log(data);
			if(data.resultcode=="100"){
				alert(data.resultmsg);
			}else if(data.resultcode=="101"){
				alert(data.resultmsg);
			}else{
				//验证码提交后跳转至修改密码界面
				location.href="../../pages/teaching/tch_teacherPwdForgetAfterModifyPwd.html?email="+email;
			}
		}
	});
}