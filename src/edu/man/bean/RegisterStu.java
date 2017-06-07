package edu.man.bean;

/**
 * 学生注册的实体类
 */
public class RegisterStu {
	private String email;//注册邮箱
	private String fullName;//学生姓名
	private String IDNo;//身份证号
	private String password;//密码
	private Integer status;//学生状态
	private String stu_reason;
	private String stu_result;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getIDNo() {
		return IDNo;
	}
	public void setIDNo(String iDNo) {
		IDNo = iDNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getStu_reason() {
		return stu_reason;
	}
	public void setStu_reason(String stu_reason) {
		this.stu_reason = stu_reason;
	}
	public String getStu_result() {
		return stu_result;
	}
	public void setStu_result(String stu_result) {
		this.stu_result = stu_result;
	}
	
}
