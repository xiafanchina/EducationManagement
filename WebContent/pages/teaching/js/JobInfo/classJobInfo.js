var temp;
$(function(){
	temp = $("#tb").clone();
	$("#tb").empty();
});
var pageSize = 4;//每页行数
var pageIndex = 1;//页码
var pageSum;//总页数
var count;//总行数
function showMsg(p){
	pageIndex = p;
	$.ajax({
		url:'../../classJobInfo/showMsg.do',
		data:'pageIndex='+pageIndex+"&pageSize="+pageSize,
		type:'post',
		dataType:'json',
		success:function(data){
			count = data.count;
			pageSum = count%pageSize==0?count/pageSize:Math.ceil((count/pageSize));
			$("#tb").empty();
			var temp1 = temp.clone();
			$.each(data.classInfoList,function(i,ClassInfo){
				temp1.find("tr").attr("dataId",ClassInfo.class_id);
				temp1.find("#num").text(i+pageSize*(pageIndex-1)+1);
				temp1.find("#class_id").text(ClassInfo.class_id);
				temp1.find("#class_name").text(ClassInfo.name);
				temp1.find("#lesson").text(ClassInfo.lesson);
				temp1.find("#lecturer").text(ClassInfo.lecturer);
				temp1.find("#assistant").text(ClassInfo.assistant);
				temp1.find("#teacher").text(ClassInfo.teacher);
				temp1.find("#class_num").text(ClassInfo.class_num);
				temp1.find("#job_num").text(ClassInfo.job_num);
				if(ClassInfo.class_num!=0){
					temp1.find("#ratio").text((Number)((ClassInfo.job_num/ClassInfo.class_num).toFixed(2)*100)+"%");
				}else{
					temp1.find("#ratio").text("0%");
				}
				$("#tb").append(temp1.html());
			});
			//双击后把班级ID传入下个页面
            $("tr").dblclick(function () {
                if($(this).attr("dataId") != undefined){
                    location.href = "base_employmentInformationStudent.html?dataId=" + $(this).attr("dataId");
                }
            });
            $("div.tablePage span:eq(0)").text(count);
        	$("div.tablePage span:eq(1)").text(pageSize);
        	$("div.tablePage span:eq(2)").text(pageSum);
        	$("div.tablePage input").val(pageIndex);
		}
	});
}
//分页方法
function showPage(param){
	switch(param){
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
