import axios from "axios";

const API_URL = "https://backend-eu5l.onrender.com/api/ticket";

// Get All Tickets
const getTickets = async (token) => {
  // console.log(token)

  // to send token --> create a varible name is option
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, option);
  console.log(response.data);
  return response.data;
};

// Get Single Ticket
const getTicket = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "/" + id, option);
  // console.log(response.data);
  return response.data;
};

// Close Ticket
const closeTicket = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + "/" + id,
    {
      status: "closed",
    },
    option
  );
  return response.data;
};

// Create Ticket
const createTicket = async (formData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // console.log(formData);

  const response = await axios.post(API_URL, formData, option);
  // console.log(response.data);
  return response.data;
};

const ticketService = {
  getTickets,
  getTicket,
  closeTicket,
  createTicket,
};

export default ticketService;
