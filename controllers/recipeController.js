const Recipe = require('../models/Recipe');

exports.addRecipe = async (req, res) => {
    const reipe = await Recipe.create(req.body)
    console.log(reipe);
    
    res.json(reipe)
};

exports.getAllRecipes = async (req, res) => {
    try {
      const recipe = await Recipe.find();
      console.log(recipe);
      
      res.json(recipe);
    } catch (error) {
      console.error('Failed to get recipes:', error);
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  };

  exports.deleteRecipe = async (req, res) => {
    const  {recipeId}  = req.params;
    console.log(recipeId);
    try {
      const deletedRecipe = await Recipe.findOneAndDelete({_id: recipeId });
      if (!deletedRecipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      console.error('Failed to delete Recipe:', error);
      res.status(500).json({ message: 'Failed to delete Recipe' });
    }
  };


// exports.createRecipe = async (req, res) => {

// };


// exports.deleteRecipe = async (req, res) => {
   
// };

// exports.updateRecipe = async (req, res) => {
   
// };