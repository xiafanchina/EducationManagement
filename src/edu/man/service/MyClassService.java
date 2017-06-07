package edu.man.service;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Student;
import edu.man.bean.StudentPageResult;
import org.springframework.stereotype.Service;

/**
 * 我的班级
 */
@Service("myClassService")
public class MyClassService extends BaseService {
	
	/**
	 * 得到所有班级
	 */
	public StudentPageResult getAll(Map<String,Object> map){
	
		@SuppressWarnings("unchecked")
		List<edu.man.bean.Class> list = (List<edu.man.bean.Class>) dao.selectList("edu.man.mapper.MyClass.selectAllClass", map);
		StudentPageResult result = new StudentPageResult();
		result.setList(list);
		int count = (int) dao.selectOne("edu.man.mapper.MyClass.geClassCount",map);
		result.setCount(count);
		return result;
	}
	
	/**
	 * 根据班级id查询该班级信息
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Class> selectALLByDataId(String dataId){
		return (List<Class>) dao.selectList("edu.man.mapper.MyClass.selectAllByDataId", dataId);
		
	}
	
	/**
	 * 根据班级id查询该班所有学生
	 */
	public StudentPageResult selectStudentByclsaaId(Integer dataId,Integer pageCount,Integer pageSize){
		Map<String,Object> map = new HashMap<String,Object>();
		int pageIndex = (pageCount-1)*pageSize;
		map.put("dataId", dataId);
		map.put("pageIndex", pageIndex);
		map.put("pageSize", pageSize);
		@SuppressWarnings("unchecked")
		List<Student> list =  (List<Student>) dao.selectList("edu.man.mapper.MyClass.selectStudentByclsaaId", map);
		StudentPageResult result = new StudentPageResult();
		result.setStudentList(list);
		int count = (int) dao.selectOne("edu.man.mapper.MyClass.getStudentCount",dataId);
		result.setCount(count);
		return result;
	}
	
	
	/**
	 * 查询具体某个人信息
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Class> selectstudentbyId(String stuId){
		return (List<Class>) dao.selectList("edu.man.mapper.MyClass.selectstudentbyId", stuId);
	}
	
	/**
	 * 修改学生状态
	 */
	public boolean updateStudentStatus(int id,String stu_status){
		Student stu = new Student();
		stu.setId(id);
		stu.setStu_status(stu_status);
		int s = dao.update("edu.man.mapper.MyClass.updateStudnetStatus", stu);
		if(s==1){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 更改班级状态为已开课
	 */
	public boolean updateHaveclass(Integer class_id){
		edu.man.bean.Class class1 = new edu.man.bean.Class();
		class1.setClass_id(class_id);
		class1.setStatus("已开课");
		int s = dao.update("edu.man.mapper.MyClass.updateHaveclass",class1);
		
		if(s==1){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 更改班级状态
	 */
	public boolean updateClassStadus(Integer class_id,String status){
		edu.man.bean.Class class1 = new edu.man.bean.Class();
		class1.setClass_id(class_id);
		class1.setStatus(status);
		int s = dao.update("edu.man.mapper.MyClass.updateClassStadus",class1);
		if(s==1){
			return true;
		}else{
			return false;
		}
	}
}
