
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const port = 8080;


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/products', async (req, res) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});