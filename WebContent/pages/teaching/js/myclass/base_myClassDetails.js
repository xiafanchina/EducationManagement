 //获取当前页面的url,以及某个参数的值
 var currentUrl = window.location.search;
 var loccurrentUrl = currentUrl.substring(currentUrl.lastIndexOf('=')+1, currentUrl.length);
 
 //查询班级详细信息
$(function(){
	 $.ajax({
		 url:"../../selectAllById.do",
		 type:"post",
		 dataType:"json",
		 data:"dataId="+loccurrentUrl+"&pageCount="+curPage+"&pageSize="+pageSize,
		 success:function(data){
			$.each(data,function(i,data1){
				$("#class_id").text(data1.class_id);
				$("#name").text(data1.name);
				$("#lesson").text(data1.lesson);
				$("#lecturer").text(data1.lecturer);
				$("#assistant").text(data1.assistant);
				$("#teacher").text(data1.teacher);
				$("#class_num").text(data1.class_num);
				if(data1.course_start!=null||data1.course_start!=""){
					$("#course_start").text(data1.course_start);
				}
				if(data1.course_end!=null||data1.course_end!=""){
					$("#course_end").text(data1.course_end);
				}
				$("#class_place").text(data1.class_place);
				$(".classAgo").text(data1.status);
			    if(data1.status=="开课前"){
			    	$(".popClassState,#warning,#button,#popClassAgo1").hide();
			    }else{
			    	if(data1.status=="已结课"){
			    		$("#warning1,#button1,#popClassAgo2,.popClassState,.popSubmit,.popBack").hide();
			    	}
			    	$("#warning1,#button1,#popClassAgo2").hide();
			    }
			});
		 }
	 });
});
var pageSize = 4;	//每页显示的记录条数
var curPage=1;		//当前页
var count;			//最后页  总数据量
var pageNums;		//总页数
var temp;			//表结构
 $(function(){
	temp = $("#tb").clone();		//克隆表结构
	first();						//跳转到分页查询首页
 });
 
//查询某个班级所有学生的ajax
function flipPage(p){
 	$.ajax({
 		url:"../../selectStudentByclsaaId.do",
 		type:"post",
 		dataType:"json",
 		data:"dataId="+loccurrentUrl,
 		data:"dataId="+loccurrentUrl+"&pageCount="+curPage+"&pageSize="+pageSize,
 		async:false,
 		success:function(data){
			console.log(data);
			count = data.count;
			pageNums = count%pageSize==0?Math.floor(count/pageSize):Math.ceil(count/pageSize);
			$("#totalNums").text(count);		//显示数据量总条数
			$("#pageSize").text(pageSize);		//显示页面大小
			$("#pageNums").text(pageNums);		//显示页面数量
			$("#inputPage").val(curPage);	//显示当前页面
			var temp1=temp.clone();
			$("#tb").empty();
			$.each(data.studentList,function(i,data2){
				temp1.find("tr").attr("dataId",data2.id);
				temp1.find("#id").text(data2.id);
				temp1.find("#email").text(data2.email);
				temp1.find("#name").text(data2.stus_name);
				if(data2.sex=="1"){
					temp1.find("#sex").text("男");
				}else{
					temp1.find("#sex").text("女");
				}
				temp1.find("#phone").text(data2.phone);
				temp1.find("#school").text(data2.school);
				//alert(data2.stu_status);
				//alert(typeof(data2.stu_status));
				if(data2.stu_status=="1"){
					temp1.find("#sta").text("新入学");
				}else if(data2.stu_status=="2"){
					temp1.find("#sta").text("正在上课");
				}else if(data2.stu_status=="3"){
					temp1.find("#sta").text("停课中");
				}else if(data2.stu_status=="4"){
					temp1.find("#sta").text("已毕业");
				}
				$("#tb").append(temp1.html());
				
			});
			  //传值
			  $("tr").dblclick(function () {
		        if($(this).attr("dataId") != undefined){
		            location.href = "base_myClassStudent.html?dataId=" + $(this).attr("dataId");
		        }
			});
 		}
 	});
 }
 

function first(){
	curPage=1;			//设置当前页面为1
	flipPage(curPage);
	if(curPage==pageNums){
		$(".pageUp").removeAttr('onclick');	
		$(".pageDown").removeAttr('onclick');
	}else{
		$(".pageUp").removeAttr('onclick');			//禁用上一页
		$(".pageDown").attr('onclick',"pageDown()");//启用下一页
	}
}

function pageUp(){
	$(".pageDown").attr('onclick',"pageDown()");	//启用下一页
	curPage--;			//当前页面减1
	flipPage(curPage);
	//如果当前页面等于1，禁用上一页
	if(curPage==1){
		$(".pageUp").removeAttr('onclick');
	}
}

function pageDown(){
	$(".pageUp").attr('onclick',"pageUp()");		//启用上一页
	curPage++;			//当前页面加1
	flipPage(curPage);
	//如果当前页面等于最后一页，禁用下一页
	if(curPage==pageNums){
		$(".pageDown").removeAttr('onclick');
	}
}

