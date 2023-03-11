import axios from "axios";

const http = axios.create({
    //通用请求的地址的前缀
    baseURL: '/api',
    timeout: 10000,
})

http.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

http.interceptors.request.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})

export default http

