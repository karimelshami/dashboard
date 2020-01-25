
import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    sidebarListItem : {
        fontWeight : '700',
        color:theme.palette.primary.main,
        textAlign:'center',
      },
      sidebarListItemText : {
        textTransform: 'capitalize'
      },
      logout : {
        fontWeight : '700',
        textAlign:'center',
  
      },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    tabs: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      height: 'calc(100vh - 60px)',
      position:'unset'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    nav : {
      width:'100%'
    },
    
      logo: {
        width:'160px'
      }
    
  }));