
/**
 * 教师完善信息第三步
 */
function teacherInfo03(){
	var phone = $("#phone").val();//电话
	var qq = $("#qq").val();//qq
	var department = $("#department").val();//部门
	var roleId = $("#roleId").val();//职务
	var course = $("#course").val();//代课方向
	var workingWay = $("#workingWay").val();//办公方式
	var workingPlace1 = $("#residentProvince").val();//省份
	var workingPlace2 = $("#residentCity").val();//市区
	var workingPlace = workingPlace1+workingPlace2;//常驻地
	if(phone==''){
		alert("手机号不能为空");
		return;
	}
	if(qq==''){
		alert("qq不能为空");
		return;
	}
	if(department==''){
		alert("部门不能为空");
		return;
	}
	if(roleId==''){
		alert("职务不能为空");
		return;
	}
	if(course==''){
		alert("代课方向不能为空");
		return;
	}
	if(workingWay==''){
		alert("办公方式不能为空");
		return;
	}
	if(workingPlace1==''){
		alert("常住地不能为空");
		return;
	}
	if(workingPlace2==''){
		alert("常住地不能为空");
		return;
	}
	$.ajax({
		url:'../../teacherInfo03.do',
		data:'phone='+phone+'&qq='+qq+'&department='+department+'&roleId='+roleId+'&course='+course+'&workingWay='+workingWay+'&workingPlace='+workingPlace,
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.resultcode=="200"){
				//alert(data.resultmsg);
				location.href="../../pages/teaching/tch_registerPerfectWait.html";
			}else{
				alert("系统正在维护");
			}
		}
	});
}