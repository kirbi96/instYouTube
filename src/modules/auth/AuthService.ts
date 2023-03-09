import AuthApi from './AuthApi';
import { ILoginRequest, ILoginResponse, ILogoutResponse } from "./AuthTypes";

export default class AuthService {
  authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
  }

  login = async (dataLogin: ILoginRequest): Promise<ILoginResponse> => {
    const {data} = await this.authApi.login(dataLogin);

    return data;
  };

  logout = async (): Promise<ILogoutResponse> => {
    const {data} = await this.authApi.logout();
    return data;
  };

  // getPosts = async (): Promise<IPost[]> => {
  //   const {data} = await this.authApi.getPosts();
  //   return data;
  // };
}
