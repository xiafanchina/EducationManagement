$(function(){
    $.ajax({
         url:"../../queryInfo.do",
         type:"get",
         dataType:"json",
         success:function(data){
            	    console.log(data);
            		$("#errdiv").text("您的"+data[0].stu_reason+"填写不正确，请修改！");
            		$("#stu_id").text(data[1].id);
            		$("#stu_name").text(data[1].stus_name);
            		$("#stu_email").text(data[1].email);
            		$("#stu_idcard").text(data[1].id_card);
            		$("#class_name").text(data[1].name);
            		$("#class_place").text(data[1].class_place);
            		if(data[1].sex=="1"){
            			$("#sex").find(".select-set").text("男");
            		}else if(data[1].sex=="2"){
            			$("#sex").find(".select-set").text("女");
            		}
            		$("#phone").val(data[1].phone);
            		$("#qq").val(data[1].qq);
            		if(data[1].nation=="汉族"){
            			$("#nation label").eq(0).attr("class","radio checked")
            		}else if(data[1].nation=="满族"){
            			$("#nation label").eq(1).attr("class","radio checked");
            		}else if(data[1].nation=="回族"){
            			$("#nation label").eq(2).attr("class","radio checked");
            		}else{
            			$("#nation label").eq(3).attr("class","radio checked");
            			$("#othernation").text(data[1].nation);
            		}
            		$("#brithplace").find(".select-set").text(data[1].brith_place);
            		$("#political").find(".select-set").text(data[1].political);
            		$("#education").find(".select-set").text(data[1].education);
            		$("#school").val(data[1].school);
            		$("#major").val(data[1].major);
            		$("#schooldate").val(data[1].schooldate);
            		
            		var va1=document.getElementById("tag_sex").innerText;//从数据库中获取标签对应的字符串..获取标签中间的值
    				var va2=document.getElementById("tag_nation").innerText;//单选	
    				var va3=document.getElementById("tag_phone").innerText;
    				var va4=document.getElementById("tag_qq").innerText;
    				var va5=document.getElementById("tag_brithplace").innerText;
    				var va6=document.getElementById("tag_education").innerText;
    				var va7=document.getElementById("tag_major").innerText;
    				var va8=document.getElementById("tag_political").innerText;
    				var va9=document.getElementById("tag_school").innerText;
    				var va10=document.getElementById("tag_schooldate").innerText;
    	        
    				if(data[0].stu_reason.indexOf(va1) !=-1){
    					$("#tag_sex").css("color","#FF0000");//判断性别
    				}
    				if(data[0].stu_reason.indexOf(va2) !=-1){
    					$("#tag_nation").css("color","#FF0000");//判断民族
    				}
    				if(data[0].stu_reason.indexOf(va3) !=-1){
    					$("#tag_phone").css("color","#FF0000");//判断籍贯
    				}
    				if(data[0].stu_reason.indexOf(va4) !=-1){
    					$("#tag_qq").css("color","#FF0000");//判断政治面貌
    				}
    				if(data[0].stu_reason.indexOf(va5) !=-1){
    					$("#tag_brithplace").css("color","#FF0000");//判断学历
    				}
    				if(data[0].stu_reason.indexOf(va6) !=-1){
    					$("#tag_education").css("color","#FF0000");//判断毕业学校
    				}
    				if(data[0].stu_reason.indexOf(va7) !=-1){
    					$("#tag_major").css("color","#FF0000");//所属专业
    				}
    				if(data[0].stu_reason.indexOf(va8) !=-1){
    					$("#tag_political").css("color","#FF0000");//手机号
    				}
    				if(data[0].stu_reason.indexOf(va9) !=-1){
    					$("#tag_school").css("color","#FF0000");//QQ
    				}
    				if(data[0].stu_reason.indexOf(va10) !=-1){
    					$("#tag_schooldate").css("color","#FF0000");//判断部门
    				}
            	}
         })
 })     
         function tijiao(){
            var stuid=$("#stu_id").text();
            var stuname = $("#stu_name").text();
            var stuemail = $("#stu_email").text();
            var stuidcard = $("#stu_idcard").text();
            var classname = $("#class_name").text();
            var classplace = $("#class_place").text();
            var sex = $("#sex").find(".select-set").text();
            if(sex=="男"){
            	sex="1";
            }else if(sex=="女"){
            	sex="2";
            }
            var phone = $("#phone").val();
            var qq = $("#qq").val();
            var nation = $("#nation").find(".radio.checked").text();
            var brithplace = $("#brithplace").find(".select-set").text();
            var political = $("#political").find(".select-set").text();
            var education = $("#education").find(".select-set").text();
           // alert(nation+" "+brithplace+" "+political+"   "+education);
           // alert(education+" "+brithplace+" "+political);
            var school = $("#school").val();
            var major = $("#major").val();
            var schooldate =$("#schooldate").val();
            var arr= new Array();
            arr.push(stuid,stuname,stuemail,stuidcard,classname,classplace,sex,phone,qq,nation,brithplace);
            arr.push(political,education,school,major,schooldate);
            console.log(arr);
            $.ajax({
            	url:"../../perfectInfo.do",
            	type:"post",
            	data:"arr="+arr,
            	dataType:"json",
            	success:function(data){
            		if(data=="200"){
            			//alert("提交成功,请等待审核！")
            			location.href="../../pages/student/1.html";
            		}else if(data=="101"){
            			alert("更改失败，请重试！")
            		}
            	}
            })
        }