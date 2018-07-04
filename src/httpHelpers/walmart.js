const axios = require('axios');

const callWalmart = (query, page) => {
  // return axios.get('/walmart', {params: { query }})
  if (page) {
    return axios.get('/walmart', {params: { query, page }})
  }
    return axios.get('/walmart', {params: { query }})
}

export { callWalmart };