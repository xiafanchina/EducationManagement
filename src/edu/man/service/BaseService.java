package edu.man.service;

import javax.annotation.Resource;

import org.apache.commons.logging.LogFactory;
import edu.man.dao.BaseDaoImpl;

public abstract class BaseService {

	protected static final org.apache.commons.logging.Log log = LogFactory.getLog(BaseService.class);
	
	protected BaseDaoImpl dao;

	@Resource(name = "baseDao")
	public void setDao(BaseDaoImpl dao) {

		this.dao = dao;
	}
}
