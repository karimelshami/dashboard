import { makeStyles } from '@material-ui/core/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  selectedTab: {
    color: theme.palette.primary.main,
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    opacity: 1
  },
  tabContent: {
    backgroundColor: theme.palette.gery.main,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  tabFormContent: {
    backgroundColor: theme.palette.gery.main,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
}));


export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}