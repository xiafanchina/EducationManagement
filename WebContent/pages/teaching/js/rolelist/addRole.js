var selected;	//存储a标签结构
//页面加载
$(function(){
	var temp = $("#R1").clone();			//克隆checekbox结构
    selected = $("#baseinfo a").clone();	//克隆a标签结构
    $("div.roleResultContent a").remove();	//清除a标签
    //查询当前角色所具有的功能
    $.ajax({
    	url:"../../queryFunction.do",
    	type:"get",
    	data:"roleId=1",
    	dataType:"json",
    	success:function(data){
    		$("#R1").empty();
    		console.log(data);
    		//遍历加载当前角色功能
    		$.each(data,function(i,data1){
    			var temp1 = temp.clone();
    			temp1.find("#check").attr("value",data1);
    			temp1.find("#lab").append(data1);
    			if(data1=="修改密码"){
    				temp1.find("#check").attr("onclick","addfun(this)");
					$("#R3").append(temp1.html());
				}else{
					temp1.find("#check").attr("onclick","add(this)");
    				$("#R1").append(temp1.html());
				}
    		})
    	}
    })
})
//checkbox基础信息添加
function add(label){
	var select = selected.clone();		//克隆a标签
    var fun = $(label).val();			//获取当前被点击的checkbox
    if ($(label).is(":checked")) {		//如果checkbox被选中，添加到已选功能
    	select.text(fun);
    	$("#baseinfo").append(select);
    }else{								//如果checkbox被取消，从已选功能中删除
    	var a =$("#baseinfo a");
    	for(var i=0;i<a.length;i++){
    		if(a.eq(i).text()==fun){
    			a.eq(i).remove();
    		}
    	}
    }
 }
//checkbox系统工具添加
function addfun(label){			
	var select = selected.clone();			//克隆a标签
    var fun = $(label).val();				//获取当前被点击的checkbox
    if ($(label).is(":checked")) {			//如果checkbox被选中，添加到已选功能
    	select.text(fun);
    	$("#systemtools").append(select);
    }else{
    	var a =$("#systemtools a");			//如果checkbox被取消，从已选功能中删除
    	console.log(a);
    	for(var i=0;i<a.length;i++){
    		if(a.eq(i).text()==fun){
    			a.eq(i).remove();
    		}
    	}
    }
 }
 //提交按钮
 function sub(){
	var fun =$("#baseinfo a");		//基础信息的所有元素
	var sysfun =$("#systemtools a");//系统工具的所有元素
	var array = new Array();
	//遍历基础信息，添加进数组
	for(var i=0;i<fun.length;i++){
 		array [i]=fun.eq(i).text();
 	}
	//遍历系统工具，追加进数组
	for(var i=0;i<sysfun.length;i++){
		array.push(sysfun.eq(i).text())
	}
	var role_status = $("input[name='roleState']:checked").val();	//账号状态
	var role_info = $("#role_info").val();							//角色备注
	var role_name = $("#role_name").val();						//角色名称
	//添加角色
	$.ajax({
		url:"../../addRole.do",
    	type:"post",
    	data:"role_name="+role_name+"&role_status="+role_status+"&role_info="+role_info+"&funarry="+array,
    	dataType:"json",
    	success:function(data){
    		if(data.resultcode=='200'){
    			alert("新建角色成功！~~");
    		}
    	}
	})
 }