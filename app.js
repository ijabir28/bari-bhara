const express = require('express');
const Joi = require('@hapi/joi');


const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.status(200).send();
});

app.post('/user/sign_up', function (req, res) {
    try {
        const {username} = req.body;
        Joi.attempt(username, Joi.string().email());
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }

});


app.post('/user/sign_in', function (req, res) {
    try {
        const {password} = req.body;
        Joi.attempt(password, Joi.string().min(8));
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
});


app.listen(3000, function () {
    console.log(`Server listening..`)
});

