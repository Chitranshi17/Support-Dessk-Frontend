import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import { FaArrowLeft } from "react-icons/fa";
import BackBtn from '../Components/BackBtn';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTickets } from '../features/tickets/ticketSlice';
import { useState } from 'react';

const columns = [
  { id: 'Sr', label: 'Sr', minWidth: 170 },
  { id: 'Product', label: 'Product', minWidth: 150 },
  {
    id: 'Email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'View_Ticket',
    label: 'View_Ticket',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(Sr, Product, Email, Date, Status, View_Ticket) {
  
  return { Sr, Product, Email, Date, Status, View_Ticket };
}




const rows = [
  createData(1, 'iPhone', "chitranshigorana@gmail.com", "1/Feb/2024",
  <Button variant='contained'>open</Button> 
   ,
  <Link to="/ticket/1">
   <Button variant='contained' sx={{backgroundColor:"black"}}>View</Button> 
  </Link>),
  
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
];



const allTicket = () => {


  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };


  const dispatch = useDispatch();

useEffect(()=> {
    dispatch(getAllTickets())
}, [])


  return (


    

    <Box sx={{width:"100%", flexDirection:"column"}} className="display">

          {/* <Box
            sx={{
              width: "80%",
              height: "5rem",
              display: "flex",
              alignItems: "start",
              marginTop :"5rem"
            }}
          >
            <Button
              variant="contained"
              className="btnSet"
              sx={{ fontSize: "2rem" }}
            >
              <FaArrowLeft />
            </Button>
          </Box>
          <Box /> */}
      
      <BackBtn Location={"/"}/>
      <Typography variant='h2'align='center' sx={{paddingBlock:"3rem"}}>
        All Tickets
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }} align="end">
      <TableContainer sx={{ maxHeight: 440 , width:"100%", margin:"3rem" , padding:"2rem", lineHeight:"4rem"}} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{paddingBlock:"3rem", fontSize:"1.8rem", textAlign:"center"}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}  sx={{paddingBlock:"2rem", fontSize:"1.4rem", textAlign:"center"}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}
              
          </TableBody>
        </Table>
        
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    </Box>
  );
}

export default allTicket;