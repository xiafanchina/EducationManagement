/**
 * 用于管理班级 
 */
var currentPage=1;//当前页
var pageSize=4;//页面大小
var count;//总条数；
var pageNums;//总共有几页
var temp;
//var idsValue = $('#ids').val();//获得隐藏域中的id字符串
//var ids=idsValue.split(",");//将隐藏于中的id用逗号分割变成数组
name = null;
lesson = null;
status = null;   	
lecturer = null; 
assistant = null;
teacher = null;
class_way = null;
timeChoice = null;
time1 = null;
time2 = null;
province = null;
city = null;
class_place = null;
show_way = 0;//全部显示或搜索显示
$(function () {
    temp=$("#tb").clone();
    $("#tb").empty();
    splitPage(currentPage);    
    $(".pageUp").removeAttr("onclick");	   
	//点击搜索后的事件
    $('#searchClass').click(function(){
    	//获得html页面的值
    	name = $('#name').val();//班级名称
    	lesson = $('#lesson').val();//课程方向
    	status = $('#status').val();//班级状态   	
    	lecturer = $('#lecturer').val();//主讲姓名
    	assistant = $('#assistant').val();//助教姓名
    	teacher = $('#teacher').val();//班主任姓名
    	class_way = $('#class_way').val();//开班方式
    	timeChoice = $('#timeChoice').val();//选择"开课/开班/结课时间"
    	time1 = $('.datainp:eq(0)').val();//开始时间
    	time2 = $('.datainp:eq(1)').val();//结束时间
    	province = $('#province').val();//省
    	city = $('#city').val();//市
    	class_place = province+city;//只有省市的开班地点，进行模糊查找
    	show_way = 1;
    	//将前台的值通过ajax传入controller，然后获取搜索的后台数据将其值返回到前台页面
    	splitPage2(currentPage);
    	show_way = 1;    	
    })
    //点击"编辑班级信息"后的事件
    $('.classModify').click(function(){
    	var id = $('input:checkbox:checked').val();
    	var length = $('input:checkbox:checked').length;
    	if(length == 0){
    		alert("您未选中班级，请选中一个班级后再进行修改");
    	}else if(length>1){
    		alert("您选中了多个班级，请选中一个班级再进行修改");
    	}else{
    		location.href = "base_classModify.html?class_id=" + id;
    	}
    })
    //点击"学生转班"后的事件
    $('.classTransfer').click(function(){
    	var id = $('input:checkbox:checked').val();
    	var length = $('input:checkbox:checked').length;
    	if(length == 0){
    		alert("您未选中班级，请选中一个班级后再进行修改");
    	}else if(length>1){
    		alert("您选中了多个班级，请选中一个班级再进行修改");
    	}else{
    		location.href = "base_classTransfer.html?class_id=" + id;
    	}
    })
    //点击"合并班级"后的事件
    $('.classMerge').click(function(){
    	var idsValue = $('#ids').val();//获得隐藏域中的id字符串
    	var ids=idsValue.split(",");//将隐藏于中的id用逗号分割变成数组
    	if(ids.length == 0){
    		alert("您未选中班级，请选中两个班级后再进行修改");
    	}else if(ids.length==1){
    		alert("您只选中了一个班级，请选中两个班级再进行修改");
    	}else if(ids.length==2){
    		location.href = "base_classMerge.html?id1=" +ids[0]+"&id2="+ids[1];
    	}else{
    		alert("您选中了多于两个的班级，请选中两个班级再进行修改");
    	}
    })
})
//勾选复选框将其值写入隐藏域
function selectCb(a){
	ifExist = 0;//判断是否有此班级id，1为有，0为无
	var value = $(a).val();//获取班级id	
	var idsValue = $('#ids').val();//获得隐藏域中的id字符串
	var ids=idsValue.split(",");//将隐藏于中的id用逗号分割变成数组
	var ifChecked =$(a).is(':checked');//判断是勾选还是取消勾选
	var ifHasComma = idsValue.indexOf(',');//判断隐藏域是否有逗号，即其中值是否只有一个
	for (var i = 0; i < ids.length; i++) {
		if (value == ids[i]){//如果存在班级id，则不进行更改
			ifExist = 1;
		}
	}
	if(ifChecked){//如果是勾选，则
		if(idsValue=='' | idsValue==null){//如果隐藏域原本没值，则添加不带逗号的value
			idsValue += value;
			$('#ids').val(idsValue);
		}else{
			if(ifExist == 0){//如果不存在班级id，则将value写入到隐藏域中
				idsValue += ','+value;
				$('#ids').val(idsValue);
			}
		}
	}else{//如果是取消勾选，则
		if(ids.length == 1){//如果长度为一，则只有一个id，删除不带逗号的id
			idsValue = idsValue.replace(value,"");
			$('#ids').val(idsValue);
		}
		if(value == ids[0]){//如果是第一个id，则删除带逗号的id
			idsValue = idsValue.replace(value+",","");
			$('#ids').val(idsValue);
		}else{//如果不是第一个id，则删除带逗号的id
			idsValue = idsValue.replace(","+value,"");
			$('#ids').val(idsValue);
		}	
	}	
}
function showBeforeSelected(){//显示之前的选中状态	
	var idsValue = $('#ids').val();//获得隐藏域中的id字符串
	var ids=idsValue.split(",");//将隐藏于中的id用逗号分割变成数组
	$('input:checkbox').each(function(){
		var value = $(this).val();
		for (var i = 0; i < ids.length; i++) {
			if (value == ids[i]){//如果存在班级id，则将其状态改为选中状态
				$(this).attr("checked",true);
			}
		}
	})
}
//搜索分页显示
function splitPage2(page){
	$.ajax({
		url:"../../searchClass.do",
		type:"post",
		dataType:"json",
		data:"name="+name+"&lesson="+lesson+"&status="+status+"&lecturer="+lecturer+"&assistant="+assistant+"&teacher="+teacher
			+"&class_way="+class_way+"&timeChoice="+timeChoice+"&time1="+time1+"&time2="+time2+"&class_place="+class_place
			+"&currentPage="+page+"&pageSize="+pageSize,
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
				temp1.find(".td1:eq(0) input").val(data1.class_id);
				temp1.find(".td1:eq(1)").text(data1.class_id);
				temp1.find(".td1:eq(2)").text(data1.name);
				temp1.find(".td1:eq(3)").text(data1.lesson);
				temp1.find(".td1:eq(4)").text(data1.lecturer);
				temp1.find(".td1:eq(5)").text(data1.assistant);
				temp1.find(".td1:eq(6)").text(data1.teacher);
				temp1.find(".td1:eq(7)").text(data1.class_num);
				temp1.find(".td1:eq(8)").text(data1.status);
				temp1.find(".td1:eq(9)").text(data1.course_start);
				temp1.find(".td1:eq(10)").text(data1.course_end);
				temp1.find(".td1:eq(11)").text(data1.class_start);
				temp1.find(".td1:eq(12)").text(data1.class_way);
				$("#tb").append(temp1.html());
				showBeforeSelected();
			})
		}
	});
}

