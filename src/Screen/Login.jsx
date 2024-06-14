import {
  Box,
  Card,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginUserLogo from "../assets/Img/LoginUserLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import LoadingPage from "../Components/LoadingPage";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Login user

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispath = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login User Here");
    dispath(loginUser(formData));
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
    return (
     <LoadingPage/>
    );
  }

  return (
    <>
      <Box className="loginSec display">
        <Card
          className="loginCard display-c"
          sx={{ justifyContent: "space-around", boxShadow: "none" }}
        >
          <Box className="loginForm display-c" type="form">
            <Box className="display loginLogo">
              <img src={LoginUserLogo} alt="" />
            </Box>
            <Typography variant="h4" color={"primary"}>Sign-in</Typography>
            <TextField
              id="standard-required"
              label="Email"
              defaultValue=""
              variant="standard"
              placeholder="Enter Email Here"
              fullWidth
              inputProps={{ style: { fontSize: 15 } }} // font size of input text
              InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
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

            <Button
              variant="outlined"
              type="submit"
              sx={{
                width: "100%",
                padding: "1rem",
                fontSize: "small",
                marginTop: "2rem",
              }}
              onClick={handleSubmit}
            >
              Login
            </Button>
            <span
              className="display-c"
              style={{
                justifyContent: "space-between",
                width: "100%",
                height: "5rem",
                marginTop: "2rem",
              }}
            >
              <a href="">Forget Password</a>
              <p>
                No Account,
                <Link to={"/register"} style={{ marginLeft: "1rem" }}>
                  Sign Up
                </Link>
              </p>
            </span>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Login;
