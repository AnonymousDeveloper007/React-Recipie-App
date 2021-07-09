import axios from 'axios';

const instance = axios.create({
  baseURL:'https://react-my-burger-92670.firebaseio.com/'
});

export default instance;