import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-foodexplorer-cr0g.onrender.com'
  // baseURL: 'http://localhost:3333'
});