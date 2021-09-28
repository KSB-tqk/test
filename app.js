const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require("./model/user");

require("dotenv/config");

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });

app.post("/create_user", async (req, res) => {
    try {
        const myUser = new User(req.body);
        myUser.save();
        res.send(myUser);
    } catch (err) {
        res.send({ message: err });
    }
});

// app.post("/create_user", (req, res) => {
//     console.log(req.body.name);

//     res.send('Create user ' + req.body.name);
// });

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("Connected to Database");
    });


app.listen(3000, console.log("Listening on port 3000"));