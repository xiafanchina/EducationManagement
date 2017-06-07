package edu.man.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.man.bean.PageCountList;
import edu.man.bean.Teacher;
import edu.man.service.JobInforService;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 处理班级信息的Controller
 */
@Controller
public class JobInfoController {

	//创建一个Service属性
	@Resource(name="jobInforService")
	JobInforService jobInforService;
	
	/**
	 * 获取Service层的班级就业信息返回值
	 */
	@RequestMapping("classJobInfo/showMsg.do")
	public void showMsg(int pageIndex,int pageSize,HttpServletResponse response){
		//返回一个班级就业信息和班级总数的实例类
		PageCountList pageCountList = jobInforService.showMsg(pageIndex,pageSize);
		//查询的值输出给页面
		JsonWrite.jsonWrinte(pageCountList, response);
	}
	
	/**
	 * 获取Service层的某个班级就业信息返回值，显示在InformationStudent页面上部
	 */
	@RequestMapping("studentJobInfo/showClassMsgTop.do")
	public void showClassMsg(String class_id,HttpServletResponse response){
		JsonWrite.jsonWrinte(jobInforService.showClassMsg(class_id),response);
	}
	
	/**
	 * 获取Service层的某个班级学生的就业信息返回值
	 */
	@RequestMapping("studentJobInfo/showStudentMsg.do")
	public void showStudentMsg(String class_id,int pageIndex,int pageCount,HttpServletResponse response){
		JsonWrite.jsonWrinte(jobInforService.showStudentMsg(class_id,pageIndex,pageCount),response);
	}
	/**
	 * 获取Service层某个学生的个人信息返回值，显示在StudentHistory页面上部
	 */
	@RequestMapping("jobInfoHistory/showStudentMsg.do")
	public void showHistoryStudentMsg(String student_id,HttpServletResponse response){
		JsonWrite.jsonWrinte(jobInforService.showHistoryStudentMsg(student_id),response);
	}
	
	/**
	 * 获取Service层某个学生的个人就业历史信息返回值，显示在StudentHistory页面
	 */
	@RequestMapping("jobInfoHistory/showStudentJobInfoAll.do")
	public void showHistoryStudentInfoMsg(String student_id,int pageIndex,int pageCount,HttpServletResponse response){
		JsonWrite.jsonWrinte(jobInforService.showHistoryStudentInfoMsg(student_id,pageIndex,pageCount),response);
	}
	
	/**
	 * 添加学生就业信息
	 */
	@RequestMapping("addJobInfo/addStudentJobInfo.do")
	public void addJobInfo(String student_id,String com_name,String com_phone,String address,String job,String salary,HttpServletRequest request,HttpServletResponse response){
		Object object = request.getSession().getAttribute("teacher");
		String name ="";
		if(object!=null){
			Teacher teacher = (Teacher) object;
			name = teacher.getName();
		}
		JsonWrite.jsonWrinte(jobInforService.addJobInfo(student_id, com_name, com_phone, address, job, salary,name),response);
	}
	
	/**
	 * 修改学生就业信息
	 */
	@RequestMapping("classJobInfo/modifyMsg.do")
	public void modifyMsg(String job_id,String com_name,String com_phone,String address,String job,String salary,HttpServletRequest request,HttpServletResponse response){
		Object object = request.getSession().getAttribute("teacher");
		String name ="";
		if(object!=null){
			Teacher teacher = (Teacher) object;
			name = teacher.getName();
		}
		JsonWrite.jsonWrinte(jobInforService.modifyMsg(job_id, com_name, com_phone, address, job, salary,name),response);
	}
}
