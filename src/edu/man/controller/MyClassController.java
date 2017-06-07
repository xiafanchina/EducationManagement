package edu.man.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import edu.man.bean.StudentPageResult;
import edu.man.bean.Teacher;
import edu.man.service.MyClassService;
import edu.man.util.BaseResult;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * 我的班级
 */
@Controller
public class MyClassController {
	
	@Resource(name="myClassService")
	MyClassService service;
	
	/**
	 * 查询所有班级
	 */
	@RequestMapping("/selectAll.do")
	public void selectAllClass(HttpServletResponse response,HttpServletRequest request){
		String pageCount1 = request.getParameter("pageCount");
		String pageSize1 = request.getParameter("pageSize");
		//从session获取当前登录教师
		Object object = request.getSession().getAttribute("teacher");
		if(object!=null){
			Teacher teacher = (Teacher) object;
			if(StringUtils.isNotEmpty(pageSize1)&&StringUtils.isNotEmpty(pageCount1)){
				Integer pageCount = Integer.valueOf(pageCount1);
				Integer pageSize = Integer.valueOf(pageSize1);				
				Map<String,Object> map = new HashMap<String,Object>();
				int pageIndex = (pageCount - 1) * pageSize;
				map.put("pageIndex", pageIndex);
				map.put("pageSize", pageSize);
				map.put("tea_name", teacher.getName());			
				StudentPageResult result = service.getAll(map);
				JsonWrite.jsonWrinte(result, response);
			}
		}
	}
	
	/**
	 * 根据班级id查询该班级的详细信息
	 */
	@RequestMapping("/selectAllById.do")
	public void selectAllById(HttpServletResponse response,HttpServletRequest request){
		String dataId = request.getParameter("dataId");
		List<Class> result = service.selectALLByDataId(dataId);
		JsonWrite.jsonWrinte(result, response);
	}
	
	/**
	 * 根据班级id查询所有学生 
	 */
	@RequestMapping("/selectStudentByclsaaId.do")
	public void selectStudentByclsaaId(HttpServletResponse response,HttpServletRequest request){
		String dataId1 = request.getParameter("dataId");
		String pageCount1 = request.getParameter("pageCount");
		String pageSize1 = request.getParameter("pageSize"); 
		if(StringUtils.isNotEmpty(pageSize1) && StringUtils.isNotEmpty(pageCount1) && StringUtils.isNotEmpty(dataId1)){
			Integer pageCount = Integer.valueOf(pageCount1);
			Integer pageSize = Integer.valueOf(pageSize1);
			Integer dataId = Integer.valueOf(dataId1);
			StudentPageResult result = service.selectStudentByclsaaId(dataId,pageCount,pageSize);
			JsonWrite.jsonWrinte(result, response);
		}
	}
	
	/**
	 * 查询具体某个人信息
	 */
	@RequestMapping("/selectstudentbyId.do")
	public void selectstudentbyId(HttpServletResponse response,HttpServletRequest request){
		String stuId = request.getParameter("stuId");
		List<Class> list = service.selectstudentbyId(stuId);
		JsonWrite.jsonWrinte(list, response);
	}
	
	/**
	 * 修改学生状态
	 */
	@RequestMapping("/updateStudentStatus.do")
	public void updateStudentStatus(HttpServletResponse response,HttpServletRequest request){
		String stu_status = request.getParameter("stu_status");
		String id1 = request.getParameter("id");
		if(StringUtils.isNotEmpty(id1)){
			Integer id = Integer.valueOf(id1);
			BaseResult result = new BaseResult();
			if(service.updateStudentStatus(id,stu_status)){
				result.setResultcode("200");
				result.setResultmsg("成功");
			}else{
				result.setResultcode("101");
				result.setResultmsg("失败");
			}
			JsonWrite.jsonWrinte(result, response);
		}
	}
	
	/**
	 * 更改班级状态为开课前的controller层
	 */
	@RequestMapping("/updateHaveclass.do")
	public void updateHaveclass(HttpServletResponse response,HttpServletRequest request){
		String class_id1 = request.getParameter("class_id");
		if(StringUtils.isNotEmpty(class_id1)){
			Integer class_id = Integer.valueOf(class_id1);
			BaseResult result = new BaseResult();
			if(service.updateHaveclass(class_id)){
				result.setResultcode("200");
				result.setResultmsg("成功");
			}else{
				result.setResultcode("101");
				result.setResultmsg("失败");
			}
			JsonWrite.jsonWrinte(result, response);
		}
	}
	
	/**
	 * 更改班级状态
	 */
	@RequestMapping("/updateClassStadus.do")
	public void updateClassStadus(HttpServletResponse response,HttpServletRequest request){
		String class_id1 = request.getParameter("class_id");
		String status = request.getParameter("status");
		if(StringUtils.isNotEmpty(class_id1)){
			Integer class_id = Integer.valueOf(class_id1);
			BaseResult result = new BaseResult();
			if(service.updateClassStadus(class_id,status)){
				result.setResultcode("200");
			}else{
				result.setResultcode("101");			
			}
			JsonWrite.jsonWrinte(result, response);
		}
	}
}
