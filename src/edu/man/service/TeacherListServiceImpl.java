package edu.man.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import edu.man.bean.Teacher;
import org.springframework.stereotype.Service;
/**
 * 教师列表
 */
@Service("teacherListService")
public class TeacherListServiceImpl extends BaseService {
    /**
     * 通过传入的参数的条件查询数据库返回符合条件的教师的集合
     */
    public List<Teacher> getTeacherList(Integer currentPage,Integer pageSize,String name,String course,String sex,String resident,String workingWay, String accountStatus,String department,String role,String nation,String roleId ){
    	int pageIndex = (currentPage - 1) * pageSize;
    	Map<String,Object> map=new <String,Object>HashMap();
    	map.put("pageIndex",pageIndex );
    	map.put("pageSize",pageSize);
    	map.put("name", name);
    	map.put("course",course);
    	map.put("sex",sex);
    	map.put("workingWay",workingWay);
    	map.put("accountStatus",accountStatus);
    	map.put("resident", resident);
    	map.put("department", department);
    	map.put("role", role);
    	map.put("nation", nation);
    	map.put("roleId", roleId);
    	return (List<Teacher>) dao.selectList("edu.man.mapper.TeacherMapper.getTeacherList", map);
    }
   
    /**
     *通过传入的参数的条件查询数据库符合条件的教师，返回符合条件的教师数
     */
    public int  getTeacherCount(String name,String course,String sex,String resident,String workingWay,String accountStatus,String department,String role,String nation,String roleId){
    	Map<String,Object> map=new <String,Object>HashMap();
    	map.put("name", name);
    	map.put("course",course);
    	map.put("sex",sex);
    	map.put("workingWay",workingWay);
    	map.put("accountStatus",accountStatus);
    	map.put("resident", resident);
    	map.put("department", department);
    	map.put("role", role);
    	map.put("nation", nation);
    	map.put("roleId", roleId);
    	return (int) dao.selectOne("edu.man.mapper.TeacherMapper.getTeacherCount",map);
    }
    
    /**
     * 通过传入的教师id,查询数据库，返回该教师的全部信息
     */
    public Teacher getteacherListById( int id){
    	
    	 return  (Teacher)dao.selectOne("edu.man.mapper.TeacherMapper.getteacherListById", id);
    }
    
    /**
     * 通过传入的该教师的信息的值，修改数据库里面该id教师的信息。
     */
    public void teacherTranslateModify(String id,String accountStatus,String department,String course,String workingWay,String workingPlace,String sex,String phone,String qq,String nation,String birthPlace,String political,String education,String school,String major){
    	Map<String,Object> map=new <String,Object>HashMap();
    	map.put("id", id);
    	map.put("accountStatus", accountStatus);
    	map.put("department", department);
    	map.put("course", course);
    	map.put("workingWay", workingWay);
    	map.put("workingPlace", workingPlace);
    	map.put("sex", sex);
    	map.put("phone", phone);
    	map.put("qq", qq);
    	map.put("nation", nation);
    	map.put("birthPlace", birthPlace);
    	map.put("political", political);
    	map.put("education", education);
    	map.put("school", school);
    	map.put("major", major);
    	dao.update("edu.man.mapper.TeacherMapper.teacherTranslateModify", map);
    }
    /**
     * 通过传出的参数邮箱连接数据库返回该邮箱对应的角色ID
     */
    public int getRoleIdByEmail(String email){
    	return (int) dao.selectOne("edu.man.mapper.TeacherMapper.getRoleIdByEmail", email);
    }
    /**
     * 通过id和roleId修改角色
     */
    public void RoleModify(String id,String roleId){
    	Map<String,Object> map=new <String,Object>HashMap();
    	map.put("id", id);;
    	map.put("roleId", roleId);
    	dao.update("edu.man.mapper.TeacherMapper.RoleModify", map);
    }
}
