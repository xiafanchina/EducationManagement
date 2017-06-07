package edu.man.dao;

import java.util.List;


import java.util.Map;



import org.mybatis.spring.support.SqlSessionDaoSupport;

import edu.man.result.CoursePageResult;

/**
 * 数据层实现类
 */

public class BaseDaoImpl extends SqlSessionDaoSupport implements BaseDao {

	public <T> T getMapper(Class<T> clz) {

		return getSqlSession().getMapper(clz);
	}

	public Object selectOne(String statement, Object parameter) {

		return getSqlSession().selectOne(statement, parameter);
	}
	public CoursePageResult selectOne1(String statement, Object parameter) {

		return getSqlSession().selectOne(statement, parameter);
	}

	public List<?> selectList(String statement, Object parameter) {

		return getSqlSession().selectList(statement, parameter);
	}

	public <K, V> Map<K, V> selectMap(String statement, String parameter) {
		return selectMap(statement, parameter);
	}

	public <K, V> Map<K, V> selectMap(String statement, Object parameter, String key) {

		return getSqlSession().selectMap(statement, parameter, key);
	}

	public int insert(String statement, Object parameter) {

		return getSqlSession().insert(statement, parameter);
	}

	public int update(String statement, Object parameter) {

		return getSqlSession().update(statement, parameter);
	}

	public int delete(String statement, Object parameter) {

		return getSqlSession().delete(statement, parameter);
	}
	
	@Override
	public List<?> selectList(String statement) {
		// TODO Auto-generated method stub
		return getSqlSession().selectList(statement);
	}
	
	public Object selectOne(String statement) {
		return getSqlSession().selectOne(statement);
	}
}
