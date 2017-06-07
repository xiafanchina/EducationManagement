package edu.man.bean;
/** 
 * 角色实体类
 */
public class Role {
	private Integer role_id;	//角色ID
	private String role_name;	//角色名称
	private String role_info;	//角色备注
	private Integer role_status;	//角色状态
	
	//get,set
	public Integer getRole_id() {
		return role_id;
	}
	public void setRole_id(Integer role_id) {
		this.role_id = role_id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	public String getRole_info() {
		return role_info;
	}
	public void setRole_info(String role_info) {
		this.role_info = role_info;
	}
	public Integer getRole_status() {
		return role_status;
	}
	public void setRole_status(Integer role_status) {
		this.role_status = role_status;
	}
	
}
