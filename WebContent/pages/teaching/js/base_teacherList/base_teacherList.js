/**
 * 简单搜索
 */

var email;//接收到登录页面传递进来的邮箱
var roleId;//登录用户的角色id
var temp;
var currentPage;//当前页
var count;//总条数
var pageNumber;//总页数
var pageSize=4;//页面大小
$(function(){
	$.ajax({
		url:"../../getRoleIdByEmail.do",
		type:"post",
		async:false,
		dataType:"json",
		data:"email="+email,
		success:function(data){
			roleId=data;
		}		
	})	
	temp=$("#tb").clone();
    $("#tb").empty();
    currentPage=1;
    splitPage(currentPage);
    $("#pageSize").text(pageSize);
   
})
/**
 * 传入currentPage,显示当前currentPage页的信息
 */
function splitPage(currentPage){
	
	if(currentPage==1){
		 $(".pageUp").removeAttr("onclick");
		 $(".pageTop").removeAttr("onclick");
	}else{
		$(".pageUp").attr("onclick","pageUp()");
		$(".pageTop").attr("onclick","pageTop()");
	}
	var name=$("#tname").val();
	var course=$("select[name='course']").val();
	var residentProvince=$("select[name='residentProvince']").val();
    var residentCity=$("select[name='residentCity']").val();
    var sex=$("select[name='sex']").val();
    var workingWay=$("select[name='workingWay']").val();
    var accountStatus=$("select[name='accountStatus']").val();
    $("#tablePage").val(currentPage);
	$("#tb").empty();
	$.ajax({
		  url:"../../gettecherList.do",
	      type:"post",
	      dataType:"json",
	      async:false,
	      data:"currentPage="+currentPage+"&pageSize="+pageSize+"&name="+name+"&course="+course+"&sex="+sex+"&residentProvince="+residentProvince+"&residentCity="+residentCity+"&workingWay="+workingWay+"&accountStatus="+accountStatus+"&roleId="+roleId,
	      success:function(data){
	    	  $.each(data.list,function(i,data1){
	  	        temp.find("#id").text(data1.id);
	  	        temp.find("#name").text(data1.name);
	  	        temp.find("#sex").text(data1.sex);
	  	        temp.find("#workingPlace").text(data1.workingPlace);
	  	        temp.find("#course").text(data1.course);
	  	        temp.find("#workingWay").text(data1.workingWay);
	  	        temp.find("#phone").text(data1.phone);
	  	        temp.find("#qq").text(data1.qq);
	  	        if(data1.accountStatus==1){
	  	        	data1.accountStatus="正常";
	  	        }else if(data1.accountStatus==2){
	  	        	data1.accountStatus="已冻结";
	  	        }
	  	        temp.find("#status").text(data1.accountStatus);
	  	         $("#tb").append(temp.html());
	  	    })
            count=data.count;
	    	if(count%pageSize==0){
	    		pageNumber=count/pageSize;
	    	}else{
	    		pageNumber=Math.ceil(count/pageSize);
	    	}
	    	if(pageNumber==0){
	    		  $("#tablePage").val(pageNumber);
	    		  $(".pageDown").removeAttr("onclick");
	    		  $(".pageBottom").removeAttr("onclick");
	    	}else if(currentPage==pageNumber){
	    		$(".pageDown").removeAttr("onclick");
    			$(".pageBottom").removeAttr("onclick");
	    	}else{
	    		$(".pageDown").attr("onclick","pageDown()");
	    		$(".pageBottom").attr("onclick","pageBottom()");
	    	}
	    	$("#count").text(count);
	    	$("#pageNumber").text(pageNumber);
	    
	    }
		
	})
	$(".tr").dblclick(function () {
        		if($(this).attr("dataId") != undefined){
                    location.href = "base_teacherTranslate.html?id=" + $(this).find("#id").text()+"&roleId="+roleId;
                }
            })
      $(".roleModify").click(function () {       
                location.href = "base_teacherRoleModify.html?id=" +$(this).parent().parent().find("#id").text()+"&roleId="+roleId;
                          })
}

