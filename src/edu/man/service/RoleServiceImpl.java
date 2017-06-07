package edu.man.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import edu.man.bean.Role;
import edu.man.result.RoleListResult;

import org.springframework.stereotype.Service;

/**
 * 角色列表
 *
 */
@Service("RoleServiceImpl")
public class RoleServiceImpl extends BaseService{
	/**
	 * 分页查询角色列表
	 */
	public RoleListResult queryRole(Integer currentPage,Integer pageSize){
		//封装查询参数
		Map<String,Object> map = new HashMap<String,Object>();
		int pageIndex = (currentPage-1)*pageSize;
		map.put("currentPage",pageIndex);
		map.put("pageSize",pageSize);
		//查询list集合
		@SuppressWarnings("unchecked")
		List<Role> list = (List<Role>) dao.selectList("edu.man.RoleMapper.queryAllRole",map);
		RoleListResult result = new RoleListResult();
		result.setList(list);
		//查询数据总条数
		int count = (int) dao.selectOne("edu.man.RoleMapper.getCount");
		result.setCount(count);
		return result;
	}
	/**
	 * 根据ID查询角色所有功能
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<String> queryFunction(Integer id){
		//查询到的功能MAP用list接收
		List<HashMap> list = (java.util.List<HashMap>) dao.selectList("edu.man.RoleMapper.queryFunction", id);
		List<String> result = new ArrayList<String>();
		//把MAP中的功能拼接成字符串
		Iterator<HashMap> it = list.iterator();
		while(it.hasNext()){
			String s = (String) it.next().get("function_name");
			result.add(s);
		}
		return result;		//返回功能字符串
	}
	/**
	 * 添加新角色
	 */
	public boolean addRole(Role role,String function){
		boolean flag = false;		
		int insert_role = -1;		//插入角色返回值
		int insert_function = -1;	//插入角色功能返回值
		insert_role = dao.insert("edu.man.RoleMapper.addRole", role);
		role = (Role) dao.selectOne("edu.man.RoleMapper.getIdByName", role);//查询角色ID
		Integer role_id = role.getRole_id();
		if(function!=""){	
			String[] arr = function.split(",");		//把前台传入的功能字符串拆分成字符数组
			for(int i=0;i<arr.length;i++){			//封装角色ID和功能插入数据库
				Map<String,Object> map = new HashMap<>();
				map.put("role_id", role_id);
				map.put("function_name", arr[i]);
				insert_function = dao.insert("edu.man.RoleMapper.addFunction", map);
			}
		}
		//角色和功能插入成功后返回true
		if(insert_role==1&&insert_function==1){
			flag = true;
		}
		return flag;
	}
	/**
	 * 根据ID查询角色信息
	 */
	public Role queryRole(Integer role_id){
		Role role = (Role) dao.selectOne("edu.man.RoleMapper.queryRoleById",role_id);
		return role;
	}
	/**
	 * 编辑角色信息
	 */
	public boolean modifyRole(Role role,String functions){
		boolean flag = false;
		int update_role = -1;		//更新角色返回值
		int update_functions = -1;	//更新角色功能返回值
		update_role = dao.update("edu.man.RoleMapper.updateRole", role);
		dao.delete("edu.man.RoleMapper.deleteFunctionsById", role);
		if(functions!=""){	
			String[] arr = functions.split(",");		//把前台传入的功能字符串拆分成字符数组
			for(int i=0;i<arr.length;i++){			//封装角色ID和功能插入数据库
				Map<String,Object> map = new HashMap<>();
				map.put("role_id", role.getRole_id());
				map.put("function_name", arr[i]);
				update_functions = dao.insert("edu.man.RoleMapper.addFunction", map);
			}
		}
		if(update_role==1&&update_functions==1){
			flag =true;
		}
		return flag;
	}
}
