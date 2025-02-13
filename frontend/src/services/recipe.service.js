import { api } from './config'


export async function postRecipe(meal, ingredients, instruction, strMealThumb) {
    try {
      const { data } = await api.post(`/recipe`, 
        {
          strMeal: meal,
          strIngredients: ingredients,
          strInstructions: instruction,
          strMealThumb: strMealThumb
        },
        {
        headers: {
            authorization: localStorage.getItem('token')
            }
        },
    );  
      return data
    } catch (error) {
        console.log(error)
    }
} 


export async function getRecipesCreatedByMe(){
  try {
    const {data} = await api.get('/recipe/me',
      {
        headers: {
            authorization: localStorage.getItem('token')
            }
        },
    )
    return data
  } catch (error) {
     console.log(error)

  }
}