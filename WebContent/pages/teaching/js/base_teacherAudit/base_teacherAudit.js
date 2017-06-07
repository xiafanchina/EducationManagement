/**
 * 进行分页查询
 */
var pageSize = 4;	// 每页显示的记录条数
var currentPage=1;		// 当前页
var totalNums;			// 总数据量
var pageNums;		// 总页数
var temp;			// 存储表结构
$(function(){
	 temp = $("#tb").clone();				// 克隆表结构
	  $("#tb").empty();                     // 清空表结构	
	 
	  findPage(currentPage);	
	 // 分页查询
	
});

function findPage(currentPage){
	$.ajax({
		url:"../../findAll.do",
		type:"post",
		data:"currentPage="+currentPage+"&pageSize="+pageSize,
		async:false,
		dataType:"json",
		success:function(data){
			
			totalNums = data.totalNums;
			pageNums = totalNums%pageSize==0?Math.floor(totalNums/pageSize):Math.ceil(totalNums/pageSize);
			$("#totalNums").text(totalNums);	// 显示数据量总条数
			$("#pageSize").text(pageSize);		// 显示页面大小
			$("#pageNums").text(pageNums);		// 显示页面数量
			$("#inputPage").val(currentPage);	// 显示当前页面
			
			$("#tb").empty();
			$.each(data.list,function(i,data1){// 填充表格
				var temp1=temp.clone();
				temp1.find("#row").text(i+1);
				temp1.find("#tr").attr("testid",data1.id);
				temp1.find("#Teacher_id").text(data1.id);
				temp1.find("#Teacher_email").text(data1.email);
				temp1.find("#Teacher_name").text(data1.name);
				temp1.find("#Teacher_sex").text(data1.sex);
				temp1.find("#Teacher_workingPlace").text(data1.workingPlace);
				temp1.find("#Teacher_course").text(data1.course);
				temp1.find("#Teacher_date").text(data1.submitDate);
				
				$("#tb").append(temp1.html());
			})
			}
	});
	// 如果当前页面等于总共页面关闭翻页按钮
	if(pageNums==currentPage){
		$(".pageUp").removeAttr('onclick');
		
		$(".pageDown").removeAttr('onclick');
	}
	// 点击某行进行跳转
	
	$("tr").on("click",(function () {
		
        if($(this).attr("id") != undefined){
        	
            location.href = "base_teacherAuditTranslate.html?dataId=" + $(this).attr("testid");
        }
    })
    )
}
/**
 * 首页
 */
function first(){
	currentPage=1;			// 设置当前页面为1
	findPage(currentPage);
	$(".pageUp").removeAttr('onclick');			// 禁用上一页
   if(pageNums==currentPage){    // 如果当前页面等于总共页面关闭下页按钮
		
		$(".pageDown").removeAttr('onclick');
	}else{
		
		$(".pageDown").attr('onclick',"pageDown()");// 启用下一页
	}
}

function pageUp(){
	$(".pageDown").attr('onclick',"pageDown()");	// 启用下一页
	currentPage--;			// 当前页面减1
	findPage(currentPage);
	// 如果当前页面等于1，禁用上一页
	if(currentPage==1){
		$(".pageUp").removeAttr('onclick');
	}
}

function pageDown(){
	$(".pageUp").attr('onclick',"pageUp()");		// 启用上一页
	currentPage++;			// 当前页面加1
	findPage(currentPage);
	// 如果当前页面等于最后一页，禁用下一页
	if(currentPage==pageNums){
		$(".pageDown").removeAttr('onclick');
	}
}

function last(){
	currentPage=pageNums;		// 设置当前页面为最后一页
	findPage(currentPage);
	$(".pageDown").removeAttr('onclick');		// 禁用下一页
	$(".pageUp").attr('onclick',"pageUp()");	// 启用上一页
}

function turnPage(input){
	var page=$(input).val();		// 取文本框值
	var reg = /^[1-9]*$/;			// 1-9数字正则
	if(page!=""){					// 非空判断
		if(reg.test(page))			// 正则校验
			if(page>pageNums){ 	// 如果输入的值大于总页数，跳转到末页
				last();
			}
			else if(page==1){
				first();
				
			}
			else{					// 否则跳转到输入页
				currentPage=page;
				findPage(currentPage);
				$(".pageUp").attr('onclick',"pageUp()");
				$(".pageDown").attr('onclick',"pageDown()");
			}
	}
}