import commonActionTypes from './action-types'

export function getCountires(value) {
    return {
        type: commonActionTypes.GET_ALL_COUNTIRES,
        payload: value
    }
}

export function getCountiresSuccess(value) {
    return {
        type: commonActionTypes.GET_ALL_COUNTIRES_SUCCESS,
        payload: value
    }
}

export function getCountiresFail(value) {
    return {
        type: commonActionTypes.GET_ALL_COUNTIRES_FAIL,
        payload: value
    }
}