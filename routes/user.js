const router = require('express').Router();
const {signup, signin} = require('../controller/user');

router.post('/sign_up', signup);

router.post('/sign_in', signin);

module.exports = router;
