/**
 * 用于新增考试
 */
$(function () {
	var cid = getUrlParam('cid');//url的第一个参数，即原始班级一的班级id
	var sid = getUrlParam('sid');//url的第二个参数，即原始班级二的班级id
	
	$.ajax({
		url:"../../showScById.do",
		type:"post",
		dataType:"json",
		data:"cid="+cid+"&sid="+sid,
		success:function(data){
			$("span:eq(0)").text(data[0].cname);
			$("span:eq(1)").text(data[0].lname);
			$("span:eq(2)").text(data[0].tname);
			$("span:eq(3)").text(data[0].sname);
		}
	})
	/**
	 * 提交按钮，提交后数据进入数据库
	 * */
    $('.submit').click(function(){
    	var score = $('.name1:eq(0)').val();//考试成绩
    	var date = $('.datainp').val();//考试日期
    	var comment = $('.name1:eq(1)').val();
    	var remark = $('.name1:eq(2)').val();
    	$.ajax({
    		url:"../../addExam.do",
    		type:"post",
    		dataType:"json",
    		data:"cid="+cid+"&sid="+sid+"&score="+score+"&date="+date+"&comment="+comment+"&remark="+remark,
    		success:function(data){
    			console.log(data);
    			if(data=="Error"){
    				alert("添加失败");
    			}else{
    				alert("添加成功");
    			}
    			
    			history.back();
    		}
    	});   	
    })
    
    $('.cancleSubmit').click(function(){
    	history.back();
    })  
     
    
})
/**
 * 获得URL栏数据的方法
 * @param name
 * @returns
 */
function getUrlParam(name)
	{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
	}
