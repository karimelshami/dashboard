import dashboardActionTypes from './action-types'

export function setSelectedItem(value) {
  return {
    type: dashboardActionTypes.SET_SELECTED_ITEM,
    payload: value
  }
}

export function setSelectedCountry(value) {
  return {
    type: dashboardActionTypes.SET_SELECTED_COUNTRY,
    payload: value
  }
}

export function getRelatedSpecialitiesForMain(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_MAIN,
    payload: value
  }
}

export function getRelatedSpecialitiesForMainSuccess(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_MAIN_SUCCESS,
    payload: value
  }
}

export function getRelatedSpecialitiesForMainFail(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_MAIN_FAIL,
    payload: value
  }
}

export function getRelatedSpecialitiesForSub(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_SUB,
    payload: value
  }
}

export function getRelatedSpecialitiesForSubSuccess(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_SUB_SUCCESS,
    payload: value
  }
}

export function getRelatedSpecialitiesForSubFail(value) {
  return {
    type: dashboardActionTypes.GET_RELATED_SPECIALITIES_FOR_SUB_FAIL,
    payload: value
  }
}

export function addArea(value, cityId) {
  return {
    type: dashboardActionTypes.ADD_AREA,
    payload: value,
    cityId
  }
}

export function addAreaSuccess(value) {
  return {
    type: dashboardActionTypes.ADD_AREA_SUCCESS,
    payload: value
  }
}

export function addAreaFail(value) {
  return {
    type: dashboardActionTypes.ADD_AREA_FAIL,
    payload: value
  }
}


export function addCity(value, countryId) {
  return {
    type: dashboardActionTypes.ADD_CITY,
    payload: value,
    countryId
  }
}

export function addCitySuccess(value) {
  return {
    type: dashboardActionTypes.ADD_CITY_SUCCESS,
    payload: value
  }
}

export function addCityFail(value) {
  return {
    type: dashboardActionTypes.ADD_CITY_FAIL,
    payload: value
  }
}

export function addInsurance(value, countryId) {
  return {
    type: dashboardActionTypes.ADD_INSURANCE,
    payload: value,
    countryId
  }
}

export function addInsuranceSuccess(value) {
  return {
    type: dashboardActionTypes.ADD_INSURANCE_SUCCESS,
    payload: value
  }
}

export function addInsuranceFail(value) {
  return {
    type: dashboardActionTypes.ADD_INSURANCE_FAIL,
    payload: value
  }
}

export function addSpeciality(value, countryId) {
  return {
    type: dashboardActionTypes.ADD_SPECIALITY,
    payload: value,
    countryId
  }
}

export function addSpecialitySuccess(value) {
  return {
    type: dashboardActionTypes.ADD_SPECIALITY_SUCCESS,
    payload: value
  }
}

export function addSpecialityFail(value) {
  return {
    type: dashboardActionTypes.ADD_SPECIALITY_FAIL,
    payload: value
  }
}

export function addAreaNeighbours(value) {
  return {
    type: dashboardActionTypes.ADD_AREA_NEIGHBOUR,
    payload: value,
  }
}
export function addAreaNeighbourSuccess(value) {
  return {
    type: dashboardActionTypes.ADD_AREA_NEIGHBOUR_SUCCESS,
    payload: value,
  }
}
export function addAreaNeighbourFail(value) {
  return {
    type: dashboardActionTypes.ADD_AREA_NEIGHBOUR_FAIL,
    payload: value,
  }
}

export function editArea(value, cityId) {
  return {
    type: dashboardActionTypes.EDIT_AREA,
    payload: value,
    cityId
  }
}

export function editAreaSuccess(value) {
  return {
    type: dashboardActionTypes.EDIT_AREA_SUCCESS,
    payload: value,
  }
}

export function editAreaFail(value) {
  return {
    type: dashboardActionTypes.EDIT_AREA_FAIL,
    payload: value,
  }
}

export function editCity(value, countryId) {
  return {
    type: dashboardActionTypes.EDIT_CITY,
    payload: value,
    countryId
  }
}

export function editCitySuccess(value) {
  return {
    type: dashboardActionTypes.EDIT_CITY_SUCCESS,
    payload: value
  }
}

export function editCityFail(value) {
  return {
    type: dashboardActionTypes.EDIT_CITY_FAIL,
    payload: value
  }
}

