const express = require('express');
const path = require('path');
const  clog  = require('./Middleware/clog.js');
const notes = require('./routes/notes.js');
const fb = express.Router();
const {readFromFile, writeToFile, readAndAppend} = require('./helpers/Utils.js')
const PORT = process.env.PORT || 3002;

const app = express();

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
const { v4: uuidv4 } = require('uuid');
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  console.log(req.body);
  if (title && text) {
    const newNote = {
      title,
      text,
      id:uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('An error has occured');
  }
})
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
