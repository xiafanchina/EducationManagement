package edu.man.bean;

import java.util.Date;

/** 
 * 学生考试实体类
 */
public class StuExamInfo {//学生报名信息
    private String ex_idcard;//身份证号
    private String ex_name;//学生姓名
    private String ex_school;//生源院校
    private String ex_choice;//报名方向
    private String ex_score;//考试成绩
    private Date ex_date;//考试时间
    private String ex_status;//成绩状态
	public String getEx_idcard() {
		return ex_idcard;
	}
	public void setEx_idcard(String ex_idcard) {
		this.ex_idcard = ex_idcard;
	}
	public String getEx_name() {
		return ex_name;
	}
	public void setEx_name(String ex_name) {
		this.ex_name = ex_name;
	}
	public String getEx_school() {
		return ex_school;
	}
	public void setEx_school(String ex_school) {
		this.ex_school = ex_school;
	}
	public String getEx_choice() {
		return ex_choice;
	}
	public void setEx_choice(String ex_choice) {
		this.ex_choice = ex_choice;
	}
	public String getEx_score() {
		return ex_score;
	}
	public void setEx_score(String ex_score) {
		this.ex_score = ex_score;
	}
	public Date getEx_date() {
		return ex_date;
	}
	public void setEx_date(Date ex_date) {
		this.ex_date = ex_date;
	}
	public String getEx_status() {
		return ex_status;
	}
	public void setEx_status(String ex_status) {
		this.ex_status = ex_status;
	}
	
	
}
