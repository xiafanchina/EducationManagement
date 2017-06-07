package edu.man.service;
import java.util.ArrayList;
import java.util.List;





import edu.man.bean.ExamQuestion;
import edu.man.bean.RegisterStu;
import edu.man.bean.StuExamInfo;
import edu.man.bean.Student;
import edu.man.bean.StudentAndClass;

import org.springframework.stereotype.Service;
@Service("registerservice")
public class StuRegisterService extends BaseService{
	/**
	 * 学生注册
	 */
	public boolean stuRegister(RegisterStu stu) {
		RegisterStu stu1=(RegisterStu)dao.selectOne("edu.man.mapper.stuRegisterMapper.queryRegister", stu.getEmail());
		boolean flag=false;
		if(stu1==null){//先判断注册邮箱是否存在
			int i=dao.insert("edu.man.mapper.stuRegisterMapper.stuRegister",stu);
			System.out.println(i);
			if(i==1){//判断是否成功插入
				flag=true;
				return flag;
			 }else{return flag;}
		 }else{return flag;}
		
	}	
	/**
	 * 学生登陆查询
	 */
	public RegisterStu loginSelect(String email) {
		//RegisterStu stu1=(RegisterStu)dao.selectOne("edu.man.mapper.stuRegisterMapper.loginQuery",email);
		//先判断学生是否存在
		RegisterStu stu1=null;
		System.out.println(email);
		Object obj = dao.selectOne("edu.man.mapper.stuRegisterMapper.queryRegister", email);
		if(obj!=null){
			stu1 = (RegisterStu)obj;
			
			System.out.println(stu1.getPassword());
		}
		return stu1;
	}	
	/**
	 * 学生考试报名
	 */
	public boolean examInfo(StuExamInfo info) {
		boolean flag=false;
			int i=dao.insert("edu.man.mapper.stuRegisterMapper.examInfo",info);
			if(i==1){//判断是否成功插入
				String IDNo=info.getEx_idcard();
				RegisterStu stu1=new RegisterStu();
				stu1.setStatus(2);
				stu1.setIDNo(IDNo);
				dao.update("edu.man.mapper.stuRegisterMapper.updateStuStatus", stu1);
				flag=true;
				return flag;
			 }else{return flag;}
		 
	}	
	/**
	 * 根据成绩赋予学生本身状态
	 */
	public void giveStatus(RegisterStu stu) {
		dao.update("edu.man.mapper.stuRegisterMapper.updateStuStatus", stu);
				
	}
	/**
	 * 赋予成绩状态，并填入成绩
	 */
	public void giveScoreStatus(StuExamInfo info) {
		dao.update("edu.man.mapper.stuRegisterMapper.updateScoreStatus", info);
	}
	/**
	 * 学生考试报名
	 */
	public boolean studentInfo(Student student) {
		boolean flag=false;
			int i=dao.insert("edu.man.mapper.stuRegisterMapper.insertStudent",student);
			if(i==1){//判断是否成功插入
				String IDNo=student.getId_card();
				RegisterStu stu1=new RegisterStu();
				stu1.setStatus(5);
				stu1.setIDNo(IDNo);
				dao.update("edu.man.mapper.stuRegisterMapper.updateStuStatus", stu1);
				flag=true;
				return flag;
			 }else{return flag;}
		 
	}
	/**
	 * 提示问题信息
	 */
	public List<Object> queryInfo(String email){
		Object object = dao.selectOne("edu.man.mapper.stuRegisterMapper.queryRegister", email);
		Object object2 = dao.selectOne("edu.man.mapper.stuRegisterMapper.queryStudent", email);
		List<Object> list = new ArrayList<Object>();
		if(object!=null){
			RegisterStu restu = (RegisterStu) object;
			list.add(restu);
		}
		if(object2!=null){
			StudentAndClass stu = (StudentAndClass) object2;
			list.add(stu);
		}
		return list;
	}
	/**
	 * 更新学生信息
	 */
	public boolean updateStudent(Student student){
		boolean flag = false;
		int update = dao.update("edu.man.mapper.stuRegisterMapper.updateStudent", student);
		if(update>0){
			int update2 = dao.update("edu.man.mapper.stuRegisterMapper.perfectStatus", student);
			if(update2>0){
				flag = true;
			}
		}
		return flag;
	}
	/**
	 * 得到班级信息
	 */
	public List<edu.man.bean.Class> getClassInfo() {
		List<edu.man.bean.Class> listCalss= (List<edu.man.bean.Class>) dao.selectList("edu.man.mapper.stuRegisterMapper.queryClassInfo");
	   return listCalss;
	}
	public List<edu.man.bean.ExamQuestion> showQuestion(ExamQuestion eq){
		List<edu.man.bean.ExamQuestion> listQuestion= (List<edu.man.bean.ExamQuestion>) dao.selectList("edu.man.mapper.stuRegisterMapper.selectQuestion",eq);
		return listQuestion;
	}
	public String showLATidByNo(String no) {
		String choice = (String) dao.selectOne("edu.man.mapper.stuRegisterMapper.showLATidByNo",no);
		return choice;
	}
	public List<edu.man.bean.StudentMore> getStuInfo(String idcard) {
		List<edu.man.bean.StudentMore> list = (List<edu.man.bean.StudentMore>) dao.selectList("edu.man.mapper.stuRegisterMapper.getStuInfo",idcard);
		return list;
	}
}

