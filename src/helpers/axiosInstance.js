import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
// import {LOGOUT} from '../constants/routeNames';
// import {navigate} from '../navigations/SideMenu/RootNavigator';

let headers = {};

const axiosInstance = axios.create({ // create http request to server
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token'); // getToken, xem token đã có trong asyncstorage hay chưa
    // nếu có token trong local rồi, thì gắn token đó vào authorization thuộc phần header của request x đến server
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// axiosInstance.interceptors.response.use(
//   (response) =>
//     new Promise((resolve, reject) => {
//       resolve(response);
//     }),
//   (error) => {
//     if (!error.response) {
//       return new Promise((resolve, reject) => {
//         reject(error);
//       });
//     }
//     if (error.response.status === 403) {
//       navigate(LOGOUT, {tokenExpired: true});
//     } else {
//       return new Promise((resolve, reject) => {
//         reject(error);
//       });
//     }
//   },
// );

export default axiosInstance;