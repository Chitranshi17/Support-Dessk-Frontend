import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
// import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getAllTickets } from "../features/tickets/ticketSlice";

const TableRowData = ({ticket, index}) => {
  // const { tickets, isLoading, isSuccess , isError, message } = useSelector((state) => state.ticket);

  // console.log("Ticket Row Data" , tickets);

  return (
    <>
      <TableRow>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
         {index+1}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
         {/* iPhone */}
         {ticket.product}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
         {new Date(ticket.createdAt).toLocaleDateString("en-In")}
         {/* 7/Feb/2024 */}
         {/* {new Date(ticket.createdAt).toLocaleDateString("en-IN")} */}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
        {
                ticket.status === 'open' ? <Button variant="contained" color="primary" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : ticket.status === 'new'? <Button variant="contained" color="success" sx={{marginLeft:"1rem"}}>{ticket.status}</Button> : <Button variant="contained" color="error" sx={{marginLeft:"1rem"}}>{ticket.status}</Button>
              }
        </TableCell>
        <TableCell align="center" sx={{ fontSize: "1.6rem" }}>
          <Link to={`/ticket/${ticket._id}`}>
            <Button variant="contained" sx={{ backgroundColor: "black" }}>
              View
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRowData;
