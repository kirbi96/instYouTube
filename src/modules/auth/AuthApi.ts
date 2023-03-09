import {Api} from '../../base/axios';
import {ILoginRequest} from './AuthTypes';

export default class AuthApi {
  login = (data: ILoginRequest) => {
    // return Api.post('/login', data);
    return {data: {token: 'TOKEN'}};
  };

  logout = () => {
    // return Api.post('/logout', data);
    return {data: {isSuccess: true}};
  };

  // getPosts = async (): Promise<AxiosResponse<IPost[]>> => {
  //   return await Api.get('/posts');
  // };
}
