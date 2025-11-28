require('dotenv').config()
const express=require('express')
const cors=require('cors')

require('./database/db')

const routes=require('./routing/routes')

const cookpediaServer=express()

cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(routes)


const PORT=3000

cookpediaServer.listen(PORT,()=>{
    console.log("Cookpedia Server Started!!!");
    
})

cookpediaServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>CookPedia Server Started!!..Waiting for client Request!!</h1>`)
})