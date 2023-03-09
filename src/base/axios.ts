import axios from 'axios';
import {appConfig} from '../appConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Api = axios.create({
  baseURL: appConfig.BASE_URL,
});

axios.interceptors.response.use(async response => {
  return response;
});

const token = AsyncStorage.getItem('@token');

if (token) {
  axios.defaults.headers.Authorization = 'Bearer ' + token;
}
