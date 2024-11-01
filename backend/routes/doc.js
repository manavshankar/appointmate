const {Router} = require("express");
const router = Router();
const z = require('zod');
const JWT_SECRET = require('../config')
const {User, Doctor} = require('../db/db');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require("../middleware");
const mongoose = require("mongoose");

const updateSchema=z.object({
    availability:z.array(z.object({
        day:z.string(),
        slots:z.array(z.string())
    })).optional(),
    address:z.string().optional()
})

router.get('/doctors',async(req,res)=>{
    let spec=req.query.spec;
    let location=req.query.loc;

    spec=!spec ? "":spec.toString();
    location=!location ? "":location.toString();

    const filter = await Doctor.find({
        specialization:{
            "$regex":spec
        },
        address:{
            "$regex":location
        }
    })
    
    res.json({
        doc:filter,
        data:d
    })
})

router.get('/profile', async (req,res)=>{
    const sp=req.headers.authorization.split(" ");
    const token = sp[1];
    const id=jwt.verify(token,JWT_SECRET);

    const userdata = await Doctor.find({
        userId:id.userId
    })

    res.json({user:userdata});
})

router.get('/docdetails',async(req,res)=>{
    const id=req.query.id;
    const d= await Doctor.aggregate([{
        $lookup:{
            from:"users",
            localField:"userId",
            foreignField:"_id",
            as:"docDetails"
        }
    },
    { "$unwind": "$docDetails" }
    ])

    const details=await Doctor.aggregate([
        {
            "$match":{
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            "$lookup":{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:"docDetails"
            }
        },
        { "$unwind": "$docDetails" },
        { "$unwind": "$availability" }
    ])
    console.log(details);
    res.send("DOne");
})

router.put('/update', async(req,res)=>{
    console.log(req.body);
    const sp=req.headers.authorization.split(" ");
    const token = sp[1];
    const id=jwt.verify(token,JWT_SECRET);
    const {success}=updateSchema.safeParse(req.body);
    if(!success){
        res.json({"msg":"Update body has error"});
        return;
    }
    if(req.body.availability){
        const response=await Doctor.updateOne({userId:id.userId},{
            availability:req.body.availability,
            address:req.body.address
        })
    }
    res.send("Done");
    console.log(id.userId);
})

module.exports = router