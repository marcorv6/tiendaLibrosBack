const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const apiRouter = require('./routes/api');

const app = express();
app.use(cors());

require('./bd');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3000, ()=> {
    console.log('Server on port 3000');
});