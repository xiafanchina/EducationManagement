/**
 * 用于学生转班
 */
var temp;//学生列表
var temp2;//目标班级
checkedNum = 0;//勾选的数量初始值
$(function () {
	temp2=$("#td").clone();
	//点击"请选择目标班级"后的事件
    $("div.targetChoice button").click(function () {
        $(".blackBg").css("display", "block");
        $(".popTipsClass").css("display", "block");
        $.ajax({
    		url:"../../selectAllTargetClass.do",
    		type:"post",
    		dataType:"json",
    		success:function(data){
    			var temp3=temp2.clone();
    			$("#td").empty();
    			for(var i=0;i<data.length;i++){
    				temp3.find(".td2:eq(0) input").val(data[i].class_id);
    				temp3.find(".td2:eq(1)").text(data[i].class_id);
    				temp3.find(".td2:eq(2)").text(data[i].name);
    				temp3.find(".td2:eq(3)").text(data[i].lesson);
    				temp3.find(".td2:eq(4)").text(data[i].lecturer);
    				$("#td").append(temp3.html());
    			}
    		}
    	})
    });
    //点击弹出列表中"搜索"后的事件，将按名字搜索后的结果返回到列表中
    $("#searchClass").click(function(){
    	var name=$(this).prev().val();//获得搜索按钮前面文本框的内容
    	$.ajax({
    		url:"../../selectTargetClass.do",
    		type:"post",
    		dataType:"json",
    		data:"name="+name,
    		success:function(data){
    			var temp3=temp2.clone();
    			$("#td").empty();
    			for(var i=0;i<data.length;i++){
    				temp3.find(".td2:eq(0) input").val(data[i].class_id);
    				temp3.find(".td2:eq(1)").text(data[i].class_id);
    				temp3.find(".td2:eq(2)").text(data[i].name);
    				temp3.find(".td2:eq(3)").text(data[i].lesson);
    				temp3.find(".td2:eq(4)").text(data[i].lecturer);
    				$("#td").append(temp3.html());
    			}
    		}
    	})
    })
    //点击页面下方的"提交"按钮后的事件，将数据进行确认
    $("div.operationGather button.submit").click(function () {
        var id = $('.targetClass:eq(0)').text();//目标班级id
        if(id ==null | id==''){
        	alert("请选中班级！！！")
        }else{
            var num = $('#stuNum').text();//插入目标班级的人数
            var num2 = $('.targetClass:eq(2)').text();//目标班级的原始人数
            $("#confirmNum").text(num);
            $("#confirmName").text($('.targetClass:eq(1)').text());//目标班级名称
            num = Number(num);//将人数转换为数字
            if (!isNaN(num2)) { 
            	num2 = Number(num2);
                $("#lastNum").text(num+num2);
                $(".blackBg").css("display", "block");
                $(".popTipsSubmit").css("display", "block");
            }else{
            	alert("目标班级为空，请再次确认");
            } 
        }
        
    });
    $("div.operationGather button.cancel").click(function () {
        $(".blackBg").css("display", "block");
        $(".popTipsCancel").css("display", "block");
    });
    $(".blackBg,span.popOut,button.popBack").click(function () {
        $(".blackBg").css("display", "none");
        $(".popTips").css("display", "none");
    });
    //点击弹出框里的"确定"按钮后的事件，即将选中的班级添加到页面下半部分
    $("div.button button.popSubmitTeacher").click(function () {
        var checkedVal = $("input[name='popTeacher']:checked").val();//获得目标班级的id
        $("table.addClass td > a").text(checkedVal);//将班级id写入。。。
        $(".blackBg").css("display", "none");
        $(".popTips").css("display", "none");
        $.ajax({
    		url:"../../showClassById1.do",
    		type:"post",
    		dataType:"json",
    		data:"class_id="+checkedVal,
    		success:function(data){
    			$(".targetClass").eq(0).text(data[0].class_id);//原始班级一的班级ID
    			$(".targetClass").eq(1).text(data[0].name);//原始班级一的班级名称
    			$(".targetClass").eq(2).text(data[0].class_num);//原始班级一的班级人数
    			$(".targetClass").eq(3).text(data[0].lecturer);//原始班级一的主讲
    			$(".targetClass").eq(4).text(data[0].lesson);//原始班级一的方向
    			$(".targetClass").eq(5).text(data[0].status);//原始班级一的班级状态
    			$(".targetClass").eq(6).text(data[0].assistant);//原始班级一的助教
    			$(".targetClass").eq(7).text(data[0].class_place);//原始班级一的开班地点
    			$(".targetClass").eq(8).text(data[0].course_start);//原始班级一的开课时间
    			$(".targetClass").eq(9).text(data[0].teacher);//原始班级一的班主任
    		}
    	})
    })
	
    //以下为显示页面上半部分的原始班级信息，加载页面即进行提交
    temp=$("#tb").clone();
    //$("#tb").empty();
	//获得url地址栏的数据即原始班级的班级id
	var class_id=location.search.substring(1);
	class_id=class_id.replace('class_id=','');
	$.ajax({
		url:"../../showClassById1.do",
		type:"post",
		dataType:"json",
		data:"class_id="+class_id,
		success:function(data){
			$(".td").eq(0).text(data[0].class_id);//原始班级一的班级ID
			$(".td").eq(1).text(data[0].name);//原始班级一的班级名称
			$(".td").eq(2).text(data[0].class_num);//原始班级一的班级人数
			$(".td").eq(3).text(data[0].lecturer);//原始班级一的主讲
			$(".td").eq(4).text(data[0].lesson);//原始班级一的方向
			$(".td").eq(5).text(data[0].status);//原始班级一的班级状态
		}
	})
	$.ajax({
		url:"../../showStuById.do",
		type:"post",
		dataType:"json",
		data:"class_id="+class_id,
		success:function(data){		
			var temp1=temp.clone();
			$("#tb").empty();
			for(var i=0;i<data.length;i++){
				var status;
				if(data[i].stu_status==1){
					status="新入学";
				}else if(data[i].stu_status==2){
					status="正在上课";
				}else if(data[i].stu_status==3){
					status="休学中";
				}else if(data[i].stu_status==4){
					status="已毕业";
				}
				temp1.find(".td1:eq(0) input").val(data[i].id);
				temp1.find(".td1:eq(1)").text(data[i].id);
				temp1.find(".td1:eq(2)").text(data[i].email);
				temp1.find(".td1:eq(3)").text(data[i].stus_name);
				temp1.find(".td1:eq(4)").text(data[i].sex);
				temp1.find(".td1:eq(5)").text(data[i].phone);
				temp1.find(".td1:eq(6)").text(data[i].school);
				temp1.find(".td1:eq(7)").text(status);
				$("#tb").append(temp1.html());
			}
		}
	})
	
	/**
	 * 提交按钮，提交后数据进入数据库
	 * */
    $('.popSubmitStu').click(function(){
    	var pid = $(".td").eq(0).text(); //原始班级id
    	var pnum = $(".td").eq(2).text();//原始班级人数
        var tid = $(".targetClass").eq(0).text();//目标班级id
        var tnum= $(".targetClass").eq(2).text();//目标班级人数
        $("")
        var stuid = "";//原始班级的学生id
        $('input:checkbox:checked').each(function(i){
	         if(0==i){
	          stuid = $(this).val();
	         }else{
	          stuid += (","+$(this).val());
	         }
        });
        pnum = Number(pnum);
        tnum = Number(tnum);
        checkedNum = Number(checkedNum);
        pnum -= checkedNum;//更改后的原始班级人数
        tnum += checkedNum;//更改后的目标班级人数
    	$.ajax({
    		url:"../../transferClass.do",
    		type:"post",
    		dataType:"json",
    		data:"pid="+pid+"&pnum="+pnum+"&tid="+tid+"&tnum="+tnum+"&stuid="+stuid,
    		success:function(data){
    			console.log(data);
    			alert("转班成功");
    			history.back();
    		}
    	});    	
    })
    
    $('.popSubmitCancle').click(function(){
    	history.back();
    })   
})

//显示勾选的个数
function showNum(a){
	//勾选学生列表复选框后，将选中的人数修改为选中的学生数量
	var checked = $(a).is(':checked');//是否被勾选
	if(checked){
		checkedNum++;
	}else{
		if(checkedNum>0){
			checkedNum--;
		}
	}
	$('#stuNum').text(checkedNum);
}
