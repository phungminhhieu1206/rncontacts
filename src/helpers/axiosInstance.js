import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
import { LOGOUT } from '../constants/routeNames';
import { navigate } from '../navigations/RootNavigator';

let headers = {};

const axiosInstance = axios.create({ // create http request to server
  baseURL: envs.BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = await AsyncStorage.getItem('token'); // getToken, xem token đã có trong asyncstorage hay chưa
    // nếu có token trong local rồi, thì gắn token đó vào authorization thuộc phần header của request x đến server
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      /**
       * Tại đây mong muốn có hành động logout
       * Đơn cử là nghĩ ngay đến action logoutUser: logoutUser()(authDispatch) ?
       * Tuy nhiên file này không nằm trong mục quản lý của context provider nên ko dùng được theo kiểu trên
       * Do đó, tại đây mình có thể nghĩ đến việc navigate đến 1 màn hình nào đó nằm trong context provider
       * và từ màn hình đó, sẽ tiến hành gọi action logoutUser()
       * --> Đó là lúc dùng navigate() tại nơi ko thuộc component nào !!
       */
      navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;