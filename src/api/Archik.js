// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
export default axios.create({
  baseURL: "https://newsapi.org",
  headers: {
    Accept: "*/*",
  },
});