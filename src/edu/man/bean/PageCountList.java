package edu.man.bean;

import java.util.List;

/**
 * 分页 实例类
 */
public class PageCountList {

	private List<Class> classInfoList;//班级就业信息实例类集合
	private List<Student> studentInfoList;//学生信息实例类集合
	private List<JobInfo> jobInfoList;//学生就业信息实例类集合
	private List<JobInfoAndStudent> jobInfoAndStudentList;//学生个人就业信息实例类
	private Integer count;//总行数
	
	public List<JobInfoAndStudent> getJobInfoAndStudentList() {
		return jobInfoAndStudentList;
	}
	public void setJobInfoAndStudentList(
			List<JobInfoAndStudent> jobInfoAndStudentList) {
		this.jobInfoAndStudentList = jobInfoAndStudentList;
	}
	public List<Class> getClassInfoList() {
		return classInfoList;
	}
	public void setClassInfoList(List<Class> classInfoList) {
		this.classInfoList = classInfoList;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public List<Student> getStudentInfoList() {
		return studentInfoList;
	}
	public void setStudentInfoList(List<Student> studentInfoList) {
		this.studentInfoList = studentInfoList;
	}
	public List<JobInfo> getJobInfoList() {
		return jobInfoList;
	}
	public void setJobInfoList(List<JobInfo> jobInfoList) {
		this.jobInfoList = jobInfoList;
	}
	
}
