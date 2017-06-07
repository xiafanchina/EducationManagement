package edu.man.bean;

import java.util.Date;

/** 
 * 学生与班级实体类
 */
public class StudentAndClass {
	private int id;// 学号	
	private String email;// 邮箱
	private String id_card;// 身份证号
	private String stus_name;// 姓名
	private String sex;// 性别
	private String phone;// 手机号
	private String qq;// QQ号
	private String  stu_status;// 学生状态
	private int account_status;// 账号状态
	private String nation;// 民族
	private String brith_place;// 籍贯
	private String political;// 政治面貌
	private String education;// 当前学历
	private String school;// 生源院校
	private String major;// 所学专业
	private Date schooldate;// 入学年份
	private String imag;// 头像
	private String info;// 注册信息备注
	private int class_sid;// 班级ID
	private String job_id;// 就业ID
	private Date submit_date;
	private String class_name;//班级名称
	  
	public String getClass_name() {
		return class_name;
	}

	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getBrith_place() {
		return brith_place;
	}

	public void setBirth_place(String birth_place) {
		this.brith_place = birth_place;
	}

	public String getPolitical() {
		return political;
	}

	public void setPolitical(String political) {
		this.political = political;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public Date getSchooldate() {
		return schooldate;
	}

	public void setSchooldate(Date schooldate) {
		this.schooldate = schooldate;
	}

	public String getImag() {
		return imag;
	}

	public void setImag(String imag) {
		this.imag = imag;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public int getClass_sid() {
		return class_sid;
	}

	public void setClass_sid(int class_sid) {
		this.class_sid = class_sid;
	}

	public String getJob_id() {
		return job_id;
	}

	public void setJob_id(String job_id) {
		this.job_id = job_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getId_card() {
		return id_card;
	}

	public void setId_card(String id_card) {
		this.id_card = id_card;
	}

	public String getStus_name() {
		return stus_name;
	}

	public void setStus_name(String stus_name) {
		this.stus_name =stus_name;
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

	public String getqq() {
		return qq;
	}

	public void setqq(String qq) {
		this.qq = qq;
	}

	public String getStu_status() {
		return stu_status;
	}

	public void setStu_status(String stu_status) {
		this.stu_status = stu_status;
	}

	public int getAccount_status() {
		return account_status;
	}

	public void setAccount_status(int account_status) {
		this.account_status = account_status;
	}

	public Date getSubmit_date() {
		return submit_date;
	}

	public void setSubmit_date(Date submit_date) {
		this.submit_date = submit_date;
	}
	private Integer class_id;//班级id
	private String name;//班级名称
	private String lesson;//课程方向
	private String lecturer;//主讲姓名
	private String assistant;//助教姓名
	private String teacher;//班主任姓名
	private Integer class_num;//班级人数
	private String course_start;//开课时间 date型
	private String course_end;//结课时间 date型
	private String class_way;//开班方式
	private String class_start;//开班时间
	private String class_place;//开班地点
	private Integer job_num;//就业人数
	private String status;//开课状态
	
	public Integer getClass_id() {
		return class_id;
	}
	public void setClass_id(Integer class_id) {
		this.class_id = class_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLesson() {
		return lesson;
	}
	public void setLesson(String lesson) {
		this.lesson = lesson;
	}
	public String getLecturer() {
		return lecturer;
	}
	public void setLecturer(String lecturer) {
		this.lecturer = lecturer;
	}
	public String getAssistant() {
		return assistant;
	}
	public void setAssistant(String assistant) {
		this.assistant = assistant;
	}
	public String getTeacher() {
		return teacher;
	}
	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}
	public Integer getClass_num() {
		return class_num;
	}
	public void setClass_num(Integer class_num) {
		this.class_num = class_num;
	}
	public String getCourse_start() {
		return course_start;
	}
	public void setCourse_start(String course_start) {
		this.course_start = course_start;
	}
	public String getCourse_end() {
		return course_end;
	}
	public void setCourse_end(String course_end) {
		this.course_end = course_end;
	}
	public String getClass_way() {
		return class_way;
	}
	public void setClass_way(String class_way) {
		this.class_way = class_way;
	}
	public String getClass_start() {
		return class_start;
	}
	public void setClass_start(String class_start) {
		this.class_start = class_start;
	}
	public String getClass_place() {
		return class_place;
	}
	public void setClass_place(String class_place) {
		this.class_place = class_place;
	}
	public Integer getJob_num() {
		return job_num;
	}
	public void setJob_num(Integer job_num) {
		this.job_num = job_num;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

}
