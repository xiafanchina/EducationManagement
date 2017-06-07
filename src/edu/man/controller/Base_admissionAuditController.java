package edu.man.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import edu.man.result.StudentApplyResult;
import edu.man.service.Base_admissionAuditServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 用于获取学生考核搜索的条件，
 */

@Controller
public class Base_admissionAuditController {
	
	//调用base_admissionAuditServiceImpl方法
	@Resource(name = "base_admissionAuditServiceImpl")
	Base_admissionAuditServiceImpl base_admissionAuditService;
	StudentApplyResult studentApplyResult;

	/**
	 * 用于搜索查询
	 */
	@RequestMapping("/base_admissionAudit.do")
	public void getData(HttpServletRequest request ,HttpServletResponse response) throws IOException{
		String search_userName = request.getParameter("search_userName");//接受前台发送的数据
		String search_school = request.getParameter("search_school");
		String direction = request.getParameter("direction");
		String min_score = request.getParameter("min_score");
		String max_score = request.getParameter("max_score");
		String score_status = request.getParameter("score_status");
		String currentPage = request.getParameter("currentPage");
		String pageSize = request.getParameter("pageSize");
		if(StringUtils.isNotEmpty(currentPage)&&StringUtils.isNotEmpty(pageSize)){
			studentApplyResult = base_admissionAuditService.getData(search_userName, search_school, direction, min_score, max_score, score_status,Integer.valueOf(currentPage),Integer.valueOf(pageSize));
		}
		
		
		JsonWrite.jsonWrinte(studentApplyResult, response);
	}
	
	/**
	 * 允许学生入学
	 */
	@RequestMapping("/base_admissionAuditInsertInto.do")
	public void upDate(String IDNo,HttpServletResponse response){
		System.out.println("获取前台传过来的ID"+IDNo);
		JsonWrite.jsonWrinte(base_admissionAuditService.upDate(IDNo), response);
	}
	
	/**
	 * 允许重新考试
	 */
		@RequestMapping("/base_admissionAuditreplyUpDate.do")
		public void replyUpDate(String IDNo,HttpServletResponse response){
			System.out.println("获取前台传过来的ID"+IDNo);
			JsonWrite.jsonWrinte(base_admissionAuditService.replyUpDate(IDNo), response);
		}
}
