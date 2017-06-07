package edu.man.util;

import java.io.Serializable;

/**
 * 基础bean
 */
public class BaseResult implements Serializable {

	private static final long serialVersionUID = -7855384890804340511L;
	private String resultcode;
	private String resultmsg;

	public String getResultcode() {

		return resultcode;
	}

	public void setResultcode(String resultcode) {

		this.resultcode = resultcode;
	}

	public String getResultmsg() {

		return resultmsg;
	}

	public void setResultmsg(String resultmsg) {

		this.resultmsg = resultmsg;
	}

}
