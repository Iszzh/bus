import axios from 'axios'

//外部接口
let base='http://47.92.76.63:9097';

//全局链接
global.URL=base;

//注册
export const Register = params => {
    return axios.post(`${base}/InterfaceBus/Register`,params)
        .then(res => res.data);
};

//登录
export const Login = params => {
    return axios.post(`${base}/InterfaceBus/Login`,params)
        .then(res => res.data);
};

//轮播图
export const GetBanner = params => {
    return axios.post(`${base}/InterfaceBus/GetBanner`,params)
        .then(res => res.data);
};

//获取新闻
export const GetNews = params => {
    return axios.post(`${base}/InterfaceBus/GetNews`,params)
        .then(res => res.data);
};

//获取公交站位置
export const GetSitByDistance = params => {
    return axios.post(`${base}/InterfaceBus/GetSitByDistance`,params)
        .then(res => res.data);
};

//获取站点上的线路
export const GetSiteByLine = params => {
    return axios.post(`${base}/InterfaceBus/GetSiteByLine`,params)
        .then(res => res.data);
};