package edu.man.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.Student;
import edu.man.bean.StudentAndClass;
import edu.man.bean.Teacher;
import edu.man.result.StudentPageResult;
import edu.man.service.StudentManagementServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 *学生管理
 */

@Controller
public class StudentManagementController {
	@Resource(name = "StudentManagementServiceImpl")
	StudentManagementServiceImpl service;
	private static Log log = LogFactory.getLog(StudentManagementController.class);
/**
 * 显示所有学生
 */
	@RequestMapping("/showAll.do")
	public void showAll(HttpServletRequest request, HttpServletResponse response){
		//获取老师姓名；
		Teacher teacher1 = (Teacher) request.getSession().getAttribute("teacher");
		String loginteacher=teacher1.getName();
		String stus_name=request.getParameter("stus_name");
		String sex=request.getParameter("sex");
		String email=request.getParameter("email");
		String account_status=request.getParameter("account_status");
		String phone=request.getParameter("phone");
		String qq=request.getParameter("qq");
		String stu_status=request.getParameter("stu_status");
		
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		if(stus_name==""){
			stus_name=null;
		}
		if(sex==""){
			sex=null;
		}
		if(email==""){
			email=null;
		}
		if(account_status==""){
			account_status=null;
		}
		if(phone==""){
			phone=null;
		}
		if(qq==""){
			qq=null;
		}
		if(stu_status==""){
			stu_status=null;
		}
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("loginteacher",loginteacher);
		map.put("stus_name",stus_name);
		map.put("sex", sex);
		map.put("email", email);
		map.put("account_status", account_status);
		map.put("phone",phone);
		map.put("qq", qq);
		map.put("stu_status", stu_status);
		
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		StudentPageResult result = service.showAll(map);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 *搜索显示
	 */
	@RequestMapping("/searchAll.do")
	public void searchAll(HttpServletRequest request, HttpServletResponse response){
		Teacher teacher1 = (Teacher) request.getSession().getAttribute("teacher");
		String loginteacher=teacher1.getName();
		String stus_name=request.getParameter("stus_name");
		String sex=request.getParameter("sex");
		String email=request.getParameter("email");
		String account_status=request.getParameter("account_status");
		String phone=request.getParameter("phone");
		String qq=request.getParameter("qq");
		String stu_status=request.getParameter("stu_status");
		String school=request.getParameter("school");
		String name=request.getParameter("name");
		String class_place=request.getParameter("class_place");
		String lesson=request.getParameter("lesson");
		String lecturer=request.getParameter("lecturer");
		String assistant=request.getParameter("assistant");
		String teacher2=request.getParameter("teacher");
		
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		if(stus_name==""){
			stus_name=null;
		}
		if(sex==""){
			sex=null;
		}
		if(email==""){
			email=null;
		}
		if(account_status==""){
			account_status=null;
		}
		if(phone==""){
			phone=null;
		}
		if(qq==""){
			qq=null;
		}
		if(stu_status==""){
			stu_status=null;
		}
		if(school==""){
			school=null;
		}
		if(name==""){
			name=null;
		}
		if(class_place==""){
			class_place=null;
		}
		if(lesson==""){
			lesson=null;
		}
		if(lecturer==""){
			lecturer=null;
		}
		if(assistant==""){
			assistant=null;
		}
		if(teacher2==""){
			teacher2=null;
		}
		
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("stus_name",stus_name);
		map.put("sex", sex);
		map.put("email", email);
		map.put("account_status", account_status);
		map.put("phone",phone);
		map.put("qq", qq);
		map.put("stu_status", stu_status);
		map.put("school", school);
		map.put("name", name);
		map.put("class_place", class_place);
		map.put("lesson", lesson);
		map.put("lecturer",lecturer);
		map.put("assistant", assistant);
		map.put("loginteacher", loginteacher);
		map.put("teacher2", teacher2);
		
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);

		StudentPageResult result = service.searchAll(map);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 编辑信息
	 */
	@RequestMapping("/EditAll.do")
	public void EditStudentAll(HttpServletRequest request, HttpServletResponse response){
		Integer  id=Integer.valueOf(request.getParameter("id"));
		StudentAndClass student = service.EditStudentMsg(id);
		JsonWrite.jsonWrinte(student, response);
	}
	/**
	 * 更新信息
	 */
	@RequestMapping("/updateAll.do")
	public void UpdateStudent(HttpServletRequest request, HttpServletResponse response){
		int account_status=-1;
		if(request.getParameter("account_status").equals("正常")){
			account_status=1;	
		}else if(request.getParameter("account_status").equals("冻结")){
			account_status=0;	
		}
		String stu_status="";
		if(request.getParameter("stu_status").equals("新入学")){
			stu_status = "1";	
		}else if(request.getParameter("stu_status").equals("正在上课")){
			stu_status = "2";	
		}else if(request.getParameter("stu_status").equals("休学中")){
			stu_status = "3";	
		}else if(request.getParameter("stu_status").equals("已毕业")){
			stu_status = "4";	
		}
		String sex="";
		if(request.getParameter("sex").equals("男")){
			sex = "1";
		}else if(request.getParameter("sex").equals("女")){
			sex="2";
		}
		String phone=request.getParameter("phone");
		String qq=request.getParameter("qq");
		String school=request.getParameter("school");		
		String nation=request.getParameter("nation");	
		String brith_place=request.getParameter("brith_place");
		String political=request.getParameter("political");
		String education=request.getParameter("education");
		String schooldate=request.getParameter("schooldate");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
 	    Date date=new Date();
		try {
			date=sdf.parse(schooldate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		String major=request.getParameter("major");
		int id=Integer.parseInt(request.getParameter("id"));
		
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("sex", sex);
		map.put("account_status", account_status);
		map.put("phone",phone);
		map.put("qq", qq);
		map.put("stu_status", stu_status);
		map.put("school", school);
		map.put("nation", nation);
		map.put("brith_place", brith_place);
		map.put("political", political);
		map.put("education",education);
		map.put("schooldate", date);
		map.put("major", major);
		map.put("id", id);
		int count = service.UpdateStudentMsg(map);
		if(count>0){
			JsonWrite.jsonWrinte(count, response);
		}
	}
}
