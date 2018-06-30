const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static('./dist'))

app.get('/walmart', (req, res) => {
  const { query } = req.query;
  if (query && query.length > 1) {
    return axios.get(`https://grocery.walmart.com/v3/api/products?strategy=search&storeId=5884&query=${query}`)
      .then(data => res.send(data.data))
      .catch(err => res.status(404).send(err))
  }
    return axios.get('https://grocery.walmart.com/v3/api/products?strategy=search&storeId=5884&query=hotdog')
      .then(data => res.send(data.data))
      .catch(err => res.status(404).send(err))
})

app.listen(3000, () => console.log('app listening on port 3000'))
