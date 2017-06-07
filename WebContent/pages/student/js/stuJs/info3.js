function info3(){
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];  
    var  showval= getval.split("=")[1];
    keyword=unescape(showval);
	var showval2=new Array();
    showval2[0]=$("#education").val();
    showval2[1]=$("#school").val();
    showval2[2]=$("#major").val();
    showval2[3]=$("#enrollmentYear").val();
    var sc1=showval2.toString();
	var sc2=keyword+","+sc1;
	$.ajax({
		type:"post",
		url:"../../info3/info3.do",
		dataType:"json",
		data:"showval="+sc2,
		success:function(data){
			if(data){
				alert("提交成功");
				window.location.href="../../pages/student/1.html";
			}else{
				alert("提交失败，请重新提交");
			}	
		}
	})
}