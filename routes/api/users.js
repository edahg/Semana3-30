const router = require('express').Router();
const models = require('../../models');
const userController = require('../../controllers/controller.js');
const bcrypt = require('bcryptjs');
const { restart } = require('nodemon');

router.get('/', async(req, res) => {
    const user = await models.user.findAll();
    res.status(200).json(user)
})

router.post('/signin', userController.signin);

module.exports = router;