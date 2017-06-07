/**
 * 审核个人详细信息
 */
var searchStr = location.search;//获取超链接除了地址以外的其他字符串
searchStr = searchStr.substr(1);// 由于searchStr属性值包括“?”，所以除去该字符
var searchs = searchStr.split("&");// 将searchStr字符串分割成数组，数组中的每一个元素为一个参数和参数值
var parameter = searchs[0].split("=");// 获得第一个参数和值
var id = parameter[1];
//加载被选中的待审核教师的详细信息,使用id(主键)选中
function init() {
	$.ajax({
		type : "post",
		dataType : "json",
		url : "../../init.do",
		data : "id=" + id,
		success : function(data) {			
         //往静态页面里面赋值
			$("#name1").html(data.name);
			$("#name2").html(data.name);
			if(data.accountStatus==1){				
				$("#zt").text("正常");
			}else{
				$("#zt").text("冻结");
			}	
			$("#id").html(data.id);
			$("#bm").html(data.department);
			$("#zw").html(data.role.role_name);
			$("#dkfx").html(data.course);			
			$("#bgfs").html(data.workingWay);
			$("#czd").html(data.workingPlace);
			$("#sjh").html(data.phone);
			$("#qq").html(data.qq);
			$("#mz").html(data.nation);
			$("#jg").html(data.birthPlace);
			$("#zzmm").html(data.political);
			$("#xl").html(data.education);
			$("#byyx").html(data.school);
			$("#sxzy").html(data.major);
			$("#yx").html(data.email);
			$("#sfzh").html(data.idCard);
			$("#sex").html(data.sex);			

		}
	})

}