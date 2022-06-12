const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const { postUsers, getUsersByUsername, getUsersById } = require('./controllers/users.c');
const { postUsercards, getUsercardsById } = require('./controllers/usercards.c');
const { getFiveCards, patchCardsById } = require('./controllers/cards.c');

app.use(express.json());
app.use(cors());

app.get('/users/username/:username', getUsersByUsername);
app.get('/users/id/:userid', getUsersById);
app.post('/users', postUsers);

app.get('/cards/pack', getFiveCards);
app.patch('/cards/issue/:cardid', patchCardsById);

app.get('/usercards/:userid', getUsercardsById);
app.post('/usercards', postUsercards);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
