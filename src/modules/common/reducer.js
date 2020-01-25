import { commonInitialState } from 'redux/initialStates'
import { commonActionTypes } from 'modules/common'
import { constants } from 'utils'

const { status } = constants;

export function commonReducer(state = commonInitialState, { payload, type }) {
    switch (type) {
        case commonActionTypes.GET_ALL_COUNTIRES:
            return {
                ...state,
                ...{
                    allCountries: {
                        status: status.FETCHING
                    }
                },
            }
        case commonActionTypes.GET_ALL_COUNTIRES_SUCCESS:
            return {
                ...state,
                ...{
                    allCountries: {
                        status: status.SUCCESS,
                        ...payload
                    }
                },
            };
        case commonActionTypes.GET_ALL_COUNTIRES_FAIL:
            return {
                ...state,
                ...{
                    allCountries: {
                        status: status.FAIL,
                    }
                },
            };
        default:
            return state;
    }
} 