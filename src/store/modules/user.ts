// 用户相关
import {defineStore} from "pinia"
// 引入接口
import {reqLogin} from "@/api/user";
// 引入数据类型
import type {loginForm} from "@/api/user/type"
// 创建小仓库
let useUserStore = defineStore('User', {
    state:()=>{
        return {
            token:localStorage.getItem("TOKEN")
        }
    },
    actions:{
       async userLogin(data:loginForm){ 
            // 登录请求
            let result:any = await reqLogin(data)
            // 成功 拿到token
            if(result.code == 200){
                this.token = result.data.token;
                // 本地存储token
                localStorage.setItem('TOKEN',this.token);
                return 'ok'
            }else{
                // 失败 错误信息
                return Promise.reject(new Error(result.data.message))
            }
            
        }
    },
    getters:{

    },
})

export default useUserStore