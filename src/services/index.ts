import { request } from '@umijs/max';

// 登录
export async function login(data?: { [key: string]: any }) {
  return request('/api/login', { method: 'post', data });
}

// 获取当前用户信息
export async function currentUser() {
  return request('/api/currentUser', { method: 'get' });
}

// 登出
export async function outLogin(data?: { [key: string]: any }) {
  return request('/api/login/outLogin', { method: 'post', data });
}

// 规则列表
export async function rule(params?: { [key: string]: any }) {
  return request('/api/rule', { method: 'get', params });
}

// 删除规则
export async function removeRule(params?: { [key: string]: any }) {
  return request('/api/rule', { method: 'delete', params });
}

// 添加规则
export async function addRule(data?: { [key: string]: any }) {
  return request('/api/rule', { method: 'post', data });
}

// 更新规则
export async function updateRule(data?: { [key: string]: any }) {
  return request('/api/rule', { method: 'put', data });
}

// 登录
export async function getCurrentAccountInfo() {
  return request('/api/getCurrentAccountInfo', { method: 'get' });
}
