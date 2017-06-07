
$(function(){//通过HTML页面之间传值接收（解析url）

		var thisURL = decodeURI(document.URL);
		var  getval =thisURL.split('?')[1];  
		var score= getval.split("=")[1]; 
		$("#score").text(score);  
});	


