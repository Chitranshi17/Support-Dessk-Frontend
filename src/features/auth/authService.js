import axios from "axios"

const login = async(formData) => {
  console.log(formData);
  const response = await axios.post('https://backend-eu5l.onrender.com/api/user/login',  formData);
  localStorage.setItem("user" , JSON.stringify(response.data));
  return response.data;
  // console.log(response);
}


const register = async(formData) => {
  console.log(formData);
  const response = await axios.post('https://backend-eu5l.onrender.com/api/user/',  formData);
  localStorage.setItem("user" , JSON.stringify(response.data));
  return response.data;
  // console.log(response);
}

const authServices = {
  login,
  register
}

export default authServices;