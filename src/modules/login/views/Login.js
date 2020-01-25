import React from 'react'
import Container from '@material-ui/core/Container'
import { CircularProgress } from '@material-ui/core'
import { useStyles } from './Login.style'
import Form from 'modules/common/components/Form'
const Logo =''
const Login = props => {
  const { onSubmit, loginFetching, showError } = props
  const classes = useStyles()

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <img className={classes.logo} src={Logo} alt="logo" />
          <Form type="login" onSubmit={onSubmit} />
          <div style={{display: `${loginFetching ? 'block' : 'none'}`}}><CircularProgress /></div>
          <div className={classes.errorMsg} style={{display: `${showError ? 'block' : 'none'}`}}>Wrong username or password</div>
        </div>
      </Container>
    </>
  )
}

export default Login
