const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello!");
});

app.listen(8080, () => console.log("listening on 8080!"));
