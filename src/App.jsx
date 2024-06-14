import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Screen/Home";
import Register from "./Screen/Register";
import Login from "./Screen/Login";
import CreateTicket from "./Screen/CreateTicket";
// import AllTicket from "./Screen/AllTicket";
import SingleTicket from "./Screen/SingleTicket";
import PrivateRoutes from "./Components/PrivateRoutes";
import PageNotFound from "./Screen/PageNotFound";
import AllTicketData from "./Screen/AllTicketData";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Admin from "./Screen/Admin";

const App = () => {

  const [colors , setColors] = useState(false);

  // '#0d47a1'
  const theme = createTheme( {
    palette : {
      primary : {
        main : colors ? '#1F2544' :'#64b5f6',
        contrastText : '#fff',
      },
      secondary : {
        main : colors ? '#263238' : '#37474f',
        contrastText : colors ? '#fff' : '#fff',
      },
      success : {
        main : colors ? '#1b5e20' : '#66bb6a',
        contrastText : colors ? '#fff' : '#000',
      },
      error : {
        main : colors ? '#b71c1c' : '#ef5350',
        contrastText : '#fff',
      },
      info : {
        main : colors ? '#006064' : '#26c6da',
        contrastText : '#fff',
      },
      warning : {
        main : colors ? '#827717' : '#d4e157',
        contrastText : '#fff',
      }
    }
  });

const changeTheme = () => {
  console.log("THeme Change")
  setColors((prev)=>{
    return prev ? false : true;
  })

}


  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Navbar changeTheme ={changeTheme }/>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path='/createTicket' element={<CreateTicket/>}/> */}

        <Route path="/ticket" element={<PrivateRoutes />}>
          <Route path="createTicket" element={<CreateTicket />} />
          {/* <Route path="allTicket" element={<AllTicket />} /> */}
          <Route path="allTicket" element={<AllTicketData/>}/>
          <Route path=":id" element={<SingleTicket />} />
        </Route>


        
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <ToastContainer />
    </Router>
    </ThemeProvider>
  );
};

export default App;
