package edu.man.bean;
/**
 * 学生审核中
 * 学生报名表封装的bean类
 */
public class StudentApply {

	String name;//学生姓名
	String oldSchool;//生源学校
	String direction;//学习方向
	String ID;//身份证
	int score;//分数
	int scoreStatus;//考试状态
	String date;//入学时间

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOldSchool() {
		return oldSchool;
	}
	public void setOldSchool(String oldSchool) {
		this.oldSchool = oldSchool;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public int getScoreStatus() {
		return scoreStatus;
	}
	public void setScoreStatus(int scoreStatus) {
		this.scoreStatus = scoreStatus;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}

	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}

}
