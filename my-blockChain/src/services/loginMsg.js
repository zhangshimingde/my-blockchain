/**
 * Created by guangqiang on 2017/12/17.
 */
import request from '../utils/request';
export function query() {
  return request('http://localhost:8080/user/getAll');
}
