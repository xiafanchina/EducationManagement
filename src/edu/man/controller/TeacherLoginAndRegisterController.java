package edu.man.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.RegisterTch;
import edu.man.bean.Teacher;
import edu.man.service.TeacherLoginAndRegisterService;
import edu.man.util.BaseResult;
import edu.man.util.JsonWrite;
import edu.man.util.Mail;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
/**
 * 教师的登录忘记密码、注册、完善信息的Controller
 */
@Controller
public class TeacherLoginAndRegisterController {
	
	@Resource(name = "teacherLoginAndRegisterService")
	TeacherLoginAndRegisterService teacherLoginAndRegisterService;
	//创建老师个人信息全局变量
	Teacher teacher = new Teacher();
	//创建返回结果基础类BaseResult全局变量
	BaseResult baseResult = new BaseResult();
	
	
	/**
	 * 教师注册时检查邮箱是否已存在
	 */
	@RequestMapping("/RegisterCheckEmail.do")//教师注册所用的方法
	public void RegisterCheckEmail(HttpServletRequest request, HttpServletResponse response) throws IOException{
		String email=request.getParameter("email"); 
		if(teacherLoginAndRegisterService.teacherRegisterCheckEmail(email)){//判断邮箱是否存在，邮箱存在不可以注册
	    	baseResult.setResultcode("1");
			baseResult.setResultmsg("邮箱已存在");
	    }else{
	    	baseResult.setResultcode("0");
			baseResult.setResultmsg("");
	    }
	    JsonWrite.jsonWrinte(baseResult, response);
	}
	
	/**
	 * 教师注册时检查是否添加成功
	 */
	@RequestMapping("/Register.do")//教师注册所用的方法
	public void Register(HttpServletRequest request, HttpServletResponse response) throws IOException{
		String email=request.getParameter("email"); 
		String fullName=request.getParameter("fullName"); 
		String iDNo=request.getParameter("IDNo"); 
		String password=request.getParameter("password"); 
		if(baseResult.getResultcode()=="1"){
			JsonWrite.jsonWrinte(baseResult, response);
			return;
		}
		if(teacherLoginAndRegisterService.registerTeacher(email, fullName, iDNo, password)){
	    	baseResult.setResultcode("200");
			baseResult.setResultmsg("注册成功");
	    }else{
	    	baseResult.setResultcode("0");
			baseResult.setResultmsg("");
	    }
	    JsonWrite.jsonWrinte(baseResult, response);
	}
	
	/**
	 * 老师完善个人信息第一步
	 */
	@RequestMapping("/teacherInfo01.do")
	public void teacherInfo01(HttpServletRequest request, HttpServletResponse response){
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String idCard = request.getParameter("idCard");
		String info = request.getParameter("info");
		teacher.setName(name);
		teacher.setEmail(email);
		teacher.setIdCard(idCard);
		teacher.setInfo(info);
		JsonWrite.jsonWrinte(1, response);
	}
	
	/**
	 * 老师完善个人信息第二步
	 */
	@RequestMapping("/teacherInfo02.do")
	public void teacherInfo03(HttpServletRequest request, HttpServletResponse response){
		String sex = request.getParameter("sex");
		String nation = request.getParameter("nation");
		String birthPlace = request.getParameter("birthPlace");
		String political = request.getParameter("political");
		String education = request.getParameter("education");
		String school = request.getParameter("school");
		String major = request.getParameter("major");
		teacher.setSex(sex);
		teacher.setNation(nation);
		teacher.setBirthPlace(birthPlace);
		teacher.setPolitical(political);
		teacher.setEducation(education);
		teacher.setSchool(school);
		teacher.setMajor(major);
		
	}
	
	/**
	 * 老师完善个人信息第三步
	 */
	@RequestMapping("/teacherInfo03.do")
	public void teacherInfo04(HttpServletRequest request, HttpServletResponse response){
		String phone = request.getParameter("phone");
		String qq = request.getParameter("qq");
		String department = request.getParameter("department");
		String roleId = request.getParameter("roleId");
		String course = request.getParameter("course");
		String workingWay = request.getParameter("workingWay");
		String workingPlace = request.getParameter("workingPlace");
		teacher.setPhone(phone);
		teacher.setQq(qq);
		teacher.setDepartment(department);
		teacher.setRoleId(Integer.parseInt(roleId));
		teacher.setCourse(course);
		teacher.setWorkingWay(workingWay);
		teacher.setWorkingPlace(workingPlace);
		if(teacherLoginAndRegisterService.teacherInfo(teacher)){
			baseResult.setResultcode("200");
			baseResult.setResultmsg("提交成功");
		}else{
			baseResult.setResultcode("101");
			baseResult.setResultmsg("提交失败");
		}
		JsonWrite.jsonWrinte(baseResult, response);
	}
	/**
	 * 老师忘记密码后向用户邮箱发送的随机验证码
	 */
	@RequestMapping("/sendCode.do")
	public void  senCode(HttpServletRequest request, HttpServletResponse response){
		String email = request.getParameter("email");
		int a = (int) (Math.random()*10);
		int b = (int) (Math.random()*10);
		int c = (int) (Math.random()*10);
		int d = (int) (Math.random()*10);
		String code = ""+a+b+c+d;//随机四位验证码
		Mail mail = new Mail();
		mail.setContent("睿智教务系统验证码： "+code+",有效时间为30分钟。");
		mail.setFrom("352098650@qq.com");
		mail.setPort("25");
		mail.setProtocol("smtp");
		mail.setRecipient(email);
		mail.setServerAddress("smtp.qq.com");
		mail.setSubject("睿智验证码");
		mail.setValid("true");
		mail.setPassWord("dyczgngovprvcaaf");
		mail.setUserName("352098650@qq.com");
		mail.SendMail();
		request.getSession().setAttribute("code", code);
	}
	
	/**
	 * 老师忘记密码
	 */
	@RequestMapping("/passwordForget.do")
	public void passwordForget(HttpServletRequest request, HttpServletResponse response){
		String email = request.getParameter("email");
		String clientCode = request.getParameter("code");
		if(!clientCode.equals(request.getSession().getAttribute("code"))){//比对邮箱发送的验证码
			baseResult.setResultcode("100");
			baseResult.setResultmsg("验证码错误");
		}else if(teacherLoginAndRegisterService.passwordForget(email)){
			baseResult.setResultcode("101");
			baseResult.setResultmsg("该邮箱还没注册");
		}else{
			baseResult.setResultcode("200");
			baseResult.setResultmsg("");
		}
		JsonWrite.jsonWrinte(baseResult, response);
	}
	
	/**
	 * 老师忘记密码后修改密码
	 */
	@RequestMapping("/pwdForgetAfterModifyPwd.do")
	public void pwdForgetAfterModifyPwd(HttpServletRequest request, HttpServletResponse response){
		String email = request.getParameter("email");
		String pwd = request.getParameter("pwd");
		if(teacherLoginAndRegisterService.pwdForgetAfterModifyPwd(email,pwd)){
			baseResult.setResultcode("200");
			baseResult.setResultmsg("修改成功");
		}else{
			baseResult.setResultcode("101");
			baseResult.setResultmsg("系统正在维护");
		}
		JsonWrite.jsonWrinte(baseResult, response);
	}
}
