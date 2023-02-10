const express = require('express');

const { signin } = require('../controller/authContoller');
const AuthRouter  = express.Router();


AuthRouter.post('/signin', signin);


module.exports = AuthRouter