//分页显示
function splitPage(page){
	$.ajax({
		url:"../../showClass.do",
		type:"post",
		dataType:"json",
		data:"currentPage="+page+"&pageSize="+pageSize,
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
					temp1.find(".td1:eq(0) input").val(data1.class_id);
					temp1.find(".td1:eq(1)").text(data1.class_id);
					temp1.find(".td1:eq(2)").text(data1.name);
					temp1.find(".td1:eq(3)").text(data1.lesson);
					temp1.find(".td1:eq(4)").text(data1.lecturer);
					temp1.find(".td1:eq(5)").text(data1.assistant);
					temp1.find(".td1:eq(6)").text(data1.teacher);
					temp1.find(".td1:eq(7)").text(data1.class_num);
					temp1.find(".td1:eq(8)").text(data1.status);
					temp1.find(".td1:eq(9)").text(data1.course_start);
					temp1.find(".td1:eq(10)").text(data1.course_end);
					temp1.find(".td1:eq(11)").text(data1.class_start);
					temp1.find(".td1:eq(12)").text(data1.class_way);
					$("#tb").append(temp1.html());
					showBeforeSelected();
				})				  
			}
	}) 
}
function pageDown(){
	$(".pageUp").attr("onclick","pageUp()");
	currentPage++;
	if(show_way ==0){
		splitPage(currentPage);
	}else{
	splitPage2(currentPage);
	}
	if(currentPage>=pageNums){
	   $(".pageDown").removeAttr("onclick");
	}
}
function pageUp(){
	$(".pageDown").attr("onclick","pageDown()");
    currentPage--;
    if(show_way ==0){
		splitPage(currentPage);
	}else{
	splitPage2(currentPage);
	}		
	if(currentPage==1){
		$(".pageUp").removeAttr("onclick");
	}
}
function pageFirst(){
	$(".pageUp").removeAttr("onclick");
	$(".pageDown").attr("onclick","pageDown()");
	currentPage=1;
	if(show_way ==0){
		splitPage(currentPage);
	}else{
	splitPage2(currentPage);
	}
}
function pageLast(){
	$(".pageDown").removeAttr("onclick");
	$(".pageUp").attr("onclick","pageUp()");
	currentPage=pageNums;
	if(show_way ==0){
		splitPage(currentPage);
	}else{
	splitPage2(currentPage);
	}
}//显示班级详情
function showDetail(a){
	var class_id = $(a).find('td').eq(1).text();
    location.href = "base_classDetailsAdministration.html?class_id=" + class_id;	
}
