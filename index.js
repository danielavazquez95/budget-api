const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});