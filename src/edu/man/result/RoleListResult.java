package edu.man.result;

import java.util.List;

import edu.man.bean.Role;
import edu.man.util.BaseResult;
/**
 * 角色列表结果集
 */
public class RoleListResult extends BaseResult{

	private static final long serialVersionUID = 1L;
	private int count;//总数据量
	private List<Role> list;//角色列表集合

	public List<Role> getList() {
		return list;
	}

	public void setList(List<Role> list) {
		this.list = list;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
}