export function editInsurance(value, countryId) {
  return {
    type: dashboardActionTypes.EDIT_INSURANCE,
    payload: value,
    countryId
  }
}

export function editInsuranceSuccess(value) {
  return {
    type: dashboardActionTypes.EDIT_INSURANCE_SUCCESS,
    payload: value
  }
}

export function editInsuranceFail(value) {
  return {
    type: dashboardActionTypes.EDIT_INSURANCE_FAIL,
    payload: value
  }
}

export function editSpeciality(value, countryId) {
  return {
    type: dashboardActionTypes.EDIT_SPECIALITY,
    payload: value,
    countryId
  }
}

export function editSpecialitySuccess(value) {
  return {
    type: dashboardActionTypes.EDIT_SPECIALITY_SUCCESS,
    payload: value
  }
}

export function editSpecialityFail(value) {
  return {
    type: dashboardActionTypes.EDIT_SPECIALITY_FAIL,
    payload: value
  }
}

export function getArea(value) {
  return {
    type: dashboardActionTypes.GET_AREA,
    payload: value,
  }
}

export function getAreaSuccess(value) {
  return {
    type: dashboardActionTypes.GET_AREA_SUCCESS,
    payload: value,
  }
}

export function getAreaFail(value) {
  return {
    type: dashboardActionTypes.GET_AREA_FAIL,
    payload: value,
  }
}

export function getCity(value) {
  return {
    type: dashboardActionTypes.GET_CITY,
    payload: value,
  }
}

export function getCitySuccess(value) {
  return {
    type: dashboardActionTypes.GET_CITY_SUCCESS,
    payload: value,
  }
}

export function getCityFail(value) {
  return {
    type: dashboardActionTypes.GET_CITY_FAIL,
    payload: value,
  }
}

export function getInsurance(value) {
  return {
    type: dashboardActionTypes.GET_INSURANCE,
    payload: value,
  }
}

export function getInsuranceSuccess(value) {
  return {
    type: dashboardActionTypes.GET_INSURANCE_SUCCESS,
    payload: value,
  }
}

export function getInsuranceFail(value) {
  return {
    type: dashboardActionTypes.GET_INSURANCE_FAIL,
    payload: value,
  }
}

export function getMainSpecialty(value) {
  return {
    type: dashboardActionTypes.GET_MAIN_SPECIALITY,
    payload: value,
  }
}

export function getMainSpecialtySuccess(value) {
  return {
    type: dashboardActionTypes.GET_MAIN_SPECIALITY_SUCCESS,
    payload: value,
  }
}

export function getMainSpecialtyFail(value) {
  return {
    type: dashboardActionTypes.GET_MAIN_SPECIALITY_FAIL,
    payload: value,
  }
}

export function getSubSpecialty(value) {
  return {
    type: dashboardActionTypes.GET_SUB_SPECIALITY,
    payload: value,
  }
}

export function getSubSpecialtySuccess(value) {
  return {
    type: dashboardActionTypes.GET_SUB_SPECIALITY_SUCCESS,
    payload: value,
  }
}

export function getSubSpecialtyFail(value) {
  return {
    type: dashboardActionTypes.GET_SUB_SPECIALITY_FAIL,
    payload: value,
  }
}

export function toggleShowAlert(value) {
  return {
    type: dashboardActionTypes.TOGGLE_SHOW_FAIL,
    payload: value,
  }
}
export function getAreaNeighbours(value) {
  return {
    type: dashboardActionTypes.GET_AREA_NEIGHBOURS,
    payload: value,
  }
}
export function getAreaNeighboursSuccess(value) {
  return {
    type: dashboardActionTypes.GET_AREA_NEIGHBOURS_SUCCESS,
    payload: value,
  }
}
export function getAreaNeighboursFail(value) {
  return {
    type: dashboardActionTypes.GET_AREA_NEIGHBOURS_FAIL,
    payload: value,
  }
}
export function deleteAreaNeighbours(value) {
  return {
    type: dashboardActionTypes.DELETE_AREA_NEIGHBOUR,
    payload: value,
  }
}
export function deleteAreaNeighbourSuccess(value) {
  return {
    type: dashboardActionTypes.DELETE_AREA_NEIGHBOUR_SUCCESS,
    payload: value,
  }
}
export function deleteAreaNeighbourFail(value) {
  return {
    type: dashboardActionTypes.DELETE_AREA_NEIGHBOUR_FAIL,
    payload: value,
  }
}