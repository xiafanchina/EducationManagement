/**
 * 教师角色修改
 */
var id;
$(function(){
	var roleId=GetQueryString("roleId");
	id=GetQueryString("id");
	$.ajax({
		url:"../../gettecherListById.do",
		type:"post",
		dataType:"json",
		data:"id="+id,
		success:function(data){
			$("#id").text(id);
			$("#name").text(data.teacher.name);
			if(data.teacher.roleId==1){
			  $("#role").text("校长");
			}else if(data.teacher.roleId==2){
		      $("#role").text("教学总监");
			}else if(data.teacher.roleId==3){
			  $("#role").text("班主任");
			}else if(data.teacher.roleId==4){
			  $("#role").text("讲师");
			}else{
			  $("#role").text("助教");
			}
		}
	})
	if(roleId==2){
	$("#director").hide();
	}
})
function RoleModify(){
	var roleId=$("input:checked").val();
	$.ajax({
		url:"../../RoleModify.do",
		type:"post",
		dataType:"json",
		data:"id="+id+"&roleId="+roleId,
		success:function(){
			
		}
	})
	alert("修改成功");
}


function GetQueryString(name)
    {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
    }
