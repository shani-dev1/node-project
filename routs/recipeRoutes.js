const express = require('express');
const router=express.Router();
// const {createRecipe,deleteRecipe,updateRecipe} = require('../controllers/recipeController');
const {addRecipe,getAllRecipes} = require('../controllers/recipeController');
// const { route } = require('express/lib/application');

// const router = express.Router();
// const User = require("../models/users");
// router.post('/', createRecipe);
// router.delete('/:id', deleteRecipe);
// router.put('/:id', updateRecipe);
route.post('/',addRecipe)
route.put('/',getAllRecipes)

// module.exports = router;