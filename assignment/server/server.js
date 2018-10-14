const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use('/', cors('localhost:3000'));
app.use(bodyParser.json());

const mongoose = require('mongoose');

var connectWithRetry = function() {
  return mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    } else{
      console.clear();
      console.log('Connected to MongoDB container');
    }
  });
};
connectWithRetry();

const Fruit = mongoose.model('Fruit', {
  name: { type: String, required: true },
  taste: { type: String, required: true, enum: ['Good', 'OK', 'Bad'] }
});

//Init data
new Fruit({name: 'Banana', taste: 'Good'}).save();
new Fruit({name: 'Apple', taste: 'OK'}).save();
new Fruit({name: 'Pear', taste: 'Bad'}).save();

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

app.listen(8080, () => console.log("listening on 8080!"));
