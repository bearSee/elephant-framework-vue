import service from '../utils/request.js'
import { aliyunSms } from '../config/index'

export const getCaptcha = phone => {
    return service({
        url: 'common/api/sms/send',
        method: 'POST',
        data: {
            source: 'CLIENT',
            type: 'QUICK_LOGIN',
            phone: phone,
            appCode: aliyunSms
        }
    })
}

export const loginRequest = data => {
    return service({
        url: 'auth/api/login',
        method: 'POST',
        data: data
    })
}

export const authFreeLogin = data => {
    return service({
        url: 'auth/api/keyless/login',
        method: 'POST',
        data: data
    })
}