const mongoose = require('mongoose');

var connectWithRetry = function () {
	return mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err) {
		if (err) {
			console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
			setTimeout(connectWithRetry, 5000);
		} else {
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
new Fruit({ name: 'Banana', taste: 'Good' }).save();
new Fruit({ name: 'Apple', taste: 'OK' }).save();
new Fruit({ name: 'Pear', taste: 'Bad' }).save();

module.exports = Fruit;