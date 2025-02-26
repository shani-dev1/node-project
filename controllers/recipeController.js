const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res) => {
    const reipe = await Recipe.create(req.body)
    res.json(reipe)
};

exports.getAllRecipes = async (req, res) => {
    try {

      const recipe = await Recipe.find();
      res.json(recipe);
    } catch (error) {
      console.error('Failed to get recipes:', error);
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  };


// exports.createRecipe = async (req, res) => {

// };


// exports.deleteRecipe = async (req, res) => {
   
// };

// exports.updateRecipe = async (req, res) => {
   
// };