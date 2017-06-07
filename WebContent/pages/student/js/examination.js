var temp;
var choice;
var email;
var name;
var IDNo;
$(function () {
    $("#submit").click(function(){
    	submit();
    })
    var thisURL = decodeURI(document.URL);
	var  getval =thisURL.split('?')[1];  
	var param= getval.split("=")[1]; //解析URL获取email name IDNo
	email =param.split(",")[0]; 
	name =unescape(param.split(",")[1]); 
	IDNo =param.split(",")[2];
	choice =unescape(param.split(",")[3]);
	if(choice=="JAVA方向"){
		choice=1;
	}else if(choice=="C++方向"){
		choice=2;
	}else if(choice=="IOS方向"){
		choice=3;
	}else if(choice=="Android方向"){
		choice=4;
	}
	$.ajax({
		type:"post",
		url:"../../Exam/ShowExam.do",
		dataType:"json",
		data:"type=0"+"&lesson="+choice,
		success:function(data){
			temp1=$('#qaa').clone();
			$('#qaa').empty();
			/*alert((data[0].answer1));*/
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
	$.ajax({
		type:"post",
		url:"../../Exam/Exam.do",
		dataType:"json",
		data:"idcard="+IDNo+"&lesson_id="+choice+"&type_id=0&num1="+num1+"&num2="+num2+"&num3="+num3
			+"&num4="+num4+"&num5="+num5+"&num6="+num6+"&num7="+num7+"&num8="+num8+"&num9="+num9+"&num10="+num10,
		success:function(data){
			var param = email+","+name+","+IDNo+","+data;//把email 姓名 身份证 一起传到下个页面
			encodeURI(encodeURI(param));
			if(Number(data)>=60){//此处判断成绩
			    window.location.href="../../pages/student/matriculationResult.html?param="+param;
			}else{
				window.location.href="../../pages/student/matriculationResult1.html?param="+param;
				}
		}
	})	
    
}