const express = require('express');
const router=express.Router();
const {addRecipe,getAllRecipes} = require('../controllers/recipeController');


router.post('/',addRecipe)
router.get('/',getAllRecipes)

// const router = express.Router();
// const User = require("../models/users");
// router.post('/', createRecipe);
// router.delete('/:id', deleteRecipe);
// router.put('/:id', updateRecipe);
// module.exports = router;