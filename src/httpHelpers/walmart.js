const axios = require('axios');

const callWalmart = () => {
  return axios.get('/walmart')
    .then(data => console.log(data));
}

export { callWalmart };