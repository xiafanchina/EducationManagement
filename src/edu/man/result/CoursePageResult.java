
package edu.man.result;

import java.util.List;

import edu.man.bean.CourseMore;
import edu.man.util.BaseResult;
/**
 * 课程列表结果集
 */
public class CoursePageResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	int count;
	List<CourseMore> list;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<CourseMore> getList() {
		return list;
	}

	public void setList(List<CourseMore> list) {
		this.list = list;
	}

}
