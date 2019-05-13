import fetch from '../common/fetch'
import * as api from './index'
// 接口函数
export const queryCoupon = (params) => fetch(api.MAIN_QUERY_COUPONINFO, params, 'post')
