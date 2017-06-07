package edu.man.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.TeacherAndRole;
import edu.man.result.TeacherAndRoleListFindResult;
import edu.man.result.TeacherAndRoleListResult;
import edu.man.service.TeacherAuditTranslateServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TeacherAuditTranslateController {

	@Resource(name = "TeacherAuditTranslateServiceImpl")
	TeacherAuditTranslateServiceImpl service;
	@SuppressWarnings("unused")
	private static Log log = LogFactory.getLog(TeacherAuditTranslateController.class);

	/**
	 * 获取所有待审核的教师
	 * 通过传递参数 currentPage(当前页面) ,pageSize(页面大小)
	 */
	@RequestMapping("/findAll.do")
	public void findTeacherAll(HttpServletRequest request, HttpServletResponse response) {

		String current = request.getParameter("currentPage");
		String Size = request.getParameter("pageSize");
		// 类型转换
		int currentPage = Integer.parseInt(current);
		int pageSize = Integer.parseInt(Size);
		// 通过数据库分页查询待审核的教师
		TeacherAndRoleListResult result = service.findCurrentPage(currentPage, pageSize);

		JsonWrite.jsonWrinte(result, response);
	}
	
	@RequestMapping("/findcurrentPage.do")
	public void findTeacherList(HttpServletRequest request, HttpServletResponse response) {

		String current = request.getParameter("currentPage");
		String Size = request.getParameter("pageSize");
		// 类型转换
		int currentPage = Integer.parseInt(current);
		int pageSize = Integer.parseInt(Size);
		// 通过数据库分页查询教师
		TeacherAndRoleListFindResult result = service.findCurrentPageList(currentPage, pageSize);

		JsonWrite.jsonWrinte(result, response);
	}

	/** 
	 * 通过教师表的id(主键)查询教师的详细信息
	 */
	@RequestMapping("/init.do")
	public void findTeacherById(String id, HttpServletRequest request, HttpServletResponse response) {

		TeacherAndRole teacher = service.findTeacherById(id);

		JsonWrite.jsonWrinte(teacher, response);
	}

	/**
	 * 审核通过 传递参数 id(主键) 
	 */
	@RequestMapping("/agree.do")
	public void updateagree(String email, HttpServletRequest request, HttpServletResponse response) {

		boolean flag = service.updateAudit(email);

		JsonWrite.jsonWrinte(flag, response);
	}

	/**
	 * 审核未通过 传递参数 wrong,reason,email,id id(主键)用来改变教师的状态
	 * email(教师注册表的主键)用来获取教师注册表的某条数据 wrong(申请教师的未通过项) 填写教师注册表里面 为了告诉申请人详细信息
	 * reason(未通过原因) 解释未通过的原因
	 */
	@RequestMapping("/disagree.do")
	public void updatedisagree(HttpServletRequest request, HttpServletResponse response) {

		String wrong = request.getParameter("wrong");
		String email = request.getParameter("email");
		String reason = request.getParameter("reason");

		boolean flag = service.updatedisAudit(wrong, reason, email);

		JsonWrite.jsonWrinte(flag, response);

	}
	
	@RequestMapping("/tijiao.do")
	public void updateSenior(HttpServletRequest request, HttpServletResponse response) {

		String id = request.getParameter("id");
		int i = Integer.parseInt(id);
		boolean flag = service.updateSenior(i);

		JsonWrite.jsonWrinte(flag, response);

	}

}
