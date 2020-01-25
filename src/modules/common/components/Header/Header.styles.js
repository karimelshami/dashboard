import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  tabs: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  tab: {
    color: theme.palette.primary.main,
    opacity: 1,
  },
  selectedTab : {
    color: theme.palette.primary.main,
    borderBottom:"solid 3px",
    borderColor :theme.palette.primary.main,
    opacity: 1,
    fontWeight: 700,
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logout : {
    marginTop: "5px"
  },
  bigIndicator: {
    height: 5,
    color:theme.palette.primary.main
  },
}))
