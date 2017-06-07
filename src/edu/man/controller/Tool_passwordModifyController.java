package edu.man.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.man.bean.Teacher;
import edu.man.service.Tool_passwordModifyServiceImpl;
import edu.man.util.BaseResult;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 用于老师修改密码
 * 通过缓存获取登录唯一的邮箱，验证旧密码，更新新密码
 */
@Controller
public class Tool_passwordModifyController {
	@Resource(name = "tool_passwordModifyServiceImpl")
	Tool_passwordModifyServiceImpl tool_passwordModifyServiceImpl;
	BaseResult baseResult = new BaseResult();
	/**
	 * 查询验证旧密码是否正确
	 */
	@RequestMapping("/getPasswordByEmailMethod.do")
	public void getPasswordByEmail(String passwordOld,HttpServletRequest request,HttpServletResponse response){
		Teacher email = (Teacher) request.getSession().getAttribute("teacher");			//获取老师登录发送的session缓存。
		System.out.println("查询出来的原始密码：？？？？？？》"+tool_passwordModifyServiceImpl.getPasswordByEmail(email.getEmail()).getTea_pwd());
		System.out.println("前台获取输入的 原始密码》》》"+passwordOld);
		if(tool_passwordModifyServiceImpl.getPasswordByEmail(email.getEmail()).getTea_pwd().equals(passwordOld)){
			baseResult.setResultcode("200");
			baseResult.setResultmsg("旧密码正确");
		}else{
			baseResult.setResultcode("101");
			baseResult.setResultmsg("旧密码不正确");
		}
		JsonWrite.jsonWrinte(baseResult, response);
	}
	/**
	 * 修改密码
	 */
	@RequestMapping("/upDataPasswordByEmailMethod.do")
		public void upDataPasswordByEmail(String passwordConfirm,HttpServletRequest request,HttpServletResponse response){
			//获取缓存中的eamil属性。
		Teacher email = (Teacher) request.getSession().getAttribute("teacher");
			if(tool_passwordModifyServiceImpl.upDataPasswordByEmail(email.getEmail(), passwordConfirm)){
				baseResult.setResultcode("200");
				baseResult.setResultmsg("旧密码正确");
			}else{
				baseResult.setResultcode("101");
				baseResult.setResultmsg("旧密码不正确");
			}
			JsonWrite.jsonWrinte(baseResult, response);
		}
}
