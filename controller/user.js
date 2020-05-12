const Joi = require('@hapi/joi');
const {get_user, create_user} = require('../database/users');


function signup(req, res) {
    try {
        Joi.attempt(req.body,
            Joi.object({
                username: Joi.string().email(),
                password: Joi.string().min(8)
            })
        );

        create_user({user: req.body});

        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
}

function signin(req, res) {
    try {
        const user = get_user({username: req.body.username});
        if (user === undefined || user.password !== req.body.password) {
            res.status(400).send();
        }
        req.session.active = true;
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(400).send();
    }
}

function dashboard(req, res) {
    try {
        if (req.session.active) {
            return res.status(200).send();
        }
        res.status(401).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }

}

module.exports = {signup, signin, dashboard};
