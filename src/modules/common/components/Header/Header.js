import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useSelector } from 'react-redux'
import { useStyles } from './Header.styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const Header = props => {
  const { logout, onHeaderTabSelect, selectedTab } = props
  const classes = useStyles()

  const allCountries = useSelector(state => state.common.allCountries)

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={8}>
            <Tabs
              classes={{ indicator: classes.bigIndicator }}
              TabIndicatorProps={{ color: 'primary' }}
              variant="fullWidth"
              indicatorColor="primary"
              centered
            >
              {allCountries && allCountries.Data && allCountries.Data.map((country, index) => {
                return (
                  <Tab
                    key={index}
                    onClick={() => onHeaderTabSelect(country)}
                    selected={selectedTab === country}
                    className={
                      selectedTab.LanguageItemModels.find(i => i.LanguageId === 1).Name ===
                        country.LanguageItemModels.find(i => i.LanguageId === 1).Name
                        ? classes.selectedTab
                        : classes.tab
                    }
                    value={country.LanguageItemModels.find(i => i.LanguageId === 1).Name}
                    label={country.LanguageItemModels.find(i => i.LanguageId === 1).Name}
                  />
                )
              })}
            </Tabs>
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={() => logout()}
              variant="outlined"
              className={classes.logout}
              color="primary"
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}

export default Header
