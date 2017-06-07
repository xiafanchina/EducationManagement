function info2(){
	var thisURL = document.URL;    
	var  getval =thisURL.split('?')[1];   
	var showval= getval.split("=")[1];
	keyword=unescape(showval); 
	var showval1=new Array();
	showval1[0]=$("#sex").val();
	showval1[1]=$("#phone").val();
	showval1[2]=$("#QQNo").val();
	showval1[3]=$("input[name='nation']:checked").val();
	showval1[4]=$("#birthplace").val();
	showval1[5]=$("#political").val();
	var sc1=showval1.toString();
	var sc2=keyword+","+sc1;
	turngetval=escape(sc2);
	window.location.href="../../pages/student/studentPerfect03.html?cc="+turngetval;
	
}