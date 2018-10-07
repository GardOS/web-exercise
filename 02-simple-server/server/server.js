const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use('/', cors('localhost:3000'));
app.use(bodyParser.json());

const fruits = [
	{
		index: 1,
		fruit: 'Banana',
		color: 'Yellow',
	},
	{
		index: 2,
		fruit: 'Orange',
		color: 'Orange',
	},
	{
		index: 3,
		fruit: 'Apple',
		color: 'Apple-colored',
	}
];

app.get('/', (req, res) => {
    res.send(fruits);
});

app.listen(8080, () => console.log("listening on 8080!"));
