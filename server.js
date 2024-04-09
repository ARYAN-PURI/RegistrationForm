const express=require('express');
const mongoose=require('mongoose');
let connect=mongoose.connect("mongodb://localhost:27017/registration");
let cors=require('cors');
connect.then((pro)=>{
    console.log('Mongo DB COnnected');
});
let dataSchemma= new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    interests:{
        type:Array,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
},
{ timestamps: true }
);
let dataModel=new mongoose.model('datas',dataSchemma);
let app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.get('/getdata',async(req,res)=>{
    let data=await dataModel.find({});
    res.send(JSON.stringify(data));
});
app.post('/storedata',async(req,res)=>{
    let data=new dataModel({
        fname:req.body.fname,
        lname:req.body.lname,
        dob:req.body.dob,
        gender:req.body.gender,
        mobile:req.body.mobile,
        profession:req.body.profession,
        interests:req.body.interests,
        email:req.body.email,
        pass:req.body.pass
    });
    let result=await data.save();
    res.redirect('http://localhost:5500/submit.html');
});
app.listen(5000,()=>{
    console.log('App Listening at Port ',5000);
})