const router = require('express').Router();
const {signup, signin, dashboard} = require('../controller/user');

router.post('/sign_up', signup);

router.post('/sign_in', signin);

router.get('/dashboard', dashboard);

module.exports = router;
