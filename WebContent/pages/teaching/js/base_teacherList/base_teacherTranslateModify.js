/**
 * 修改教师个人档案
 */
$(function(){
	var id=GetQueryString("id");
	$.ajax({
		url:"../../gettecherListById.do",
		type:"post",
		data:"id="+id,
		dataType:"json",
		success:function(data){
		  $("#id").text(data.teacher.id);
		  $("#email").text(data.teacher.email);
		  $("#idCard").text(data.teacher.idCard);
		  $(".name").text(data.teacher.name);
		  $(".name").text(data.teacher.name);
		  $("#workingPlace").val(data.teacher.workingPlace);
		  $("#major").val(data.teacher.major);
		  $("#phone").val(data.teacher.phone);
		  $("#qq").val(data.teacher.qq);
		  $("#school").val(data.teacher.school);
		//  alert(typeof(data.teacher.accountStatus))
		  if(data.teacher.accountStatus==1){
			  $("#stauts label").eq(0).attr("class","radio checked");
		  }else if(data.teacher.accountStatus==2){
			  $("#stauts label").eq(1).attr("class","radio checked");
		  }
		  if(data.teacher.nation=="汉族"){
			  $("#nation label").eq(0).attr("class","radio checked");
			}else if(data.teacher.nation=="满族"){
			  $("#nation label").eq(1).attr("class","radio checked");
			}else if(data.teacher.nation=="回族"){
			 $("#nation label").eq(2).attr("class","radio checked");
			}else{
				$("#nation label").eq(3).attr("class","radio checked");
				$("#otherNation").text(data.teacher.nation);
			}
		 $("#department").find(".select-set").text(data.teacher.department);
		 $("#course").find(".select-set").text(data.teacher.course);
		 $("#workingWay").find(".select-set").text(data.teacher.workingWay);
		 $("#sex").find(".select-set").text(data.teacher.sex);
		 $("#political").find(".select-set").text(data.teacher.political);
		 $("#education").find(".select-set").text(data.teacher.education);
		 $("#birthProvince").find(".select-set").text(data.teacher.birthPlace);

	  }
	})
	
})
function GetQueryString(name)
    {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
    }
/**
 * 执行该函数修改教师的信息
 */
function submit(){
	 var id=$("#id").text();
	// var accountStatus=$("input[name=accountStatus]:checked").val();
	 var accountStatus=$("#stauts").find(".radio.checked").text();
	 if(accountStatus=="正常"){
		 accountStatus=1;
	 }else{
		 accountStatus=2;
	 }
	 var department= $("#department").find(".select-set").text();
	 var course=$("#course").find(".select-set").text();
	 var workingWay= $("#workingWay").find(".select-set").text();
	 var workingPlace=$("#workingPlace").val()
	 var sex= $("#sex").find(".select-set").text();
	 var phone=$("#phone").val();
	 var qq=$("#qq").val();
	 var nation=$("#nation").find(".radio.checked").text();
	 var birthPlace=$("select[name=birthProvince]").val();
	 var political=$("#political").find(".select-set").text();
	 var education=$("#education").find(".select-set").text();
	 var school=$("#school").val();
	 var major=$("#major").val();
     $.ajax({					
    	 url:"../../teacherTranslateModify.do",
    	 type:"post",
    	 dataType:"json",
    	 data:"id="+id+"&accountStatus="+accountStatus+"&department="+department+"&workingWay="+workingWay+"&workingPlace="+workingPlace+"&sex="+sex+"&phone="+phone+"&qq="+qq+"&nation="+nation+"&birthPlace="+birthPlace+"&political="+political+"&education="+education+"&school="+school+"&major="+major+"&course="+course,
         success:function(data){
        	 if(data=="200"){
        		 alert("修改成功");
        	 }
         }
     })
}

/**
 * 省市二级级联
 */
$(function(){
	var province=["北京","天津","上海","重庆","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","香港","澳门","台湾"];
    for(var i=0;i<province.length;i++){
    	$("select[name='birthProvince']").append("<option value='"+province[i]+"'>" +province[i]+ "</option>");
    }
   
})
