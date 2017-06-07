package edu.man.result;

import java.util.List;

import edu.man.bean.Teacher;

import edu.man.util.BaseResult;

/**
 * 教师角色结果集 
 */
public class TeacherAndRoleListResult extends BaseResult{

	private static final long serialVersionUID = 1L;
	private int totalNums;//总数据量
	private List<Teacher> list;//教师审核列表集合
	public int getTotalNums() {
		return totalNums;
	}
	public void setTotalNums(int totalNums) {
		this.totalNums = totalNums;
	}
	public List<Teacher> getList() {
		return list;
	}
	public void setList(List<Teacher> list) {
		this.list = list;
	}
	
	

}
