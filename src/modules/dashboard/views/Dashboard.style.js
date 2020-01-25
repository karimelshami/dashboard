import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mt: {
    marginTop: '20px'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  dataTableWrapper :{
    position :"relative"
  },
  addIconWrapper : {
    position : "fixed",
    bottom : '7%',
    right: '10px',
    padding : '5px',
    cursor :'pointer'
  },
  locationIconWrapper : {
    position : "fixed",
    bottom : '7%',
    right: '110px',
    padding : '5px',
    cursor :'pointer'
  },
  loader : {
    textAlign: 'center'
  }
}))
