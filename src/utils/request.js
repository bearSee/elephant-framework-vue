// const baseUrl = 'https://2c.mirrorego.com/'
import { baseRequestDomain } from '../config/index.js'
import { authFreeLogin } from '../api/login'
import Axios from 'axios'

Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const url = baseRequestDomain
const service = Axios.create({
        // axios中请求配置有baseURL选项，表示请求URL公共部分
        baseURL: url,
        // 超时
        timeout: 50000
    })
    // request拦截器
service.interceptors.request.use(config => {
    console.log(config)
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const orgId = localStorage.getItem('orgId')
    config.headers.token = token ? token : ''
    config.headers['userId'] = userId ? userId : ''
    config.headers['Accept-Language'] = 'zh_CN'
    config.headers['orgId'] = orgId ? orgId : 999
    return config
})

// 响应拦截器
service.interceptors.response.use(
    async res => {
        const authLoginCode = localStorage.getItem('authLoginCode')
        const uid = localStorage.getItem('uid')
        const orgId = localStorage.getItem('orgId')
        const appCode = localStorage.getItem('appCode')
        if (res.data.code == -1 || res.data.code == 906) {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            const clientSource = localStorage.getItem('clientSource')
            if (authLoginCode || uid) {
                const res = await authFreeLogin({
                    id: authLoginCode || uid,
                    source: 'CLIENT',
                    grantParty: 'WECHAT_APPLET',
                    appCode: appCode || 'mirrorego-applet',
                    orgId: orgId ? orgId : 999
                })
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.userId)
                uni.reLaunch({
                    url: '/'
                })
            } else {
                if (clientSource == 'h5' || clientSource == 'app') {
                    localStorage.removeItem('token')
                    localStorage.removeItem('userId')
                    uni.reLaunch({
                        url: '/pages/my/index'
                    })
                } else if (clientSource == 'mp-wx') {
                    this.$jweixin.miniProgramuni.reLaunch({
                        url: '/'
                    })
                }
            }
        }
        if (res.config.url.includes('aitest')) return res
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service