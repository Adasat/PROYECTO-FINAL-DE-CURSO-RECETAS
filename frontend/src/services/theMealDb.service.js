import { apiRecetas } from './config'


export async function getRecipesByArea (area){
    try {
      const { data } = await apiRecetas.get(`/filter.php?a=${area}`);  
    
      return data.meals
    } catch (error) {
        console.log(error)
    }
} 


export async function getAllRecipesFromDBMeals () {
  try {
    const { data } = await apiRecetas.get("/search.php?s=")
    return data.meals
  } catch (error) {
    console.log(error)
  }
}

export async function getRandomRecipe() {
  try {
    const { data } = await apiRecetas.get("/random.php");
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllInformationFromMeal (id) {
  try {
    const { data } = await apiRecetas.get(`/lookup.php?i=${id}`);
    console.log(data.meals)
    return data.meals[0]
  } catch (error) {
    console.log(error);

  }
}