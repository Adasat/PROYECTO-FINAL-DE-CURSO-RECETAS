// user.router.js
const router = require('express').Router();
const {
	getAllRecipes,
	createRecipe,
	updateRecipe,
	getOneRecipe,
	deleteRecipe,
	getAllRecipesCreatedByMe
} = require('../controllers/recipes.controller');

const { checkAuth } = require("../middlewares/auth.middlewares");

router.get('/', getAllRecipes);
router.get('/me', checkAuth, getAllRecipesCreatedByMe);
router.get('/:id', getOneRecipe);
router.post('/', checkAuth, createRecipe);
router.put('/:id', checkAuth, updateRecipe);
router.delete('/:id', checkAuth, deleteRecipe);

module.exports = router
