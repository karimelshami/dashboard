import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from './CustomAlert.style'

const CustomAlert = props => {
  const { message, open, handleClose } = props
  const classes = useStyles()
  return (
    <>
      <Snackbar
        className={classes.showAlert}
        message={message}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              Close
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="secondary"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  )
}
export default CustomAlert
