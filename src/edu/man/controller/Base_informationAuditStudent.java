package edu.man.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.man.bean.Student;
import edu.man.service.Base_informationAuditStudentImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 学生列表Conrtoller层
 * 以5位单位返回数据库中的数据的类 
 */
@Controller
public class Base_informationAuditStudent {
	@Resource(name = "studentService")
	Base_informationAuditStudentImpl service;// mvc对各层之间的关系进行关联

	@RequestMapping("/studentList.do")
	public void teacherList(HttpServletResponse response,
			HttpServletRequest request) {
		String pageCount = request.getParameter("pageCount");// 获取页面传入的页码
		List<Student> list = service.getStudentList(Integer.valueOf(pageCount));// 调用方法
		// 将pagecount变量转变成integer类型
		JsonWrite.jsonWrinte(list, response);// 返回值
	}

	/**
	 * 学生列表Conrtoller层
	 * 获取数据库中的总数据量
	 */
	@RequestMapping("/studentDatasum.do")
	public void studentDataSum(HttpServletResponse response) {
		int list = service.getStudentDataSum();// 调用方法
		JsonWrite.jsonWrinte(list, response);// 返回值
	}
}