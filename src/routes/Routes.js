import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import LoginContainer from 'modules/common/containers/LoginContainer'
import DashboardContainer from 'modules/common/containers/DashboardContainer'
import Cookies from 'js-cookie'

const Routes = () => {
  let history = useHistory()
  useEffect(() => {
    if (Cookies.get('userAuth')) {
      history.push('dashboard')
    } else {
      history.push('/')
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
    </Switch>
  )
}
export default Routes
