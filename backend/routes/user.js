const {Router} = require("express");
const router = Router();
const z = require('zod');
const JWT_SECRET = require('../config')
const {User} = require('../db/db');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require("../middleware");

const signupSchema = z.object({
    username : z.string().email(),
    firstname : z.string(),
    lastname : z.string(),
    password : z.string(),
    phone : z.number()
})

router.post('/signup', async (req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg : "Wrong Inputs / Email already taken"
        })
    }

    const existingUser = await User.findOne({
        username : body.username
    })

    if(existingUser){
        return res.status(411).json({
            msg : "Wrong Inputs / Email already taken"
        })
    }

    const dbUser = await User.create({
        username : body.username,
        password : body.password,
        firstname : body.firstname,
        lastname : body.lastname,
        phone : body.phone,
        isDoctor : false
    });

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)

    res.json({
        msg:"User created successfully!",
        token:token
    })
})

const signinSchema = z.object({
    username : z.string().email(),
    password : z.string()
})

router.post('/signin', async(req, res)=>{
    const {success} = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg: "Wrong Inputs / Email already taken"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
        return
    }
    res.status(411).json({
        msg : "Error while logging in!"
    })
})

const updateBody = z.object({
    password : z.string().optional(),
    lastname : z.string().optional(),
    firstname : z.string().optional()
})

router.post('/',authmiddleware,async (req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            msg:"Error while updating information!"
        })
    }
    await User.updateOne(req.body,{
        id:req.userId
    })

    res.json({
        msg : "Updated successfully!"
    })
})

router.get('/userdata',authmiddleware,async (req,res)=>{
    const authHeader= req.headers.authorization;
    const token=authHeader.split(" ")[1];
    const decoded=jwt.verify(token,JWT_SECRET);
    const profile  = await User.findOne({
        _id:decoded.userId
    })
    res.json({
        username:profile.username,
        firstname:profile.firstname,
        lastname:profile.phone,
        isDoctor:profile.isDoctor
    })
})


module.exports=router;