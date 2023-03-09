export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface ILogoutResponse {
  isSuccess: boolean;
}

// export interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
