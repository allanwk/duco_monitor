const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api')

require('dotenv').config()

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@allan-cluster.gao3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&authSource=admin`;

mongoose.connect(uri);

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: '*'}));
apiRoutes(app)

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});