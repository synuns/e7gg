import { Alert, Snackbar, Slide } from '@mui/material'
import React, { useState, useEffect } from 'react'

const ErrorAlert = (prop) => {
  const [open, setOpen] = useState(prop.open);

  const refresh = () => {
    setOpen(false);
    window.location.reload();
  }

  useEffect(() => {
    setOpen(prop.open);
  }, [prop]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Alert 
          variant="filled" 
          severity="error"
          width="100%"
          onClose={refresh}
        >
          Failed! Please try again.
        </Alert>
      </Slide>
    </Snackbar>
  )
}

export default ErrorAlert