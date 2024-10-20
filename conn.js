const mongoose=require('mongoose')

mongoose.connect("mongodb:/0.0.0.0.27017/tutorial")
.then(()=>{
    console.log('mongodb connect');
})
.catch(()=>{
    console.log('error');
})
const tutSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
const collection=new mongoose.model('tut',tutSchema)