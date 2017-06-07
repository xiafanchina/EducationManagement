package edu.man.util;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

/**
 * 邮箱验证 发送验证码
 */
public class Mail {
	//设置验证机制
	private String valid;
	//发送邮件协议
	private String protocol;
	//服务器邮箱地址
	private String serverAddress;
	//端口
	private String port;
	//发送邮件地址
	private String from;
	//邮件标题
	private String subject;
	//收件人邮箱
	private String recipient;

	//抄送人邮箱
	private String CC;

	//内容
	private String content;
	//用户名
	private String userName = "";
	//密码
	private String passWord = "";

	public int SendMail() {
		//发送邮件的协议
		Properties properties = new Properties();
		properties.setProperty("mail.smtp.auth", "true");//设置验证机制
		properties.setProperty("mail.transport.protocol", "smtp");//发送邮件协议
		properties.setProperty("mail.smtp.host", "smtp.qq.com");//设置邮箱服务器地址
		properties.put("mail.smtp.ssl.checkserveridentity", "false");
		properties.put("mail.smtp.starttls.enable", "true");
		properties.setProperty("mail.smtp.port", "25");
		Session session = Session.getInstance(properties, new MyAuthenticator(userName, passWord));
		session.setDebug(true);
		Message message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(from));
			message.setSubject(subject);
			message.setRecipients(RecipientType.TO, InternetAddress.parse(recipient));//接收人
			if (CC == null || CC.equals("")) {
			} else {
				message.setRecipients(RecipientType.CC, InternetAddress.parse(CC));//抄送人
			}
			//		message.setRecipients(RecipientType.BCC, InternetAddress.parse("1348800595@qq.com"));//密送人
			// 设置邮件消息发送的时间
			message.setSentDate(new Date());
			//	MimeBodyPart bodyPartAttch = createAttachMent("C:\\Users\\lanqiao\\Desktop\\mail.jar");//附件
			MimeBodyPart bodyPartContentAndPic = createContentAndPic(content);//文本内容
			MimeMultipart mimeMuti = new MimeMultipart("mixed");
			//mimeMuti.addBodyPart(bodyPartAttch);
			mimeMuti.addBodyPart(bodyPartContentAndPic);
			message.setContent(mimeMuti);
			//message.saveChanges();
			//message.setContent("Michael", "text/html;charset=gbk");
			Transport.send(message);
			return 0;
		} catch (AddressException e) {

			// TODO Auto-generated catch block
			e.printStackTrace();
			return 1;
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 1;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 1;
		}

	}

	public static MimeBodyPart createContentAndPic(String content) throws MessagingException,
			UnsupportedEncodingException {
		MimeMultipart mimeMutiPart = new MimeMultipart("related");
		MimeBodyPart contentBodyPart = new MimeBodyPart();
		//img的src要和setHeader中设置的值一样
		contentBodyPart.setContent(content, "text/html;charset=UTF-8");
		mimeMutiPart.addBodyPart(contentBodyPart);
		//图片和文本结合
		MimeBodyPart allBodyPart = new MimeBodyPart();
		allBodyPart.setContent(mimeMutiPart);
		return allBodyPart;
	}

	public String getValid() {
		return valid;
	}

	/**
	 * 设置验证机制
	 */
	public void setValid(String valid) {
		this.valid = valid;
	}

	public String getProtocol() {
		return protocol;
	}

	/**
	 * 发送邮件协议(一般为smtp)
	 */
	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}

	public String getServerAddress() {
		return serverAddress;
	}

	/**
	 * 服务器邮箱地址(smtp.qq.com 这是QQ  新浪smtp.sina.com)
	 */
	public void setServerAddress(String serverAddress) {
		this.serverAddress = serverAddress;
	}

	public String getPort() {
		return port;
	}

	/**
	 * 端口 (一般邮箱默认25)
	 */
	public void setPort(String port) {
		this.port = port;
	}

	public String getFrom() {
		return from;
	}

	/**
	 * 发送邮件地址
	 */
	public void setFrom(String from) {
		this.from = from;
	}

	public String getSubject() {
		return subject;
	}

	/**
	 * 邮件主题
	 */
	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getRecipient() {
		return recipient;
	}

	/**
	 * 收件人邮箱
	 */
	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getCC() {
		return CC;
	}

	/**
	 * 抄送人邮箱  多个邮箱用，隔开
	 */
	public void setCC(String cC) {
		CC = cC;
	}

	public String getContent() {
		return content;
	}

	/**
	 * 邮箱正文（可以是html）
	 */
	public void setContent(String content) {
		this.content = content;
	}

	public String getUserName() {
		return userName;
	}

	/**
	 * 发送人邮箱账号
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	/**
	 * 发送人邮箱密码
	 */
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

}
