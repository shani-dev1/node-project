const express = require('express');
const router=express.Router();
const {addRecipe,getAllRecipes,deleteRecipe,getRecipeById} = require('../controllers/recipeController');


router.post('/',addRecipe)
router.get('/',getAllRecipes)
router.delete('/:recipeId',deleteRecipe)
router.get('/:recipeId',getRecipeById)


module.exports = router

