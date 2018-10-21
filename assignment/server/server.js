const Fruit = require("./FruitModel");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const ws = require('ws');

app.use('/', cors('localhost:3000'));
app.use(bodyParser.json());

app.get('/fruits', (req, res) => {
  Fruit.find((err, fruits) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(fruits);
  })
});

app.post('/fruits', (req, res) => {
  const body = req.body;
  const fruit = new Fruit(body);

  fruit.save((err, savedFruit) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(savedFruit);
  });
});

app.delete('/fruits/:id', (req, res) => {
  const id = req.params.id;
  Fruit.findByIdAndDelete(id, (err, fruit) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    if (!fruit) {
      res.sendStatus(404)
      return;
    }

    res.sendStatus(204);
  });
});

const httpServer = app.listen(8080, () => console.log("listening on 8080!"));

const wsServer = new ws.Server({
  server: httpServer,
});

let sockets = [];

wsServer.on('connection', (socket) => {
  console.log('Connected to chat');
  sockets.push(socket)

  socket.on('close', () => {
    console.log('Disconnected from chat');
    sockets = sockets.filter(savedSocket => savedSocket !== socket);
  });

  socket.on('message', text => {
    sockets.forEach(socket => socket.send(text));
  });
});
