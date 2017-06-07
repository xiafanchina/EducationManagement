package edu.man.result;

import java.util.List;

import edu.man.bean.Teacher;
import edu.man.util.BaseResult;
/**
 * 教师列表分页结果集
 */
public class TeacherPageResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	private int count;
	private List<Teacher> list;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<Teacher> getList() {
		return list;
	}

	public void setList(List<Teacher> list) {
		this.list = list;
	}

}
