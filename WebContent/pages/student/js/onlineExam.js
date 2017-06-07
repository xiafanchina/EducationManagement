var temp;
var choice;
var email;
var name;
var no;
$(function () {
    $("#submit").click(function(){
    	submit();
    })
    var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	no =param.split(",")[0]; 
	$.ajax({
		type:"post",
		url:"../../Exam/ShowExamByNo.do",
		dataType:"json",
		data:"no="+no,
		success:function(data){
			temp1=$('#qaa').clone();
			$('#qaa').empty();
			lid=data[0].lesson_id;
			$('#ids').val(lid);
			$.each(data,function(i,data1){
				temp1.find(".words:eq(1)").attr('name',i+1);
				temp1.find(".words:eq(2)").attr('name',i+1);
				temp1.find(".words:eq(3)").attr('name',i+1);
				temp1.find(".words:eq(4)").attr('name',i+1);
				temp1.find(".words:eq(0)").text(data1.question);
				temp1.find(".answer:eq(0)").text(data1.answer1);
				temp1.find(".answer:eq(1)").text(data1.answer2);
				temp1.find(".answer:eq(2)").text(data1.answer3);
				temp1.find(".answer:eq(3)").text(data1.answer4);				
				$("#qaa").append(temp1.html());
			})
		}
	})
    
})

$("div.timing time").ready(function () {
    timedCount(150,3);
});
function timedCount(Countdown,Assignment) {
    $("div.timing time").text(Countdown + "分钟");
    if(Countdown > 0){
        Countdown1 = Countdown-1
        Assignment1 = Assignment-1
        if(Assignment1 < 0){
            $("div.timing button").removeClass("prohibit");
        }
        setTimeout("timedCount(Countdown1,Assignment1)",1000)
    }else{
    	submit();
    }
}
function submit(){
	var num1=$("input[name='1']:checked").val();
	var num2=$("input[name='2']:checked").val();
	var num3=$("input[name='3']:checked").val();
	var num4=$("input[name='4']:checked").val();
	var num5=$("input[name='5']:checked").val();
	var num6=$("input[name='6']:checked").val();
	var num7=$("input[name='7']:checked").val();
	var num8=$("input[name='8']:checked").val();
	var num9=$("input[name='9']:checked").val();
	var num10=$("input[name='10']:checked").val();
	var lid = $('#ids').val();//获得隐藏域中的id字符
	$.ajax({
		type:"post",
		url:"../../Exam/Exam.do",
		dataType:"json",
		data:"idcard="+no+"&lesson_id="+lid+"&type_id=0&num1="+num1+"&num2="+num2+"&num3="+num3
			+"&num4="+num4+"&num5="+num5+"&num6="+num6+"&num7="+num7+"&num8="+num8+"&num9="+num9+"&num10="+num10,
		success:function(data){
			window.location.href="../../pages/student/scoreResult.html?score="+data;
			
		}
	})	
    
}