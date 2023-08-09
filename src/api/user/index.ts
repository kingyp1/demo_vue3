// 用户相关接口
import request from '@/utils/request.ts';
import type { loginForm ,loginResponseData,userInfoReponseData} from './type';
enum API  {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
// 登录接口
export const reqLogin = (data: loginForm) => request.post<any,loginResponseData>(API.LOGIN_URL, data)
// 用户信息接口
export const reqUserInfo = () => request.get<any,userInfoReponseData>(API. USERINFO_URL)