 //获取当前页面的url,以及某个参数的值
 var currentUrl = window.location.search;
 var loccurrentUrl = currentUrl.substring(currentUrl.lastIndexOf('=')+1, currentUrl.length);
 
//查询具体某个人的详细信息
 $(function(){
	 $.ajax({
		 url:"../../selectstudentbyId.do",
		 type:"post",
		 dataType:"json",
		 data:"stuId="+loccurrentUrl,
		 success:function(data){
			$.each(data,function(i,data1){
				if(data1.stu_status=="1"){
					$("#status").text("新入学");
				}else if(data1.stu_status=="2"){
					$("#status").text("正在上课");
				}else if(data1.stu_status=="3"){
					$("#status").text("休学中");
				}else if(data1.stu_status=="4"){
					$("#status").text("已毕业");
				}
				if(data1.account_status==1){
					$("#account_status").text("正常");
				}else{
					$("#account_status").text("冻结");
				}
				$("#id").text(data1.id);
				$("#class_id").text(data1.class_id);
				$("#class_place").text(data1.class_place);
				$("#class_name").text(data1.class_name);
				$("#email").text(data1.email);
				$("#id_card").text(data1.id_card);
				$("#name").text(data1.stus_name);
				$("#name1").text(data1.stus_name);
				if(data1.sex=="1"){
					$("#sex").text("男");
				}else{
					$("#sex").text("女");
				}
				$("#phone").text(data1.phone);
				$("#qq").text(data1.qq);
				$("#nation").text(data1.nation);
				$("#brith_place").text(data1.brith_place);
				$("#political").text(data1.political);
				$("#education").text(data1.education);
				$("#school").text(data1.school);
				$("#major").text(data1.major);
				$("#schooldate").text(data1.schooldate);
			});
		 }
	 });
 });
 
 //layer弹出层，弹出是否修改成功
 function updateStatus() {
	var status = $("input:radio:checked").val();
	if(status=="新入学"){
		stu_status=1;
	}else if(status=="正在上课"){
		stu_status=2;
	}else if(status=="休学中"){
		stu_status=3;
	}else if(status="已毕业"){
		stu_status=4;
	}
	$.ajax({
		 url:"../../updateStudentStatus.do",
		 type:"post",
		 dataType:"json",
		 data:"stu_status="+stu_status+"&id="+loccurrentUrl,
		 success:function(data){
			 $(".popTips").hide();
			console.log(data);
			 if(data.resultcode=="200"){
				 layer.msg('修改成功',{time:1000,icon:1},function(){
					    window.location.reload() // 父页面刷新
		                var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		                parent.layer.close(index);
		            });
			 }else{	
				 layer.msg('修改失败',{icon: 1});//默认3秒后自动消失
			    	//0-叹号;1-对号；2-叉号；3-问号；4-锁；5-伤心QQ；6-开心QQ
				 return;
			 }
		 }
	});
}

 //自带
 $(document).ready(function () {
    $("div.buttonGather > button.back").click(function () {
        location.href = "base_myClassDetails.html";
    	
    });
    $("div.buttonGather > button.studentState").click(function () {
        $(".blackBg").css("display","block");
        $(".popTips").css("display","block");
    });
    
    $(".blackBg,span.popOut,button.popBack").click(function () {
        $(".blackBg").css("display","none");
        $(".popTips").css("display","none");
    });
    $("div.popStudent label").click(function () {
        if($(this).find("input").is(":checked")){
            $("div.popStudent label").removeClass("checked");
            $(this).addClass("checked");
        }else{
            $(this).removeClass("checked");
        }
    });
 });
 

