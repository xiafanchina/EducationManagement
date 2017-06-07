package edu.man.bean;
import java.util.List;

import edu.man.bean.Student;
import edu.man.util.BaseResult;

/**
 * 返回StudentPageResult类型
 */
public class StudentPageResult extends BaseResult {
	
	int count; //页数
	List<Class> list; //list集合--班级
	List<Student> studentList; //list集合--学生

	public List<Student> getStudentList() {
		return studentList;
	}

	public void setStudentList(List<Student> studentList) {
		this.studentList = studentList;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<Class> getList() {
		return list;
	}

	public void setList(List<Class> list) {
		this.list = list;
	}
}
