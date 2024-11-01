const {Router} = require("express");
const router = Router();
const z = require('zod');
const JWT_SECRET = require('../config')
const {User} = require('../db/db');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require("../middleware");



module.exports=router;