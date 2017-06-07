/**
 * 用于管理考试信息 
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
    //点击"添加考试"后的事件
    $('.courseAdd').click(function(){
    	location.href = "base_courseAdd.html";
    })
})
function modifyExam(a){
	id=$(a).parent().parent().children().first().text();
	$(a).parent().parent().children().eq(6).html("<input type='text' class='val1'>");
	$(a).parent().parent().children().eq(7).html("<input type='text' class='val1'>");
	$(a).parent().parent().children().eq(8).html("<button onclick='modifySubmit(this)'>提交</button><button onclick='splitPage(1)'>取消</button>");
}
function modifySubmit(a){
	id=$(a).parent().parent().children().first().text();
	score=$(".val1").eq(0).val();
	date=$(".val1").eq(1).val();
	$.ajax({
		url:"../../modifyExam.do",
		type:"post",
		dataType:"json",
		data:"id="+id+"&score="+score+"&date="+date,
		success:function(data){
			if(data=="Error"){
				alert("修改失败，输入格式可能不正确")
			}else{
				alert("修改成功");
			}
			splitPage(1);
		}
	})
}

function deleteExam(a){	
	id=$(a).parent().parent().children().first().text();
	c=confirm("确认删除？");
	if(c){
		$.ajax({
			url:"../../deleteExam.do",
			type:"post",
			dataType:"json",
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
		url:"../../showExam.do",
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
					temp1.find(".td1:eq(1)").text(data1.cname);
					temp1.find(".td1:eq(2)").text(data1.lname);
					temp1.find(".td1:eq(3)").text(data1.sname);
					temp1.find(".td1:eq(4)").text(data1.tname);
					temp1.find(".td1:eq(5)").text(data1.school);
					if(data1.score==0||data1.score==null){
						temp1.find(".td1:eq(6)").text("暂无成绩");
					}else{
						temp1.find(".td1:eq(6)").text(data1.score);
					}
					if(data1.exam_date==null){
						temp1.find(".td1:eq(7)").text("暂无考试");
					}else{
						temp1.find(".td1:eq(7)").text(data1.exam_date);
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
/*//显示考试详情
function showDetail(a){
	var id = $(a).find('td').eq(0).text();
    location.href = "base_courseDetailsAdministration.html?id=" + id;	
}*/