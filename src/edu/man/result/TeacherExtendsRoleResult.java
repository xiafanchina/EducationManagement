package edu.man.result;

import java.util.List;

import edu.man.bean.TeacherExtendsRole;
import edu.man.util.BaseResult;

/**
 * 教师角色信息结果集 
 */
public class TeacherExtendsRoleResult extends BaseResult{

	private static final long serialVersionUID = 1L;
	private List<TeacherExtendsRole> list;//教师列表集合
	
	public List<TeacherExtendsRole> getList() {
		return list;
	}
	public void setList(List<TeacherExtendsRole> list2) {
		this.list = list2;
	}

}
