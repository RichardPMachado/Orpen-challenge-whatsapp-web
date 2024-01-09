import axios from 'axios';
import ILoginResponse from '../Interfaces/ILoginResponse';

// _RPM
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = document.cookie.split('; ')
  .find((row) => row.startsWith('_auth='))
  ?.split('=')[1];
 
  config.headers.Authorization = token || '';
  return config;
});

const requestLogin = async (
  endpoint: string,
  body: { nickName: string, password: string },
  ): Promise<ILoginResponse> => {
    // _RPM
  const { data } = await api.post(endpoint, body);
  return data;
};

export {
  api,
  requestLogin,
};