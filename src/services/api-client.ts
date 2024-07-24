import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '99938334b99b4195a9b396e8367284dc',
  },
});
