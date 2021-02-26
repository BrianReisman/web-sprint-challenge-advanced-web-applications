import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'));

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: token,
    },
    // baseURL: 'http://localhost:5000/api'
  })
}

//Task List:
//Build and export a function used to send in our authorization token