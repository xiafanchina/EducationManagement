/**
 * 用于查看课程详情 
 */
var currentPage=1;//当前页
var pageSize=4;//页面大小
var count;//总条数；
var pageNums;//总共有几页
var temp;

var id=location.search.substring(1);
id=id.replace('id=','');//获得需要显示的课程id
$(function () {
	 $("div.buttonGather > button.back").click(function () {
	     history.back();
	 })
	 $("div.popClass label").click(function () {
	     if($(this).find("input").is(":checked")){
	         $("div.popClass label").removeClass("checked");
	         $(this).addClass("checked");
	     }else{
	         $(this).removeClass("checked");
	     }
	 })
	 $('.courseAdd').click(function(){
		 $(".blackBg").css("display","block");
         $(".popTipsTeacher1").css("display","block");
         $.ajax({
     		url:"../../showCStu.do",
     		type:"post",
     		dataType:"json",
     		success:function(data){
     			console.log(data);    			
     			var tr="";
     			for(var i=0;i<data.length;i++){
     				tr+="<tr><td><input type='radio' name='popTeacher' value='"+data[i].id+"'></td><td>"+data[i].id+"</td><td>"+data[i].stus_name+"</td><td>"+data[i].school+"</td><td>"+data[i].email+"</td></tr>"
     			}
     			var tr_table="<tr><th></th><th>学生编号</th><th>姓名</th><th>毕业院校</th><th>邮箱</th></tr>"+tr;     			
     			$('.teaMes').append(tr_table);    			
     		}
     	})
    })
    //点击弹出框中"取消"后触发的事件
    $(".blackBg,span.popOut,button.popBack").click(function () {
        $(".blackBg").css("display","none");
        $(".popTips").css("display","none");
    });
	 //点击弹出框中"确定"后将选定学生添加入该课程
	 $("div.button button.popSubmitTeacher1").click(function () {
	     var checkedVal = $("input[name='popTeacher']:checked").val();
	     $.ajax({
	     		url:"../../addCStu.do",
	     		type:"post",
	     		dataType:"json",
	     		data:"cid="+id+"&sid="+checkedVal,
	     		success:function(data){
	     			console.log(data); 
	     			splitPage(1); 
	     		}
	     	})
	     $(".blackBg").css("display","none");
	     $(".popTips").css("display","none");
	     
	 })
	 
	//查询课程详情，将结果写入页面上方
	$.ajax({
		url:"../../showCourseById.do",
		type:"post",
		dataType:"json",
		data:"id="+id,
		success:function(data){
			$(".td3").eq(0).text(data.list[0].id);//课程ID
			$(".td3").eq(1).text(data.list[0].name);//课程名称
			$(".td3").eq(2).text(data.list[0].lname);//课程方向
			$(".td3").eq(3).text(data.list[0].tname);//课程教师姓名	
		}
	})
    temp=$("#tb").clone();
    $("#tb").empty();
    splitPage(currentPage);    
    $(".pageUp").removeAttr("onclick");   
})

function deleteCourse(a){	
	sid=$(a).parent().parent().children().eq(0).text();
	c=confirm("确认删除？");
	if(c){
		$.ajax({
			url:"../../deleteCStu.do",
			type:"post",
			dateType:"json",
			data:"sid="+sid+"&id="+id,
			success:function(){
				alert("删除成功");
				splitPage(1);
			}
		})
	}else{
		alert("您取消了删除操作");
	}	
}
function addExam(a){	
	sid=$(a).parent().parent().children().eq(0).text();
	location.href = "base_examAdd.html?cid="+id+"&sid="+sid;	
}

//分页显示
function splitPage(page){ 
	$.ajax({
		url:"../../showStuByCourseId.do",
		type:"post",
		dataType:"json",
		data:"currentPage="+page+"&pageSize="+pageSize+"&id="+id,
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
				temp1.find(".td1:eq(0)").text(data1.id);
				temp1.find(".td1:eq(1)").text(data1.email);
				temp1.find(".td1:eq(2)").text(data1.stus_name);
				if(data1.sex=="1"){
					temp1.find(".td1:eq(3)").text("男");
				}else if(data1.sex=="2"){
					temp1.find(".td1:eq(3)").text("女");
				}
				temp1.find(".td1:eq(4)").text(data1.phone);
				temp1.find(".td1:eq(5)").text(data1.school);
				if(data1.stu_status=="1"){
					temp1.find(".td1:eq(6)").text("新入学");
				}else if(data1.stu_status=="2"){
					temp1.find(".td1:eq(6)").text("正在上课");
				}else if(data1.stu_status=="3"){
					temp1.find(".td1:eq(6)").text("停课中");
				}else if(data1.stu_status=="4"){
					temp1.find(".td1:eq(6)").text("已毕业");
				}
				$("#tb").append(temp1.html());
			})				  
		}
	}) 
}
function pageDown(){
	$(".pageUp").attr("onclick","pageUp()");
	currentPage++;
	splitPage(currentPage);
	if(currentPage>=pageNums){
	   $(".pageDown").removeAttr("onclick");
	}
}
function pageUp(){
	$(".pageDown").attr("onclick","pageDown()");
    currentPage--;
	splitPage(currentPage);		
	if(currentPage==1){
		$(".pageUp").removeAttr("onclick");
	}
}
function pageFirst(){
	$(".pageUp").removeAttr("onclick");
	$(".pageDown").attr("onclick","pageDown()");
	currentPage=1;
	splitPage(currentPage);
}
function pageLast(){
	$(".pageDown").removeAttr("onclick");
	$(".pageUp").attr("onclick","pageUp()");
	currentPage=pageNums;
	splitPage(currentPage);
}
