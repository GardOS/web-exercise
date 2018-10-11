const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use('/', cors('localhost:3000'));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(`mongodb://gardos:${process.argv[2]}@ds125263.mlab.com:25263/assignment`,
  { useNewUrlParser: true });

const Fruit = mongoose.model('Fruit', {
  name: { type: String, required: true },
  taste: { type: String, required: true, enum: ['Good', 'OK', 'Bad'] }
});

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
