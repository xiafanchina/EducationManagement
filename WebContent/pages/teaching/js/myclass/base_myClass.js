var pageSize = 4;	//每页显示的记录条数
var curPage=1;		//当前页
var count;			//最后页  总数据量
var pageNums;		//总页数
var temp			//表结构

$(function(){
	temp = $("#tb").clone();		//克隆表结构
    first();						//跳转到分页查询首页
});

/**
 * 分页及查询所有班级
 */
function splitPage(p){
	$.ajax({
		url:"../../selectAll.do",
		type:"post",
		dataType:"json",
		data:"pageCount="+curPage+"&pageSize="+pageSize,
		success:function(data){
			count = data.count;
			pageNums = count%pageSize==0?Math.floor(count/pageSize):Math.ceil(count/pageSize);
			$("#totalNums").text(count);		//显示数据量总条数
			$("#pageSize").text(pageSize);		//显示页面大小
			$("#pageNums").text(pageNums);		//显示页面数量
			$("#inputPage").val(curPage);	//显示当前页面
			var temp1=temp.clone();
			$("#tb").empty();
		//	$("#classCount").text(data.count);
		//	$("#sumCount").text(count2);
			$.each(data.list,function(i,data1){
				temp1.find("tr").attr("dataId",data1.class_id);
				temp1.find("#class_id").text(data1.class_id);
				temp1.find("#name").text(data1.name);
				temp1.find("#lesson").text(data1.lesson);
				temp1.find("#lecturer").text(data1.lecturer);
				temp1.find("#assistant").text(data1.assistant);
				temp1.find("#teacher").text(data1.teacher);
				temp1.find("#class_num").text(data1.class_num);
				temp1.find("#class_start").text(data1.class_start);
				temp1.find(".classAgo").text(data1.status);
				$("#tb").append(temp1.html());
				console.log(temp1.find("tr").attr("dataId"));

			});
			
			//传值
			$("tr").dblclick(function () {
				if($(this).attr("dataId") != undefined){
					location.href = "base_myClassDetails.html?dataId=" + $(this).attr("dataId");
				}
			});
		}
	});
}


function first(){
	curPage=1;			//设置当前页面为1
	splitPage(curPage);
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
	splitPage(curPage);
	//如果当前页面等于1，禁用上一页
	if(curPage==1){
		$(".pageUp").removeAttr('onclick');
	}
}

function pageDown(){
	$(".pageUp").attr('onclick',"pageUp()");		//启用上一页
	curPage++;			//当前页面加1
	splitPage(curPage);
	//如果当前页面等于最后一页，禁用下一页
	if(curPage==pageNums){
		$(".pageDown").removeAttr('onclick');
	}
}

function last(){
	curPage=pageNums;		//设置当前页面为最后一页
	splitPage(curPage);
	if(curPage==pageNums){
		$(".pageUp").removeAttr('onclick');	
		$(".pageDown").removeAttr('onclick');
	}else{
		$(".pageDown").removeAttr('onclick');			//禁用下一页
		$(".pageUp").attr('onclick',"pageDown()");//启用上一页
	}
}
/**
 * 文本框跳转页面
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
				splitPage(curPage);
				$(".pageUp").attr('onclick',"pageUp()");
				$(".pageDown").attr('onclick',"pageDown()");
			}
		}
	}
}

	