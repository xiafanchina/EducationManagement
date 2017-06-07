
var pageSize = 4;	//每页显示的记录条数
var curPage=1;		//当前页
var count;			//最后页  总数据量
var pageNums;		//总页数
var temp			//表结构
/**
 * 根据传入的当前页面，分页查询结果
 */
function flipPage(currentpage){
	$.ajax({
		url:"../../queryAll.do",
		type:"get",
		data:"currentPage="+currentpage+"&pageSize="+pageSize,
		dataType:"json",
		success:function(data){
			console.log(data);
			count = data.count;
			pageNums = count%pageSize==0?Math.floor(count/pageSize):Math.ceil(count/pageSize);
			$("#totalNums").text(count);		//显示数据量总条数
			$("#pageSize").text(pageSize);		//显示页面大小
			$("#pageNums").text(pageNums);		//显示页面数量
			$("#inputPage").val(currentpage);	//显示当前页面
			$("#tb").empty();					//清空表结构
			//填充表格
			$.each(data.list,function(i,data1){
				temp.find("#row").text(i+1);
				temp.find("#dataid").text(data1.role_id);
				temp.find("#name").text(data1.role_name);
				temp.find("#info").text(data1.role_info);
				if(data1.role_status>0){
					temp.find("#status").text("正常");
				}else{
					temp.find("#status").text("停用");
				}
				var href = "base_roleModify.html?role_id="+data1.role_id;
				temp.find("#role_id a").attr("href",href);
				$("#tb").append(temp.html());
			})
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
				flipPage(curPage);
				$(".pageUp").attr('onclick',"pageUp()");
				$(".pageDown").attr('onclick',"pageDown()");
			}
		}
	}
}