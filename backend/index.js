require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { asyncHandler } = require('./src/utils');

const app = express();
const port = process.env.PORT || 3000;

app.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const response = await axios.get(
      `${process.env.TMDB_API_URL}/discover/movie?api_key${
        process.env.TMDB_API_KEY
      }`
    );

    return res.send(response.data);
  })
);

app.listen(port, () => console.log(`App listening on port ${port}!`));
