package edu.man.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import edu.man.bean.Role;
import edu.man.result.ModifyRoleResult;
import edu.man.result.RoleListResult;
import edu.man.service.RoleServiceImpl;
import edu.man.util.BaseResult;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 角色管理
 */
@Controller
public class RoleController {
	@Resource(name = "RoleServiceImpl")
	RoleServiceImpl service;	//service对象
	private static Log log = LogFactory.getLog(RoleController.class);
	/**
	 * 分页查询所有角色列表
	 */
	@RequestMapping("queryAll.do")
	public void queryAll(HttpServletRequest request, HttpServletResponse response){
		
		Integer currentPage = Integer.valueOf(request.getParameter("currentPage"));	//当前页
		Integer pageSize = Integer.valueOf(request.getParameter("pageSize"));		//页面大小
		RoleListResult result = service.queryRole(currentPage, pageSize);			//分页查询结果集
		if (result.getList()!=null) {
			//查询List集合不为空
			result.setResultcode("200");
			result.setResultmsg("成功！");
		} else {
			//用户名或密码错误
			result.setResultcode("101");
			result.setResultmsg("用户名或密码错误");
		}
		JsonWrite.jsonWrinte(result, response);
	}

	/**
	 *根据角色ID查询角色功能
	 */
	@RequestMapping("queryFunction.do")
	public void queryFunction(HttpServletRequest request, HttpServletResponse response){
		Integer id = Integer.valueOf(request.getParameter("roleId"));			//接收角色ID
		List<String> list = service.queryFunction(id);							//功能列表集合
		JsonWrite.jsonWrinte(list, response);									//封装json对象
	}
	/**
	 *添加新角色
	 */
	@RequestMapping("addRole.do")
	public void addRole(HttpServletRequest request, HttpServletResponse response){
		String role_name = request.getParameter("role_name");		//角色名称
		String role_status = request.getParameter("role_status");	//角色状态
		String role_info = request.getParameter("role_info");		//角色备注
		String funarry = request.getParameter("funarry");			//角色功能字符串
		//封装角色
		Role role = new Role();				
		role.setRole_info(role_info);
		role.setRole_name(role_name);
		role.setRole_status(Integer.parseInt(role_status));
		//角色和角色功能传入service层
		boolean flag = service.addRole(role,funarry);			
		BaseResult result = new BaseResult();
		if(flag){
			result.setResultcode("200");
			result.setResultmsg("插入成功！");
		}else{
			result.setResultcode("101");
			result.setResultmsg("插入失败！");
		}
		JsonWrite.jsonWrinte(result, response);
	}
	
	/**
	 *根据角色ID查询角色所有信息和功能
	 */
	@RequestMapping("showRole.do")
	public void showRole(HttpServletRequest request, HttpServletResponse response){
		Integer role_id = Integer.valueOf(request.getParameter("role_id"));	//接收角色ID
		Role role = service.queryRole(role_id);						//service层查询角色
		List<String> functions = service.queryFunction(role_id);	//查询角色所有功能
		ModifyRoleResult result = new ModifyRoleResult();			//封装结果集
		if(role!=null){
			result.setRole(role);
			result.setFunctions(functions);
			result.setResultcode("200");
			result.setResultmsg("成功！");
		}else{
			result.setResultcode("101");
			result.setResultmsg("查询的角色不存在!");
		}
		JsonWrite.jsonWrinte(result, response);
	}
	@RequestMapping("modifyRole.do")
	public void modifyRole(HttpServletRequest request, HttpServletResponse response){
		Integer role_id = Integer.valueOf(request.getParameter("role_id"));		//角色ID
		String role_name = request.getParameter("role_name");		//角色名称
		Integer role_status = Integer.valueOf(request.getParameter("role_status"));	//角色状态
		String role_info = request.getParameter("role_info");		//角色备注
		String funarry = request.getParameter("funarry");			//角色功能字符串
		//封装角色信息
		Role role = new Role();
		role.setRole_id(role_id);
		role.setRole_name(role_name);
		role.setRole_status(role_status);
		role.setRole_info(role_info);
		//调用service层更新
		boolean flag = service.modifyRole(role, funarry);
		if(flag){
			JsonWrite.jsonWrinte("200", response);
		}else{
			JsonWrite.jsonWrinte("101", response);
		}
	}
}
