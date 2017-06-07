   var thisURL = location.search;
   var getval =thisURL.split('?')[1];  
   var showval= getval.split("=")[1]; 
 $(function(){
	 $.ajax({
	    	url:"../../EditAll.do",
			type:"post",
			dataType:"json",
			data:"id="+showval,
			success:function(data){
				$("#sname").text(data.stus_name);
				if(data.account_status=="1"){
					$("#account1").attr("class","radio checked");	
				}else{
					$("#account2").attr("class","radio checked");	
				}
			     if(data.stu_status=="1"){
			    	$("#status1").attr("class","radio checked");	
				}else if(data.stu_status=="2"){
					$("#status2").attr("class","radio checked");		
				}
				else if(data.stu_status=="3"){
					$("#status3").attr("class","radio checked");	
				}else if(data.stu_status=="4"){
					$("#status4").attr("class","radio checked");		
				}
			    $("#id").text(data.id);
				$("#name").text(data.name);
				$("#class_place").text(data.class_place);
				$("#email").text(data.email);
				$("#id_card").text(data.id_card);
				$("#stus_name").text(data.stus_name);
				//性别
				if(data.sex=="1"){
					$("#sex").find(".select-set").text("男");	
				}else if(data.sex=="2"){
					$("#sex").find(".select-set").text("女");		
				}
				$("#phone").val(data.phone);
				$("#qq").val(data.qq);
				//民族
				if(data.nation=="汉族"){
					$("#nation1").attr("class","radio checked");		
				}else if(data.nation=='满族'){
					$("#nation2").attr("class","radio checked");		
				}
				else if(data.nation=='回族'){
					$("#nation3").attr("class","radio checked");		
				}else {
					$("#nation4").attr("class","radio checked");
					$("#other").text(data.nation);
				}
				//籍贯赋值
				$("#brith_place").find(".select-set").text(data.brith_place);
				//政治面貌
				$("#political").find(".select-set").text(data.political);		
				//学历
				$("#education").find(".select-set").text(data.education);
				 //学校
				 $("#school").val(data.school);
				 //专业
				 $("#major").val(data.major);
				 //入学年份
				 $("#schooldate").val(data.schooldate);
			 }
	    })
 })   
  
    //修改完之后存回数据库
    function submit(){
    	var account_status= $("#account").find(".radio.checked").text();	//账号状态
		var stu_status=$("#status").find(".radio.checked").text();				//学生状态
		var sex=$("#sex").find(".select-set").text();						//性别
		var phone=$("#phone").val();									
		var qq=$("#qq").val();
		var nation=$("#nation").find(".radio.checked").text();		
		var brith_place=$("#brith_place").find(".select-set").text();
		var political=$("#political").find(".select-set").text();	
		var education=$("#education").find(".select-set").text();
		var school=$("#school").val();
		var schooldate=$("#schooldate").val();
		var major=$("#major").val();
		 $.ajax({
		    	url:"../../updateAll.do",
				type:"post",
				dataType:"json",
				data:"id="+showval+"&account_status="+account_status+"&stu_status="+stu_status+"&sex="+sex+"&phone="+phone+"&qq="+qq+"&nation="+nation+"&brith_place="+brith_place+"&political="+political+"&education="+education+"&major="+major+"&schooldate="+schooldate+"&school="+school,
				success:function(data){
						alert("修改成功");
				}
		 })
	}    