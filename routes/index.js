const router = require('express').Router();
const apiRouterUser = require('./api/users.js')
const bcrypt = require('bcryptjs');
const models = require('../models');


router.use('/auth', apiRouterUser);

router.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password)
    const user = await models.user.create(req.body);
    res.status(200).json(user);
})

module.exports = router;