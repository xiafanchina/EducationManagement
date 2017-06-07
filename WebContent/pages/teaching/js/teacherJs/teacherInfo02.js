
/**
 * 教师完善信息第二步
 */
function teacherInfo02(){
	var sex = $("#sex").val();//性别
	var nation = $("input[name='nation']:checked").val();//民族
	var birthPlace = $("#birthPlace").val();//籍贯
	var political = $("#political").val();//政治面貌
	var education = $("#education").val();//学历
	var school1 = $("#school1").val();//省份
	var school3 = $("#school3").val();//学校
	var school = school1+school3;//毕业院校
	var major = $("#major").val();//专业
	
	$.ajax({
		url:'../../teacherInfo02.do',
		data:'sex='+sex+'&nation='+nation+'&birthPlace='+birthPlace+'&political='+political+'&education='+education+'&school='+school+'&major='+major,
		type:'post',
		dataType:'json'
	});
}