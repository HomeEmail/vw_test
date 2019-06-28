import axios from 'axios';
import axiosConfig from './config';

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
  response => Promise.resolve(response.data),

  (error) => {
    const {
      code, response, message, config,
    } = error;

    if (code === 'ECONNABORTED') {
      console.error('请求超时，请重试', message);
    }
    return Promise.reject(message);
  },
);

export default instance;
