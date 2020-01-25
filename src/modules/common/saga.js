import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from 'modules/common'

function* getCountriesSaga() {
    try {
        const response = yield call(commonApi.getCountries);
        yield put(commonActions.getCountiresSuccess(response.data));
    }
    catch(error) {
        yield put(commonActions.getCountiresFail());
    }
}

function* commonSagas() {
    yield takeLatest(commonActionTypes.GET_ALL_COUNTIRES, getCountriesSaga);
  }
  
  export default commonSagas;