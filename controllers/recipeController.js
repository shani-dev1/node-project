const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res) => {
    const reipe = await Recipe.create(req.body)
    res.json(reipe)
};



// exports.createRecipe = async (req, res) => {

// };


// exports.deleteRecipe = async (req, res) => {
   
// };

// exports.updateRecipe = async (req, res) => {
   
// };