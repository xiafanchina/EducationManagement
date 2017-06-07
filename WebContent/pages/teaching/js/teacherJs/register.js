/**
 * 教师注册时检查邮箱是否为空或是否存在
 */
var email;
function tchRegisterCheckEmai(){
	email=$("#email").val();//邮箱
	if(email==''){
		alert("邮箱不能为空，请输入");
		return;
	}
	$.ajax({
		type:"post",
		url:"../../RegisterCheckEmail.do",
		dataType:"json",
		data:"email="+email,
		success:function(data){
			if(data.resultcode == "1"){
				alert("邮箱已存在，请更改邮箱！");
			}
		}
	});
}

 //教师注册所用的方法,判断是否成功
 
function tchRegister(){
	var IDNo=$("#IDNo").val(); //身份证
	var fullName=$("#fullName").val();//名字
	var password=$("#password").val();//密码
	var passwordConfirm=$("#passwordConfirm").val();//确认密码
	if(fullName==''){
		alert("名字不能为空，请输入名字");
		return;
	}
	if(IDNo==''){
		alert("身份证不能为空，请输入");
		return;
	}
	if(password==''){
		alert("密码不能为空");
		return;
	}
	if(passwordConfirm==''){
		alert("确认密码不能为空");
		return;
	}
	if(passwordConfirm!=password){
		alert("两次密码不一致");
		return;
	}
	var param = email+","+fullName+","+IDNo;//把email 姓名 身份证 一起传到下个页面
	encodeURI(encodeURI(param));
	$.ajax({
		type:"post",
		url:"../../Register.do",
		dataType:"json",
		data:"email="+email+"&fullName="+fullName+"&IDNo="+IDNo+"&password="+password,
		success:function(data){
			if(data.resultcode == "1"){
				alert("邮箱已存在，请更改邮箱！");
			}else{
				if(data.resultcode == "200"){	//返回200就表示成功，跳转至注册成功页面
				//	alert("注册成功！");
					var url="../../pages/teaching/tch_teacherPerfect01.html?param="+param;
					encodeURI(url);
					location.href=url;
				}else{
					alert("系统正在维护");
				}
			}
		}
	});
}