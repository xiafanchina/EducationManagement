package edu.man.bean;
/**
 * lesson中lesson_name的实体类，用来显示课程方向
 */
public class LessonName {
	private String lesson_name;
	public LessonName() {
	}
	public String getLesson_name() {
		return lesson_name;
	}
	public void setLesson_name(String lesson_name) {
		this.lesson_name = lesson_name;
	}
	@Override
	public String toString() {
		return "LessonName [lesson_name=" + lesson_name + "]";
	}
	

}
