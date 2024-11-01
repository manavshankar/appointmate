const {Router} = require("express");
const router = Router();
const userRouter = require('./user');
const docRouter = require('./doc');
const adminRouter = require('./admin');
const appointRouter=require('./appointments');

router.use('/user', userRouter);
router.use('/doctor',docRouter);
router.use('/admin',adminRouter);
router.use('/appointment',appointRouter)

module.exports = router;