import { takeLatest, call, put } from 'redux-saga/effects'
import {
  dashboardActions,
  dashboardActionTypes,
  dashboardApi
} from 'modules/dashboard'

function* getRelatedSpecialitiesForMainSaga({ payload }) {
  try {
    const response = yield call(
      dashboardApi.getRelatedSpecialtiesForMain,
      payload
    )
    yield put(
      dashboardActions.getRelatedSpecialitiesForMainSuccess(response.data.Data)
    )
  } catch (error) {
    yield put(dashboardActions.getRelatedSpecialitiesForMainFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getRelatedSpecialitiesForSubSaga({ payload }) {
  try {
    const response = yield call(
      dashboardApi.getRelatedSpecialtiesForSub,
      payload
    )
    yield put(
      dashboardActions.getRelatedSpecialitiesForSubSuccess(response.data.Data)
    )
  } catch (error) {
    yield put(dashboardActions.getRelatedSpecialitiesForSubFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* addAreaSaga({ payload, cityId }) {
  try {
    const response = yield call(dashboardApi.addAreaByCityId, payload)
    yield put(dashboardActions.addAreaSuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getArea(cityId))
    }
  } catch (error) {
    yield put(dashboardActions.addAreaFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* addCitySaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.addCityByCountryId, payload)
    yield put(dashboardActions.addCitySuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getCity(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.addCityFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* addInsuranceSaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.addInsuranceByCountryId, payload)
    yield put(dashboardActions.addInsuranceSuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getInsurance(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.addInsuranceFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* addSpecialitySaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.addSpecialityByCountryId, payload)
    yield put(dashboardActions.addSpecialitySuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getMainSpecialty(countryId))
      yield put(dashboardActions.getSubSpecialty(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.addSpecialityFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* addAreaNeighbourSaga({ payload }) {
  try {
    const response = yield call(dashboardApi.addAreaNeighbour, payload)
    yield put(dashboardActions.addAreaNeighbourSuccess(response.data.Data))
    yield put(dashboardActions.getAreaNeighbours(payload.AreaId))
  } catch (error) {
    yield put(dashboardActions.addAreaNeighbourFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* editAreaSaga({ payload, cityId }) {
  try {
    const response = yield call(dashboardApi.editAreaByCityId, payload)
    yield put(dashboardActions.editAreaSuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getArea(cityId))
    }
  } catch (error) {
    yield put(dashboardActions.editAreaFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* editCitySaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.editCityByCountryId, payload)
    yield put(dashboardActions.editCitySuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getCity(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.editCityFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* editInsuranceSaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.editInsuranceByCountryId, payload)
    yield put(dashboardActions.editInsuranceSuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getInsurance(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.editInsuranceFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* editSpecialitySaga({ payload, countryId }) {
  try {
    const response = yield call(dashboardApi.editSpecialityByCountryId, payload)
    yield put(dashboardActions.editSpecialitySuccess(response.data.Data))
    if (response && response.data && response.data.Success) {
      yield put(dashboardActions.getMainSpecialty(countryId))
      yield put(dashboardActions.getSubSpecialty(countryId))
    }
  } catch (error) {
    yield put(dashboardActions.editSpecialityFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getAreaSaga({ payload }) {
  try {
    const response = yield call(dashboardApi.getAreasByCityId, payload)
    yield put(dashboardActions.getAreaSuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getAreaFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getCitySaga({ payload }) {
  try {
    const response = yield call(dashboardApi.getCitiesByCountryId, payload)
    yield put(dashboardActions.getCitySuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getCityFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getInsuranceSaga({ payload }) {
  try {
    const response = yield call(dashboardApi.getInsurancesByCountryId, payload)
    yield put(dashboardActions.getInsuranceSuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getInsuranceFail(error))
  }
}

function* getMainSpecialtySaga({ payload }) {
  try {
    const response = yield call(
      dashboardApi.getMainSpecialtiesByCountryId,
      payload
    )
    yield put(dashboardActions.getMainSpecialtySuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getMainSpecialtyFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getSubSpecialtySaga({ payload }) {
  try {
    const response = yield call(
      dashboardApi.getSubSpecialtiesByCountryId,
      payload
    )
    yield put(dashboardActions.getSubSpecialtySuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getSubSpecialtyFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* getAreaNeighboursSaga({ payload }) {
  try {
    const response = yield call(dashboardApi.getAreaNeighbours, payload)
    yield put(dashboardActions.getAreaNeighboursSuccess(response.data.Data))
  } catch (error) {
    yield put(dashboardActions.getAreaNeighboursFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}
function* deleteAreaNeigbourSaga({ payload }) {
  try {
    const response = yield call(dashboardApi.deleteAreaNeigbour, payload)
    yield put(dashboardActions.deleteAreaNeighbourSuccess(response.data.Data))
    yield put(dashboardActions.getAreaNeighbours(payload.AreaId))
  } catch (error) {
    yield put(dashboardActions.deleteAreaNeighbourFail(error))
    yield put(dashboardActions.toggleShowAlert(true))
  }
}

function* dashboardSagas() {
  yield takeLatest(
    dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_MAIN,
    getRelatedSpecialitiesForMainSaga
  )
  yield takeLatest(
    dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_SUB,
    getRelatedSpecialitiesForSubSaga
  )
  yield takeLatest(dashboardActionTypes.ADD_AREA, addAreaSaga)
  yield takeLatest(dashboardActionTypes.ADD_CITY, addCitySaga)
  yield takeLatest(dashboardActionTypes.ADD_INSURANCE, addInsuranceSaga)
  yield takeLatest(dashboardActionTypes.ADD_SPECIALITY, addSpecialitySaga)
  yield takeLatest(dashboardActionTypes.EDIT_INSURANCE, editInsuranceSaga)
  yield takeLatest(dashboardActionTypes.EDIT_AREA, editAreaSaga)
  yield takeLatest(dashboardActionTypes.EDIT_CITY, editCitySaga)
  yield takeLatest(dashboardActionTypes.EDIT_SPECIALITY, editSpecialitySaga)
  yield takeLatest(dashboardActionTypes.GET_AREA, getAreaSaga)
  yield takeLatest(dashboardActionTypes.GET_CITY, getCitySaga)
  yield takeLatest(dashboardActionTypes.GET_INSURANCE, getInsuranceSaga)
  yield takeLatest(
    dashboardActionTypes.GET_MAIN_SPECIALITY,
    getMainSpecialtySaga
  )
  yield takeLatest(dashboardActionTypes.GET_SUB_SPECIALITY, getSubSpecialtySaga)
  yield takeLatest(
    dashboardActionTypes.GET_AREA_NEIGHBOURS,
    getAreaNeighboursSaga
  )
  yield takeLatest(
    dashboardActionTypes.DELETE_AREA_NEIGHBOUR,
    deleteAreaNeigbourSaga
  )
  yield takeLatest(
    dashboardActionTypes.ADD_AREA_NEIGHBOUR,
    addAreaNeighbourSaga
  )
}

export default dashboardSagas
