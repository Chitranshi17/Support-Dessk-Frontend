import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import BackBtn from "../Components/BackBtn";
import TableRowData from "../Components/TableRowData";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../features/tickets/ticketSlice";
import LoadingPage from "../Components/LoadingPage";
import { toast } from "react-toastify";

const AllTicketData = () => {
  const { tickets, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  // console.log("Ticket Row Data" , tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets());

    if (isError || message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Box sx={{ width: "100%", flexDirection: "column" }} className="display">
      <BackBtn Location={"/"} />
      <Typography variant="h2" align="center" sx={{ paddingBlock: "3rem" }}>
        All Tickets
      </Typography>
      <Paper
        sx={{ width: "100%", overflow: "hidden", height: "100vh" }}
        align="end"
      >
        <TableContainer
          sx={{
            // maxHeight: 440,
            width: "100%",
            margin: "3rem",
            // padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0rem",
          }}
        >
          <Table
            sx={{ width: "90%", height: "100%" }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead sx={{ height: "4rem", marginTop: "0rem" }}>
              <TableRow sx={{ marginTop: "2rem" }}>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Sr
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "medium",
                    fontWeight: "bold",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  View Ticket
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <thead>
            <tr>
              <th>Sr</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>View Ticket</th>
            </tr>
          </thead> */}
            {/* <tbody>
            <tr>
              <td>1</td>
              <td>iPhpne</td>
              <td>20/Feb/2024</td>
              <td><Button variant='contained'>open</Button> </td>
              <td>
              <Link to="/ticket/1">
   <Button variant='contained' sx={{backgroundColor:"black"}}>View</Button> 
  </Link>
              </td>
            </tr>
          </tbody> */}

            <TableBody sx={{ marginTop: "5rem", paddingTop: "8rem" }}>
              {tickets.map((ticket, index) => (
                <TableRowData key={ticket._id} index={index} ticket={ticket} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AllTicketData;
