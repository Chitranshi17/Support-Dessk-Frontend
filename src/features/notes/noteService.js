// import axios from "axios";

import axios from "axios"

// const API_URL = '/api/ticket'

// const getNotes = async(id , token) => {
//   const option = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };


//   const response = await axios.get(`${API_URL}/${id}/note`, option);
//   console.log(response);
//   return response.data;

// };

// const noteService = {
//   getNotes,
// }

// export default noteService;

const API_URL = 'https://backend-eu5l.onrender.com/api/ticket'

const getNotes = async(id, token) => {

  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${id}/note`, option)
  // console.log(response.data);
  return response.data;
}

const noteService = {
  getNotes,
}

export default noteService;

