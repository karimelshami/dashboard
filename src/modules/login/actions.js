import loginActionTypes from './action-types'

export function getLoginInfo(value, history) {
    return {
        type: loginActionTypes.GET_LOGIN_INFO,
        payload: value,
        history
    }
}

export function getLoginInfoSuccess(value) {
    return {
        type: loginActionTypes.GET_LOGIN_INFO_SUCCESS,
        payload: value
    }
}

export function getLoginInfoFail(value) {
    return {
        type: loginActionTypes.GET_LOGIN_INFO_FAIL,
        payload: value
    }
}