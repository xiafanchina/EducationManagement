package edu.man.service;

import java.util.HashMap;
import java.util.Map;

import edu.man.bean.RegisterTch;
import edu.man.bean.Teacher;
import org.springframework.stereotype.Service;
/**
 *注册完善信息
 */
@Service("teacherLoginAndRegisterService")
public class TeacherLoginAndRegisterService extends BaseService{

	/**
	 * 教师注册时判断邮箱是否存在
	 */
	public Boolean teacherRegisterCheckEmail(String email){
		RegisterTch registerTch = (RegisterTch)dao.selectOne("edu.man.mapper.teacherLoginAndRegister.teacherRegisterCheckEmail", email);
	    if(registerTch!=null){//说明邮箱存在
	    	 return true;
	    }
	    return false;
	}
	
	/**
	 * 教师注册时判断是否成功
	 */
	
	public boolean registerTeacher (String email,String fullName,String iDNo,String password ){
		Map<String, Object> map = new HashMap<String,Object>();
		map.put("tea_email",email );
		map.put("tea_name",fullName );
		map.put("tea_idcard",iDNo);
		map.put("tea_pwd",password);
		map.put("tea_status", 1);
		int result = (Integer)dao.insert("edu.man.mapper.teacherLoginAndRegister.teacherRegister",map );
		if(result>0){
			return true;
		}
		return false;
	}
	
	/**
	 * 教师的完善信息
	 */
	public boolean teacherInfo(Teacher teacher){
		
		int result = dao.insert("edu.man.mapper.teacherLoginAndRegister.teacherInformation", teacher);
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("email",teacher.getEmail());
		map.put("status",2);
		int update = dao.update("edu.man.mapper.teacherLoginAndRegister.updateStatus", map);//教师完善信息后，更新教师注册表的状态值
		
		if(result>0&&update>0){
			return true;
		}
		return false;
	}
	/**
	 * 老师忘记密码后 检查输的邮箱是否已注册
	 */
	public boolean passwordForget(String email){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("tea_email", email);
		RegisterTch registerTch = (RegisterTch)dao.selectOne("edu.man.mapper.teacherLoginAndRegister.passwordForgetCheckEmail",map);
		if(registerTch==null){//该邮箱没注册
			return true;
		}
		return false;
	}
	
	/**
	 * 老师忘记密码后 检查邮箱正确后修改密码
	 */
	public boolean pwdForgetAfterModifyPwd(String email,String pwd){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("email", email);
		map.put("pwd", pwd);
		int result = dao.update("edu.man.mapper.teacherLoginAndRegister.passwordForgetAfterModifyPwd", map);
		if(result>0){//如果大于零，则表示更新成功，返回true
			return true;
		}
		return false;
	}
}
