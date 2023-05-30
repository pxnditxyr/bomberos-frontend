import axios, { AxiosRequestConfig } from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const bomberosApi = axios.create({
  baseURL: VITE_API_URL || 'http://localhost:4001',
});

bomberosApi.interceptors.request.use( ( config : AxiosRequestConfig ) : AxiosRequestConfig => {
  const token = localStorage.getItem( 'token' ) || '';
  config.headers = { ...config.headers };
  config.headers[ 'x-token' ] = token;
  return config;
} );

export default bomberosApi;
