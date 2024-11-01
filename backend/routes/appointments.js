const {Router} = require("express");
const router = Router();
const z = require('zod');
const JWT_SECRET = require('../config')
const {User} = require('../db/db');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");

const appointBody=z.object({
    patientId:z.number(),
    doctorId:z.number(),
    appStatus:z.string(),
    apDate:z.date(),
    createdAt:z.date(),
    payStatus:z.string()
})

router.post('/makeapp',async (req,res)=>{
    const body=req.body;
    const {success}=appointBody.safeParse(body);
    console.log(success);
    res.send("Done")
})


module.exports=router;