package edu.man.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import edu.man.bean.ExamQuestion;
import edu.man.bean.RegisterStu;
import edu.man.bean.StuExamInfo;
import edu.man.bean.Student;
import edu.man.bean.Teacher;
import edu.man.service.StuRegisterService;
import edu.man.util.JsonWrite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class StuRegisterController {
	@Resource(name = "registerservice")
	StuRegisterService service;
	HttpSession session;
	private List<ExamQuestion> question;
	/**
	 * 学生注册
	 */
	@RequestMapping("/Register/Register.do")
	public ModelAndView Register(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String email=request.getParameter("email"); //
		String fullName=request.getParameter("fullName"); 
		String iDNo=request.getParameter("IDNo"); 
		String password=request.getParameter("password"); 
	    RegisterStu stu =new RegisterStu(); 
		stu.setEmail(email);
	    stu.setFullName(fullName);
	    stu.setIDNo(iDNo);
	    stu.setPassword(password);
	    stu.setStatus(1);
	     boolean boo=service.stuRegister(stu);
	     JsonWrite.jsonWrinte(boo, response);
		return null;
	}
	
	/**
	 * 学生登录
	 */
	@RequestMapping("/StuLogin/StuLogin.do")
	public ModelAndView StuLogin(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String email=request.getParameter("email"); 
		String pwd=request.getParameter("pwd");
		RegisterStu stu1 =new RegisterStu();
		stu1=service.loginSelect(email);
		
		if(stu1!=null){//判断查询的学生是否存在
			if(stu1.getPassword().equals(pwd)){
				session = request.getSession();
				session.setAttribute("student", stu1);
				/*request.getSession().setAttribute("student", stu1);*/
		        JsonWrite.jsonWrinte(stu1, response);//将所得学生状态传至ajax
		
			}/*else{
					stu1.setStatus(0);
				JsonWrite.jsonWrinte(stu1, response);
			}*/   
		}else{
			RegisterStu stu =new RegisterStu();
			/*stu.setStatus(-1);*/
			JsonWrite.jsonWrinte(stu, response);
		}
		return null;
	}
	
	@RequestMapping("stuIndexLoginer.do")
	public void stuIndexLoginer(HttpServletRequest request,HttpServletResponse response){
		//String email = request.getParameter("email");
		if(session!=null){
			RegisterStu student = (RegisterStu) session.getAttribute("student");
				System.out.println(student.getFullName());
				JsonWrite.jsonWrinte(student, response);
		}else{
				JsonWrite.jsonWrinte("101", response);
		}
	}
	
	/**
	 * 入学考试报名
	 */
	@RequestMapping("/Baoming/Baoming.do")
	public ModelAndView Baoming(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String idcard=request.getParameter("idcard"); 
		String name=request.getParameter("name"); 
		String school=request.getParameter("school"); 
		String choice=request.getParameter("choice"); 
		StuExamInfo info =new StuExamInfo(); 
		info.setEx_idcard(idcard);
	    info.setEx_name(name);
	    info.setEx_school(school);
	    info.setEx_choice(choice);
	     boolean boo=service.examInfo(info);
	     JsonWrite.jsonWrinte(boo, response);
		return null;
	}
	@RequestMapping("/Exam/ShowExam.do")
	public void ShowExam(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String type=request.getParameter("type");
		String lesson=request.getParameter("lesson");
		Integer type_id = Integer.parseInt(type);
		Integer lesson_id = Integer.parseInt(lesson);
		ExamQuestion eq=new ExamQuestion();
		eq.setLesson_id(lesson_id);
		eq.setType_id(type_id);
		question = service.showQuestion(eq);		
	    JsonWrite.jsonWrinte(question, response);//传入ajax进行判断、跳转		
	}
	@RequestMapping("/Exam/ShowExamByNo.do")
	public void ShowExamByNo(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String no=request.getParameter("no");
		String choice = service.showLATidByNo(no);
		Integer lesson_id = 0;
		if(choice.equals("JAVA方向")){
			lesson_id=1;
		}else if(choice.equals("C++方向")){
			lesson_id=2;
		}else if(choice.equals("IOS方向")){
			lesson_id=3;
		}else if(choice.equals("Android方向")){
			lesson_id=4;
		}
		ExamQuestion eq=new ExamQuestion();
		eq.setLesson_id(lesson_id);
		eq.setType_id(0);
		question = service.showQuestion(eq);		
	    JsonWrite.jsonWrinte(question, response);//传入ajax进行判断、跳转
		
	}	
	/**
	 * 考试完成后判断成绩
	 */
	@RequestMapping("/Exam/Exam.do")
	public void Exam(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String idcard=request.getParameter("idcard");
		String lesson=request.getParameter("lesson_id");
		String type=request.getParameter("type_id");
		String num1=request.getParameter("num1");
		String num2=request.getParameter("num2");
		String num3=request.getParameter("num3");
		String num4=request.getParameter("num4");
		String num5=request.getParameter("num5");
		String num6=request.getParameter("num6");
		String num7=request.getParameter("num7");
		String num8=request.getParameter("num8");
		String num9=request.getParameter("num9");
		String num10=request.getParameter("num10");
		Integer lesson_id = Integer.parseInt(lesson);
		Integer type_id = Integer.parseInt(type);
		ExamQuestion eq=new ExamQuestion();
		eq.setLesson_id(lesson_id);
		eq.setType_id(type_id);
		int score=0;
		List<ExamQuestion> answer = service.showQuestion(eq);
		if(answer.get(0).getAnswer().equals(num1)){
			score+=10;
		}if(answer.get(1).getAnswer().equals(num2)){
			score+=10;
		}if(answer.get(2).getAnswer().equals(num3)){
			score+=10;
		}if(answer.get(3).getAnswer().equals(num4)){
			score+=10;
		}if(answer.get(4).getAnswer().equals(num5)){
			score+=10;
		}if(answer.get(5).getAnswer().equals(num6)){
			score+=10;
		}if(answer.get(6).getAnswer().equals(num7)){
			score+=10;
		}if(answer.get(7).getAnswer().equals(num8)){
			score+=10;
		}if(answer.get(8).getAnswer().equals(num9)){
			score+=10;
		}if(answer.get(9).getAnswer().equals(num10)){
			score+=10;
		}
		RegisterStu stu =new RegisterStu();
		if(score>=60){//判断学生成绩给予状态
		    stu.setStatus(3);
		}else{
			stu.setStatus(4);
		}
		stu.setIDNo(idcard);
		service.giveStatus(stu);
		String score2 = String.valueOf(score);
		StuExamInfo info =new StuExamInfo();
		if(score>=60){	
			info.setEx_status("0");
		}else{
			info.setEx_status("1");
		}
		info.setEx_score(score2);
		info.setEx_date(new Date());
		info.setEx_idcard(idcard);
		service.giveScoreStatus(info);
	    JsonWrite.jsonWrinte(score, response);//传入ajax进行判断、跳转		
	}
	
	/**
	 * 完善个人信息第三个页面
	 */
	  
	@RequestMapping("/Class/ClassInfo.do")//班级信息
	public void getClassInfo(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		List<edu.man.bean.Class> list=new ArrayList<edu.man.bean.Class>();
	    list=service.getClassInfo();
	    JsonWrite.jsonWrinte(list, response);
	     
	}
	/**
	 * 完善个人信息第三个页面
	 */
	@RequestMapping("/info3/info3.do")//完善个人信息
	public void getInfo4(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		Student student = new Student();
		System.out.println("*****************");
		String education=request.getParameter("showval");
		String[] getArr = education.split(",");
		for(String s:getArr){
			System.out.println(s);
		}
			student.setStus_name(getArr[0]);
	        student.setEmail(getArr[1]);
	        student.setId_card(getArr[2]);
	        student.setClass_sid(Integer.parseInt(getArr[3]));
	        student.setInfo(getArr[4]);
	        student.setSex(getArr[5]); 
	 		student.setPhone(getArr[6]);
	 		student.setqq(getArr[7]);
	 		student.setNation(getArr[8]);
	 		student.setBirth_place(getArr[9]);
	 		student.setPolitical(getArr[10]);
	 		String time=getArr[14];
	 		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
	 	    Date date=new Date();
			try {
				date=sdf.parse(time);
				student.setSchooldate(date);
			} catch (ParseException e) {
				e.printStackTrace();
			}  
			student.setEducation(getArr[11]);
			student.setSchool(getArr[12]);
			student.setMajor(getArr[13]);
			student.setSubmit_date(new Date());
		    boolean boo=service.studentInfo(student);
		    JsonWrite.jsonWrinte(boo, response);
		
	}
	@RequestMapping("queryInfo.do")//查询个人信息
	public void queryInfo(HttpServletRequest request,HttpServletResponse response){
		Object object = request.getSession().getAttribute("student");
		RegisterStu student = null;
		if(object!=null){
			student = (RegisterStu) object;
			List<Object> list = service.queryInfo(student.getEmail());
			if(list.isEmpty()){
				JsonWrite.jsonWrinte("101", response);
			}else{
				JsonWrite.jsonWrinte(list, response);
			}
		}
	}
	
	@RequestMapping("perfectInfo.do")//完善个人信息
	public void perfectInfo(HttpServletRequest request,HttpServletResponse response){
		String array = request.getParameter("arr");
		String[] strings = array.split(",");
		Student student = new Student();
		student.setId(Integer.parseInt(strings[0]));
		student.setStus_name(strings[1]);
		student.setEmail(strings[2]);
		student.setId_card(strings[3]);
		student.setClass_name(strings[4]);
		student.setClass_place(strings[5]);
		student.setSex(strings[6]);
		student.setPhone(strings[7]);
		student.setqq(strings[8]);
		student.setNation(strings[9]);
		student.setBirth_place(strings[10]);
		student.setPolitical(strings[11]);
		student.setEducation(strings[12]);
		student.setSchool(strings[13]);
		student.setMajor(strings[14]);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
 	    Date date=new Date();
		try {
			date=sdf.parse(strings[15]);
			student.setSchooldate(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}  
		
		boolean updateStudent = service.updateStudent(student);
		if(updateStudent){
			JsonWrite.jsonWrinte("200", response);
		}else{
			JsonWrite.jsonWrinte("101", response);
		}
	}
	/**
	 * 根据身份证进行个人信息显示
	 */
	  
	@RequestMapping("showStuMes.do")//班级信息
	public void showStuMes(HttpServletRequest request, HttpServletResponse response){
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String idcard=request.getParameter("no");
	    List<edu.man.bean.StudentMore> list = service.getStuInfo(idcard);
	    JsonWrite.jsonWrinte(list, response);
	     
	}
}
