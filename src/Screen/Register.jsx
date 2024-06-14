import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import LoadingPage from "../Components/LoadingPage";
const Register = () => {
  // For Password

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispath = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register User Here");
    dispath(registerUser(formData));
  };

  useEffect(() => {
    if (isError || message) {
      toast.error(message);
    }
    if (user) {
      navigate("/");
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Box className="regSec display">
        <Card
          className="regCard display-c"
          sx={{ justifyContent: "space-around", boxShadow: "none" }}
        >
          <Box
            className="regForm display-c"
            type="form"
            sx={{ backgroundColor: "white" }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "3rem", fontWeight: "700" }}
            >
              Sign Up
            </Typography>
            <TextField
              id="standard-required"
              label="Name"
              defaultValue=""
              placeholder="Enter Name Here"
              variant="standard"
              fullWidth
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
              value={name}
              onChange={handleChange}
              name="name"
            />
            <TextField
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              placeholder="Enter Email Here"
              fullWidth
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
              value={email}
              onChange={handleChange}
              name="email"
            />
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                style={{ fontSize: "1.7rem" }}
              >
                Password
              </InputLabel>
              <Input
                inputProps={{ style: { fontSize: 15 } }} // font size of input text
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                style={{ fontSize: "1.7rem" }}
              >
                Confirm Password
              </InputLabel>
              <Input
                inputProps={{ style: { fontSize: 15 } }} // font size of input text
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                padding: "1rem",
                fontSize: "small",
                marginTop: "2rem",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Button>
            <p>I have already Signup here,</p>
            <Link to={"/login"}>Please Login</Link>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Register;
