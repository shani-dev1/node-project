const express = require('express');
const router=express.Router();
// const {createRecipe,deleteRecipe,updateRecipe} = require('../controllers/recipeController');
const {addRecipe,getAllRecipes} = require('../controllers/recipeController');

// const router = express.Router();
// const User = require("../models/users");
// router.post('/', createRecipe);
// router.delete('/:id', deleteRecipe);
// router.put('/:id', updateRecipe);
router.post('/',addRecipe)
router.get('/',getAllRecipes)
// module.exports = router;