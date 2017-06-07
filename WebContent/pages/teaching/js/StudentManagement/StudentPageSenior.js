 /**
    * 分页查询
    */

    var currentPage=1;//当前页
    var pageSize=4;//页面大小
    var count;//总条数；
    var pageNums;//总共有几页
    var temp;
    function splitPage(page){ 
    	var stus_name=$("#stus_name").val();
    	/*var sex=$("#sex").find(".select-set").text();
    	if(sex=="男"){
    		sex = "1";
    	}else if(sex=="女"){
    		sex = "2";
    	}else if(sex=="请选择"){
    		sex = "";
    	}*/
    	var sex=$("#sex").val();
    	var email=$("#email").val();
    	/*var account_status=$("#account_status").find(".select-set").text();
    	if(account_status=="正常"){
    		account_status = 1;
    	}else if(account_status=="已冻结"){
    		account_status = 0;
    	}else if(account_status=="全部"){
    		account_status ="";
    	}*/
    	var account_status=$("#account_status").val();
    	var phone=$("#phone").val();
    	var qq=$("#qq").val();
    	var stu_status=$("#stu_status").find(".select-set").text();
    	if(stu_status=="新入学"){
    		stu_status="1";
    	}else if(stu_status=="正在上课"){
    		stu_status="2";
    	}else if(stu_status=="休学中"){
    		stu_status="3";
    	}else if(stu_status=="已毕业"){
    		stu_status="4";
    	}else if(stu_status=="全部"){
    		stu_status="";
    	}
    	var school=$("#school").val();
    	var name=$("#name").val();
        var class_place=$("#address3").val();
    	
    	var lesson=$("#lesson").find(".select-set").text();
    	if(lesson=="全部"){
    		lesson = "";
    	}
    	var lecturer=$("#lecturer").val();
    	var assistant=$("#assistant").val();
    	var teacher=$("#teacher").val();
    	
        $.ajax({
		  		url:"../../searchAll.do",
				type:"post",
				dataType:"json",
				data:"stus_name="+stus_name+"&sex="+sex+"&email="+email+"&account_status="+account_status+"&phone="+phone+"&qq="+qq+"&stu_status="+stu_status+"&currentPage="+page+"&pageSize="+pageSize+"&school="+school+"&name="+name+"&lesson="+lesson+"&lecturer="+lecturer+"&assistant="+assistant+"&teacher="+teacher+"&class_place="+class_place,
				success:function(data){
					count1=data.count;
					pageNums=count1%pageSize==0?Math.floor(count1/pageSize):Math.ceil(count1/pageSize);
					$("#tablePage").val(page);
					$("#count").text(data.count);	
					$("#pageSize").text(pageSize);
					$("#pageNum").text(pageNums);
					var temp1=temp.clone();
					$("#tb").empty();
					$.each(data.list,function(i,data1){
						    temp1.find("#td1").text(i+1);
							temp1.find("#td2").text(data1.id);
							temp1.find("#td3").text(data1.email);
							temp1.find("#td4").text(data1.id_card);
							temp1.find("#td5").text(data1.stus_name);
							temp1.find("#td6").text(data1.sex);
							if(temp1.find("#td6").text()==1){
								temp1.find("#td6").text("男");
							}else{
								temp1.find("#td6").text("女");
							}
							temp1.find("#td7").text(data1.phone);
							temp1.find("#td8").text(data1.qq);
							temp1.find("#td9").text(data1.name);
							temp1.find("#td10").text(data1.lesson);
							temp1.find("#td11").text(data1.class_place);
							temp1.find("#td12").text(data1.lecturer);
							temp1.find("#td13").text(data1.assistant);
							temp1.find("#td14").text(data1.teacher);
							temp1.find("#td15").text(data1.school);
							temp1.find("#td16").text(data1.stu_status);
							if(temp1.find("#td16").text()==1){
								temp1.find("#td16").text("新入学");
							}else if(temp1.find("#td16").text()==2){
								temp1.find("#td16").text("正常上课");
							}else if(temp1.find("#td16").text()==3){
								temp1.find("#td16").text("休学中");
							}else{
								temp1.find("#td16").text("已毕业");
							}
							temp1.find("#td17").text(data1.account_status);
							if(temp1.find("#td17").text()==1){
								temp1.find("#td17").text("正常");
							}else{
								temp1.find("#td17").text("已冻结");
							}
							var href ="base_studentModify.html?id="+data1.id;
							temp1.find("#td18").attr("href",href);
							$("#tb").append(temp1.html());	
				  })
			  }
		  }) 
     }
    //上一页
     function pageDown(){
     	$(".pageUp").attr("onclick","pageUp()");//启用下一页
     	currentPage++;
     	splitPage(currentPage);
     	if(currentPage>=pageNums){
     	   $(".pageDown").removeAttr("onclick");//禁用下一页
     	}
     }
     //下一页
     function pageUp(){
     	$(".pageDown").attr("onclick","pageDown()");
    	    currentPage--;
         splitPage(currentPage);		
     	if(currentPage==1){
     		$(".pageUp").removeAttr("onclick");
     	}
     }
     //首页
     function pageFirst(){
     	$(".pageUp").removeAttr("onclick");
     	$(".pageDown").attr("onclick","pageDown()");
     	currentPage=1;
     	splitPage(currentPage);
     //	alert(pageNums);
     	if(pageNums==1){
     		$(".pageDown").removeAttr("onclick");
     	}
     }
     //末页
     function pageLast(){
     	$(".pageDown").removeAttr("onclick");
     	$(".pageUp").attr("onclick","pageUp()");
     	currentPage=pageNums;
     	splitPage(currentPage);
     }
     //文本框跳转页面
     function turnPage(input){
    		var page=$(input).val();		//取文本框值
    		var reg = /^[1-9]*$/;			//1-9数字正则
    		if(page!=""){					//非空判断
    			if(reg.test(page))			//正则校验
    				if(page>pageNums)		//如果输入的值大于总页数，跳转到末页
    					pageLast();
    				else{					//否则跳转到输入页
    					curPage=page;
    					splitPage(curPage);
    				}
    		}
    	}