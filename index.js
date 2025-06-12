const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
env.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});