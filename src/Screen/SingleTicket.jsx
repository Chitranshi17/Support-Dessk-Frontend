import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeSingleTicket, getSingleTicket } from "../features/tickets/ticketSlice";
import LoadingPage from "../Components/LoadingPage";
import { toast } from "react-toastify";
import NoteCard from "../Components/NoteCard";
import { getAllNotes } from "../features/notes/noteSlice";


const SingleTicket = () => {

  const {ticket , isLoading , isSuccess , isError , message} = useSelector(state => state.ticket);

  const {notes} = useSelector(state=>state.note);

  const params = useParams();
  const dispatch= useDispatch();


  // For Single Tikcet
  useEffect(()=>{
    dispatch(getSingleTicket(params.id))

    if(isError || message){
      toast.error(message);
    }
  },[isError, message])


  useEffect(()=>{
    dispatch(getAllNotes(params.id));
  },[])


  if (isLoading) {
    return (
     <LoadingPage/>
    );
  }
  if (!ticket) {
    return (
      <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color='error' variant="h3">
        Data Not Found!!
      </Typography>
    </Box>
    );
  }

  const handleCloseTicket = (id) => {
    dispatch(closeSingleTicket(id));
  };



  return (
    <Box
      className="singleTicketSec display-f"
      color="primary"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >

    <BackBtn Location={"/ticket/allTicket"}/>
      <Box className="singleTicket">
        <Typography variant="h2" align="center" className="heading">
          Your Ticket
        </Typography>
        <Card className="SingleTicketCard">
          <CardHeader
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center"
            }}
            title={`Product Name: ${ticket.product}`}
          >
           <Typography>
           Product Name : iPhone
           </Typography>
          </CardHeader>
          <CardContent
            className=""
            sx={{
              height: "90%",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="h5">
              Product Description : {ticket.description}
            </Typography>
            <Divider />
            <Typography variant="h5">Ticket ID : {ticket._id}</Typography>
            <Typography variant="h5">Date : {new Date(ticket.createdAt).toLocaleDateString('en-In')}</Typography>
            <Typography variant="h5">Time : {new Date(ticket.createdAt).toLocaleTimeString('en-In')}</Typography>
            <Typography variant="h5">
              Status : {
                ticket.status === 'open' ? <Button variant="contained" color="primary" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : ticket.status === 'new'? <Button variant="contained" color="success" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : <Button variant="contained" color="error" sx={{marginLeft:"1rem"}}>{ticket.status}</Button>
              }
            </Typography>
          </CardContent>
        </Card>
        <Box className="btnBox">
          <Button
            align="start"
            variant="contained"
            sx={{
              paddingBlock: "1rem",
              fontSize: "1.4rem",
              backgroundColor: "black",
            }}
          >
            Add Note +
          </Button>
        </Box>
      </Box>
      <Box className="singleTicketNote display">
        <Box className="noteHeading">
          <Typography variant="h2" align="center" className="">
            Note
          </Typography>
        </Box>
       
       {
        notes.length === 0 ? (
          <>
          <Card variant="h2" backgroundColor="white" sx={{height:"30%" , width:"85%", display:"grid" , placeItems:"center"}}>
           <Typography variant="h2">
           No Notes Yet !!
           </Typography>
          </Card>
          </>
        ) : (
          
          <>
          {
            notes.map(notes => <NoteCard key={notes._id} notes={notes}/>)
           }
      
          </>

        )
       }


        {/* <Card
          className="noteCard"
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "2rem",
            backgroundColor:"gray"
          }}
        >
          <Typography variant="h4">
            Meri Mobile Battery Kab Replace Hongi?
          </Typography>
          <Typography variant="h5">18/Feb/2024 : 00:23 AM</Typography>
          <Typography variant="h6">From : Staff (abc321)</Typography>
        </Card> */}
       {
        ticket.status === 'closed' ? (
          <Button
          color="error"
          variant="contained"
          sx={{
            width: "85%",
            height: "6.5rem",
            marginTop: "3rem",
            fontSize: "1.6rem",
            marginBottom: "2rem",
          }}
          disabled
        >
         Already Closed
        </Button>
        ) : (
          <Button
          color="error"
          variant="contained"
          sx={{
            width: "85%",
            height: "6.5rem",
            marginTop: "3rem",
            fontSize: "1.6rem",
            marginBottom: "2rem",
          }}
          onClick={()=>handleCloseTicket(ticket._id)}
        >
          Close Ticket
        </Button>
        )
       }
      </Box>
    </Box>
  );
};

export default SingleTicket;
