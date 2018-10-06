const express = require('express');
const app = express();

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

app.listen(3000, () => console.log("listening on 3000!"));
