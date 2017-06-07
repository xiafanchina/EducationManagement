/**
 * 用于班级合并
 */
$(function () {
	var id1 = getUrlParam('id1');//url的第一个参数，即原始班级一的班级id
	var id2 = getUrlParam('id2');//url的第二个参数，即原始班级二的班级id
	$.ajax({
		url:"../../showClassById2.do",
		type:"post",
		dataType:"json",
		data:"id1="+id1+"&id2="+id2,
		success:function(data){
			$(".td").eq(0).text(data[0].class_id);//原始班级一的班级ID
			$(".td").eq(1).text(data[0].name);//原始班级一的班级名称
			$(".td").eq(2).text(data[0].class_num);//原始班级一的班级人数
			$(".td").eq(3).text(data[0].lecturer);//原始班级一的主讲
			$(".td").eq(4).text(data[0].lesson);//原始班级一的方向
			$(".td").eq(5).text(data[0].class_start);//原始班级一的开班时间
			$(".td").eq(6).text(data[0].assistant);//原始班级一的助教
			$(".td").eq(7).text(data[0].class_place);//原始班级一的开班地点
			$(".td").eq(8).text(data[0].course_start);//原始班级一的开课时间
			$(".td").eq(9).text(data[0].teacher);//原始班级一的班主任
			$(".classAgo").eq(0).text(data[0].status);//原始班级一的班级状态
			
			$(".td").eq(10).text(data[1].class_id);//原始班级二的班级ID
			$(".td").eq(11).text(data[1].name);//原始班级二的班级名称
			$(".td").eq(12).text(data[1].class_num);//原始班级二的班级人数
			$(".td").eq(13).text(data[1].lecturer);//原始班级二的主讲
			$(".td").eq(14).text(data[1].lesson);//原始班级二的方向
			$(".td").eq(15).text(data[1].class_start);//原始班级二的开班时间
			$(".td").eq(16).text(data[1].assistant);//原始班级二的助教
			$(".td").eq(17).text(data[1].class_place);//原始班级二的开班地点
			$(".td").eq(18).text(data[1].course_start);//原始班级二的开课时间
			$(".td").eq(19).text(data[1].teacher);//原始班级二的班主任
			$(".classAgo").eq(1).text(data[1].status);//原始班级二的班级状态
		}
	})
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
    	var lecturer = $('a:eq(0)').text();//主讲姓名
    	var assistant = $('a:eq(1)').text();//助教姓名
    	var teacher = $('a:eq(2)').text();//班主任姓名
    	var address = $('.name1:eq(1)').val();//不包含省市的开班地点
    	var class_place = province+city+address;//具体开班地点
    	/*创建班级按钮点击后 确认是否新建，弹出框显示之前输入的值,进行确认*/
    	$('.content tr td:odd:eq(0)').text(name);
    	$('.content tr td:odd:eq(1)').text(lesson);
    	$('.content tr td:odd:eq(2)').text(lecturer);
    	$('.content tr td:odd:eq(3)').text(assistant);
    	$('.content tr td:odd:eq(4)').text(teacher);
    	$('.content tr td:odd:eq(5)').text(class_place);
    });
	/**
	 * 提交按钮，提交后数据进入数据库
	 * */
    $('.popSubmit').click(function(){
    	var province = $('select:eq(0)').val();//省
    	var city = $('select:eq(1)').val();//市
    	var name = $('.name1:eq(0)').val();//班级名称
    	var lesson = $('select:eq(2)').val();//课程方向
    	var lecturer = $('a:eq(0)').text();//主讲姓名
    	var assistant = $('a:eq(1)').text();//助教姓名
    	var teacher = $('a:eq(2)').text();//班主任姓名
    	var address = $('.name1:eq(1)').val();//不包含省市的开班地点
    	var class_place = province+city+address;//具体开班地点
    	var num1 = $('.td').eq(2).text();//原始班级一的班级人数
    	var num2 = $(".td").eq(12).text();//原始班级二的班级人数
    	$.ajax({
    		url:"../../mergeClass.do",
    		type:"post",
    		dataType:"json",
    		data:"id1="+id1+"&id2="+id2+"&name="+name+"&lesson="+lesson
    			+"&lecturer="+lecturer+"&assistant="+assistant+"&teacher="
    			+teacher+"&class_place="+class_place+"&num1="+num1+"&num2="+num2,
    		success:function(data){
    			console.log(data);
    			alert("合并成功");
    			history.back();
    		}
    	});    	
    })
    
    $('.cancleSubmit').click(function(){
    	history.back();
    })
    
})
/**
 * 获得URL栏数据的方法
 * @param name
 * @returns
 */
function getUrlParam(name)
	{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
	}