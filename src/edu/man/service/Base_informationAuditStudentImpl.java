package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Student;

import org.springframework.stereotype.Service;

/**
 * 学生列表
 * 以5位单位返回数据库中的数据的类 2016年10月28日
 */
@Service("studentService")
public class Base_informationAuditStudentImpl extends BaseService {
	@SuppressWarnings("unchecked")
	public List<Student> getStudentList(Integer pageCount) {
		System.out.println(pageCount);
		Map<String, Object> array = new HashMap<String, Object>();// 创建集合存放页码
		pageCount = (pageCount - 1) * 5;// 将页码转化成符合条件的数据编号
		System.out.println(pageCount);
		array.put("pageCount", pageCount);
		List<Student> arr = (List<Student>) dao.selectList("edu.man.mapper.StudentMapper.getallStudent", array);// 从数据库中获取学生信息;
		return arr;
	}

	/**
	 * 学生列表
	 * 获取数据库中的数据总数
	 */
	public int getStudentDataSum() {
		int arr = (int) dao.selectOne("edu.man.mapper.StudentMapper.getstudentdatasum");// 从数据库中获取学生信息
		return arr;
	}
}
