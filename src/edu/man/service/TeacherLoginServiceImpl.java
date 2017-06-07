package edu.man.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import edu.man.bean.RegisterTch;
import edu.man.bean.Teacher;
import org.springframework.stereotype.Service;

@Service("TeacherLoginServiceImpl")
public class TeacherLoginServiceImpl extends BaseService {
	/**
	 * 教师登录
	 */
	public RegisterTch teacherLogin(String email, String password) {
		Map<String, String> map = new HashMap<String, String>();
		map.put("email", email);
		map.put("password", password);
		Object obj = dao.selectOne("edu.man.TeacherLoginMapper.teacherLogin", map);
		if (obj != null) {
			RegisterTch register = (RegisterTch) obj;
			return register;
		} else {
			return null;
		}
	}
	/**
	 * 登录
	 */
	public Teacher indexLoginer(String email) {
		Object obj = dao.selectOne("edu.man.TeacherLoginMapper.indexLoginer", email);
		if (obj != null) {
			Teacher teacher = (Teacher) obj;
			return teacher;
		} else {
			return null;
		}
	}
	/**
	 * 角色功能
	 */
	public List<String> indexFunction(Integer role_id) {
		// 查询到的功能MAP用list接收
		List<HashMap> list = (java.util.List<HashMap>) dao.selectList("edu.man.RoleMapper.queryFunction", role_id);
		List<String> result = new ArrayList<String>();
		// 把MAP中的功能拼接成字符串
		Iterator<HashMap> it = list.iterator();
		while (it.hasNext()) {
			String s = (String) it.next().get("function_name");
			result.add(s);
		}
		return result; // 返回功能字符串
	}
	/**
	 * 角色状态
	 */
	public int queryRoleStatus(Integer role_id){
		return (int) dao.selectOne("edu.man.TeacherLoginMapper.queryRoleStatus", role_id);
	}
}
