const express = require('express');
const app = express();

const greeting = {
	message: "Hello!"
}

app.get('/', (req, res) => {
    res.send(greeting);
});

app.listen(3000, () => console.log("listening on 3000!"));
