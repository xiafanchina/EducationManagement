/**
 * 用于编辑班级
 */
$(function () {
	var class_id=location.search.substring(1);
	class_id=class_id.replace('class_id=','');
	/**
	 * 根据角色id查询对应教师信息
	 * */
	$("table.addClass td > a").click(function () {
		$('.teaMes').empty();
		//获得id的值，从而判断教师的角色
		var role_id=0;//角色id
		var id=$(this).attr('id');
		if(id=="tea1"){//选择的是主讲
			role_id=4;
		}else if(id=="tea2"){//选择的是助教
			role_id=5;
		}else if(id=="tea3"){//选择的是班主任
			role_id=3;
		}else{
			alert("选择错误");
		}
		$.ajax({//传role_id到controler中
    		url:"../../selectTeacher.do",
    		type:"post",
    		dataType:"json",
    		data:"role_id="+role_id,
    		success:function(data){
    			console.log(data);    			
    			var tr="";
    			for(var i=0;i<data.length;i++){
    				tr+="<tr><td><input type='radio' name='popTeacher' value='"+data[i].name+"'></td><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].sex+"</td><td>"+data[i].course+"</td></tr>"
    			}
    			var tr_table="<tr><th></th><th>教师编号</th><th>姓名</th><th>性别</th><th>代课方向</th></tr>"+tr;
    			var index=0;
    			if(role_id==4){
    				index=0;
    			}else if(role_id==5){
    				index=1;
    			}else if(role_id==3){
    				index=2;
    			}
    			$('.teaMes:eq('+index+')').append(tr_table);    			
    		}
    	})
    });
	/**
	 * 根据角色id和教师姓名查询对应教师信息
	 * */
	$('.search').click(function () {
		$('.teaMes').empty();
		//获得id的值，从而判断教师的角色
		var role_id=0;//角色id
		var id=$(this).attr('id');
		if(id=="sea1"){//选择的是主讲
			role_id=4;
		}else if(id=="sea2"){//选择的是助教
			role_id=5;
		}else if(id=="sea3"){//选择的是班主任
			role_id=3;
		}else{
			alert("选择错误");
		}
		var name=$(this).prev().val();//获得要搜索的关键字
		$.ajax({//传role_id和name到controler中
    		url:"../../selectTeacherByName.do",
    		type:"post",
    		dataType:"json",
    		data:"role_id="+role_id+"&name="+name,
    		success:function(data){
    			console.log(data);    			
    			var tr="";
    			for(var i=0;i<data.length;i++){
    				tr+="<tr><td><input type='radio' name='popTeacher' value='"+data[i].name+"'></td><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].sex+"</td><td>"+data[i].course+"</td></tr>"
    			}
    			var tr_table="<tr><th></th><th>教师编号</th><th>姓名</th><th>性别</th><th>代课方向</th></tr>"+tr;
    			var index=0;
    			if(role_id==4){
    				index=0;
    			}else if(role_id==5){
    				index=1;
    			}else if(role_id==3){
    				index=2;
    			}
    			$('.teaMes:eq('+index+')').append(tr_table);    			
    		}
    	})
    });
	/**
	 * 提交按钮，确认数据
	 * */
    $('.submit').click(function(){
    	var province = $('select:eq(0)').val();//省
    	var city = $('select:eq(1)').val();//市
    	var name = $('.name1:eq(0)').val();//班级名称
    	var lesson = $('select:eq(2)').val();//课程方向
    	var lecturer = $('a:eq(2)').text();//主讲姓名
    	var assistant = $('a:eq(3)').text();//助教姓名
    	var teacher = $('a:eq(4)').text();//班主任姓名
    	var address = $('.name1:eq(1)').val();//不包含省市的开班地点
    	var class_place = province+city+address;//具体开班地点
    	var class_status = $('#classStatus').val();//班级状态
    	var course_start = $('.datainp:eq(0)').val();//开课时间
    	var class_start = $('.datainp:eq(1)').val();//开班时间
    	var course_end = $('.datainp:eq(2)').val();//结课时间
    	/*创建班级按钮点击后 确认是否新建，弹出框显示之前输入的值,进行确认*/
    	$('.content tr td:odd:eq(0)').text(name);
    	$('.content tr td:odd:eq(1)').text(lesson);
    	$('.content tr td:odd:eq(2)').text(lecturer);
    	$('.content tr td:odd:eq(3)').text(assistant);
    	$('.content tr td:odd:eq(4)').text(teacher);
    	$('.content tr td:odd:eq(5)').text(class_place);
    	$('.content tr td:odd:eq(6)').text(class_status);
    	$('.content tr td:odd:eq(7)').text(course_start);
    	$('.content tr td:odd:eq(8)').text(class_start);
    	$('.content tr td:odd:eq(9)').text(course_end);
    });
	/**
	 * 提交按钮，提交后数据进入数据库
	 * */
    $('.popSubmit').click(function(){
    	var province = $('select:eq(0)').val();//省
    	var city = $('select:eq(1)').val();//市
    	var name = $('.name1:eq(0)').val();//班级名称
    	var lesson = $('select:eq(2)').val();//课程方向
    	var lecturer = $('a:eq(2)').text();//主讲姓名
    	var assistant = $('a:eq(3)').text();//助教姓名
    	var teacher = $('a:eq(4)').text();//班主任姓名
    	var address = $('.name1:eq(1)').val();//不包含省市的开班地点
    	var class_place = province+city+address;//具体开班地点
    	var class_status = $('#classStatus').val();//班级状态
    	var course_start = $('.datainp:eq(0)').val();//开课时间
    	var class_start = $('.datainp:eq(1)').val();//开班时间
    	var course_end = $('.datainp:eq(2)').val();//结课时间
    	$.ajax({
    		url:"../../modifyClass.do",
    		type:"post",
    		dataType:"json",
    		data:"class_id="+class_id+"&name="+name+"&lesson="+lesson+"&lecturer="+lecturer+"&assistant="+assistant+"&teacher="+teacher+"&class_place="+class_place
    			+"&class_status="+class_status+"&course_start="+course_start+"&class_start="+class_start+"&course_end="+course_end,
    		success:function(data){
    			console.log(data);
    			alert("修改成功");
    			history.back();
    		}
    	});    	
    })
    
    $('.cancleSubmit').click(function(){
    	history.back();
    })
    
})