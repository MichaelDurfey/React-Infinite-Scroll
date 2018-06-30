const axios = require('axios');

const callWalmart = (query) => {
  // return axios.get('/walmart', {params: { query }})
  return axios.get('/walmart', {params: { query }})
}

export { callWalmart };