package edu.man.bean;

/**
 * 某个班级每位学生就业信息的实例类
 */
public class JobInfoAndStudent extends JobInfo{
	
	private String id;//学生ID
	private String stus_name;//学生姓名
	private String sex;//学生性别
	private String phone;//学生手机号
	private String qq;//学生QQ号
	
	public String getStus_name() {
		return stus_name;
	}
	public void setStus_name(String stus_name) {
		this.stus_name = stus_name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	  
}
