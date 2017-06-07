package edu.man.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Class;
import edu.man.bean.JobInfo;
import edu.man.bean.JobInfoAndStudent;
import edu.man.bean.PageCountList;
import edu.man.bean.Student;
import edu.man.util.BaseResult;

import org.springframework.stereotype.Service;

/**
 * 获取就业信息
 */
@Service("jobInforService")
public class JobInforService extends BaseService{

	/**
	 * 获取所有班级的相关信息
	 */
	@SuppressWarnings("unchecked")
	public PageCountList showMsg(int pageIndex,int pageSize){
		//调用dao层方法
		Map<String,Object> map = new HashMap<String, Object>();
		pageIndex = (pageIndex-1)*pageSize;
		map.put("pageIndex", pageIndex);
		map.put("pageSize", pageSize);
		List<Class> classInfoList = (List<Class>)dao.selectList("edu.man.mapper.ClassJobInfo.selectclass_info", map);
		//查询有多少个班级
		int count = (Integer)dao.selectOne("edu.man.mapper.ClassJobInfo.selectclass_infoCount", null);
		//把classInfoList和count放在一个实例类里面
		PageCountList pageCountList = new PageCountList();
		pageCountList.setCount(count);
		pageCountList.setClassInfoList(classInfoList);
		return pageCountList;
	}
	
	/**
	 * 查询某个班级就业信息返回值，显示在InformationStudent页面上部
	 */
	@SuppressWarnings("unchecked")
	public List<Class> showClassMsg(String classId){
		//调用dao层方法
		List<Class> classInfoList = (List<Class>)dao.selectList("edu.man.mapper.ClassJobInfo.selectclass_infoOne", classId);
		return classInfoList;
	}
	
	/**
	 * 查询某个班级的所有学生的就业情况
	 */
	@SuppressWarnings("unchecked")
	public PageCountList showStudentMsg(String class_id,int pageIndex,int pageCount){
		Map<String, Object> map = new HashMap<String, Object>();
		pageIndex = (pageIndex-1)*pageCount;
		map.put("class_id", class_id);
		map.put("pageIndex",pageIndex);
		map.put("pageCount", pageCount);
		List<JobInfoAndStudent> jobInfoAndStudentList = (List<JobInfoAndStudent>)dao.selectList("edu.man.mapper.ClassJobInfo.selectAllstudent_info", map);
		//某个班级总共有多少学生
		int count = (Integer)dao.selectOne("edu.man.mapper.ClassJobInfo.selectstudent_infoCount",class_id);
		//把jobInfoAndStudentList和count放在一个实例类里面
		PageCountList pageCountList = new PageCountList();
		pageCountList.setCount(count);
		pageCountList.setJobInfoAndStudentList(jobInfoAndStudentList);
		return pageCountList;
	}
	
	/**
	 * 查询某个学生的个人信息(根据学生ID),显示在StudentHistory页面上部
	 */
	@SuppressWarnings("unchecked")
	public List<Student> showHistoryStudentMsg(String student_id){
		List<Student> studentList = (List<Student>)dao.selectList("edu.man.mapper.ClassJobInfo.selectstudent_infoOne", student_id);
		return studentList;
	}
	
	/**
	 * 获取某个学生的个人就业历史信息返回值，显示在StudentHistory页面
	 */
	@SuppressWarnings("unchecked")
	public PageCountList showHistoryStudentInfoMsg(String student_id,int pageIndex,int pageCount){
		Map<String,Object> map = new HashMap<String, Object>();
		pageIndex = (pageIndex-1)*pageCount;
		map.put("student_id", student_id);
		map.put("pageIndex", pageIndex);
		map.put("pageCount", pageCount);
		
		List<JobInfo> studentJobInfo = (List<JobInfo>)dao.selectList("edu.man.mapper.ClassJobInfo.selectstudent_AllJobInfo", map);
		//查询某位学生共有几条就业历史
		int count = (Integer)dao.selectOne("edu.man.mapper.ClassJobInfo.selectstudent_AllJobInfoCount", student_id);
		//把studentJobInfo和count放在一个实例类里面
		PageCountList pageCountList = new PageCountList();
		pageCountList.setCount(count);
		pageCountList.setJobInfoList(studentJobInfo);
		return pageCountList;
	}
	
	/**
	 * 添加学生就业信息
	 */
	public BaseResult addJobInfo(String student_id,String com_name,String com_phone,String address,String job,String salary,String name){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("student_id", student_id);
		map.put("com_name", com_name);
		map.put("com_phone", com_phone);
		map.put("address", address);
		map.put("job", job);
		map.put("salary", salary);
		map.put("entry_date", "2016-10-23");
		map.put("submit_date", new Date());
		map.put("submit_person", name);
		int one = (int) dao.selectOne("edu.man.mapper.ClassJobInfo.countStudentJob", student_id);
		if(one==0){
			int classid = (int) dao.selectOne("edu.man.mapper.ClassJobInfo.selectClassId", student_id);
			dao.update("edu.man.mapper.ClassJobInfo.updateJobNum", classid);
		}
		int result = dao.insert("edu.man.mapper.ClassJobInfo.addStudentJobInfo", map);
		BaseResult baseResult = new BaseResult();
		if(result>0){//添加成功
			baseResult.setResultcode("200");
			baseResult.setResultmsg("添加成功");
			return baseResult;
		}else{//添加失败
			baseResult.setResultcode("101");
			baseResult.setResultmsg("系统正在维护中");
			return baseResult;
		}
	}
	
	/**
	 * 修改学生就业信息
	 */
	public BaseResult modifyMsg(String job_id,String com_name,String com_phone,String address,String job,String salary,String name){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("job_id", job_id);
		map.put("com_name", com_name);
		map.put("com_phone", com_phone);
		map.put("address", address);
		map.put("job", job);
		map.put("salary", salary);
		map.put("date", new Date());
		map.put("name", name);
		int result = dao.update("edu.man.mapper.ClassJobInfo.modifyStudentJobInfo", map);
		BaseResult baseResult = new BaseResult();
		if(result>0){//修改成功
			baseResult.setResultcode("200");
			baseResult.setResultmsg("修改成功");
			return baseResult;
		}else{//修改失败
			baseResult.setResultcode("101");
			baseResult.setResultmsg("系统正在维护中");
			return baseResult;
		}
	}
}
