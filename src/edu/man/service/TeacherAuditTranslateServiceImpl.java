package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Teacher;
import edu.man.bean.TeacherAndRole;
import edu.man.result.TeacherAndRoleListFindResult;
import edu.man.result.TeacherAndRoleListResult;
import org.springframework.stereotype.Service;

@Service("TeacherAuditTranslateServiceImpl")
public class TeacherAuditTranslateServiceImpl extends BaseService {

	/**
	 * 通过id(主键)连接查询某一申请教师的人的详细信息
	 */
	
	public TeacherAndRole findTeacherById(String id) {

		TeacherAndRole teacher = (TeacherAndRole) dao.selectOne("edu.man.mapper.teacher.findTeacherByid", id);

		return teacher;

	}
	/**
	 * 查询所有待审核的教师(分页查询)
	 */
	@SuppressWarnings("unchecked")
	public TeacherAndRoleListResult findCurrentPage(int currentPage, int pageSize) {
		Map<String, Object> map = new HashMap<String, Object>();
		int pageIndex = (currentPage - 1) * pageSize;
		map.put("currentPage", pageIndex);
		map.put("pageSize", pageSize);
		// 通过数据库查询
		List<Teacher> list = (List<Teacher>) dao.selectList("edu.man.mapper.teacher.findcurrentPage", map);
		TeacherAndRoleListResult result = new TeacherAndRoleListResult();
		result.setList(list);

		// 查询数据总条数
		int totalNums = (int) dao.selectOne("edu.man.mapper.teacher.getCount");

		result.setTotalNums(totalNums);
		return result;

	}
	/**
	 * 高级查询教师列表
	 */
	@SuppressWarnings("unchecked")
	public TeacherAndRoleListFindResult findCurrentPageList(int currentPage, int pageSize) {
		Map<String, Object> map = new HashMap<String, Object>();
		int pageIndex = (currentPage - 1) * pageSize;
		map.put("currentPage", pageIndex);
		map.put("pageSize", pageSize);
		// 通过数据库查询
		List<TeacherAndRole> list = (List<TeacherAndRole>) dao.selectList("edu.man.mapper.teacher.findcurrentPageList", map);
		TeacherAndRoleListFindResult result = new TeacherAndRoleListFindResult();
		result.setList(list);

		// 查询数据总条数
		int totalNums = (int) dao.selectOne("edu.man.mapper.teacher.getCountlist");

		result.setTotalNums(totalNums);
		return result;

	}

	/**
	 * 通过审核
	 * 修改教师的状态
	 */ 
	public boolean updateAudit(String email) {
		boolean flag = true;
		int i = dao.update("edu.man.mapper.teacher.updateAudit", email);
		if (i == 0) {
			flag = false;
		}
		return flag;

	}

	/**
	 * 未通过审核
	 */
	public boolean updatedisAudit(String wrong, String reason, String email) {
		boolean flag = true;
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("wrong", wrong);
		map.put("email", email);
		map.put("reason", reason);
		// 填写教师注册表的未通过项和未通过原因
		int i = dao.update("edu.man.mapper.teacher.updatedisAudit", map);
		if (i == 0) {
			flag = false;
		}
		return flag;

	}
	/**
	 * 更新
	 */
	public boolean updateSenior(int id) {
		boolean flag = true;
		int i = dao.update("edu.man.mapper.teacher.updateSenior", id);
		if (i == 0) {
			flag = false;
		}
		return flag;

	}
}