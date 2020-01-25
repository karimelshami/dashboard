import { combineReducers } from 'redux'
import { commonReducer } from 'modules/common'
import { dashboardReducer } from 'modules/dashboard'
import { loginReducer } from 'modules/login'

export default combineReducers({
  common: commonReducer,
  login: loginReducer,
  dashboard: dashboardReducer
})
