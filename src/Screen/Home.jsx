import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box>
      <Box className="homeBg">
        <Box className="homeHeading" sx={{flexDirection : "column"}}>
          <Typography variant='h2' align='center' sx={{color:"White", fontWeight:"900"}}>
            Welcome To The Support-Desk
          </Typography>
          <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}} className="homeBtn">
            <Link to="/ticket/createTicket">
            <Button variant='contained' color='warning' sx={{paddingInline : "2rem", paddingBlock :"1rem", fontSize:"1.3rem"}}>Create New Ticket</Button>
            </Link>
            <Link to="/ticket/allTicket">
            <Button variant='contained' color='secondary' sx={{paddingInline : "2rem", paddingBlock :"1rem", fontSize:"1.3rem"}}>All Ticket</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
