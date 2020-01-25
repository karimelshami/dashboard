import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Box from '@material-ui/core/Box'
import { useStyles } from './Sidebar.styles'
import { tabs } from './Sidebar.constants'

const Logo =
  ''

const Sidebar = props => {
  const { container, onSidebarTabSelect, selectedItem } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <Box display="flex" justifyContent="center" m={2}>
        <img className={classes.logo} src={Logo} alt="logo" />
      </Box>
      <div className={classes.toolbar} />

      <List>
        {tabs.map((text, index) => (
          <ListItem
            onClick={() => onSidebarTabSelect(text)}
            className={classes.sidebarListItem}
            button
            key={index}
            selected={text === selectedItem}
          >
            <ListItemText key={index} className ={classes.sidebarListItemText} primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.nav}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
          >
            {drawer}
            <List></List>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default Sidebar
