package edu.man.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.Class;
import edu.man.bean.LessonName;
import edu.man.bean.Teacher;
import edu.man.service.ClassServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 添加新班级
 * */ 
@Controller
public class ClassAddController {
	@Resource(name = "ClassServiceImpl")
	ClassServiceImpl service;
	private static Log log = LogFactory.getLog(ClassAddController.class);
	/**
	 * 新建班级并将数据传到数据库中
	 */
	@RequestMapping("/addClass.do")
	public void classAdd(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值
		String name = request.getParameter("name");
		String lesson = request.getParameter("lesson");
		String lecturer = request.getParameter("lecturer");
		String assistant = request.getParameter("assistant");
		String teacher = request.getParameter("teacher");
		String class_place = request.getParameter("class_place");
		//插入数据到数据库中
	    Class add = new Class();
	    add.setName(name);
	    add.setLesson(lesson);
	    add.setLecturer(lecturer);
	    add.setAssistant(assistant);
	    add.setTeacher(teacher);
	    add.setClass_place(class_place);
	    boolean result = service.classAdd(add);
	    JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 查询课程方向，使用ajax返回信息到"创建班级"页面下拉列表中
	 */
	@RequestMapping("/selectLesson.do")
	public void classSelect(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值并将数据传到此类中
	    List<LessonName> list = service.showLesson();
	    JsonWrite.jsonWrinte(list, response);
	}
	/**
	 * 根据教师角色id选择教师信息，使用ajax返回信息到"创建班级"页面的弹出框中
	 */
	@RequestMapping("/selectTeacher.do")
	public void classSelectTeacher(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值并将数据传到此类中
		String role_id = request.getParameter("role_id");
		Integer roleId = Integer.parseInt(role_id);
	   List<Teacher> list = service.showTeaByRole(roleId);
	    JsonWrite.jsonWrinte(list, response);
	}
	/**
	 * 根据班级名称搜索班级信息，使用ajax返回信息到"请选择目标班级"页面的弹出框中
	 */
	@RequestMapping("/selectTargetClass.do")
	public void classTargetSelect(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值并将数据传到此类中
		String name = request.getParameter("name");
		List<Class> list = service.showClassByName(name);
		JsonWrite.jsonWrinte(list, response);  
	}
	/**
	 * 查询所有班级信息，使用ajax返回信息到"请选择目标班级"页面的弹出框中
	 */
	@RequestMapping("/selectAllTargetClass.do")
	public void classTargetSelectAll(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值并将数据传到此类中
			List<Class> list = service.showClass();
			JsonWrite.jsonWrinte(list, response);		   
	}
	/**
	 * 根据教师姓名及角色id查询教师信息，使用ajax返回信息到弹出框中
	 */
	@RequestMapping("/selectTeacherByName.do")
	public void classSelectTeaByName(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值并将数据传到此类中
		String role_id = request.getParameter("role_id");
		String name = request.getParameter("name");
		 Integer roleId = Integer.parseInt(role_id);//将role_id转型为integer型
		Teacher tea = new Teacher();
		tea.setRoleId(roleId);
		tea.setName("%"+name+"%");
	   List<Teacher> list = service.showTeaByNameARole(tea);
		//System.out.println(list+"!!!"+roleId+name);
	    JsonWrite.jsonWrinte(list, response);
	}
	/**
	 * 编辑班级并将数据传到数据库中
	 */
	@RequestMapping("/modifyClass.do")
	public void classModify(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值
		Integer class_id=Integer.valueOf(request.getParameter("class_id"));
		String name = request.getParameter("name");
		String lesson = request.getParameter("lesson");
		String lecturer = request.getParameter("lecturer");
		String assistant = request.getParameter("assistant");
		String teacher = request.getParameter("teacher");
		String class_place = request.getParameter("class_place");
		String class_status = request.getParameter("class_status");
		String course_start = request.getParameter("course_start");
		String class_start = request.getParameter("class_start");
		String course_end = request.getParameter("course_end");
		System.out.println(name + teacher + class_place);
		//插入数据到数据库中
	    Class list = new Class();
	    list.setClass_id(class_id);
	    list.setName(name);
	    list.setLesson(lesson);
	    list.setLecturer(lecturer);
	    list.setAssistant(assistant);
	    list.setTeacher(teacher);
	    list.setClass_place(class_place);
	    list.setStatus(class_status);
	    list.setCourse_start(course_start);
	    list.setClass_start(class_start);
	    list.setCourse_end(course_end);
	    boolean result = service.classModify(list);
	    JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 合并班级并将数据传到数据库中即删除原来两个班级，新增一个新班级,并将原班级里的学生班级id改成新id
	 */
	@RequestMapping("/mergeClass.do")
	public void classMerge(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值
		Integer id1=Integer.valueOf(request.getParameter("id1"));
		Integer id2=Integer.valueOf(request.getParameter("id2"));
		String name = request.getParameter("name");
		String lesson = request.getParameter("lesson");
		String lecturer = request.getParameter("lecturer");
		String assistant = request.getParameter("assistant");
		String teacher = request.getParameter("teacher");
		String class_place = request.getParameter("class_place");
		Integer num1=Integer.valueOf(request.getParameter("num1"));//原始班级人数
		Integer num2=Integer.valueOf(request.getParameter("num2"));
		int newNum = num1+num2;
		int jobnum1 = service.queryJobNum(id1);
		int jobNum2 = service.queryJobNum(id2);
		int newjobNum = jobnum1+jobNum2;
		//根据id删除两个原始班级，返回删除影响的行数
		int row = service.deleteClassById(id1, id2);		
		//在数据库中创建新班级
	    Class list = new Class();
	    list.setName(name);
	    list.setLesson(lesson);
	    list.setLecturer(lecturer);
	    list.setAssistant(assistant);
	    list.setTeacher(teacher);
	    list.setClass_place(class_place);
	    Date date = new Date();
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	    String class_start = sdf.format(date);
	    list.setClass_start(class_start);
	    list.setClass_num(newNum);
	    list.setJob_num(newjobNum);
	    boolean result = service.classMerge(list);
	    //将学生表中合并前班级学生的班级id更改为合并后班级的id
	    int row2 = service.updateStuByClassName(name, id1, id2);
	    JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 合并班级并将数据传到数据库中即删除原来两个班级，新增一个新班级,并将原班级里的学生班级id改成新id
	 */
	@RequestMapping("/transferClass.do")
	public void classTransfer(HttpServletRequest request, HttpServletResponse response) {
		//获得ajax传递过来的值
		Integer pid=Integer.valueOf(request.getParameter("pid"));
		Integer pnum=Integer.valueOf(request.getParameter("pnum"));
		Integer tid=Integer.valueOf(request.getParameter("tid"));
		Integer tnum=Integer.valueOf(request.getParameter("tnum"));
		String stuid = request.getParameter("stuid");//得到学生id集合(xx,yy,zz)
		//根据学生id修改其班级id为tid
		String[] idArray = stuid.split(",");//分割学生id的string，将其转为数组
        for (int i = 0; i < idArray.length; i++) {
        	Integer id=Integer.valueOf(idArray[i]);//强转学生id为Integer
        	service.updateStuByStuId(id, tid);
        }
		//将原始班级和目标班级的学生人数进行修改
        int updateRow = service.updateNumByClassId(tid, tnum);
        service.updateNumByClassId(pid, pnum);
        JsonWrite.jsonWrinte(updateRow, response);
	}
}
