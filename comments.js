// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET method route
app.get('/comments', (req, res) => {
  res.send(comments);
});

// POST method route
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    text: req.body.text
  };
  comments.push(comment);
  res.send(comment);
});

// DELETE method route
app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
    return;
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

// PUT method route
app.put('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
    return;
  }
  comment.text = req.body.text;
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});