function pageDown(){	
	currentPage++;
	splitPage(currentPage);	
}

function pageUp(){

    currentPage--;
	splitPage(currentPage);
}

function  pageTop(){
	currentPage=1;
	splitPage(currentPage); 
	 
}

function pageBottom(){
	
	currentPage=pageNumber;
   splitPage(pageNumber);
   
}
/**
 * 点击回车键执行函数
 */
function keydownEvent() {

    var e = window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode == 13 ) {

    	currentPage=$("#tablePage").val();
    	if(currentPage<=pageNumber){
    		splitPage(currentPage);
    	}
    }

}


//导出列表
     function tabletoExcel(mytalbe){	
	// getExplore()返回1，说明是不是Google Chrome、Firefox、Opera、Safari，那么就认为是IE了。（网上流传的判断IE的js代码好多在Win7无法使用。。。。。。
     	if (getExplorer() == 1) {
     	    //是IE的话，就调用toExcel()方法来导出Excel表格，不依赖微软的Excel产品。(toExcel()方法的定义见下面)
     		toExcel(''+mytalbe, '');
     		return;
     	}
     	// 不是IE的话就调用下面的代码导出Excel文件
     	//获得id为mytable的table的html元素
     	var table=document.getElementById(mytalbe+"");
     	// 克隆（复制）此table元素，这样对复制品进行修改（如添加或改变table的标题等），导出复制品，而不影响原table在浏览器中的展示。
     	table = table.cloneNode(true);
     	//下面五行代码就是用来改变table中的某些信息的，不需要的话可以注释，或修改。
     	var name=$("#cur_title_date").text()+"学生信息导出列表";
     	var caption_orig = table.getElementsByTagName("caption");
     	$(caption_orig).text(name);
     	
     	
     	// 下面的代码才是真正用来将html table导出Excel表格（我从stackoverflow上看到的，修改了一点点，不会再有中文乱码问题了。）
     	var uri = 'data:application/vnd.ms-excel;base64,'
     		  , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table style="vnd.ms-excel.numberformat:@">{table}</table></body></html>'
     		  , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))); }
     		  , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
     		if (!table.nodeType) table = document.getElementById(table);
     		var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
     		window.location.href = uri + base64(format(template, ctx));
     		
     }


     // 判断浏览器类型 返回1表示IE
     function getExplorer() {
     	var explorer = window.navigator.userAgent;
     	if (explorer.indexOf("MSIE") >= 0) {
     		return 1;
     	} else if (explorer.indexOf("Firefox") >= 0) {
     		return 0;
     	} else if (explorer.indexOf("Chrome") >= 0) {
     		return 0;
     	} else if (explorer.indexOf("Opera") >= 0) {
     		return 0;
     	} else if (explorer.indexOf("Safari") >= 0) {
     		return 0;
     	} else {
     		return 1;
     	}
     }

     // 下面的所有函数代码都是为了在IE上能导出Excel表格（不会出现js栈溢出等eggache的problem。。IE is so eggache!!!!
     function toExcel(inTblId, inWindow) {
     	try {
     		var allStr = "";
     		var curStr = "";
     		if (inTblId != null && inTblId != "" && inTblId != "null") {
     			curStr = getTblData(inTblId, inWindow);
     		}
     		if (curStr != null) {
     			allStr += curStr;
     		} else {
     			alert("您要导出的表不存在！");
     			return;
     		}
     		var fileName = getExcelFileName();
     		doFileExport(fileName, allStr);
     	} catch (e) {
     		alert("导出发生异常:" + e.name + "->" + e.description + "!");
     	}
     }
     function getTblData(inTbl, inWindow) {
     	var caption_str="";
     	var rows = 0;
     	var tblDocument = document;
     	if (!!inWindow && inWindow != "") {
     		if (!document.all(inWindow)) {
     			return null;
     		} else {
     			tblDocument = eval(inWindow).document;
     		}
     	}
     	var curTbl = tblDocument.getElementById(inTbl).cloneNode(true);
     	if(inTbl=="mytable") {
     		curTbl.getElementsByTagName("th")[0].innerHTML="XXX的编号";
     		caption_str=$("#cur_title_date").text()+"XXX信息统计表";
     	} else if(inTbl=="detail_table") {
     		curTbl.getElementsByTagName("th")[0].innerHTML="XXXX";
     		caption_str=curTbl.getElementsByTagName("caption")[0].innerHTML.split("<br")[0];
     	}
     	
     	if (curTbl.rows.length > 65000) {
     		alert('源行数不能大于65000行');
     		return false;
     	}
     	if (curTbl.rows.length <= 1) {
     		alert('数据源没有数据');
     		return false;
     	}
     	var outStr = caption_str+" \n";
     	if (curTbl != null) {
     		for (var j = 0; j < curTbl.rows.length; j++) {
     			for (var i = 0; i < curTbl.rows[j].cells.length; i++) {
     				if (i == 0 && rows > 0) {
     					outStr += " \t";
     					rows -= 1;
     				}
     				var tc = curTbl.rows[j].cells[i];
     				if (j > 0 && tc.hasChildNodes()
     						&& tc.firstChild.nodeName.toLowerCase() == "input") {
     					if (tc.firstChild.type.toLowerCase() == "checkbox") {
     						if (tc.firstChild.checked == true) {
     							outStr += "是" + "\t";
     						} else {
     							outStr += "否" + "\t";
     						}
     					}
     				} else {
     					outStr += " " + curTbl.rows[j].cells[i].innerText + "\t";
     				}
     				if (curTbl.rows[j].cells[i].colSpan > 1) {
     					for (var k = 0; k < curTbl.rows[j].cells[i].colSpan - 1; k++) {
     						outStr += " \t";
     					}
     				}
     				if (i == 0) {
     					if (rows == 0 && curTbl.rows[j].cells[i].rowSpan > 1) {
     						rows = curTbl.rows[j].cells[i].rowSpan - 1;
     					}
     				}
     			}
     			outStr += "\r\n";
     		}
     	} else {
     		outStr = null;
     		alert(inTbl + "不存在!");
     	}
     	return outStr;
     }
     function getExcelFileName() {
     	var d = new Date();
     	var curYear = d.getYear();
     	var curMonth = "" + (d.getMonth() + 1);
     	var curDate = "" + d.getDate();
     	var curHour = "" + d.getHours();
     	var curMinute = "" + d.getMinutes();
     	var curSecond = "" + d.getSeconds();
     	if (curMonth.length == 1) {
     		curMonth = "0" + curMonth;
     	}
     	if (curDate.length == 1) {
     		curDate = "0" + curDate;
     	}
     	if (curHour.length == 1) {
     		curHour = "0" + curHour;
     	}
     	if (curMinute.length == 1) {
     		curMinute = "0" + curMinute;
     	}
     	if (curSecond.length == 1) {
     		curSecond = "0" + curSecond;
     	}
     	var fileName = "XX统计" + curYear + curMonth + curDate + curHour + curMinute
     			+ curSecond + ".xlsx";
     	return fileName;
     }
     function doFileExport(inName, inStr) {
     	var xlsWin = null;
     	if (!!document.all("glbHideFrm")) {
     		xlsWin = glbHideFrm;
     	} else {
     		var width = 1;
     		var height = 1;
     		var openPara = "left=" + (window.screen.width / 2 + width / 2)
     				+ ",top=" + (window.screen.height + height / 2)
     				+ ",scrollbars=no,width=" + width + ",height=" + height;
     		xlsWin = window.open("", "_blank", openPara);
     	}
     	xlsWin.document.write(inStr);
     	xlsWin.document.close();
     	xlsWin.document.execCommand('Saveas', true, inName);
     	xlsWin.close();
     }
	
