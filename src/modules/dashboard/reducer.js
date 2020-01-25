import { dashboardInitialState } from 'redux/initialStates'
import dashboardActionsTypes from './action-types'
import { constants } from 'utils'
import dashboardActionTypes from './action-types'

const { status } = constants

export function dashboardReducer(
  state = dashboardInitialState,
  { payload, type }
) {
  switch (type) {
    case dashboardActionsTypes.SET_SELECTED_ITEM:
      return {
        ...state,
        ...{
          selectedItem: payload
        }
      }
    case dashboardActionsTypes.SET_SELECTED_COUNTRY:
      return {
        ...state,
        ...{
          selectedCountry: payload
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_MAIN:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForMain: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_MAIN_SUCCESS:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForMain: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_MAIN_FAIL:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForMain: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_SUB:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForSub: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_SUB_SUCCESS:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForSub: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_RELATED_SPECIALITIES_FOR_SUB_FAIL:
      return {
        ...state,
        ...{
          allRelatedSpecialitiesForSub: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA:
      return {
        ...state,
        ...{
          addType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA_SUCCESS:
      return {
        ...state,
        ...{
          addType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA_FAIL:
      return {
        ...state,
        ...{
          addType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.ADD_CITY:
      return {
        ...state,
        ...{
          addType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.ADD_CITY_SUCCESS:
      return {
        ...state,
        ...{
          addType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.ADD_CITY_FAIL:
      return {
        ...state,
        ...{
          addType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.ADD_INSURANCE:
      return {
        ...state,
        ...{
          addType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.ADD_INSURANCE_SUCCESS:
      return {
        ...state,
        ...{
          addType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.ADD_INSURANCE_FAIL:
      return {
        ...state,
        ...{
          addType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.ADD_SPECIALITY:
      return {
        ...state,
        ...{
          addType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.ADD_SPECIALITY_SUCCESS:
      return {
        ...state,
        ...{
          addType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.ADD_SPECIALITY_FAIL:
      return {
        ...state,
        ...{
          addType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA_NEIGHBOUR:
      return {
        ...state,
        ...{
          addType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA_NEIGHBOUR_SUCCESS:
      return {
        ...state,
        ...{
          addType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.ADD_AREA_NEIGHBOUR_FAIL:
      return {
        ...state,
        ...{
          addType: {
            status: status.FAIL
          }
        }
      }

    case dashboardActionsTypes.EDIT_AREA:
      return {
        ...state,
        ...{
          editType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.EDIT_AREA_SUCCESS:
      return {
        ...state,
        ...{
          editType: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.EDIT_AREA_FAIL:
      return {
        ...state,
        ...{
          editType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.EDIT_CITY:
      return {
        ...state,
        ...{
          editType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.EDIT_CITY_SUCCESS:
      return {
        ...state,
        ...{
          editType: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.EDIT_CITY_FAIL:
      return {
        ...state,
        ...{
          editType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.EDIT_INSURANCE:
      return {
        ...state,
        ...{
          editType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.EDIT_INSURANCE_SUCCESS:
      return {
        ...state,
        ...{
          editType: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.EDIT_INSURANCE_FAIL:
      return {
        ...state,
        ...{
          editType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.EDIT_SPECIALITY:
      return {
        ...state,
        ...{
          editType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.EDIT_SPECIALITY_SUCCESS:
      return {
        ...state,
        ...{
          editType: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.EDIT_SPECIALITY_FAIL:
      return {
        ...state,
        ...{
          editType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_AREA:
      return {
        ...state,
        ...{
          getAreaData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_AREA_SUCCESS:
      return {
        ...state,
        ...{
          getAreaData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_AREA_FAIL:
      return {
        ...state,
        ...{
          getAreaData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_CITY:
      return {
        ...state,
        ...{
          getCityData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_CITY_SUCCESS:
      return {
        ...state,
        ...{
          getCityData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_CITY_FAIL:
      return {
        ...state,
        ...{
          getCityData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_INSURANCE:
      return {
        ...state,
        ...{
          getInsuranceData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_INSURANCE_SUCCESS:
      return {
        ...state,
        ...{
          getInsuranceData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_INSURANCE_FAIL:
      return {
        ...state,
        ...{
          getInsuranceData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_MAIN_SPECIALITY:
      return {
        ...state,
        ...{
          getMainSpecialtyData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_MAIN_SPECIALITY_SUCCESS:
      return {
        ...state,
        ...{
          getMainSpecialtyData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_MAIN_SPECIALITY_FAIL:
      return {
        ...state,
        ...{
          getMainSpecialtyData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_SUB_SPECIALITY:
      return {
        ...state,
        ...{
          getSubSpecialtyData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_SUB_SPECIALITY_SUCCESS:
      return {
        ...state,
        ...{
          getSubSpecialtyData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_SUB_SPECIALITY_FAIL:
      return {
        ...state,
        ...{
          getSubSpecialtyData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.GET_AREA_NEIGHBOURS:
      return {
        ...state,
        ...{
          getAreaNeighboursData: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.GET_AREA_NEIGHBOURS_SUCCESS:
      return {
        ...state,
        ...{
          getAreaNeighboursData: {
            status: status.SUCCESS,
            data: payload
          }
        }
      }
    case dashboardActionsTypes.GET_AREA_NEIGHBOURS_FAIL:
      return {
        ...state,
        ...{
          getAreaNeighboursData: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionsTypes.DELETE_AREA_NEIGHBOUR:
      return {
        ...state,
        ...{
          deleteType: {
            status: status.FETCHING
          }
        }
      }
    case dashboardActionsTypes.DELETE_AREA_NEIGHBOUR_SUCCESS:
      return {
        ...state,
        ...{
          deleteType: {
            status: status.SUCCESS
          }
        }
      }
    case dashboardActionsTypes.DELETE_AREA_NEIGHBOUR_FAIL:
      return {
        ...state,
        ...{
          deleteType: {
            status: status.FAIL
          }
        }
      }
    case dashboardActionTypes.TOGGLE_SHOW_FAIL:
      return {
        ...state,
        showAlert: payload
      }
    default:
      return state
  }
}
