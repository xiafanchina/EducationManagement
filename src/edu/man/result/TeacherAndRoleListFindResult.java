package edu.man.result;

import java.util.List;

import edu.man.bean.TeacherAndRole;
import edu.man.util.BaseResult;

/**
 * 教师角色结果集
 */
public class TeacherAndRoleListFindResult extends BaseResult{

	private static final long serialVersionUID = 1L;
	private int totalNums;//总数据量
	private List<TeacherAndRole> list;//教师列表集合
	public int getTotalNums() {
		return totalNums;
	}
	public void setTotalNums(int totalNums) {
		this.totalNums = totalNums;
	}
	public List<TeacherAndRole> getList() {
		return list;
	}
	public void setList(List<TeacherAndRole> list) {
		this.list = list;
	}

}
