package edu.man.result;

import java.util.List;
/**
 * 教师角色信息结果集 
 */
public class TeacherRole {
	private List<String> functions;
	private int stauts;
	public List<String> getList() {
		return functions;
	}
	public void setList(List<String> functions) {
		this.functions = functions;
	}
	public int getStauts() {
		return stauts;
	}
	public void setStauts(int stauts) {
		this.stauts = stauts;
	}
	
}
