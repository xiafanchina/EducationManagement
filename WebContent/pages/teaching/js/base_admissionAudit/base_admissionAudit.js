/**
 * 克隆表格
 */ 
var currentPage=1;//当前页
var pageSize=10;//页面大小
var count;//总条数；
var pageNums;//总共有几页
var temp;					//设置变量，用于克隆
$(function(){
	temp=$("#tb").clone();	//克隆tb标签一下所有数据
	$("#tb").empty();		//清空列表
	search(1);
});
/* 
 * 用于通过调教搜索 的方法 
 */
function search(p){
	currentPage = p;
	var min_score = $("#min_score").val();							//获取min_score
	var max_score = $("#max_score").val();							//获取max_score
	var search_school = $("#search_school").val();					//获取search_school
	var search_userName = $("#search_userName").val();				//获取search_userName
	var direction =  document.getElementById("direction").value;	//获取direction
	var score_status =  document.getElementById("score_status").value;//获取score_status
	$.ajax({
		type:"post",
		dataType:"json",
		url:"../../base_admissionAudit.do",
		data:"search_userName="+search_userName+"&search_school="+search_school+"&direction="+direction+"&min_score="+min_score+"&max_score="+max_score+"&score_status="+score_status+"&currentPage="+currentPage+"&pageSize="+pageSize,
		success:function(data){
			$("#tb").empty();
			if(data.resultcode=="200"){
				var pageNums = parseInt(data.count%10==0?data.count/10:data.count/10+1);//共几页
				$("#tablePage").val(currentPage);
				$("#count").text(data.count);	
				$("#pageSize").text(pageSize);
				$("#pageNum").text(pageNums);
				$.each(data.listResult,function(i,data1){
					var temp1=temp.clone();
					temp1.find("#number").text(i+1);						//序号
					temp1.find("#t_name").text(data1.name);					//克隆名字
					temp1.find("#old_school").text(data1.oldSchool);		//生源学校
					temp1.find("#fangxiang").text(data1.direction);			//选择方向
					temp1.find("#kaoshichengji").text(data1.score);			//考试成绩
					temp1.find("#kaoshishijian").text(data1.date);			//考试时间
					temp1.find("#shenfenzheng").text(data1.ID);				//学生身份证
					if(data1.score>=60){
						temp1.find("#kaoshizhuangtai").text("合格"); //考试状态
					}else{
						temp1.find("#kaoshizhuangtai").text("不合格"); //考试状态
					}
					if(data1.scoreStatus==0){	
						temp1.find("#ruxue").remove();				//判断考试状态，显示标签
						temp1.find("#chkao").remove();
					}
					temp1.find("#ruxue").attr("aa",data1.name);		 //设置属性，提取值
					temp1.find("#ruxue").attr("bb",data1.ID);		 //设置属性，提取值
					temp1.find("#chkao").attr("cc",data1.name);
					temp1.find("#chkao").attr("dd",data1.ID);
					$("#tb").append(temp1.html());
					});
			}else if(data.resultcode=="101"){
				$("#noData").text("没数据");
			}
		}
	});
	
	
/*	
 * 用于原来的页面的加载
 * 原页面存留
 * */
	 $("div.popClass label").click(function () {
	     if($(this).find("input").is(":checked")){
	         $("div.popClass label").removeClass("checked");
	         $(this).addClass("checked");
	     }else{
	         $(this).removeClass("checked");
	     }
	 });
	 $("div.tableList td a.allow").click(function () {
	     $(".blackBg").css("display","block");
	     $(".popTipsAdopt").css("display","block");
	 });
	 $("div.tableList td a.again").click(function () {
	     $(".blackBg").css("display","block");
	     $(".popTipsReturn").css("display","block");
	 });
	 $(".blackBg,span.popOut,button.popBack").click(function () {
	     $(".blackBg").css("display","none");
	     $(".popTips").css("display","none");
	 });
}
function pageDown(){
	$(".pageUp").attr("onclick","pageUp()");
	currentPage++;
	search(currentPage);
	if(currentPage>=pageNums){
	   $(".pageDown").removeAttr("onclick");
	}
}
function pageUp(){
	$(".pageDown").attr("onclick","pageDown()");
    currentPage--;
    search(currentPage);		
	if(currentPage==1){
		$(".pageUp").removeAttr("onclick");
	}
}
function pageFirst(){
	$(".pageUp").removeAttr("onclick");
	$(".pageDown").attr("onclick","pageDown()");
	currentPage=1;
	search(currentPage);
}
function pageLast(){
	$(".pageDown").removeAttr("onclick");
	$(".pageUp").attr("onclick","pageUp()");
	currentPage=pageNums;
	search(currentPage);
}	
