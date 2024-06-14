import { Card, Typography } from '@mui/material'
import React from 'react'

const NoteCard = ({notes}) => {
  console.log(notes)
  const {text , createdAt , user} = notes
  return (
    <Card
          className="noteCard"
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "2rem",
          }}
        >
          <Typography variant="h4">
           {text}
          </Typography>
          <Typography variant="h5">
            {new Date(createdAt).toLocaleDateString()}
          </Typography>
          <Typography variant="h6">From : 
          {user}
          </Typography>
        </Card>
  )
}

export default NoteCard
