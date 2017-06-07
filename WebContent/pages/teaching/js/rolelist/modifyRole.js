var role_id;//存储被编辑角色的role_id
$(function(){
	role_id = location.search.substr(9); //获取url被编辑角色的id
    var temp = $("#R1").clone();			//克隆checekbox结构
    selected = $("#baseinfo a").clone();	//克隆a标签结构
    $("div.roleResultContent a").remove();	//清除a标签
  //加载当前登录角色所拥有的功能
    $.ajax({
    	url:"../../queryFunction.do",
    	type:"get",
    	data:"roleId=1",
    	dataType:"json",
    	success:function(data){
    		$("#R1").empty();			//清除基础信息
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
    //加载被编辑角色的功能
    $.ajax({
    	url:"../../showRole.do",
		type:"get",
		data:"role_id="+role_id,
		dataType:"json",
		success:function(data){
			console.log(data);
			$("#role_name").val(data.role.role_name);	//设置角色name
			if(data.role.role_status=="1"){				//设置角色状态
				$("input[type=radio][name=roleState][value=1]").attr("checked",'checked');		
			}
			else{
				$("input[type=radio][name=roleState][value=0]").attr("checked",'checked');		
			}
			$("#role_info").val(data.role.role_info);	//设置角色备注信息
			var R1 = $("#R1 li");		//基础信息的li集合
			var R3 = $("#R3 li");		//系统工具的li集合
			//遍历基础信息集合，再遍历data.functions中的功能名称和基础信息的功能名称相同，则添加到已选功能中
			for(var i=0;i<R1.length;i++){
				$.each(data.functions,function(j,data1){
					if(R1.eq(i).find("#check").val()==data1){
						R1.eq(i).find("#check").attr("checked","checked");
            			add(R1.eq(i).find("#check"));
        			}
				});
			}
			//同理，遍历系统工具集合，添加到已选功能中
			for(var i=0;i<R3.length;i++){
				$.each(data.functions,function(j,data1){
					if(R3.eq(i).find("#check").val()==data1){
						R3.eq(i).find("#check").attr("checked","checked");
        				addfun(R3.eq(i).find("#check"));
					}
				})
			}
		}
    });
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
	//传入controller修改角色
	$.ajax({
		url:"../../modifyRole.do",
		type:"post",
		data:"role_id="+role_id+"&role_name="+role_name+"&role_status="+role_status+"&role_info="+role_info+"&funarry="+array,
		dataType:"json",
		success:function(data){
			if(data=="200"){
				alert("啦啦啦！角色修改成功！")
			}else{
				alert("啊哦！角色修改遇到了点小问题！请稍后再试！")
			}
		}
	})
}
