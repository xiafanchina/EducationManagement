$(function () {
    //框架宽高
    $("section,section > div.left,section > div.right").height($(window).height() - 75);
    $("section").width($(window).width());
    $("section > div.right,iframe").width($(window).width() - 205);
    $("nav").height($(window).height() - 75 - 170);
    $("iframe").height($(window).height() - 80);
    var role_id;//存取角色ID
	$(".classB li").css("display","none");//隐藏所有功能模块
	//查询用户登录状态和加载用户功能
	$.ajax({
		url:"../../indexLoginer.do",
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data);
			//判断用户是否登录
			if(data=="101"){
				location.href="login.html";
			}else{
				role_id = data.roleId;		//登录后获取用户角色ID
				$("#tea_name").text(data.name);	//设置用户登录名
				var teaid = data.id;		//获取用户ID
				//加载用户所拥有的功能
				$.ajax({
	    			url:"../../indexFunction.do",
	    			type:"get",
	    			data:"role_id="+role_id,
	    			dataType:"json",
	    			success:function(data){
	    				console.log(data);
	    				if(data.stauts==1){
	    					for(var i=0;i<data.functions.length;i++){
	    						if(data.functions[i]=="我的班级"){
	    							var href = "base_myClass.html?id="+teaid;
	    							$("#myClass a").attr("href",href);
	    							$("#myClass").css("display","block");
	    						}else if(data.functions[i]=="学生审核"){
	    							$("#stuAudit").css("display","block");
	    							$("#stuAudit .classC li").css("display","block");
	    						}else if(data.functions[i]=="就业信息"){
	    							var href = "base_employmentInformationClass.html?id="+teaid;
	    							$("#employInfo a").attr("href",href);
	    							$("#employInfo").css("display","block");
	    						}else if(data.functions[i]=="教师管理"){
	    							var href1 = "base_teacherAudit.html?id="+teaid;
	    							var href2 = "base_teacherList.html?id="+teaid;
	    							$("#teaMag1 a").attr("href",href1);
	    							$("#teaMag2 a").attr("href",href2);
	    							$("#teaMag").css("display","block");
	    							$("#teaMag .classC li").css("display","block");
	    						}else if(data.functions[i]=="班级管理"){
	    							var href1 = "base_classAdd.html?id="+teaid;
	    							var href2 = "base_classList.html?id="+teaid;
	    							$("#classMag1 a").attr("href",href1);
	    							$("#classMag2 a").attr("href",href2);
	    							$("#classMag").css("display","block");
	    							$("#classMag .classC li").css("display","block");
	    						}else if(data.functions[i]=="学生管理"){
	    							var href = "base_studentList.html?id="+teaid;
	    							$("#stuMag a").attr("href",href);
	    							$("#stuMag").css("display","block");
	    						}else if(data.functions[i]=="角色管理"){
	    							var href = "base_roleList.html?id="+teaid;
	    							$("#roleMag a").attr("href",href);
	    							$("#roleMag").css("display","block");
	    						}else if(data.functions[i]=="课程管理"){
	    							var href = "base_courseList.html?id="+teaid;
	    							$("#courseMag a").attr("href",href);
	    							$("#courseMag").css("display","block");
	    						}else if(data.functions[i]=="考试管理"){
	    							var href = "base_examList.html?id="+teaid;
	    							$("#examMag a").attr("href",href);
	    							$("#examMag").css("display","block");
	    						}
	    						else if(data.functions[i]=="修改密码"){
	    							var href = "tool_passwordModify.html?email="+data.email;
	    							$("#repwd a").attr("href",href);
	    							$("#repwd").css("display","block");
	    						}
	    					}	
	    				}else{
	    					alert("当前角色被禁用！请联系管理员");
	    				}
	    				//遍历功能字符集合，加载对应的功能模块显示
	    			}
	    		})
	    		//如果用户账号状态被禁用，将所有功能隐藏
				if(data.accountStatus=="0"){
					$("#baseinfo").css("display","none");
				}	
			}
		}
	})
    //左边栏展开、收缩
    $("nav div.classA").click(function () {
        if($(this).children("ul.classB").css("display") == "block"){
            $(this).children("a").removeClass("on");
        }else{
            $(this).children("a").addClass("on");
        }
        $(this).children("ul.classB").slideToggle("slow");
        $(this).siblings("div.classA").children("ul.classB").slideUp("slow");
        $(this).siblings("div.classA").children("a").removeClass("on");
    });
    $("nav ul.classB > li").click(function (event) {
        event.stopPropagation();
        if($(this).children("a").attr("href") == undefined){
            if($(this).children("ul.classC").css("display") == "block"){
                $(this).children("a").removeClass("on");
            }else{
                $(this).children("a").addClass("on");
            }
            $(this).children("ul.classC").slideToggle("slow");
            $(this).siblings().children("ul.classC").slideUp("slow");
            $(this).siblings().children("a").removeClass("on");
        }else{
            $("nav a").removeClass("selected");
            $(this).children("a").addClass("selected");
        }
    });
    $("nav ul.classC > li").click(function (event) {
        event.stopPropagation();
        $("nav a").removeClass("selected");
        $(this).children("a").addClass("selected");
    });
});

