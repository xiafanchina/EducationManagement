var email;
var name;
var IDNo;
$(function(){//通过HTML页面之间传值接收（解析url）

		var thisURL = decodeURI(document.URL);
		var  getval =thisURL.split('?')[1];  
		var param= getval.split("=")[1]; //解析URL获取email name IDNo
		 email =param.split(",")[0]; 
		 name =unescape(param.split(",")[1]); 
		 IDNo =param.split(",")[2]; 
		var score =param.split(",")[3]; 
		$("#score").text(score);  
});	


function wanShanInfo(){
	var param = email+","+name+","+IDNo;//把email 姓名 身份证 一起传到下个页面
	encodeURI(encodeURI(param));
	var url="../../pages/student/studentPerfect01.html?param="+param;
	encodeURI(url);
	location.href=url;
}
