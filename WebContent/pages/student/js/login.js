$(function () {
    /*
     *思路大概是先为每一个required添加必填的标记，用each()方法来实现。
     *在each()方法中先是创建一个元素。然后通过append()方法将创建的元素加入到父元素后面。
     *这里面的this用的很精髓，每一次的this都对应着相应的input元素，然后获取相应的父元素。
     *然后为input元素添加失去焦点事件。然后进行用户名、邮件的验证。
     *这里用了一个判断is()，如果是用户名，做相应的处理，如果是邮件做相应的验证。
     *在jQuery框架中，也可以适当的穿插一写原汁原味的javascript代码。比如验证用户名中就有this.value，和this.value.length。对内容进行判断。
     *然后进行的是邮件的验证，貌似用到了正则表达式。
     *然后为input元素添加keyup事件与focus事件。就是在keyup时也要做一下验证，调用blur事件就行了。用triggerHandler()触发器，触发相应的事件。
     *最后提交表单时做统一验证
     *做好整体与细节的处理
     */
    //文本框失去焦点后
    $('form :input').blur(function () {
        var $parent = $(this).parent();
        $parent.find(".prompt").remove();
        $parent.removeClass("onFocus");

        var el = null;//声明正则表达式
        if ($(this).is('.email')) {
            var el = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
        }
        if (el != null) {
            if (el.test(this.value)) {
                var promptText = "";
            } else if (this.value == "") {
                var promptText = $(this).attr("promptNull");
                var promptClass = "error";
            } else {
                var promptText = $(this).attr("promptError");
                var promptClass = "error";
            }
            $parent.append('<span class="prompt ' + promptClass + '"><em></em><span></span>' + promptText + '</span>');
        }
    }).focus(function () {
        $(this).parent().addClass("onFocus");
    });//end blur
    //提交，最终验证。
    $('#submit').click(function () {
        $("form :input").trigger('blur');
        var numError = $('form .error,form .warning').length;
        if (numError) {
            return false;
        }
        var email=$("#email").val();
    	var pwd=$("#password").val();
    	$.ajax({
    		type:"post",
    		url:"../../StuLogin/StuLogin.do",
    		dataType:"json",
    		data:"email="+email+"&pwd="+pwd,
    		success:function(data){
                  // alert(data);			   
    			   switch(data.status){//判断学生注册表中的学生状态，跳转至不同的页面
    			   case -1: 
    				       alert("用户不存在，请先注册后再登录！");
    			           window.location.href="../../pages/student/studentRegister.html";
    	                break;
    			   case 0:
    	                   alert("对不起，密码错误，请重新输入");
    	                break;
    	            case 1:
    	                    alert("对不起，您尚未报名入学考试，请先进行入学考试报名");
    	                     window.location.href="../../pages/student/matriculationEnroll.html?param="+data.email+","+data.fullName+","+data.IDNo;
    	                break;
    	            case 2:
    	            	alert("对不起，请先完成入学考试");										
    	            	window.location.href="../../pages/student/matriculationNote.html?param="+data.email+","+data.fullName+","+data.IDNo;
    	            	break;
    	            case 3:
    	            	alert("您的信息尚未完善，请先完善个人信息");
    	            	window.location.href="../../pages/student/studentPerfect01.html?param="+data.email+","+data.fullName+","+data.IDNo;
    	            	break;
    	            case 4:
    	            	alert("对不起，您的入学考试未通过，请等待！*如需入学请尽快与老师联系");
    	            	break;
    	            case 5:
    	            	window.location.href="../../pages/student/1.html";
    	            	break;
    	            case 6:
    	            	window.location.href="../../pages/student/index.html";
    	            	break;
    	            case 7:
    	            	window.location.href="../../pages/teaching/stu_perfectInformation.html";
    	            	break;
    			   }
    	          
    		}
    	})
    });

    //重置
    $('#res').click(function () {
        $(".prompt").remove();
    });

})
//]]>