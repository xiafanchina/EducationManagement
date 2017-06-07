/**
 * 用于管理课程 
 */
var currentPage=1;//当前页
var pageSize=4;//页面大小
var count;//总条数；
var pageNums;//总共有几页
var temp;
$(function () {
    temp=$("#tb").clone();
    $("#tb").empty();
    splitPage(currentPage);    
    $(".pageUp").removeAttr("onclick");	   
    //点击"添加课程"后的事件
    $('.courseAdd').click(function(){
    	location.href = "base_courseAdd.html";
    })
})
function modifyCourse(a){
	id=$(a).parent().parent().children().first().text();
	location.href = "base_courseModify.html?id="+id;
}
function deleteCourse(a){	
	id=$(a).parent().parent().children().first().text();
	c=confirm("确认删除？");
	if(c){
		$.ajax({
			url:"../../deleteCourse.do",
			type:"post",
			dateType:"json",
			data:"id="+id,
			success:function(){
				alert("删除成功");
				splitPage(1);
			}
		})
	}else{
		alert("您取消了删除操作");
	}	
}
//分页显示
function splitPage(page){
	$.ajax({
		url:"../../showCourse.do",
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
					temp1.find(".td1:eq(0)").text(data1.id);
					temp1.find(".td1:eq(1)").text(data1.name);
					temp1.find(".td1:eq(2)").text(data1.lname);
					temp1.find(".td1:eq(3)").text(data1.teacher_id);
					temp1.find(".td1:eq(4)").text(data1.tname);
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
//显示课程详情
function showDetail(a){
	var id = $(a).find('td').eq(0).text();
    location.href = "base_courseDetailsAdministration.html?id=" + id;	
}