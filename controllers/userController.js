const users=require('./../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//register
exports.registerController=async(req,res)=>{
    console.log("Inside registerController")
    const {username,email,password}=req.body

    try{
        const exisitingUser=await users.findOne({email})
        if(exisitingUser)
        {
            res.status(409).json("user Already exists....Please Login!!!")
        }else{
            const encryptPasswd=await bcrypt.hash(password,10)
            const newUser=new users({
                username,email,password:encryptPasswd,profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(500).json(err)
    }
}

//login
exports.loginController=async(req,res)=>{
    console.log("Inside loginController");
    const {email,password}=req.body
    try{
        const exisitingUser=await users.findOne({email})
        if(exisitingUser)
        {
            let isUserLoggedin=exisitingUser.role=="user"? await bcrypt.compare(password,exisitingUser.password) : password==exisitingUser.password

            if(isUserLoggedin){
                const token=jwt.sign({email,role:exisitingUser.role},process.env.JWTSECRET)
                res.status(200).json({user:exisitingUser,token})
            }else{
                res.status(404).json("Invalid Password...")
            }
        }else{
            res.status(404).json("Invalid Email....Please Register to access our App")
        }
    }catch(err)
    {
        res.status(500).json(err)
    }
}