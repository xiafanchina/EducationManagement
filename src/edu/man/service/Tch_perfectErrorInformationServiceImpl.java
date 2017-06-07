package edu.man.service;

import java.util.List;

import org.springframework.stereotype.Service;

import edu.man.bean.RegisterTch;
import edu.man.bean.TeacherExtendsRole;

@Service("tch_perfectErrorInformationServiceImpl")
public class Tch_perfectErrorInformationServiceImpl extends BaseService{

	/**
	 * 查询数据库中的result
	 */
	public String getErrorInformation(String email){
		RegisterTch result = (RegisterTch) dao.selectOne("edu.man.Tch_perfectErrorInformation.eerrorInformation",email);
		return result.getTea_result();
	}
	/**
	 * 查询数据库中的基本信息
	 */
	@SuppressWarnings("unchecked")
	public List<TeacherExtendsRole> getData(String email){
		List<TeacherExtendsRole> listData = (List<TeacherExtendsRole>) dao.selectList("edu.man.Tch_perfectErrorInformation.Information",email);
		return listData;
	}
	/**
	 * 更新数据
	 */
	public boolean upData(String sex,String nation1,String nation,String edu,String pol,String schoool,String major,String PhoneNo,String QQNo,String der,int role_id,String daikefangxiang,String bangongfangshi,String adress,String email){
		TeacherExtendsRole teacherExtendsRole = new TeacherExtendsRole();
		teacherExtendsRole.setSex(sex);					//性别
		teacherExtendsRole.setNation(nation1);			//民族
		teacherExtendsRole.setBirthPlace(nation);		//籍贯
		teacherExtendsRole.setEducation(edu);			//学历
		teacherExtendsRole.setPolitical(pol);			//政治面貌
		teacherExtendsRole.setSchool(schoool);			//学校
		teacherExtendsRole.setMajor(major);				//专业
		teacherExtendsRole.setPhone(PhoneNo);			//手机号
		teacherExtendsRole.setQq(QQNo);					//qq
		teacherExtendsRole.setDepartment(der);			//部门
		teacherExtendsRole.setRoleId(role_id);			//职务id
		teacherExtendsRole.setCourse(daikefangxiang);	//代课方向
		teacherExtendsRole.setWorkingWay(bangongfangshi);//办公方式
		teacherExtendsRole.setWorkingPlace(adress);		//常驻地
		teacherExtendsRole.setEmail(email);				//email
		int i = dao.update("edu.man.Tch_perfectErrorInformation.upData", teacherExtendsRole);
		int j = dao.update("edu.man.Tch_perfectErrorInformation.updateRegister", teacherExtendsRole);
		System.out.println("在发送信息的时候获得的数据+同时也证明进来了tch_perfectErrorInformationServiceImpl》》"+email);
		if(i>0&&j>0){
			return true;
		}
		return false;
		
	}
}
