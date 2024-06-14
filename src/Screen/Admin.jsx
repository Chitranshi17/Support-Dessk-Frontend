import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <Box className="adminSec" sx={{display:'flex' , alignItems:"center" , justifyContent:"center",
      height:"91.2vh",
      flexDirection:"column"
    }}>
      {/* <Box sx={{width:"100%", height:"25%", display:"flex" , alignItems:"center", justifyContent:"center"  }}>
        <Typography variant='h1' align='center'>
          Welcome User
        </Typography>
      </Box> */}
      <Box sx={{width:"100%", height:"100%", 
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}>
        <Card className="adminCard" sx={{width:"60%", height:"50%", display:"flex", alignItems:"center", justifyContent:"center",
          flexDirection:"column"
        }}>
          <Box sx={{width:"100%", height:"25%", display:"flex" , alignItems:"center", justifyContent:"center"  }}>
        <Typography variant='h2' align='center'>
          Welcome User
        </Typography>
      </Box>
        <Button color='secondary' variant='contained' sx={{width:"80%", height:"10%", margin:"1rem", padding:"2rem", fontSize:"1.5rem", fontWeight:"bold", paddingBlock :"2.3rem"}}>
          View All Users
        </Button>
        <Link style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}} to="/ticket/allTicket">
        <Button color='secondary' variant='contained' sx={{width:"80%", height:"10%" , padding:"2rem", fontSize:"1.5rem", fontWeight:"bold", paddingBlock :"2.3rem"}}>
          View All Tickets
        </Button>
        </Link>
        </Card>
      </Box>
    </Box>
    </>
  )
}

export default Admin
