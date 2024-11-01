const mongoose = require("mongoose");
const z=require("zod")

mongoose.connect('mongodb+srv://manavshankar20:manunikat@cluster0.n3kzzoq.mongodb.net/appoint');

const availabilitySchema = z.object({
    day: z.string(),
    slots:z.array(z.string())
});

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required :true,
        unique:true,
        minLength:3,
        maxLength:30
    },
    firstname:{
        type : String,
        required :true,
        maxLength : 50,
        trim:true
    },
    lastname:{
        type : String,
        required : true,
        maxLength : 50,
        trim : true
    },
    password:{
        type : String,
        required : true,
        minLength : 6
    },
    phone:{
        minLength:10,
        type:Number,
        required :true
    },
    isDoctor:{
        required:true,
        type:Boolean
    }
})

const doctorSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    specialization:{
        type:String,
        minLength:2,
        required:true
    },
    isDoctor:{
        required:true,
        type:Boolean
    },
    address:{
        required:true,
        type:String,
        minLength:10
    },
    experience:{
        type:Number,
        required:true
    },
    availability:[{
        day:String,
        slots:[String]
    }]
})

const appointmentSchema= new mongoose.Schema({
    patientId : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true
    },
    doctorId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor",
        required :true
    },
    apStatus:{
        type:String,
        enum:["pending", "confirmed","completed"],
    },
    apDate:{
        type:Date,
        required :true
    },
    apTime:{
        type:String,
        requirde:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    payStatus:{
        type:String,
        enum:["Paid","Pending","Failed"],
        required:true,
    }
})

const User = mongoose.model("User", userSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);
const Appoint = mongoose.model("Appoint",appointmentSchema);

module.exports={
    User,
    Doctor,
    Appoint
}