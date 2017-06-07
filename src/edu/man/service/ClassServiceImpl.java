package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Class;
import edu.man.bean.LessonName;
import edu.man.bean.Student;
import edu.man.bean.Teacher;
import edu.man.result.ClassPageResult;
import edu.man.result.StudentPageResult2;

import org.springframework.stereotype.Service;

/**
 * 创建与管理班级
 */
@Service("ClassServiceImpl")
public class ClassServiceImpl extends BaseService{
	/**
	 * 班级添加
	 */
	public boolean classAdd(Class class1){
		int result = dao.insert("edu.man.mapper.ClassMapper.InsertClassMes", class1);
		//返回插入的行数
		System.out.println("result:"+result);
		if (result ==1) {//返回1代表插入成功
			return true;
		} else {
			return false;
		}
	}
	/**
	 * 班级合并
	 */
	public boolean classMerge(Class class1){
		
		int result = dao.insert("edu.man.mapper.ClassMapper.InsertClassMes2", class1);
		//返回插入的行数
		System.out.println("result:"+result);
		if (result ==1) {//返回1代表插入成功
			return true;
		} else {
			return false;
		}
	}
	/**
	 * 查询课程方向
	 */
	@SuppressWarnings("unchecked")
	public List<LessonName> showLesson(){
		 //List<String> list = (List<String>) dao.selectList("edu.man.mapper.ClassMapper.SelectLesson");
		 List<LessonName> list = (List<LessonName>) dao.selectList("edu.man.mapper.ClassMapper.SelectLesson");
		 return list;
	}
	/**
	 * 根据教师角色查询教师信息
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List showTeaByRole(int roleId){
		List<Teacher> list = (List<Teacher>) dao.selectList("edu.man.mapper.ClassMapper.SelectTeaByRole",roleId);
		return list;
	}
	/**
	 * 根据教师名字和角色id搜索教师信息
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List showTeaByNameARole(Teacher tea){
		List<Teacher> list = (List<Teacher>) dao.selectList("edu.man.mapper.ClassMapper.SearchTeaByNameARole",tea);
		return list;
	}
	/**
	 * 班级编辑
	 */
	public boolean classModify(Class class1){
		int update = dao.update("edu.man.mapper.ClassMapper.UpdateClassMes", class1);
		//返回插入的行数
		if (update ==1) {//返回1代表插入成功
			return true;
		} else {
			return false;
		}
	}
	/**
	 * 根据班级姓名修改学生表里的班级id,返回修改的行数
	 */
	public int updateStuByClassName(String name,int id1,int id2){
		Map<String, Object> map=new HashMap<String, Object>();  
		map.put("name", name);
		map.put("id1", id1);
		map.put("id2", id2);
		int row = dao.update("edu.man.mapper.ClassMapper.updateStuByClassName", map);
		return row;
	}
	
	/**
	 * 根据多种条件搜索查询班级信息  	
	 */
	@SuppressWarnings("unchecked")
	public ClassPageResult showClassBySearch(Class class1,String timeChoice,String time1,String time2,Integer currentPage , Integer pageSize){
		Map<String, Object> map=new HashMap<String, Object>();  
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);	
        map.put("name", class1.getName());
        map.put("lesson", class1.getLesson());
        map.put("status", class1.getStatus());
        map.put("lecturer", class1.getLecturer());
        map.put("assistant", class1.getAssistant());
        map.put("teacher", class1.getTeacher());
        map.put("class_way", class1.getClass_way());
        map.put("class_place", class1.getClass_place());
        map.put("timeChoice", timeChoice);
        map.put("time1", time1);  
        map.put("time2",time2);
        List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.showSearchClass",map);
		int count = (int) dao.selectOne("edu.man.mapper.ClassMapper.getSearchCount",map);
		ClassPageResult result = new ClassPageResult();
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 分页查询所有班级信息
	 */
	@SuppressWarnings("unchecked")
	public ClassPageResult showAllClass(Integer currentPage , Integer pageSize){
		Map<String, Object> map = new HashMap<String, Object>();
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.showAllClass",map);
		int count = (int) dao.selectOne("edu.man.mapper.ClassMapper.getAllCount");
		ClassPageResult result = new ClassPageResult();
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 根据班级id分页查询所有学生信息
	 */
	@SuppressWarnings("unchecked")
	public StudentPageResult2 showStuByIdSplit(Integer currentPage , Integer pageSize ,Integer class_id){
		Map<String, Object> map = new HashMap<String, Object>();
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		map.put("class_id", class_id);
		List<Student> list = (List<Student>) dao.selectList("edu.man.mapper.ClassMapper.showSplitStu",map);
		int count = (int) dao.selectOne("edu.man.mapper.ClassMapper.getSplitStuCount",class_id);
		StudentPageResult2 result = new StudentPageResult2();
		result.setList(list);
		result.setCount(count);
		return  result;
		}
	/**
	 * 根据班级id查询两个班级信息
	 */
	@SuppressWarnings("unchecked")
	public List<Class> showClassById2(Integer id1 , Integer id2){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id1", id1);
		map.put("id2", id2);
		List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.selectClassById2",map);
		return  list;
	}
	/**
	 * 根据班级id查询一个班级信息
	 */
	@SuppressWarnings("unchecked")
	public List<Class> showClassById1(Integer class_id ){
		List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.selectClassById1",class_id);
		return  list;
	}
	/**
	 * 根据名称查询符合条件的班级信息
	 */
	@SuppressWarnings("unchecked")
	public List<Class> showClassByName(String name){
		List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.selectClassByName",name);
		return list;
	}
	/**
	 * 查询所有班级信息
	 */
	@SuppressWarnings("unchecked")
	public List<Class> showClass(){
		List<Class> list = (List<Class>) dao.selectList("edu.man.mapper.ClassMapper.showAllClassMes");
		return list;
	}
	public int queryJobNum(Integer id){
		int num = (int) dao.selectOne("edu.man.mapper.ClassMapper.queryJobNum", id);
		return num;
	}
	/**
	 * 根据班级id删除班级信息
	 */
	public int deleteClassById(Integer id1 , Integer id2){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id1", id1);
		map.put("id2", id2);
		int row =  dao.delete("edu.man.mapper.ClassMapper.deleteClassById",map);
		return  row;
	}
	/**
	 * 根据班级id查询对应的学生信息
	 */
	@SuppressWarnings("unchecked")
	public List<Student> showStuById(Integer class_id ){
		List<Student> list = (List<Student>) dao.selectList("edu.man.mapper.ClassMapper.selectStuById",class_id);
		return  list;
	}
	/**
	 * 根据原始班级id修改学生表的班级id
	 */
	public int updateStuByStuId(Integer id,Integer tid){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("tid", tid);
		int row = dao.update("edu.man.mapper.ClassMapper.updateStuByStuId",map);
		return row;
	}
	/**
	 * 根据班级id修改班级人数
	 */
	public int updateNumByClassId(Integer id,Integer num){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("num", num);
		int row = dao.update("edu.man.mapper.ClassMapper.updateNumByClassId",map);
		return row;
	}
	/**
	 * 更新班级人数
	 */
	public void updateClassNum(){
		dao.update("edu.man.mapper.ClassMapper.updateClassNum","");
	}
}
