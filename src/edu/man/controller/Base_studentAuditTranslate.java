package edu.man.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.man.bean.Student;
import edu.man.service.Base_studentAuditTranslateImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 学生列表Conrtoller层
 * 双击时的学生的信息
 */
@Controller
public class Base_studentAuditTranslate {
	@Resource(name = "studentDataService")
	Base_studentAuditTranslateImpl service;
	@RequestMapping("/studentData.do")
	public void student(HttpServletResponse response,HttpServletRequest request){
		String id=request.getParameter("id");//获得从页面中传入的审核通过的学生id
		List<Student> list = service.getStudentList(Integer.valueOf(id));//将string类型的数据转化成int类型
		System.out.println(id);
		JsonWrite.jsonWrinte(list, response);//返回值
   }
	
	/**
	 * 查询学生的班级信息
	 */
	@RequestMapping("/classstu.do")
	public void classstu(HttpServletResponse response,HttpServletRequest request){
		String class_sid=request.getParameter("class_sid");//获得从页面中传入的审核通过的学生id
		System.out.println(class_sid);
		List<Student> list = service.classstu(Integer.valueOf(class_sid));//将string类型的数据转化成int类型
		JsonWrite.jsonWrinte(list, response);//返回值
   }
	/**
	 * 学生列表Conrtoller层
	 * 审核通过时学生的信息修改
	 */
		@RequestMapping("/studenttrue.do")
		public void studentlist(HttpServletResponse response,HttpServletRequest request){
			String showval=request.getParameter("showval");//获取双击的学生的id
			System.out.println(showval);
			int list = service.getStudent(Integer.valueOf(showval));//将数据转化成int类型
			System.out.println(list);
		  JsonWrite.jsonWrinte(list, response);//返回值
	   }
		
		/**
		 * 学生列表Conrtoller层
		 * 退回时学生信息存在错误的项目
		 */
			@RequestMapping("/sendback.do")
			public void studentListdata(HttpServletResponse response,HttpServletRequest request){
				String showval=request.getParameter("showval");//学生的身份证号
				String wrong=request.getParameter("wrong");//存在错误的项目
				//String stu_reason=request.getParameter("stu_reason");//获得退回原因
				String stu_result=request.getParameter("stu_result");//退回的理由
				System.out.println(showval+"        "+stu_result+"           "+wrong);
				int list = service.getStudentreault(Integer.valueOf(showval),stu_result,wrong);
			  JsonWrite.jsonWrinte(list, response);//返回值
		   }
}
