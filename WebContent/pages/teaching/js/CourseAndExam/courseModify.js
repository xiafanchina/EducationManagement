/**
 * 用于编辑课程
 */
$(function () {
	var id=location.search.substring(1);
	id=id.replace('id=','');
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
	 * 提交按钮，提交后数据进入数据库
	 * */
    $('.submit').click(function(){
    	var name = $('.name1:eq(0)').val();//课程名称
    	var lesson = $('select').val();//课程方向编号
    	var teacher=$("input[name='popTeacher']:checked").parent().next().text();
    	$.ajax({
    		url:"../../updateCourse.do",
    		type:"post",
    		dataType:"json",
    		data:"id="+id+"&name="+name+"&lesson="+lesson+"&teacher="+teacher,
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
