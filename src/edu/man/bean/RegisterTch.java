package edu.man.bean;


/**
 * 教师注册的实体类
 */

public class RegisterTch{
	private String tea_email;//教师邮箱
	private String tea_name;//教师姓名
	private String tea_idcard;//教师身份证号
	private String tea_pwd;//教师密码
	private Integer tea_status;//教师状态
	private String tea_reason;//退回理由
	private String tea_result;//退回信息
	public String getTea_email() {
		return tea_email;
	}
	public void setTea_email(String tea_email) {
		this.tea_email = tea_email;
	}
	public String getTea_name() {
		return tea_name;
	}
	public void setTea_name(String tea_name) {
		this.tea_name = tea_name;
	}
	public String getTea_idcard() {
		return tea_idcard;
	}
	public void setTea_idcard(String tea_idcard) {
		this.tea_idcard = tea_idcard;
	}
	public String getTea_pwd() {
		return tea_pwd;
	}
	public void setTea_pwd(String tea_pwd) {
		this.tea_pwd = tea_pwd;
	}
	public Integer getTea_status() {
		return tea_status;
	}
	public void setTea_status(Integer tea_status) {
		this.tea_status = tea_status;
	}
	public String getTea_reason() {
		return tea_reason;
	}
	public void setTea_reason(String tea_reason) {
		this.tea_reason = tea_reason;
	}
	public String getTea_result() {
		return tea_result;
	}
	public void setTea_result(String tea_result) {
		this.tea_result = tea_result;
	}
	
	
	
}
