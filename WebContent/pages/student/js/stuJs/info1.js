var email; 
var name; 
var IDNo;
$(function(){//接收注册页面传过来的 email name IDNo的值
	var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	email =param.split(",")[0]; 
	name =unescape(param.split(",")[1]); 
	IDNo =param.split(",")[2]; 
	$("#email").text(email);
	$("#name").text(name);
	$("#idCard").text(IDNo);
	$.ajax({
		url:"../../Class/ClassInfo.do",
		type:"post",
		dataType:"json",
		async:false,
		success:function(data){
			console.log(data);
		$.each(data,function(i){
			$("#stuClass").append("<option value='"+data[i].class_id+"'>"+data[i].name+"</option>");
		 })
	}
   });
});


function info1(){
	var name=$("#name").text();
	var email=$("#email").text();
	var idcard=$("#idCard").text();
	var stuClass=$("#stuClass").val();
    var info=$("#info").val();	
    var sc=new Array();
    sc[0]=name;
    sc[1]=email;
    sc[2]=idcard;
    sc[3]=stuClass;
    sc[4]=info;
    var sc1=sc.join(",")
    turngetval=escape(sc1);  
    window.location.href="../../pages/student/studentPerfect02.html?aa="+turngetval;
}




