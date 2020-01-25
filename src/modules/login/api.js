import { api, Urls } from 'utils'

const { portalLogin } = Urls;

export function authUser(loginData) {
    const data = { ...loginData };
    return api.post(portalLogin.authUser, data)
}