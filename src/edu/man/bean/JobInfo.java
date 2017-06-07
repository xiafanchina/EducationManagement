package edu.man.bean;

/**
 * 就业历史信息 实例类
 */
public class JobInfo {

	private int job_id;//就业编号
	private String job;//职位
	private String student_id;//学生Id
	private String com_name;//公司名称
	private String com_phone;//公司电话
	private String address;//公司地址
	private String entry_date;//入职时间
	private String salary;//转正薪资
	private String submit_date;//提交日期
	private String submit_person;//提交人
	
	public int getJob_id() {
		return job_id;
	}
	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}
	public String getStudent_id() {
		return student_id;
	}
	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}
	
	public String getCom_name() {
		return com_name;
	}
	public void setCom_name(String com_name) {
		this.com_name = com_name;
	}
	public String getCom_phone() {
		return com_phone;
	}
	public void setCom_phone(String com_phone) {
		this.com_phone = com_phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getEntry_date() {
		return entry_date;
	}
	public void setEntry_date(String entry_date) {
		this.entry_date = entry_date;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getSubmit_date() {
		return submit_date;
	}
	public void setSubmit_date(String submit_date) {
		this.submit_date = submit_date;
	}
	public String getSubmit_person() {
		return submit_person;
	}
	public void setSubmit_person(String submit_person) {
		this.submit_person = submit_person;
	}
	
}
