import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './ConfirmationForm.style'

const ConfirmationForm = props => {
  const { onConfirm, onCancel } = props
    const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <Grid container>
        <Grid xs={1} />
        <Grid xs={5}>
          <Button
            onClick={() => onConfirm()}
            fullWidth
            variant="contained"
            color="primary"
          >
            Confirm
          </Button>
        </Grid>
        <Grid xs={1} />
        <Grid xs={5}>
          <Button
            onClick={() => onCancel()}
            fullWidth
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </Grid>
        <Grid xs={1} />
      </Grid>
    </div>
  )
}
export default ConfirmationForm
