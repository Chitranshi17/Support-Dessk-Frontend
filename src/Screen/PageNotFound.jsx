import { Box, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <Box className="pageSec display" sx={{height:"80vh"}}>
      <Box className="pageNotFoundSec">
        <Typography variant='h2' color="error">
         404 Page Not Found!!
        </Typography>
      </Box>
    </Box>
  )
}

export default PageNotFound
