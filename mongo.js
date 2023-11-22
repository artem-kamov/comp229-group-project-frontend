const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sajoy:123454321@cluster0.crcfdto.mongodb.net/?authMechanism=SCRAM-SHA-1&authSource=Cluster0")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection