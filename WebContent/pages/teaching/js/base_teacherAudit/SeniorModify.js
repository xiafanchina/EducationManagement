/**
 * 修改
 */
var searchStr = location.search;// 获取超链接除了地址以外的其他字符串
searchStr = searchStr.substr(1);// 由于searchStr属性值包括“?”，所以除去该字符
var searchs = searchStr.split("&");// 将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
var parameter = searchs[0].split("=");// 获得第一个参数和值
var id = parameter[1];
alert(id);
// 加载被选中的待审核教师的详细信息,使用id(主键)选中
function init() {
	$.ajax({
		type : "post",
		dataType : "json",
		url : "../../init.do",
		data : "id=" + id,
		async:false,
		success : function(data) {
			// 往静态页面里面赋值
			$("#name1").html(data.name);
			$("#name2").html(data.name);
			$("#id").html(data.id);
			$("#yx").html(data.email);
			$("#sfzh").html(data.idCard);
			if (data.accountStatus == 1) {
				$("#status1").attr("class","radio checked");
			} else {
				$("#status2").attr("class","radio checked");
			}
			$("#bm").find(".select-set").text(data.department);
			$("#zw").find(".select-set").text(data.role.role_name);
			$("#dkfx").find(".select-set").text(data.course);
			$("#bgfs").find(".select-set").text(data.workingWay);
 			$("#czd").find(".select-set").text(data.workingPlace);
 			$("#jg").find(".select-set").text(data.birthPlace);
			$("#zzmm").find(".select-set").text(data.political);
			$("#xl").find(".select-set").text(data.education);
			$("#sex").find(".select-set").text(data.sex);
 			if(data.nation=="汉族"){
 				$("#nation1").attr("class","radio checked");
 			}			
 			else if(data.nation=="满族"){
 				$("#nation2").attr("class","radio checked"); 				
 			}
 			else if(data.nation=="回族"){
 				$("#nation3").attr("class","radio checked");				
 			}
 			else{
 				$("#nation4").attr("class","radio checked");				
 			}
 		
 			
		}
	})
}

function tijiao(){	
//	var department= $("option[name='province']:selected").val();
//	alert(department);
//	var accountStatus= $('input[name="accountStatus"]:checked').val();//修改后的值
//   alert(accountStatus);
   var a = $("#zt").find(".radio checked").text();
   console.log(a);
 alert($("#status1").html());
//	var nation= $("input[name='nation']:checked").val();
//	$.ajax({
//		type : "post",
//		dataType : "json",
//		url : "../../tijiao.do",
//		data : "id=" + id,
//		async:false,
//		success : function(data) {		
//		}
//	
//	})
	
	
}