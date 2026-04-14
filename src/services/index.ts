import { request } from '@umijs/max';

// 登录
export async function login(data?: { [key: string]: any }) {
  return request('/api/login', { method: 'post', data });
}
// 获取当前用户信息
export async function getCurrentAccountInfo() {
  return request('/api/getCurrentAccountInfo', { method: 'get' });
}
// 获取银行卡
export async function getBankList() {
  return request('/api/getBankList', { method: 'get' });
}
// 获取消费记录
export async function getExpenseRecord() {
  return request('/api/getExpenseRecord', { method: 'get' });
}
// 获取最近交易列表
export async function getLastSaleList(data?: { [key: string]: any }) {
  return request('/api/getLastSaleList', { method: 'post', data });
}
// 获取年总投资
export async function getTotalAnnualInvestment(data?: { [key: string]: any }) {
  return request('/api/getTotalAnnualInvestment', { method: 'post', data });
}
// 获取月收入
export async function getMonthIncome(data?: { [key: string]: any }) {
  return request('/api/getMonthIncome', { method: 'post', data });
}
// 获取趋势
export async function getAssets(data?: { [key: string]: any }) {
  return request('/api/getAssets', { method: 'post', data });
}
// 获取月收入
export async function getTrend(data?: { [key: string]: any }) {
  return request('/api/getTrend', { method: 'post', data });
}
// 获取活跃贷款概况
export async function getLoanOverview(data?: { [key: string]: any }) {
  return request('/api/getLoanOverview', { method: 'post', data });
}
