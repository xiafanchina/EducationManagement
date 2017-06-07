package edu.man.result;

import edu.man.bean.RegisterTch;
import edu.man.util.BaseResult;

/**
 * 教师登录信息结果集 
 */
public class TeacherLoginResult extends BaseResult{

	private static final long serialVersionUID = 1L;
	private RegisterTch register;

	public RegisterTch getRegister() {
		return register;
	}

	public void setRegister(RegisterTch register) {
		this.register = register;
	}
	
	
}
