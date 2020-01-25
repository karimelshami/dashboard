import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Login from 'modules/login/views'
import { constants } from 'utils'
import { loginActions } from 'modules/login'

const { status } = constants;

const LoginContainer = () => {
  const { userInfo } = useSelector(state => ({
    userInfo: state.login.userInfo,
  }))
  const dispatch = useDispatch();

  const getUserInfo = (username, password, history) => {
    dispatch(loginActions.getLoginInfo({ username, password }, history))
  }

  let history = useHistory();

  const login = (args) => {
    getUserInfo(args.primaryValue, args.secondaryValue, history);
  }

  return (
    <Login
      onSubmit={login}
      loginFetching={userInfo.status === status.FETCHING}
      showError={userInfo.status === status.FAIL ||
        (userInfo.status === status.SUCCESS &&
        (!userInfo.UserExists || !userInfo.IsCorrectPassword))}
    />
  )
}

export default LoginContainer
