package edu.man.bean;


/**
 * 班级信息表的实体类
 */
public class Class {
	private Integer class_id;//班级id
	private String name;//班级名称
	private String lesson;//课程方向
	private String lecturer;//主讲姓名
	private String assistant;//助教姓名
	private String teacher;//班主任姓名
	private Integer class_num;//班级人数
	private String course_start;//开课时间 
	private String course_end;//结课时间
	private String class_way;//开班方式
	private String class_start;//开班时间
	private String class_place;//开班地点
	private Integer job_num;//就业人数
	private String status;//开课状态

	public Class() {
	}
	//全参的构造方法
	public Class(Integer class_id, String name, String lesson, String lecturer,
			String assistant, String teacher, Integer class_num,
			String course_start, String course_end, String class_way,
			String class_start, String class_place, Integer job_num ,String status) {
		this.class_id = class_id;
		this.name = name;
		this.lesson = lesson;
		this.lecturer = lecturer;
		this.assistant = assistant;
		this.teacher = teacher;
		this.class_num = class_num;
		this.course_start = course_start;
		this.course_end = course_end;
		this.class_way = class_way;
		this.class_start = class_start;
		this.class_place = class_place;
		this.job_num = job_num;
		this.status = status;
	}
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
	@Override
	public String toString() {
		return "Class [class_id=" + class_id + ", name=" + name + ", lesson="
				+ lesson + ", lecturer=" + lecturer + ", assistant="
				+ assistant + ", teacher=" + teacher + ", class_num="
				+ class_num + ", course_start=" + course_start
				+ ", course_end=" + course_end + ", class_way=" + class_way
				+ ", class_start=" + class_start + ", class_place="
				+ class_place + ", job_num=" + job_num +", status=" + status + "]";
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
