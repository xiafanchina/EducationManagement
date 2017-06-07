
package edu.man.result;

import java.util.List;

import edu.man.bean.ScoreMore;
import edu.man.util.BaseResult;
/**
 * 考试列表结果集
 */
public class ScorePageResult extends BaseResult {

	private static final long serialVersionUID = 1L;
	int count;
	List<ScoreMore> list;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public List<ScoreMore> getList() {
		return list;
	}

	public void setList(List<ScoreMore> list) {
		this.list = list;
	}

}
