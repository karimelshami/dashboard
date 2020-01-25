import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  hide: {
    display: 'none'
  },
  paginationWrapper: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  },
  tableHead : {
    fontWeight : 700,
    padding : "20px",
  },
  deleteBtn : {
    color : theme.palette.danger.main
  }
}))
