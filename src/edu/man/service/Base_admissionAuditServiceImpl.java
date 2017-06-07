package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.RegisterStu;
import edu.man.bean.StudentApply;
import edu.man.result.StudentApplyResult;
import org.springframework.stereotype.Service;
/**
 * 学生审核
 */
@Service("base_admissionAuditServiceImpl")
public class Base_admissionAuditServiceImpl extends BaseService{
	
	StudentApplyResult studentApplyResult = new StudentApplyResult(); 
	
	/**
	 * 搜索和加载页面
	 */
	public StudentApplyResult getData(String search_userName,String search_school,String direction,String min_score,String max_score,String score_status,Integer currentPage,Integer pageSize){
		Map<String, Object> map = new HashMap<String, Object>();
		
		int pageIndex = (currentPage-1)*pageSize;
		map.put("search_userName", search_userName);
		map.put("search_school", search_school);
		map.put("direction", direction);
		map.put("min_score", min_score);
		map.put("max_score", max_score);
		map.put("score_status", score_status);
		map.put("pageIndex", pageIndex);
		map.put("pageSize", pageSize);
		@SuppressWarnings("unchecked")
		List<StudentApply> listData = (List<StudentApply>) dao.selectList("edu.man.StudentApply.StudentApply_sousuo", map);
		int count = (int) dao.selectOne("edu.man.StudentApply.getCount",map);//所有的数据
		
		studentApplyResult.setCount(count);
		studentApplyResult.setListResult(listData);
		//验证输出是否获取前台发送过来的值
		if (listData.size()!=0) {
			studentApplyResult.setResultcode("200");
			studentApplyResult.setResultmsg("根据条件查询不为空");
		} else {
			studentApplyResult.setResultcode("101");
			studentApplyResult.setResultmsg("根据条件查询没有数据");
		}
		return studentApplyResult;
	}
	/**
	 * 允许入学
	 */
	public boolean upDate(String IDNo){
		RegisterStu registerStu = new RegisterStu();
		registerStu.setStatus(3);
		registerStu.setIDNo(IDNo);
		int i = dao.update("edu.man.TeacherallowStudentGotoSchool.teacherAllowUpDate",registerStu);
		int j = dao.update("edu.man.TeacherallowStudentGotoSchool.updateExam",registerStu);
		System.out.println("允许入学影响行数允许入学"+i);
		if(i != 0&&j>0){
			studentApplyResult.setResultcode("200");
			studentApplyResult.setResultmsg("修改成功");
			return true;
		}
		studentApplyResult.setResultcode("101");
		studentApplyResult.setResultmsg("修改失败");
		return false;
		
	}
	/**
	 * 重新考试
	 */
	public boolean replyUpDate(String IDNo){
		RegisterStu registerStu = new RegisterStu();
		registerStu.setStatus(2);
		registerStu.setIDNo(IDNo);
		int i = dao.update("edu.man.TeacherallowStudentGotoSchool.teacherAllowreplyUpDate",registerStu);
		int j = dao.update("edu.man.TeacherallowStudentGotoSchool.updateExam", registerStu);
		System.out.println("重新考试影响行数"+i);
		if(i != 0&&j>0){
			studentApplyResult.setResultcode("200");
			studentApplyResult.setResultmsg("修改成功");
			return true;
		}
		studentApplyResult.setResultcode("101");
		studentApplyResult.setResultmsg("修改失败");
		return false;
		
	}
}
