function stuRegister(){//注册时将注册信息存入数据库
	var email=$("#email").val();
	var fullName=$("#fullName").val();
	var IDNo=$("#IDNo").val();
	var password=$("#password").val();
	var password2=$("#passwordConfirm").val();
	if(email==''||fullName==''||IDNo==''||password==''){
		alert("所有选项不得为空！");
	}
	if(password!=password2){
		alert("两次输入的密码不一致！");
	}
	if(email!=''&&fullName!=''&&IDNo!=''&&password!=''&&password==password2){
		$.ajax({
			type:"post",
			url:"../../Register/Register.do",
			dataType:"json",
			data:"email="+email+"&fullName="+fullName+"&IDNo="+IDNo+"&password="+password,
			success:function(data){
				if(data){
				alert("恭喜您注册成功，可以报名考试了呦")
				var param = email+","+fullName+","+IDNo;//把email 姓名 身份证 一起传到下个页面
				encodeURI(encodeURI(param));
				var url="../../pages/student/matriculationEnroll.html?param="+param;
				encodeURI(url);
				location.href=url;
				}else{alert("注册失败，请重新注册")}
			}
		})
	}
}


function exam(){
	var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	var email =param.split(",")[0]; 
	var name =unescape(param.split(",")[1]); 
	var IDNo =param.split(",")[2];
	var choice =unescape(param.split(",")[3]);
	param=email+","+name+","+IDNo+","+choice;
	window.location.href="../../pages/student/examination.html?param="+param;
	}	
	 
	 


