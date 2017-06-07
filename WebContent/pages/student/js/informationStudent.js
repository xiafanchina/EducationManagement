/**
*   个人档案信息
*/
$(function(){
	var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	no =param.split(",")[0]; 
	$.ajax({
		url:"../../stuIndexLoginer.do",
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data);
			//判断用户是否登录
			if(data=="101"){
				location.href="login.html";
			}else{
				$(".sname").text(data.fullName);	//设置用户登录名
			}
		}
	})
	$.ajax({
		url:"../../showStuMes.do",
		type:"post",
		data:"no="+no,
		dataType:"json",
		success:function(data){
			console.log(data);
			 $(".stuname").text(data[0].stus_name);
			 /*$("#stu_status").text();
			 $("#account_status").text();*/
			 /*stu_status=data[0].stu_status;
			 account_status=data[0].account_status;*/
			 sex=data[0].sex;
			 s1=null;
			 if(sex==1){
				 s1="男";
			 }else if(sex==2){
				 s1="女";
			 }
			 $("#sex").text(s1);
			 $("#id").text(data[0].id);
			 $("#class_name").text(data[0].class_name);
			 $("#class_place").text(data[0].class_place);
			 $("#lname").text(data[0].lname);
			 $("#tname").text(data[0].tname);
			 $("#email").text(data[0].email);
			 $("#id_card").text(data[0].id_card);
			 $("#stus_name").text(data[0].stus_name);
			
			 $("#phone").text(data[0].phone);
			 $("#qq").text(data[0].qq);
			 $("#nation").text(data[0].nation);
			 $("#jig").text(data[0].birth_place);
			 $("#political").text(data[0].political);
			 $("#education").text(data[0].education);
			 $("#school").text(data[0].school);
			 $("#major").text(data[0].major);
			 $("#score").text(data[0].score);
			 $("#schooldate").text(data[0].schooldate);
		}
	});
	
});