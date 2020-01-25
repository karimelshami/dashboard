import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useStyles } from './State.style'

const State = props => {
  const { buttonAction, buttonText, msg, img } = props
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" m={5}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <div >
          <img src={img} alt="img" />
        </div>
        <Box m={2} display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="h5" align="center" color="primary">
            {msg}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default State
