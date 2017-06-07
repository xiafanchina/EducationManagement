/*
 * File name:          StudentPageResult.java
 * Copyright@Handkoo (China)
 * Editor:           JDK1.6.32
 */
package edu.man.result;

import java.util.List;

import edu.man.bean.StudentAndClass;
import edu.man.util.BaseResult;

/**
 * 学生分页结果集
 */
public class StudentPageResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	int count;
	List<StudentAndClass> list;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<StudentAndClass> getList() {
		return list;
	}

	public void setList(List<StudentAndClass> list) {
		this.list = list;
	}

}
