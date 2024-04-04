// const express = require('express');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');

// const App = express();

// mongoose.Promise = global.Promise

// mongoose.connect('mongodb://127.0.0.1:27017/nodejs', {
//     useNewUrlparser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("server is running on the databse");
// }).catch((err) => {
//     console.log("server is not running on database", err);
// })

// App.use(bodyparser.urlencoded({ extended: true }));

// App.use(bodyparser.json());

// App.get('/', (req, res) => {
//     res.json({ "user": "server is running on database" })
// })

// let PORT = 8907
// require('./route/app.route')(App)

// App.listen(PORT, () => {
//     console.log(`server is running ${PORT}`);
// })
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const App = express();

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/nodejs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("server is running on the database");
}).catch((err) => {
    console.log("server is not cponnect database.errr", err);
})
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.get('/', (req, res) => {
    res.json({ "user": "Server is running :D" });
});
let PORT = 8907;
require('./route/app.route')(App);
App.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
