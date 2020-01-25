import { takeLatest, call, put } from 'redux-saga/effects'
import { loginActions, loginActionTypes, loginApi } from 'modules/login'
import Cookies from 'js-cookie'

function* getUserInfoSaga({ payload, history }) {
    try {
        const response = yield call(loginApi.authUser, payload);
        yield put(loginActions.getLoginInfoSuccess(response.data.Data));
        if(response && response.data && response.data.Data && response.data.Data.UserExists && response.data.Data.IsCorrectPassword) {
            Cookies.set('userAuth', response.data.Data.UserKey, { expires: 365 });
            history.replace('/dashboard');
        }
    }
    catch (error) {
        yield put(loginActions.getLoginInfoFail());
    }
}

function* loginSagas() {
    yield takeLatest(loginActionTypes.GET_LOGIN_INFO, getUserInfoSaga);
}

export default loginSagas;