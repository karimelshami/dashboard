import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import MuiDialogContent from '@material-ui/core/DialogContent'
import CountriesIllustration from 'assets/countries.png'
import AreYouSureIllustration from 'assets/areYouSure.png'

import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { useStyles } from './Dialog.style'

const CustomDialog = props => {
  const classes = useStyles()
  const {
    open,
    handleClose,
    content,
    fullScreen,
    countriesModal,
    hideCloseButton,
    applyDashStyle,
    confirmationDialog
  } = props
  return (
    <Dialog fullScreen={fullScreen} onClose={handleClose} open={open}>
      <MuiDialogTitle
        disableTypography
        className={applyDashStyle ? classes.dashboard : classes.root}
      >
        {!hideCloseButton && (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        )}
      </MuiDialogTitle>
      {countriesModal && (
        <img
          className={classes.countriesIlustration}
          src={CountriesIllustration}
          alt=""
        />
      )}
        {confirmationDialog && (
        <img
          className={classes.confirmationIlustration}
          src={AreYouSureIllustration}
          alt=""
        />
      )}
      <MuiDialogContent>{content}</MuiDialogContent>
    </Dialog>
  )
}

export default CustomDialog
