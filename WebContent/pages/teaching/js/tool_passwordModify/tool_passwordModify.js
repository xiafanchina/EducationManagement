/**
 * 验证旧密码是否正确
 * 失去焦点的时候提示
 **/
function OldPassword(){
	var passwordOld = $("#passwordOld").val();//获取前台输入的旧密码
	if(passwordOld == null){
		layer.msg('您的旧密码不能为空', {time: 1000,/*1s后自动关闭*/ icon: 5});
	}else{
		$.ajax({
			type:"post",
			dataType:"json",
			data:"passwordOld="+passwordOld,
			url:"../../getPasswordByEmailMethod.do",
			success:function(data){
				if(data.resultcode == "200"){
					
				}else{
					layer.msg('您的原始密码错误', {time: 1000,/*1s后自动关闭*/ icon: 5});
					$("#passwordOld").val("");
				}
			}
		});
	}
}
function tijiao(){
	var passwordOld = $("#passwordOld").val();//获取前台输入的旧密码
	var password = $("#password").val();//获取前台第一次输入密码
	var passwordConfirm = $("#passwordConfirm").val();//获取前台第二次输入密码
	if(password != passwordConfirm){
		layer.msg('两次密码不一样', {time: 1000,/*1s后自动关闭*/ icon: 2});
	}else if(passwordOld == passwordConfirm){
		layer.msg('新密码与原始密码一致', {time: 1000,/*1s后自动关闭*/ icon: 2});
	}else{
		$.ajax({
			type:"post",
			dataType:"json",
			data:"passwordConfirm="+passwordConfirm,
			url:"../../upDataPasswordByEmailMethod.do",
			success:function(data){
				if(data.resultcode == "200"){
					layer.msg('修改密码成功', {icon: 1});//默认3秒后自动消失
			    	//0-叹号;1-对号；2-叉号；3-问号；4-锁；5-伤心QQ；6-开心QQ
				}else{
					layer.msg('修改密码失败', {time: 1000,/*1s后自动关闭*/ icon: 2});
				}
			}
		});
	}
}