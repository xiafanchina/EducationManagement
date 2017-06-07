/**
 * 高级搜索
 */
var email;//接收到登录页面传递进来的邮箱
var roleId;//登录用户的角色id
var temp;
var currentPage;//当前页
var count;//总条数
var pageNumber;//总页数
var pageSize=4;//页面大小
$(function(){
	email=GetQueryString(email);
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
	var sex=$("select[name='sex']").val();
	var residentProvince=$("select[name='residentProvince']").val();
	var residentCity=$("select[name='residentCity']").val();
	var course=$("select[name='course']").val();
    var workingWay=$("select[name='workingWay']").val();
    var department=$("select[name='department']").val();
    var role=$("select[name='role']").val();
    var nation=$("select[name='nation']").val();
    var accountStatus=$("select[name='accountStatus']").val();
    $("#tablePage").val(currentPage);
	$("#tb").empty();
	$.ajax({
		  url:"../../gettecherList.do",
	      type:"post",
	      async:false,
	      dataType:"json",
	      data:"currentPage="+currentPage+"&pageSize="+pageSize+"&name="+name+"&course="+course+"&sex="+sex+"&residentProvince="+residentProvince+"&residentCity="+residentCity+"&workingWay="+workingWay+"&accountStatus="+accountStatus+"&nation="+nation+"&role="+role+"&department="+department+"&roleId="+roleId,
	      success:function(data){
	    	  $.each(data.list,function(i,data1){
	  	        temp.find("#id").text(data1.id);
	  	        temp.find("#name").text(data1.name);
	  	        temp.find("#sex").text(data1.sex);
	  	        if(data1.roleId==2){
	  	        	data1.roleId="教学总监";
	  	        }else if(data1.roleId==3){
	  	        	data1.roleId="班主任";
	  	        }else if(data1.roleId==4){
	  	        	data1.roleId="讲师";
	  	        }else if(data1.roleId==5){
	  	        	data1.roleId="助教";
	  	        }
	  	        temp.find("#role").text(data1.roleId);
	  	        temp.find("#department").text(data1.department);
	  	        temp.find("#workingPlace").text(data1.workingPlace);
	  	        temp.find("#course").text(data1.course);
	  	        temp.find("#workingWay").text(data1.workingWay);
	  	        temp.find("#phone").text(data1.phone);
	  	        temp.find("#qq").text(data1.qq);
	  	        temp.find("#email").text(data1.email);
	  	        temp.find("#idCard").text(data1.idCard);
	  	        temp.find("#nation").text(data1.nation);
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
                    location.href = "base_teacherTranslate.html?id=" + $(this).find("#id").text();
                }
            })
    $(".roleModify").click(function () {       
                location.href = "base_teacherRoleModify.html?id=" +$(this).parent().parent().find("#id").text();
                          })
      
}
/**
 * 点击获取下一页信息
 */
function pageDown(){
	
	currentPage++;
	splitPage(currentPage);
	
}
/**
 * 点击获取下一页信息
 */
function pageUp(){

    currentPage--;
	splitPage(currentPage);
	

}
/**
 * 点击获取首页信息
 */
function  pageTop(){
	currentPage=1;
	splitPage(currentPage); 
	 
}
/**
 * 点击获取尾页信息
 */
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
/**
 * 通过上个页面传递过来的变量名称，获取上个页面传递过来的值
 */
function GetQueryString(name)
    {
       var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
       var r = window.location.search.substr(1).match(reg);
       if(r!=null)return  unescape(r[2]); return null;
    }

/**
 * 省市二级级联
 */
$(function(){
	var province=["北京市","天津市","上海市","重庆市","河北省","山西省","内蒙古","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西","海南省","四川省","贵州省","云南省","西藏","陕西省","甘肃省","青海省","宁夏","新疆","香港","澳门","台湾省"];
    var city=[["东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县","延庆镇"],
              ["和平区","河东区","河西区","南开区","河北区","红桥区","塘沽区","汉沽区","大港区","东丽区","西青区","津南区","北辰区","武清区","宝坻区","蓟县","宁河县","芦台镇","静海县","静海镇"],
              ["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县","城桥镇"],
              ["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","合川市","永川区市","江津市","南川市","綦江县","潼南县","铜梁县","大足县","荣昌县","璧山县","垫江县","武隆县","丰都县","城口县","梁平县","开县","巫溪县","巫山县","奉节县","云阳县","忠县","石柱土家族自治县","彭水苗族土家族自治县","酉阳土家族苗族自治县","秀山土家族苗族自治县"], 
              ["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","保定市","衡水市","沧州市","邢台市","邯郸市"],
              ["太原市","朔州市","大同市","阳泉市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市"],
              ["呼和浩特市","包头市","乌海市","赤峰市","通辽市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","锡林郭勒盟","阿拉善盟"],
              ["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","本溪市","辽阳市","鞍山市","丹东市","大连市","营口市","盘锦市","锦州市","葫芦岛市"],
              ["长春市","白城市","松原市","吉林市","四平市","辽源市","通化市","白山市","延边州"],
              ["哈尔滨市","齐齐哈尔市","七台河市","黑河市","大庆市","鹤岗市","伊春市","佳木斯市","双鸭山市","鸡西市","牡丹江市","绥化市","大兴安岭地区"], 
              ["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市"],
              ["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市"], 
              ["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","巢湖市","池州市","宣城市"],
              ["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市"],
              ["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市"],
              ["济南市","青岛市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市"],
              ["郑州市","开封市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","济源市"],
              ["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","随州市","省直辖县级行政单位","恩施州"],
              ["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西州"],
              ["广州市","深圳市","清远市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市","惠州市","东莞市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"],
              ["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","河池市","来宾市","贺州市"], 
              ["海口市","三亚市","省直辖行政单位"],
              ["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","宜宾市","攀枝花市","巴中市","达州市","资阳市","眉山市","雅安市","阿坝州","甘孜州","凉山州"],
              ["贵阳市","六盘水市","遵义市","安顺市","毕节地区","铜仁地区","黔东南州","黔南州","黔西南州"], 
              ["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","德宏州","怒江州","迪庆州","大理州","楚雄州","红河州","文山州","西双版纳州"],
              ["拉萨市","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"], 
              ["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","榆林市","安康市","商洛市"], 
              ["兰州市","嘉峪关市","白银市","天水市","武威市","酒泉市","张掖市","庆阳市","平凉市","定西市","陇南市","临夏州","甘南州"], 
              ["西宁市","海东地区","海北州","海南州","黄南州","果洛州","玉树州","海西州"],
              ["银川市","石嘴山市","吴忠市","固原市","中卫市"],
              ["乌鲁木齐市","克拉玛依市","自治区直辖县级行政单位","喀什地区","阿克苏地区","和田地区","吐鲁番地区","哈密地区","克孜勒苏柯州","博尔塔拉州","昌吉州","巴音郭楞州","伊犁州","塔城地区","阿勒泰地区"],
              ["香港特别行政区"],
              ["澳门特别行政区"],
              ["台北","高雄","台中","花莲","基隆","嘉义","金门","连江","苗栗","南投","澎湖","屏东","台东","台南","桃园","新竹","宜兰","云林","彰化"]]; 

    for(var i=0;i<province.length;i++){
    	$("select[name='residentProvince']").append("<option value='"+province[i]+"'>" +province[i]+ "</option>");
    }
    $("select[name='residentProvince']").change(function(){
    	$("select[name='residentCity']").empty();
    	$("select[name='residentCity']").append("<option value=''>" +"请选择城市"+ "</option>");
         var residentProvince=$("select[name='residentProvince']").val();
    	$("select[name='residentProvince'] option").each(function(i){
    	if($(this).attr("value")==residentProvince){
    			for(var j=0;j<city[i-1].length;j++){
    			$("select[name='residentCity']").append("<option value='"+city[i-1][j]+"'>" +city[i-1][j]+ "</option>");
    			
    			}
    		}
    		
    		
    	})
    	
    })
   
    
})

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
	
