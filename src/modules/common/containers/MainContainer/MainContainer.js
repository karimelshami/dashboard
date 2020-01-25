import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './MainContainer.theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { useStyles } from './MainContainer.style'
import Routes from 'routes'
import { store } from 'redux/store'

function MainContainer() {
  const classes = useStyles()
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.margin}>
            <Routes />
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default MainContainer
