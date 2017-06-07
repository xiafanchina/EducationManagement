package edu.man.result;

import edu.man.util.BaseResult;

/**
 * 教师错误信息结果集 
 */
public class TeacherErrorMsg extends BaseResult{

	private static final long serialVersionUID = 1L;

	//查询退回错误的信息的字符串
	private String tea_result;

	public String getTea_result() {
		return tea_result;
	}

	public void setTea_result(String tea_result) {
		this.tea_result = tea_result;
	}
	
}
