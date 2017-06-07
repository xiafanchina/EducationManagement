var email;
$(function(){//接收注册页面传过来的 email name IDNo的值
	var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	email =param.split(",")[0]; 
	var name =unescape(param.split(",")[1]); 
	var IDNo =param.split(",")[2]; 
	//$("#email").text(email);
	$("#name").text(name);
	$("#idCard").text(IDNo);
});


function baoming(){//入学考试报名将数据存入数据库中
	var idcard=$("#idCard").text();
	var name=$("#name").text();
	var school=$("#school").val();
	var choice=$("#choice").val();
	
	 $.ajax({
			type:"post",
			url:"../../Baoming/Baoming.do",
			dataType:"json",
			data:"idcard="+idcard+"&name="+name+"&school="+school+"&choice="+choice,//将报名信息传至数据库
			success:function(data){
				if(data){
				alert("恭喜您报名成功，可以考试了")
				var param = email+","+name+","+idcard+","+choice;//把email 姓名 身份证 一起传到下个页面
				encodeURI(encodeURI(param));
				var url="../../pages/student/matriculationNote.html?param="+param;
				encodeURI(url);
				location.href=url;
				//window.location.href="../../pages/student/matriculationNote.html?aa="+idcard;//若报名成功则跳转至考试页面
				}else{alert("报名失败");}
			}
		})
}