import { all, fork } from 'redux-saga/effects'
import { commonSagas } from 'modules/common'
import { loginSagas } from 'modules/login'
import { dashboardSagas } from 'modules/dashboard'

const sagas = [
    commonSagas,
    loginSagas,
    dashboardSagas
];

export default function* rootSaga() {
    // eslint-disable-next-line array-callback-return
    yield all(sagas.map(saga => {
        if (saga) return fork(saga);
    }));
}
