const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const {
  postUserdata,
  getUserdataUsername,
  getUserdataUserid,
  getUserdataPassword,
} = require('./controllers/userdata.js');

app.use(express.json());
app.use(cors());

app.post('/userdata', postUserdata);
app.get('/userdata/username', getUserdataUsername);
app.get('/userdata/userid', getUserdataUserid);
app.get('/userdata/password', getUserdataPassword);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
