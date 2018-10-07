const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(`mongodb://gardos:${process.argv[2]}@ds245022.mlab.com:45022/03-simple-mongodb`,
  { useNewUrlParser: true });

const Fruit = mongoose.model('Fruit', {
  name: { type: String, required: true },
  color: { type: String, required: [true, 'What is a fruit without its color? - Einstein'] },
  taste: { type: String, enum: ['Good', 'OK', 'Bad'] }
});

app.get('/', (req, res) => {
  res.send('hello!');
});

app.listen(8080, () => console.log("listening on 8080!"));
