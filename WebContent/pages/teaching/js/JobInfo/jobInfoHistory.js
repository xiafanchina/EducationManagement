var showval;//学生ID指定变量
$(function(){
	//解析URL获取学生ID（showval）
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];  
	showval= getval.split("=")[1]; //解析URL获取学生ID
	$.ajax({
		url:'../../jobInfoHistory/showStudentMsg.do',
		data:'student_id='+showval,
		type:'post',
		dataType:'json',
		success:function(data){
			$.each(data,function(i,student){
				$("#student_id").text(student.id);
				$("#name").text(student.stus_name);
				var sex = student.sex;
				if(sex==1){
					$("#sex").text('男');
				}else{
					$("#sex").text('女');
				}
				$("#phone").text(student.phone);
				$("#qq").text(student.qq);
				$("#email").text(student.email);
			});
		}
	});
});
var temp;
var pageIndex = 1;//页码
var pageCount = 2;//每页行数
var count;//总行数
var pageSum;//总页数
$(function(){
	temp = $("#tb").clone();
	$("#tb").empty();
});
function showMsg(p){
	pageIndex = p;
	$.ajax({
		url:'../../jobInfoHistory/showStudentJobInfoAll.do',
		data:'student_id='+showval+'&pageIndex='+pageIndex+'&pageCount='+pageCount,
		type:'post',
		dataType:'json',
		success:function(data){
			count = data.count;
			pageSum = count%pageCount==0?count/pageCount:Math.ceil(count/pageCount);
			$("#tb").empty();
			var temp1 = temp.clone();
			temp1.find("tr").attr("dataId",showval);
			$.each(data.jobInfoList,function(i,studentJob){
				temp1.find("tr").attr("jobId",studentJob.job_id);
				temp1.find("#num").text(i+pageCount*(pageIndex-1)+1);
				temp1.find("#submit_date").text(studentJob.submit_date);
				temp1.find("#com_name").text(studentJob.com_name);
				temp1.find("#com_phone").text(studentJob.com_phone);
				temp1.find("#address").text(studentJob.address);
				temp1.find("#job").text(studentJob.job);
				temp1.find("#salary").text(studentJob.salary);
				temp1.find("#entry_date").text(studentJob.entry_date);
				temp1.find("#submit_person").text(studentJob.submit_person);
				$("#tb").append(temp1.html());
			});
			//点击进入增加就业信息页面，把学生ID传过去
			$("div.buttonGather > button.add").click(function () {
                location.href = "base_employmentAdd.html?dataId=" + temp1.find("tr").attr("dataId");
            });
            $("div.buttonGather > button.back").click(function () {
                history.back();
            });
            //点击进入修改页面，把工作ID传过去
            $("img").click(function(){
            	location.href = "base_employmentModify.html?jobId=" + temp1.find("tr").attr("jobId");
            });
			$("div.tablePage span:eq(0)").text(count);
			$("div.tablePage span:eq(1)").text(pageCount);
			$("div.tablePage span:eq(2)").text(pageSum);
			$("div.tablePage input").val(pageIndex);
		}
	});
}
//分页方法
function showPage(param){
	switch (param) {
		case 'top':
			pageIndex = 1;
			showMsg(pageIndex);
			break;
		case 'up':
			if(pageIndex>1){
				pageIndex = pageIndex-1;
				showMsg(pageIndex);
			}else{
				pageIndex = 1;
				showMsg(pageIndex);
			}
			break;
		case 'down':
			if(pageIndex<pageSum){
				pageIndex = pageIndex+1;
				showMsg(pageIndex);
			}else{
				pageIndex = pageSum;
				showMsg(pageIndex);
			}
			break;
		case 'bottom':
			pageIndex = pageSum;
			showMsg(pageIndex);
			break;
	}
}