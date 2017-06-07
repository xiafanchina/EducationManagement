package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import edu.man.bean.CourseMore;
import edu.man.bean.ScoreMore;
import edu.man.bean.Student;
import edu.man.result.CoursePageResult;
import edu.man.result.ScorePageResult;
import edu.man.result.StudentPageResult2;

/**
 * 创建与管理课程
 */
@Service("CourseAExamServiceImpl")
public class CourseAExamServiceImpl extends BaseService{
	/**
	 * 分页查询所有课程信息
	 */
	@SuppressWarnings("unchecked")
	public CoursePageResult showAllCourse(Integer currentPage , Integer pageSize){
		Map<String, Object> map = new HashMap<String, Object>();
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		List<CourseMore> list = (List<CourseMore>) dao.selectList("edu.man.mapper.CourseAExamMapper.showCourse",map);
		int count = (int) dao.selectOne("edu.man.mapper.CourseAExamMapper.getCourseCount");
		CoursePageResult result = new CoursePageResult();
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 根据课程id删除课程信息
	 */
	public int deleteCourse(Integer id){
		dao.delete("edu.man.mapper.CourseAExamMapper.deleteExamByCid",id);
		dao.delete("edu.man.mapper.CourseAExamMapper.deleteScByCid",id);
		int row =  dao.delete("edu.man.mapper.CourseAExamMapper.deleteCourse",id);
		return  row;
	}
	/**
	 * 新增课程信息
	 **/
	public int addCourse(Map<String,Object> map) {
		int row = dao.insert("edu.man.mapper.CourseAExamMapper.insertCourse",map);	
		return row;
	}
	/**
	 * 编辑课程信息
	 **/
	public int updateCourse(Map<String,Object> map) {
		int row = dao.update("edu.man.mapper.CourseAExamMapper.updateCourse",map);	
		return row;
	}
	/**
	 * 根据课程id显示课程信息
	 **/
	public CoursePageResult showCourseById(Integer id) {
		List<CourseMore> list = (List<CourseMore>) dao.selectList("edu.man.mapper.CourseAExamMapper.showCourseById",id);	
		CoursePageResult result = new CoursePageResult();
		result.setList(list);
		return  result;
	}
	/**
	 * 根据课程id分页查询所有学生信息
	 */
	@SuppressWarnings("unchecked")
	public StudentPageResult2 showStuByCourseId(Integer currentPage , Integer pageSize  ,Integer id){
		Map<String, Object> map = new HashMap<String, Object>();
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		map.put("id", id);
		List<Student> list = (List<Student>) dao.selectList("edu.man.mapper.CourseAExamMapper.showStuByCourseId",map);
		int count = (int) dao.selectOne("edu.man.mapper.CourseAExamMapper.countStuByCourseId",id);
		StudentPageResult2 result = new StudentPageResult2();
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 根据课程id和学生id删除对应的学生课程信息
	 */
	public int deleteCStu(Integer id,Integer sid){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", id);
		map.put("sid", sid);
		dao.delete("edu.man.mapper.CourseAExamMapper.deleteExamByScid",map);
		int row =  dao.delete("edu.man.mapper.CourseAExamMapper.deleteCStu",map);
		return  row;
	}
	/**
	 * 显示所有学生信息
	 */
	public List<Student> showCStu(){
		List<Student> list =  (List<Student>) dao.selectList("edu.man.mapper.CourseAExamMapper.showCStu");
		return  list;
	}
	/**
	 * 根据学生id将学生写入相应课程id的表中
	 */
	public int addCStu(Integer cid,Integer sid){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("cid", cid);
		map.put("sid", sid);
		int row =  dao.insert("edu.man.mapper.CourseAExamMapper.addCStu",map);
		return  row;
	}
	
	/**
	 * 分页查询所有考试信息
	 */
	@SuppressWarnings("unchecked")
	public ScorePageResult showExam(Integer currentPage , Integer pageSize){
		Map<String, Object> map = new HashMap<String, Object>();
		int curPage = (currentPage - 1) * pageSize;
		map.put("currentPage", curPage);
		map.put("pageSize", pageSize);
		List<ScoreMore> list = (List<ScoreMore>) dao.selectList("edu.man.mapper.CourseAExamMapper.showScore",map);
		int count = (int) dao.selectOne("edu.man.mapper.CourseAExamMapper.getScoreCount");
		ScorePageResult result = new ScorePageResult();
		result.setList(list);
		result.setCount(count);
		return  result;
	}
	/**
	 * 根据考试id删除考试信息
	 */
	public int deleteExam(Integer id){
		int row =  dao.delete("edu.man.mapper.CourseAExamMapper.deleteExam",id);
		return  row;
	}
	/**
	 * 根据考试id修改考试信息
	 */
	public int modifyExam(Integer id,Integer score,String date){
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("id", id);
		map.put("score", score);
		map.put("date", date);
		int row =  dao.update("edu.man.mapper.CourseAExamMapper.updateExam",map);
		return  row;
	}
	/**
	 * 根据课程id和学生id查询选课信息
	 */
	public List<ScoreMore> showScById(Integer cid,Integer sid){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("cid", cid);
		map.put("sid", sid);
		List<ScoreMore> row =  (List<ScoreMore>) dao.selectList("edu.man.mapper.CourseAExamMapper.showScById",map);
		return  row;
	}
	/**
	 * 根据课程id和学生id等添加考试信息
	 */
	public int addExam(Map map){
		int row =  dao.insert("edu.man.mapper.CourseAExamMapper.addExam",map);
		return  row;
	}
}
