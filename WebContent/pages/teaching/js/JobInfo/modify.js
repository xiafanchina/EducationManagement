var showval;//工作ID指定变量
$(function (){
	//解析URL获取工作ID(showval)
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];  
	showval= getval.split("=")[1]; 
});

function modifyMsg(){
	var com_name = $("#com_name").val();
	var com_phone = $("#com_phone").val();
	var address1 = $("#province option:selected").text();
	var address2 = $("#city option:selected").text();
	var address3 = $("#address3").val();
	var address = address1+address2+address3;
	var job = $("#job").val();
	var salary = $("#salary").val();
	if(com_name==''){
		layer.msg('公司名称不能为空',{icon:6,time:2000});
		return;
	}
	if(com_phone==''){
		layer.msg('公司电话不能为空',{icon:6,time:2000});
		return;
	}
	if(address3==''){
		layer.msg('详细地址不能为空',{icon:6,time:2000});
		return;
	}
	if(job==''){
		layer.msg('职位不能为空',{icon:6,time:2000});
		return;
	}
	if(salary==''){
		layer.msg('薪资不能为空',{icon:6,time:2000});
		return;
	}
	$.ajax({
		url:'../../classJobInfo/modifyMsg.do',
		data:'job_id='+showval+'&com_name='+com_name+'&com_phone='+com_phone+'&address='+address+'&job='+job+'&salary='+salary,
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.resultcode=="200"){//修改成功
				alert("修改成功！");
				history.back();
				layer.msg(data.resultmsg,{icon:6,time:2000});
			}else{//修改失败
				alert("修改失败！");
				history.back();
				layer.msg(data.resultmsg,{icon:6,time:2000});
			}
		}
	});
}