const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    cookie: {expires: 60 * 1000}
}));

const home_router = require('./routes/home');
const user_router = require('./routes/user');

app.use('/', home_router);
app.use('/user', user_router);

app.listen(3000, function () {
    console.log(`Server listening..`)
});
