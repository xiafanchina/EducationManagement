package edu.man.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.man.bean.ScoreMore;
import edu.man.bean.Student;
import edu.man.result.CoursePageResult;
import edu.man.result.ScorePageResult;
import edu.man.result.StudentPageResult2;
import edu.man.service.CourseAExamServiceImpl;
import edu.man.util.DateUtil;
import edu.man.util.JsonWrite;
import edu.man.util.JudgeString;

/**
 * 课程及考试管理
 */
@Controller
public class CourseAExamManageController {
	@Resource(name = "CourseAExamServiceImpl")
	CourseAExamServiceImpl service;
	private static Log log = LogFactory.getLog(CourseAExamManageController.class);	
	/**
	 * 分页显示所有课程信息
	 */
	@RequestMapping("/showCourse.do")
	public void showCourse(HttpServletRequest request, HttpServletResponse response){
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		CoursePageResult result = service.showAllCourse(currentPage, pageSize);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 删除选定课程信息
	 */
	@RequestMapping("/deleteCourse.do")
	public void deleteCourse(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		int result = service.deleteCourse(id);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 新增课程信息
	 */
	@RequestMapping("/addCourse.do")
	public void addCourse(HttpServletRequest request, HttpServletResponse response){
		String name = request.getParameter("name");
		Integer lesson=Integer.valueOf(request.getParameter("lesson"));
		Integer teacher=Integer.valueOf(request.getParameter("teacher"));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("name", name);
		map.put("lesson_id", lesson);
		map.put("teacher_id", teacher);
		int result = service.addCourse(map);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 编辑课程信息
	 */
	@RequestMapping("/updateCourse.do")
	public void updateCourse(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		String name = request.getParameter("name");
		Integer lesson=Integer.valueOf(request.getParameter("lesson"));
		Integer teacher=Integer.valueOf(request.getParameter("teacher"));
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("id", id);
		map.put("name", name);
		map.put("lesson_id", lesson);
		map.put("teacher_id", teacher);
		int result = service.updateCourse(map);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 根据课程id显示课程信息
	 */
	@RequestMapping("/showCourseById.do")
	public void showCourseById(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		CoursePageResult result = service.showCourseById(id);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 根据课程id分页显示对应的所有学生信息
	 */
	@RequestMapping("/showStuByCourseId.do")
	public void showStuByCourseId(HttpServletRequest request, HttpServletResponse response){
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		Integer id=Integer.valueOf(request.getParameter("id"));
		StudentPageResult2 result = service.showStuByCourseId(currentPage, pageSize,id);		
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 删除选定课程信息对应的学生信息
	 */
	@RequestMapping("/deleteCStu.do")
	public void deleteCStu(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		Integer sid=Integer.valueOf(request.getParameter("sid"));
		int result = service.deleteCStu(id,sid);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 显示所有学生信息
	 */
	@RequestMapping("/showCStu.do")
	public void showCStu(HttpServletRequest request, HttpServletResponse response){
		List<Student> result = service.showCStu();
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 添加学生到相应成绩表中
	 */
	@RequestMapping("/addCStu.do")
	public void addCStu(HttpServletRequest request, HttpServletResponse response){
		Integer cid=Integer.valueOf(request.getParameter("cid"));
		Integer sid=Integer.valueOf(request.getParameter("sid"));
		int result = service.addCStu(cid,sid);
		JsonWrite.jsonWrinte(result, response);
	}
	
	/**
	 * 分页显示所有考试信息
	 */
	@RequestMapping("/showExam.do")
	public void showExam(HttpServletRequest request, HttpServletResponse response){
		Integer currentPage=Integer.valueOf(request.getParameter("currentPage"));
		Integer pageSize=Integer.valueOf(request.getParameter("pageSize"));
		ScorePageResult result = service.showExam(currentPage, pageSize);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 删除选定考试信息
	 */
	@RequestMapping("/deleteExam.do")
	public void deleteExam(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		int result = service.deleteExam(id);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 编辑选定考试信息
	 */
	@RequestMapping("/modifyExam.do")
	public void modifyExam(HttpServletRequest request, HttpServletResponse response){
		Integer id=Integer.valueOf(request.getParameter("id"));
		String score = request.getParameter("score");
		String date = request.getParameter("date");
		JudgeString js=new JudgeString();
		DateUtil du=new DateUtil();
		boolean r1 = js.isNumber(score);
		boolean r2=du.isFormatDateStr(date);
		if(r1&&r2){
			Integer score1=Integer.valueOf(score);
			int result = service.modifyExam(id,score1,date);
			JsonWrite.jsonWrinte(result, response);
		}else{
			JsonWrite.jsonWrinte("Error", response);
		}		
	}
	/**
	 * 根据课程id和学生id查询选课信息
	 */
	@RequestMapping("/showScById.do")
	public void showScById(HttpServletRequest request, HttpServletResponse response){
		Integer cid=Integer.valueOf(request.getParameter("cid"));
		Integer sid=Integer.valueOf(request.getParameter("sid"));
		List<ScoreMore> result = service.showScById(cid,sid);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 根据课程id和学生id等添加考试信息
	 */
	@RequestMapping("/addExam.do")
	public void addExam(HttpServletRequest request, HttpServletResponse response){
		JudgeString js=new JudgeString();
		Integer cid=Integer.valueOf(request.getParameter("cid"));
		Integer sid=Integer.valueOf(request.getParameter("sid"));
		String score1 = request.getParameter("score");
		boolean r1 = js.isNumber(score1);
		if(r1){
			Integer score=Integer.valueOf(score1);
			String date = request.getParameter("date");
			String comment = request.getParameter("comment");
			String remark = request.getParameter("remark");
			Map<String,Object> map=new HashMap<String,Object>();
			map.put("cid", cid);
			map.put("sid", sid);
			map.put("score", score);
			map.put("date", date);
			map.put("comment", comment);
			map.put("remark", remark);
			int result = service.addExam(map);
			JsonWrite.jsonWrinte(result, response);
		}else{
			JsonWrite.jsonWrinte("Error", response);
		}
	}

}
