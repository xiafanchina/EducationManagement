package edu.man.result;

import java.util.List;

import edu.man.bean.StudentApply;
import edu.man.util.BaseResult;
/**
 * 学生分页查询结果集
 */
public class StudentApplyResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	
	private int count;//接受返回的总页数
	private List<StudentApply> listResult;//用于接受查询的数据
	
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public List<StudentApply> getListResult() {
		return listResult;
	}
	public void setListResult(List<StudentApply> listResult) {
		this.listResult = listResult;
	}

}
