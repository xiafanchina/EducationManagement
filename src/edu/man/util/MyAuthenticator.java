package edu.man.util;


import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
/**
 * 邮箱验证码
 * 
 */
public class MyAuthenticator extends Authenticator {
	private String user;
	private String pwd;

	public MyAuthenticator(String user, String pwd) {
		this.user = user;
		this.pwd = pwd;
	}

	@Override
	protected PasswordAuthentication getPasswordAuthentication() {
		return new PasswordAuthentication(user, pwd);
	}
}