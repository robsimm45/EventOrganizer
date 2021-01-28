import axios from "axios";

export const userClient = axios.create({
  baseURL: 'http://localhost:1234/user',
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
})