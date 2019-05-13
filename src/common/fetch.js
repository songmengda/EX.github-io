/**
 * 封装promise请求对象
 */

import axios from 'axios'
import { BASE_URL } from '../api'

export default function fetch (url = '', data = {}, method = 'get') {
  method = method.toLowerCase()
  let ops = { params: data }
  if (method === 'post') {
    ops = { data: data }
  }
  let options = {
    url,
    ...ops,
    method
  }
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: 100000,
      withCredentials: true,
      crossDomain: true
      // headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    // 不论返回的success是true还是false，都进resolve，后续逻辑前端处理
    instance(options).then(({ data }) => {
      resolve(data)
    }).catch(() => {
      resolve(data)
      window.console.log(reject)
    })
  })
}