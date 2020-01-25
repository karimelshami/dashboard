import loginActionsTypes from './action-types';
import { loginInitialState } from 'redux/initialStates'
import { constants } from 'utils'

const { status } = constants;

export function loginReducer(state = loginInitialState, { payload, type }) {
  switch (type) {
    case loginActionsTypes.GET_LOGIN_INFO:
      return {
        ...state,
        ...{
          userInfo: {
            status: status.FETCHING
          }
        },
      }
    case loginActionsTypes.GET_LOGIN_INFO_SUCCESS:
      return {
        ...state,
        ...{
          userInfo: {
            status: status.SUCCESS,
            ...payload
          }
        },
      };
    case loginActionsTypes.GET_LOGIN_INFO_FAIL:
      return {
        ...state,
        ...{
          userInfo: {
            status: status.FAIL,
          }
        },
      };
    default:
      return state;
  }
}