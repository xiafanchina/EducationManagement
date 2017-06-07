package edu.man.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.Class;
import edu.man.bean.LessonName;
import edu.man.bean.Student;
import edu.man.bean.Teacher;
import edu.man.result.ClassPageResult;
import edu.man.result.StudentPageResult;
import edu.man.result.StudentPageResult2;
import edu.man.service.ClassServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 班级管理
 */
@Controller
public class ClassManageController {
	@Resource(name = "ClassServiceImpl")
	ClassServiceImpl service;
	private static Log log = LogFactory.getLog(ClassManageController.class);
	/**
	 * 根据班级id分别查询两个班级信息
	 */
	@RequestMapping("/showClassById2.do")
	public void showClassById(HttpServletRequest request, HttpServletResponse response){
		Integer id1=Integer.valueOf(request.getParameter("id1"));
		Integer id2=Integer.valueOf(request.getParameter("id2"));		
		List<Class> result = service.showClassById2(id1, id2);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 根据班级id查询一个班级信息
	 */
	@RequestMapping("/showClassById1.do")
	public void showClassById1(HttpServletRequest request, HttpServletResponse response){
		Integer class_id=Integer.valueOf(request.getParameter("class_id"));		
		//根据id查询班级信息
		List<Class> result = service.showClassById1(class_id);
		JsonWrite.jsonWrinte(result, response);
	}	
	/**
	 * 根据班级id查询一个班级信息
	 */
	@RequestMapping("/showStuById.do")
	public void showStuById(HttpServletRequest request, HttpServletResponse response){
		Integer class_id=Integer.valueOf(request.getParameter("class_id"));		
		//根据id查询班级信息
		List<Student> result = service.showStuById(class_id);
		JsonWrite.jsonWrinte(result, response);
	}	
	/**
	 * 分页显示所有班级信息
	 */
	@RequestMapping("/showClass.do")
	public void showClass(HttpServletRequest request, HttpServletResponse response){
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		System.out.println(currentPage);
		service.updateClassNum();//更新班级人数
		ClassPageResult result = service.showAllClass(currentPage, pageSize);
		JsonWrite.jsonWrinte(result, response);
	}
	
	/**
	 * 多条件搜索班级信息并将数据传到数据库中
	 */
	@RequestMapping("/searchClass.do")
	public void classSearch(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值
		String name = request.getParameter("name");//班级名称
		String lesson = request.getParameter("lesson");//课程方向
		String status = request.getParameter("status");//班级状态   
		String lecturer = request.getParameter("lecturer");//主讲姓名
		String assistant = request.getParameter("assistant");//助教姓名
		String teacher = request.getParameter("teacher");//班主任姓名
		String class_way = request.getParameter("class_way");//开班方式
		String timeChoice = request.getParameter("timeChoice");//选择"开课/开班/结课时间"
		String time1 = request.getParameter("time1");//开始时间
		String time2 = request.getParameter("time2");//结束时间
		String class_place = request.getParameter("class_place");//只有省市的开班地点，进行模糊查找
		//查询数据到数据库中
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
	    Class add = new Class();
	    add.setName(name);
	    add.setLesson(lesson);
	    add.setStatus(status);
	    add.setLecturer(lecturer);
	    add.setAssistant(assistant);
	    add.setTeacher(teacher);
	    add.setClass_way(class_way);
	    add.setClass_place(class_place);
	    ClassPageResult result = service.showClassBySearch(add,timeChoice,time1,time2,currentPage, pageSize);		
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 根据班级id分页显示对应的所有学生信息
	 */
	@RequestMapping("/showStuByIdSplit.do")
	public void showStuByIdSplit(HttpServletRequest request, HttpServletResponse response){
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		Integer class_id=Integer.valueOf(request.getParameter("class_id"));
		StudentPageResult2 result = service.showStuByIdSplit(currentPage, pageSize,class_id);		
		JsonWrite.jsonWrinte(result, response);
	}
}
