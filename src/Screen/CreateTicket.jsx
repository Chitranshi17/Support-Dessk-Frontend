import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import { FaArrowLeft } from "react-icons/fa";
import BackBtn from "../Components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { getCreateTicket } from "../features/tickets/ticketSlice";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {

  const {user} = useSelector(state => state.auth);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product :"" ,
    description :"",
  })

  const {product, description} = formData

  const handleChange = (e) => {
    setFormData(
      {...formData,
      [e.target.name] : e.target.value}
    )
  }

  console.log(formData)
  useEffect(()=>{
    dispatch(getCreateTicket());
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Ticket");
    dispatch(getCreateTicket(formData));
    navigate('/ticket/allTicket')
  }


  return (
    <>
      <Box
        className="createTicketSec "
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        {/* <Box
          sx={{
            width: "80%",
            height: "5rem",
            display: "flex",
            alignItems: "start",
            marginTop: "5rem",
          }}
        >
          <Button
            variant="contained"
            className="btnSet"
            sx={{ fontSize: "2rem" }}
          >
            <FaArrowLeft />
          </Button>
        </Box> */}
        <BackBtn Location={"/"}/>
        <Card className="createTicketCard display-c">
          <Box className="createTicketForm display-c">
            <TextField
              id="standard-required"
              label="Name"
              defaultValue=""
              placeholder="Enter Name Here"
              variant="standard"
              fullWidth
              value={user.name}
              disabled
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
            />
            <TextField
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              placeholder="Enter Email Here"
              fullWidth
              value={user.email}
              disabled
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
              <InputLabel
                style={{ fontSize: 15 }}
                id="demo-simple-select-standard-label"
              >
                Product
              </InputLabel>
              <Select
                inputProps={{ style: { fontSize: 17 } }}
                sx={{ paddingBottom: ".4rem", fontSize: "small" }}
                className="fsForm"
                labelId="demo-simple-select-standard-label"
                id=""
                // value={age}
                onChange={handleChange}
                value={product}
                name="product"
                label="Age"
              >
                <MenuItem value="" sx={{ fontSize: "small" }}>
                  <em>Select Product</em>
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"iPhone"}>
                  iPhone
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"iMac"}>
                  iMac
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"iPod"}>
                  iPod
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"iPad"}>
                  iPad
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"Macbook"}>
                  Macbook
                </MenuItem>
                <MenuItem sx={{ fontSize: "small" }} value={"Apple Watch"}>
                  Apple Watch
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="fontSet selectTextField"
              id="standard-textarea"
              label="Product Description"
              placeholder="Product Description"
              multiline
              variant="standard"
              fullWidth
              inputProps={{ style: { fontSize: 13 } }} // font size of input text
              sx={{ fontSize: "large", justifyContent: "space-around" }}
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
              onChange={handleChange}
              value={description}
              name="description"
            />
            <Button
              variant="contained"
              className="btnSet"
              sx={{ width: "100%", fontSize: "1.3rem", height: "4rem" }}

              type="submit"

              onClick={handleSubmit}
            >
              Raise Ticket
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default CreateTicket;
