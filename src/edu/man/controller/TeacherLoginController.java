package edu.man.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.man.bean.RegisterTch;
import edu.man.bean.Teacher;
import edu.man.result.TeacherLoginResult;
import edu.man.result.TeacherRole;
import edu.man.service.TeacherLoginServiceImpl;
import edu.man.util.JsonWrite;

/**
 * 教师登录
 */
@Controller
public class TeacherLoginController {
	@Resource(name="TeacherLoginServiceImpl")
	TeacherLoginServiceImpl service;
	HttpSession session;
	
	@RequestMapping("teacherLogin.do")
	public void teaLoign(HttpServletRequest request, HttpServletResponse response){
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		RegisterTch teacherLogin = service.teacherLogin(email, password);
		TeacherLoginResult result = new TeacherLoginResult();
		if(teacherLogin!=null){
			Teacher teacher = service.indexLoginer(email);
			session = request.getSession();
			session.setAttribute("teacher", teacher);
			result.setRegister(teacherLogin);
			result.setResultcode("200");
			result.setResultmsg("登录成功");
		}else{
			result.setResultcode("101");
			result.setResultmsg("用户名或者密码不小心输错了吧？");
		}
		JsonWrite.jsonWrinte(result, response);
	}
	
	@RequestMapping("indexLoginer.do")
	public void indexLoginer(HttpServletRequest request,HttpServletResponse response){
		//String email = request.getParameter("email");
		if(session!=null){
			Teacher teacher = (Teacher) session.getAttribute("teacher");
				System.out.println(teacher.getId());
				System.out.println(teacher.getRoleId());
				JsonWrite.jsonWrinte(teacher, response);
		}else{
				JsonWrite.jsonWrinte("101", response);
		}
	}
	@RequestMapping("indexFunction.do")
	public void indexFunctions(HttpServletRequest request,HttpServletResponse response){
		Integer role_id = Integer.valueOf(request.getParameter("role_id"));
		int status = service.queryRoleStatus(role_id);
		List<String> functions = service.indexFunction(role_id);
		TeacherRole result = new TeacherRole();
		result.setList(functions);
		result.setStauts(status);
		JsonWrite.jsonWrinte(result, response);
	}
}
