import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// 회원가입
export const register = ({ name, email, password }) =>
  client.post('/api/auth/register', { name, email, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
