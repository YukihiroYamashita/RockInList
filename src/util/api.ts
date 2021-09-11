import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api/bands'
});
