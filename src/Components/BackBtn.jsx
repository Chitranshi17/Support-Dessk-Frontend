import { Box, Button } from '@mui/material'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackBtn = ({Location}) => {
  return (
    <Box
          sx={{
            width: "80%",
            height: "5rem",
            display: "flex",
            alignItems: "start",
            marginTop: "5rem",
            marginBottom: "2rem",
          }}
        >
         <Link to={Location}>
         <Button
            variant="contained"
            className="btnSet"
            
            sx={{ fontSize: "2rem" , backgroundColor:"black"}}
          >
            <FaArrowLeft/>
          </Button>
         </Link>
        </Box>
  )
}

export default BackBtn
