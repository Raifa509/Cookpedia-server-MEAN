const recipes=require('../models/recipeModel')

//get all recipes
exports.getRecipeController=async(req,res)=>{
    console.log("Inside getRecipeController");

    try{
        const allRecipes=await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(500).json(err)
    }
}