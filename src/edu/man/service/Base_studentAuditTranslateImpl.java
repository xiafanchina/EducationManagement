package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Student;

import org.springframework.stereotype.Service;
/**
 * 学生列表
 *双击时的学生的信息
 */
@Service("studentDataService")
public class Base_studentAuditTranslateImpl extends BaseService {
	Student stu=new Student();//创建一个学生对象，存入学生的id
    @SuppressWarnings("unchecked")
	public List<Student> getStudentList(Integer id){
    	System.out.println(id);
    	stu.setId(id);
    	return (List<Student>) dao.selectList("edu.man.mapper.StudentMapper.getstudentdata",stu);//从数据库中获取指定的学生信息
    }
    /**
     * 查询学生班级信息
     */
    @SuppressWarnings("unchecked")
	public List<Student> classstu(Integer class_sid){
    	System.out.println(class_sid);
    	stu.setClass_sid(class_sid);
    	return (List<Student>) dao.selectList("edu.man.mapper.StudentMapper.getstuclassdata",stu);//从数据库中获取指定的学生信息
    }
    /**
     *审核通过时学生的信息修改类
     */
        public int getStudent(int showval){
        	System.out.println(showval);
        	Map<String ,Object> arr=new HashMap<String, Object>();//创建集合保存学生id
        	arr.put("id",showval);//学生id
        	arr.put("stu_result","");//学生退回原因
        	arr.put("stu_reason","");//学生退回项目
        	arr.put("stu_status",6);//状态码
        	return  dao.update("edu.man.mapper.StudentMapper.updatestudent",arr);//从数据库中获取指定的学生信息
        }
        
        /**
         *退回时学生信息存在错误的项目的类
         */
            public int getStudentreault(int showval,String stu_result,String wrong){
            	System.out.println(showval+"        "+stu_result+"           "+wrong);
            	Map<String ,Object> arr=new HashMap<String, Object>();//创建集合存放退回的学生id和退回原因和存在错误的项目
            	arr.put("id",showval);//学生身份证号
            	arr.put("stu_reason",wrong);//错误的项目
            	arr.put("stu_result",stu_result);//退回原因
            	arr.put("stu_status",7);//状态码
            	return  dao.update("edu.man.mapper.StudentMapper.updatestudentstares",arr);//从数据库中修改指定的学生信息
            }
}
