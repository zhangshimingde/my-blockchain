/**
 * Created by guangqiang on 2017/12/17.
 */
import queryString from 'query-string';
import * as todoService from '../services/loginMsg'

export default {
  namespace: 'LoginMsg',
  state: {
    usermsg: []
  },
  reducers: {
    save(state, { payload: { usermsg } }) {
        console.log(usermsg)
      return { ...state, usermsg }
    }
  },
  effects: {
    *getUsermsg({ payload: value }, { call, put, select }) {
      // 模拟网络请求
      const data = yield call(todoService.query)
      console.log(data.data)
      if(data.data.msg=="successful"){
        console.log(data.data.data)
        let users=data.data.data
        yield put({ type: 'save', payload: {users}})
      }
    },
  
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // 监听路由的变化，请求页面数据
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        let list = []
        if (pathname === 'todoList') {
          dispatch({ type: 'save', payload: {list} })
        }
      })
    }
  }
}
