/**
 * 加载页面都要加载该数据
 */
$(function (){
//	自动获取错误信息
	$.ajax({
		type:"post",
		dataType:"json",
		url:"../../getErrorInformation.do",
		success:function(data){
			if(data.tea_result != null){
				$("#errorData").text(data.tea_result);						
//				查询数据库返回基本信息。
				$.ajax({
					type:"post",
					dataType:"json",
					url:"../../getInformation.do",
					async: false,
					success:function(data){
						$.each(data.list,function(i,data1){
							
							$("#teacher_id").text(data1.id);					//讲数据库中的数据显示成死的数据，
							$("#teacher_name").text(data1.name);
							$("#teacher_email").text(data1.email);
							$("#teacher_idCode").text(data1.idCard);
							$("#schoool").val(data1.school);					//显示在input的框中
							$("#major").val(data1.major);
							$("#PhoneNo").val(data1.phone);
							$("#QQNo").val(data1.qq);
							$("#adress").val(data1.workingPlace);
							if(data1.sex=="男"){
								$("#sex").find(".select-set").text("男");
							}else if(data1.sex=="女"){
								$("#sex").find(".select-set").text("女");
							}
							//$("#sex").val(data1.sex);
							$("#birthplace").find(".select-set").text(data1.birthPlace);
							$("#political").find(".select-set").text(data1.political);
		            		$("#education").find(".select-set").text(data1.education);
							$("#der").find(".select-set").text(data1.department);
							$("#moj").find(".select-set").text(data1.role_name);
							$("#daikefangxiang").find(".select-set").text(data1.course);				//代课方向
							$("#bangongfangshi").find(".select-set").text(data1.workingWay);
							if(data1.nation == "汉族"){							//判断哪个名族
								$("#nation label").eq(0).attr("class","radio checked");
							}else if(data1.nation == "满族"){
								$("#nation label").eq(1).attr("class","radio checked");
							}else if(data1.nation == "回族"){
								$("#nation label").eq(2).attr("class","radio checked");
							}else {
								$("#nation label").eq(3).attr("class","radio checked");
								$("#other").text(data1.nation);
							}
						});
					}
				});
				var va1=document.getElementById("tag_sex").innerText;		//从数据库中获取标签对应的字符串..获取标签中间的值
				var va2=document.getElementById("tag_nation1").innerText;//单选
				var va3=document.getElementById("tag_nation").innerText;	
				var va4=document.getElementById("tag_pol").innerText;
				var va5=document.getElementById("tag_edu").innerText;
				var va6=document.getElementById("tag_school").innerText;
				var va7=document.getElementById("tag_major").innerText;
				var va8=document.getElementById("tag_phone").innerText;
				var va9=document.getElementById("tag_qq").innerText;
				var va10=document.getElementById("tag_der").innerText;
				var va11=document.getElementById("tag_moj").innerText;
				var va12=document.getElementById("tag_daikefangxiang").innerText;
				var va13=document.getElementById("tag_bangongfangshi").innerText;
				var va14=document.getElementById("tag_adress").innerText;
	        
				if(data.tea_result.indexOf(va1) !=-1){
					$("#tag_sex").css("color","#FF0000");//判断性别
				}
				if(data.tea_result.indexOf(va2) !=-1){
					$("#tag_nation1").css("color","#FF0000");//判断民族
				}
				if(data.tea_result.indexOf(va3) !=-1){
					$("#tag_nation").css("color","#FF0000");//判断籍贯
				}
				if(data.tea_result.indexOf(va4) !=-1){
					$("#tag_pol").css("color","#FF0000");//判断政治面貌
				}
				if(data.tea_result.indexOf(va5) !=-1){
					$("#tag_edu").css("color","#FF0000");//判断学历
				}
				if(data.tea_result.indexOf(va6) !=-1){
					$("#tag_school").css("color","#FF0000");//判断毕业学校
				}
				if(data.tea_result.indexOf(va7) !=-1){
					$("#tag_major").css("color","#FF0000");//所属专业
				}
				if(data.tea_result.indexOf(va8) !=-1){
					$("#tag_phone").css("color","#FF0000");//手机号
				}
				if(data.tea_result.indexOf(va9) !=-1){
					$("#tag_qq").css("color","#FF0000");//QQ
				}
				if(data.tea_result.indexOf(va10) !=-1){
					$("#tag_der").css("color","#FF0000");//判断部门
				}
				if(data.tea_result.indexOf(va11) !=-1){
					$("#tag_moj").css("color","#FF0000");//判断职务
				}
				if(data.tea_result.indexOf(va12) !=-1){
					$("#tag_daikefangxiang").css("color","#FF0000");//判断代课方向
				}
				if(data.tea_result.indexOf(va13) !=-1){
					$("#tag_bangongfangshi").css("color","#FF0000");//判断办公方式
				}
				if(data.tea_result.indexOf(va14) !=-1){
					$("#tag_adress").css("color","#FF0000");//判断常住地
				}
			}
		}
	});
});

function tijiao(){
	var role_id=0;
	var sex = $("#sex").find(".select-set").text();	//获取选中的性别值
	var nation1 = $("#nation").find(".radio.checked").text();	//获取选中的名族nation
	var nation = $("#birthplace").find(".select-set").text()				//获取籍贯的值
	var pol = $("#political").find(".select-set").text();						//获取选中的政治面貌值
	var edu = $("#education").find(".select-set").text();						//获取选中的学历值
	var schoool = $("#schoool").val();				//获取选中的毕业学校值
	var major = $("#major").val();					//获取选中的所学专业值
	var PhoneNo = $("#PhoneNo").val();				//获取选中的手机号值
	var QQNo = $("#QQNo").val();					//获取选中的qq值
	var der = $("#der").find(".select-set").text();	//获取选中的部门值
	var moj = $("#moj").find(".select-set").text();//获取选中的职务值
	if(moj == "校长"){
		role_id = 1;
	}else if(moj == "教学总监"){
		role_id = 2;
	}else if(moj == "班主任"){
		role_id = 3;
	}else if(moj == "讲师"){
		role_id = 4;
	}else if(moj == "助教"){
		role_id = 5;
	}
	var daikefangxiang = $("#daikefangxiang").find(".select-set").text();//获取选中的代课方向值
	var bangongfangshi = $("#bangongfangshi").find(".select-set").text();//获取选中的办公方式值
	console.log("结果》》"+sex+":"+nation1+":"+nation+":"+pol+":"+edu+":"+schoool+":"+major+":"+PhoneNo+":"+PhoneNo+":"+QQNo+":"+der+":"+moj+":"+role_id+":"+daikefangxiang+":"+bangongfangshi);
	var adress = $("#adress").val();				//获取选中的常住地值
	$.ajax({
		type:"post",
		dataType:"json",
		url:"../../upDataInformation.do",
		data:"sex="+sex+"&nation1="+nation1+"&nation="+nation+"&pol="+pol+"&edu="+edu+"&schoool="+schoool+"&major="+major+"&PhoneNo="+PhoneNo+"&QQNo="+QQNo+"&der="+der+"&role_id="+role_id+"&daikefangxiang="+daikefangxiang+"&bangongfangshi="+bangongfangshi+"&adress="+adress,
		success:function(data){
			if(data.resultcode == "200"){
				location.assign("tch_registerPerfectWait.html");
			}
			
		
		}
		
	});
}