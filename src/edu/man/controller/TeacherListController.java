package edu.man.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import edu.man.bean.Teacher;
import edu.man.result.TeacherPageResult;
import edu.man.result.TeacherResult;
import edu.man.service.TeacherListServiceImpl;
import edu.man.util.JsonWrite;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 教师列表
 */
@Controller
public class TeacherListController {
	@Resource(name = "teacherListService")
	TeacherListServiceImpl service;
	/**
	 * 从前端接受到传递过来的教师的属性的值,调用service的getTeacherList()和getTeacherCount()方法，
	 * 并查询返回符合条件的教师的集合list，并且返回符合条件的教师数count，
	 * 然后将它们封装在TeacherPageResult类的对象里，并且将result对象返回到前端
	 */
	@RequestMapping("/gettecherList.do")
	public void getteacherList(HttpServletRequest request,HttpServletResponse response){
		String name=request.getParameter("name");
		String course = request.getParameter("course");
	    String sex = request.getParameter("sex");
	    String currentPage = request.getParameter("currentPage");
	    String pageSize = request.getParameter("pageSize");
	    String residentProvince = request.getParameter("residentProvince");
	    String residentCity = request.getParameter("residentCity");
	    String workingWay = request.getParameter("workingWay");
		String accountStatus = request.getParameter("accountStatus");
		String department=request.getParameter("department");
		String role=request.getParameter("role");
		String nation=request.getParameter("nation");
		String resident=residentProvince+residentCity;
		String roleId = request.getParameter("roleId");
	   List<Teacher> list = service.getTeacherList(Integer.parseInt(currentPage),Integer.parseInt(pageSize),name, course,sex, resident,workingWay,accountStatus,department,role,nation,roleId);
	   int count = service.getTeacherCount(name, course,sex, resident,workingWay,  accountStatus,department,role,nation,roleId );
       TeacherPageResult result = new TeacherPageResult();
	   result.setCount(count);
	   result.setList(list);
	  JsonWrite.jsonWrinte(result, response);
   }
	/**
	 * 接收从前端传过来的教师的id,调用service的getteacherListById()方法，
	 * 传入该id,查询返回该教师的全部信息teacher,
	 * 将teacher对象封装到TeacherResult类中的result对象里，然后将
	 * result对象返回到前端
	 */
	@RequestMapping("/gettecherListById.do")
	public void getteacherListById(HttpServletRequest request,HttpServletResponse response){
		System.out.println("进入 getteacherListByID");
		String id = request.getParameter("id");
	    Teacher teacher = service.getteacherListById(Integer.parseInt(id));
		TeacherResult result = new TeacherResult();
		result.setTeacher(teacher);
		JsonWrite.jsonWrinte(result, response);
	}
	/**
	 * 从前端接收到需要修改的教师的信息，然后调用service的teacherTranslateModify()
	 * 传入这些值，进行修改
	 */
	@RequestMapping("/teacherTranslateModify.do")
	public void teacherTranslateModify(HttpServletRequest request,HttpServletResponse response){
		String id=request.getParameter("id");
		String accountStatus = request.getParameter("accountStatus");
		String department = request.getParameter("department");
		String course = request.getParameter("course");
		System.out.println("course="+course);
		String workingWay = request.getParameter("workingWay");
		String workingPlace = request.getParameter("workingPlace");
		String sex = request.getParameter("sex");
		String phone = request.getParameter("phone");
		System.out.println("phone="+phone);
		String qq = request.getParameter("qq");
		String nation = request.getParameter("nation");
		System.out.println("nation="+nation);
		String birthPlace = request.getParameter("birthPlace");
		String political= request.getParameter("political");
		String education = request.getParameter("education");
		String school = request.getParameter("school");
		String major = request.getParameter("major");
		service.teacherTranslateModify(id, accountStatus, department,  course, workingWay, workingPlace, sex, phone, qq, nation, birthPlace, political, education, school, major);
		JsonWrite.jsonWrinte("200", response);
	}
	/**
	 * 接收前台传递过来的用户登录的邮箱，返回该邮箱的用户的角色ID
	 */
	@RequestMapping("/getRoleIdByEmail.do")
	public void getRoleIdByEmail(HttpServletRequest request,HttpServletResponse response){
		String email = request.getParameter("email");
		HttpSession session = request.getSession();
		Object object = session.getAttribute("teacher");
		Teacher teacher;
		if(object!=null){
			teacher = (Teacher) object;
			JsonWrite.jsonWrinte(teacher.getRoleId() , response);
		}else{
			JsonWrite.jsonWrinte("-1", response);
		}
	//	int roleId = service.getRoleIdByEmail(email);
	}
	/**
	 * 修改角色
	 */
	@RequestMapping("/RoleModify.do")
	public void RoleModify(HttpServletRequest request){
		String id = request.getParameter("id");
		String roleId=request.getParameter("roleId");
		System.out.println("id="+id+"roleId="+roleId);
		service.RoleModify(id, roleId);
	}
}
