package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import edu.man.bean.Student;
import edu.man.bean.StudentAndClass;
import edu.man.result.StudentPageResult;

import org.springframework.stereotype.Service;

@Service("StudentManagementServiceImpl")
public class StudentManagementServiceImpl extends BaseService{
	
	/**
	 * 学生分页显示所有
	 */
	public StudentPageResult showAll(Map<String,Object> map){
		@SuppressWarnings("unchecked")
		List<StudentAndClass> list = (List<StudentAndClass>)dao.selectList("edu.man.mapper.UserMapper.showAllStudent",map);
		System.out.println(map.get("teacher"));
		int count = (int) dao.selectOne("edu.man.mapper.UserMapper.getAllCount",map);
		StudentPageResult result = new StudentPageResult();
		System.out.println(list.size());
		System.out.println(count);
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 学生分页搜索显示
	 */
	public StudentPageResult searchAll(Map<String,Object> map){
		@SuppressWarnings("unchecked")
		List<StudentAndClass> list = (List<StudentAndClass>) dao.selectList("edu.man.mapper.UserMapper.showAllStudent",map);
		int count = (int) dao.selectOne("edu.man.mapper.UserMapper.getAllCount",map);
		StudentPageResult result = new StudentPageResult();
		System.out.println(list.size());
		System.out.println(count);
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 编辑学生信息
	 */
	public StudentAndClass EditStudentMsg(int id){
		StudentAndClass student =(StudentAndClass)dao.selectOne("edu.man.mapper.UserMapper.selectById", id);
		return student;
	}
	/**
	 * 更新学生信息
	 */
	public int UpdateStudentMsg(Map<String,Object> map){
		int count=-1;
	    count = dao.update("edu.man.mapper.UserMapper.updateStudentMsg", map);
	    return count;
	}
}
