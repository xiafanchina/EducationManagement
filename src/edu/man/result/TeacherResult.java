package edu.man.result;

import edu.man.bean.Teacher;
import edu.man.util.BaseResult;
/**
 * 教师信息结果集 
 */
public class TeacherResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	private Teacher teacher;

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
}
