// 暴露登录接口相关的参数
export interface loginForm{
    username: string;
    password: string;
}

interface dateType{
    data:string;
}
interface userInfo{
    userId: number,
    avatar:string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
interface user{
    checkUser:userInfo
}
// 登录接口返回的数据类型
export interface loginResponseData {
    code: number;
    data:dateType;
}

// 暴露用户信息返回的数据类型
export interface userInfoReponseData{
    code: number;
    data:user
}
