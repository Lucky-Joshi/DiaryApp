import axios from 'axios';

const API = axios.create();

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const uuid = localStorage.getItem('uuid');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (!token && uuid) config.params = { uuid };
  return config;
});

export default API;
