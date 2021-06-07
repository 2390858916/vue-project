import axios from 'axios'
import {Message}  from 'element-ui'
import router from '../router'

//相应拦截器
axios.interceptors.response.use(success=>{
  //业务逻辑
  if(success.status && success.status == 200){
    if(success.data.code==500 || success.data.code==401 || success.data.code==403){
      //如果由以上的响应码就是出错了
      Message.error({message:success.data.message})
      return;
    }
    if(success.data.message){
      Message.success({message:success.data.message})
    }
  }
  return success.data
},error=>{
  //连接接口失败
  if(error.response.code==504 || error.response.code==404){
    Message.error({message:'连接失败'})
  }else if(error.response.code==403){
    Message.error({message:'权限不足'})
  }else if(error.response.code==401){
    Message.error({message:'未登录'})
    router.replace('/')
  }else{
    if(error.response.data.message){
      Message.error({message:error.response.data.message})
    }else{
      Message.error({message:'未知错误'})
    }
  }
  return
})

//json 格式的post 请求
//配置前置路径
let base = ''
export const postRequest = (url,params)=>{
  return axios({
    method:'post',
    url:`${base}${url}`,
    data:params
  })
}