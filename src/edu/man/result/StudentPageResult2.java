
package edu.man.result;

import java.util.List;

import edu.man.bean.Student;
import edu.man.util.BaseResult;
/**
 * 学生列表结果集
 */
public class StudentPageResult2 extends BaseResult {

	private static final long serialVersionUID = 1L;
	int count;
	List<Student> list;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<Student> getList() {
		return list;
	}

	public void setList(List<Student> list) {
		this.list = list;
	}

}
