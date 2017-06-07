package edu.man.dao;

import java.util.List;
import java.util.Map;

/**
 * 数据层接口
 */
public interface BaseDao {

	/**
	 * 查询实体数据
	 */
	public <T> T getMapper(Class<T> clz);

	/**
	 * 返回单条数据
	 */
	public Object selectOne(String statement, Object parameter);
	public Object selectOne(String statement);
	/**
	 * 返回List集合数据
	 */
	public List<?> selectList(String statement);

	/**
	 * 返回List集合数据
	 */
	public List<?> selectList(String statement, Object parameter);

	/**
	 * 返回Map数据
	 */
	public <K, V> Map<K, V> selectMap(String statement, String parameter);

	/**
	 * 返回Map数据，以Key值做为主键
	 */
	public <K, V> Map<K, V> selectMap(String statement, Object parameter, String key);

	/**
	 * 插入数据
	 */
	public int insert(String statement, Object parameter);

	/**
	 * 更新数据
	 */
	public int update(String statement, Object parameter);

	/**
	 * 删除数据
	 */
	public int delete(String statement, Object parameter);

}
