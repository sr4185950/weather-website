const express = require('express');
const cors = require('cors');
const weatherRouter = require('./weatherRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/weather', weatherRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
