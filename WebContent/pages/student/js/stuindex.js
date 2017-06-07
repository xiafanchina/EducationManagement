$(function () {
	//查询用户登录状态和加载用户功能
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
				$(".toExam").click(function(){
					location.href = "onlineExam.html?no="+data.IDNo;
				})
				$(".toStu").click(function(){
					location.href = "studentFinish.html?no="+data.IDNo;
				})
			}
		}
	})
    
});

