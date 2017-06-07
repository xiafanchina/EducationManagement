package edu.man.result;

import java.util.List;

import edu.man.bean.Role;
import edu.man.util.BaseResult;
/**
 * 编辑角色结果集
 */
public class ModifyRoleResult extends BaseResult{
	
	private static final long serialVersionUID = 1L;
	private Role role;//被编辑的角色
	private List<String> functions;//角色功能集合
	//get,set
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public List<String> getFunctions() {
		return functions;
	}
	public void setFunctions(List<String> functions) {
		this.functions = functions;
	}
	
}
