
package edu.man.result;

import java.util.List;

import edu.man.bean.Class;
import edu.man.util.BaseResult;
/**
 * 班级列表结果集
 */
public class ClassPageResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	int count;
	List<Class> list;

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
