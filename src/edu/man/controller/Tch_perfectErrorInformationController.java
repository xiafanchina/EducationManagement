package edu.man.controller;



import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.man.bean.Teacher;
import edu.man.result.TeacherErrorMsg;
import edu.man.result.TeacherExtendsRoleResult;
import edu.man.service.Tch_perfectErrorInformationServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 退回老师完善信息错误
 */
@Controller
public class Tch_perfectErrorInformationController {

	@Resource(name="tch_perfectErrorInformationServiceImpl")
	Tch_perfectErrorInformationServiceImpl tch_perfectErrorInformationServiceImpl;
	TeacherExtendsRoleResult teacherExtendsRoleResult = new TeacherExtendsRoleResult();
	/**
	 * 自动获取被拼接的错误字符串
	 */
	@RequestMapping("/getErrorInformation.do")
	public void getErrorInformation(HttpServletRequest request,HttpServletResponse response){
		
		//在一次会话中的得到错误资源所对应的邮箱
		TeacherErrorMsg teacherErrorMsg = new TeacherErrorMsg();
		String email = ((Teacher)request.getSession().getAttribute("teacher")).getEmail();
		String tea_result = tch_perfectErrorInformationServiceImpl.getErrorInformation(email).substring(1);
		teacherErrorMsg.setTea_result(tea_result);
		if(tea_result!=null){
			teacherErrorMsg.setResultcode("200");
			teacherErrorMsg.setResultmsg("查询出来有错误信息");
		}else{
			teacherErrorMsg.setResultcode("101");
			teacherErrorMsg.setResultmsg("查询出来没有错误信息");
		}
		JsonWrite.jsonWrinte(teacherErrorMsg, response);
	}
	/**
	 * 查询基本信息,回显页面
	 */
	@RequestMapping("/getInformation.do")
	public void getData(HttpServletRequest request,HttpServletResponse response){
		String email = ((Teacher)request.getSession().getAttribute("teacher")).getEmail();
		teacherExtendsRoleResult.setList(tch_perfectErrorInformationServiceImpl.getData(email));
		if(teacherExtendsRoleResult.getList().size()!=0){
			teacherExtendsRoleResult.setResultcode("200");
			teacherExtendsRoleResult.setResultmsg("查询出来有错误信息");
		}else{
			teacherExtendsRoleResult.setResultcode("101");
			teacherExtendsRoleResult.setResultmsg("查询出来没有错误信息");
		}
		JsonWrite.jsonWrinte(teacherExtendsRoleResult, response);
	}
	/**
	 * 修改信息发送请求
	 */
	@RequestMapping("/upDataInformation.do")
	public void upData(HttpServletRequest request,String sex,String nation1,String nation,String edu,String pol,String schoool,String major,String PhoneNo,String QQNo,String der,int role_id,String daikefangxiang,String bangongfangshi,String adress,HttpServletResponse response){
		String email = ((Teacher)request.getSession().getAttribute("teacher")).getEmail();
		boolean k = tch_perfectErrorInformationServiceImpl.upData(sex, nation1, nation, edu, pol, schoool, major, PhoneNo, QQNo, der, role_id, daikefangxiang, bangongfangshi, adress, email);
		if(k){
			teacherExtendsRoleResult.setResultcode("200");
			teacherExtendsRoleResult.setResultmsg("更新成功");
		}else{
			teacherExtendsRoleResult.setResultcode("101");
			teacherExtendsRoleResult.setResultmsg("更新失败");
		}
		JsonWrite.jsonWrinte(teacherExtendsRoleResult, response);
	}
}
