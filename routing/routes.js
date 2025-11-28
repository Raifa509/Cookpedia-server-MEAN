const express=require('express')
const recipeController=require('../controllers/recipeController')
const routes=express.Router()


//get all recipes
routes.get('/recipes/all',recipeController.getRecipeController)







module.exports=routes