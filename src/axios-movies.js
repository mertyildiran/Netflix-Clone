import axios from 'axios';

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: `${process.env.API_HOST}/3`,
});

export default instance;
