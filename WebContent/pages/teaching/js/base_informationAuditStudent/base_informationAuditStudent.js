/**
 * 查询
 */
var pageSize = 5; // 每页显示的记录条数
var curPage = 1; // 当前页
var count; // 最后页 总数据量
var pageNums; // 总页数
var temp; // 表结构
/**
 * 根据传入的当前页面，分页查询结果
 */

$(document).ready(function() {
	temp = $("#sd").clone(); // 克隆表结构
	StuPage(curPage); // 分页查询
	/**
	 * 获取数据的总数
	 */
	$.ajax({
		url : "../../studentDatasum.do",//发送studentDatasum.do的请求
		type : "post",
		dataType : "json",
		success : function(data2) {
			count = data2;//将获得的数据总数赋值给count变量
			pageNums = count % pageSize == 0 ? Math.floor(count / pageSize): Math.ceil(count / pageSize);			
			//计算出页面数量
			$("#totalNums").text(count); // 显示数据量总条数
			//$("#pageSize").text(pageSize); // 显示页面大小
			$("#pageNums").text(pageNums); //显示页面数量
		}
	});
});

/**
 * 获得数据并显示在页面上
 */
function StuPage(curPage){
	$("#sd").empty(); // 清空表结构
	$.ajax({
		url : "../../studentList.do",//发出studentliat.do的请求
		type : "post",
		data:"pageCount="+curPage,
		async : false,
		dataType : "json",
		success : function(data) {
			 //填充表格
			$.each(data, function(i, data1) {
				temp.find("tr").attr("dataId", data1.id);//给学生id赋值
				temp.find("#ids").text(i + 1);//页面中学生标号
				temp.find("#id").text(data1.id);//给学生id赋值
				temp.find("#name").text(data1.stus_name);//名字
				if (data1.sex == 1) {//判断性别
					temp.find("#sex").text("男");
				} else {
					temp.find("#sex").text("女");
				}
				temp.find("#id_card").text(data1.phone);//班级号
				temp.find("#phone").text(data1.id_card);//手机号
				temp.find("#submit_date").text(data1.submit_date);//提交时间
				$("#sd").append(temp.html());
			});
			$("#demo_input").val(curPage); // 显示当前页面
			console.log(curPage);
		}
	});
	$("div.tableList > table tr").dblclick(
			function() {
				if ($(this).attr("dataId") != undefined) {
					location.href = "base_studentAuditTranslate.html?dataId="
							+ $(this).attr("dataId");//将对应的学生的id传递到下一个页面
				}
			});
}
/**
 * 首页
 */
function first(){
	// 如果当前页面等于1 当前页就是第一页
	if (curPage == 1) {
		return;
	}
	curPage = 1; // 设置当前页面为1
	StuPage(curPage);
}
/**
 * 上一页
 */
function pageUp(){
	// 如果当前页面等于1 当前页就是第一页
	if (curPage == 1) {
		return;
	}
	curPage--; // 当前页面减1
	StuPage(curPage);
}
/**
 *下一页
 */
function pageDown(){
	// 如果当前页面等于最后一页，当前页就是最后一页
	if (curPage == pageNums) {
		return;
	}
	curPage++; // 当前页面加1
	StuPage(curPage);
}
/**
 * 尾页
 */
function last(){
	// 如果当前页面等于最后一页，当前页就是最后一页
	if (curPage == pageNums) {
		return;
	}
	curPage = pageNums; // 设置页面为最后一页
	StuPage(curPage);
}