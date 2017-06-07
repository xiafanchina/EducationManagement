var showval;//指定学生ID的变量
$(function(){
	//解析url获取学生ID（showval）
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];  
	showval= getval.split("=")[1];
});
function addJobInfo(){
	var com_name = $("#com_name").val();
	var com_phone = $("#com_phone").val();
	var address1 = $("#province option:selected").text();
	var address2 = $("#city option:selected").text();
	var address3 = $("#address3").val();
	var address = address1+address2+address3;
	var job = $("#job").val();
	var salary = $("#salary").val();
	$.ajax({
		url:'../../addJobInfo/addStudentJobInfo.do',
		data:'student_id='+showval+'&com_name='+com_name+'&com_phone='+com_phone+'&address='+address+'&job='+job+'&salary='+salary,
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.resultcode=="200"){
				alert("新增成功！");
				history.back();
				layer.msg(data.resultmsg,{icon:6,time:2000});
			}else{
				alert("新增失败！");
				history.back();
				layer.msg(data.resultmsg,{icon:6,time:2000});
			}
		}
	});
}