package edu.man.service;

import edu.man.bean.RegisterTch;
import org.springframework.stereotype.Service;
/**
 * 修改老师密码
 */
@Service("tool_passwordModifyServiceImpl")
public class Tool_passwordModifyServiceImpl extends BaseService{

	/**
	 * 判断旧密码是否正确
	 */
	public RegisterTch getPasswordByEmail(String email){
		return (RegisterTch) dao.selectOne("edu.man.Tool_passwordModifyServiceImpl.getPassword", email);
	}
	/**
	 * 修改新密码
	 */
	public boolean upDataPasswordByEmail(String email,String passwordConfirm){
		RegisterTch registerTch = new RegisterTch();
		registerTch.setTea_email(email);
		registerTch.setTea_pwd(passwordConfirm);
		int i = dao.update("edu.man.Tool_passwordModifyServiceImpl.upDataPassword", registerTch);
		if(i == 1){
			return true;
		}
		return false;
	}
}