function last(){
	curPage=pageNums;		//设置当前页面为最后一页
	flipPage(curPage);
	if(curPage==pageNums){
		$(".pageUp").removeAttr('onclick');	
		$(".pageDown").removeAttr('onclick');
	}else{
		$(".pageDown").removeAttr('onclick');			//禁用下一页
		$(".pageUp").attr('onclick',"pageDown()");//启用上一页
	}
}
/**
 *文本框跳转页面
 */
function turnPage(input){
	var page=$(input).val();		//取文本框值
	var reg = /^[1-9]*$/;			//1-9数字正则
	if(page!=""){					//非空判断
		if(reg.test(page)){			//正则校验
			if(page>pageNums)		//如果输入的值大于总页数，跳转到末页
				last();
			else if(page==1){		//如果输入的值等于1，跳转到首页
				first();
			}else {					//否则跳转到输入页面，启用上下页
				curPage=page;
				flipPage(curPage);
				$(".pageUp").attr('onclick',"pageUp()");
				$(".pageDown").attr('onclick',"pageDown()");
			}
		}
	}
}
 //把班级开课前状态改为班级已开课状态
 function updateHaveclass(){
	 $.ajax({
		 url:"../../updateHaveclass.do",
		 type:"post",
		 dataType:"json",
		 data:"class_id="+loccurrentUrl,
		 success:function(data){
			 $(".popTips").hide();
			 if(data.resultcode=="200"){
				 layer.msg('修改成功',{time:1000,icon:1},function(){
					    window.location.reload(); // 父页面刷新
		                var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		                parent.layer.close(index);
		            });
			 }else{	
				 layer.msg('修改失败',{icon: 1});//默认3秒后自动消失
			    	//0-叹号;1-对号；2-叉号；3-问号；4-锁；5-伤心QQ；6-开心QQ
				 return;
			 }
		 }
	 });
 }
 
 //更改班级状态
 function updateClassStadus(){
	 var status = $("input:radio:checked").val();
	 $.ajax({
		 url:"../../updateClassStadus.do",
		 type:"post",
		 dataType:"json",
		 data:"class_id="+loccurrentUrl+"&status="+status,
		 success:function(data){
			 $(".popTips").hide();
			 if(data.resultcode=="200"){
				 layer.msg('修改成功',{time:1000,icon:1},function(){
					    window.location.reload() // 父页面刷新
		                var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		                parent.layer.close(index);
		            });
			 }else{	
				 layer.msg('修改失败',{icon: 1});//默认3秒后自动消失
				 return;
			 }
		 }
	 });
 }
 
//导出excel的控件。使用要求必须安装Excel电子表格软件，同时浏览器须使用“ActiveX 控件，目前测试用ie浏览器。
 function PrintTableToExcel(objTab)
 {
   try 
   {
     var xls = new ActiveXObject( "Excel.Application" );
   }
   catch(e) 
   {
     alert( "要打印该表，您必须安装Excel电子表格软件，同时浏览器须使用“ActiveX 控件”，您的浏览器须允许执行控件。请点击【帮助】了解浏览器设置方法！");
     return false;
   }
   xls.visible = true;
   var xlBook = xls.Workbooks.Add;
   var xlsheet = xlBook.Worksheets(1);
   var x = 1;
   var y = 1;
   for (var i = 0; i < objTab.rows.length; i++)
   {
     y = 1;
     for (var j = 0; j < objTab.rows[i].cells.length; j++)
     {
       xlsheet.Cells(x, y).Value = objTab.rows[i].cells[j].innerHTML;
       xlsheet.Cells(x, y).Borders.LineStyle = 1;
       y++;
     }
     x++;
   }
   xlsheet.Columns.AutoFit; //自动适应大小
   return;
 }
 
 //自带
 $(document).ready(function () {
	    $("div.buttonGather > button.back").click(function () {
	        location.href="base_myClass.html";
	    });
	    $("div.popClassState label").click(function () {
	        if($(this).find("input").is(":checked")){
	            $("div.popClassState label").removeClass("checked");
	            $(this).addClass("checked");
	        }else{
	            $(this).removeClass("checked");
	        }
	    });
	    $("div.buttonGather > button.modify").click(function () {
	        $(".blackBg").css("display","block");
	        $(".popTips").css("display","block");
	    });
	    $(".blackBg,span.popOut,button.popBack").click(function () {
	        $(".blackBg").css("display","none");
	        $(".popTips").css("display","none");
	    });
	});
 
 (function ($) {
     $(document).ready(function () {
         $("div.tableList").mCustomScrollbar({
             scrollButtons: {
                 enable: false,
                 scrollType: "continuous",
                 scrollSpeed: 20,
                 scrollAmount: 40
             },
             horizontalScroll: true
         });
     });
 })(jQuery);
 