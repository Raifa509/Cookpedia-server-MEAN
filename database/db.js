const mongoose=require('mongoose')
const connectionString=process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("Database connection successfull!!!");
    
}).catch(err=>{
    console.log("DB connection failed!!!");
    console.log(err);
})