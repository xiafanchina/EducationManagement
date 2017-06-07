package edu.man.util;

import java.nio.charset.Charset;
import java.security.MessageDigest;

/**
 * 加密工具类
 */
public class SecretUtil {

	/**
	 * MD5加密
	 */
	public static String MD5(String str) {

		try {
			MessageDigest md = MessageDigest.getInstance("md5");
			md.update(str.getBytes(Charset.defaultCharset().toString()));

			byte[] b = md.digest();
			StringBuffer result = new StringBuffer();
			for (byte aB : b)
				result.append(byteHex(aB));
			return result.toString();
		} catch (Exception e) {
			return "";
		}
	}

	private static String byteHex(byte ib) {

		char[] Digit = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
		char[] ob = new char[2];
		ob[0] = Digit[(ib >>> 4) & 0X0F];
		ob[1] = Digit[ib & 0X0F];

		return new String(ob);
	}
}
