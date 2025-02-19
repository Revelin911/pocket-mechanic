
import RecipeCardProps from '../interfaces/Recipe';


const RecipeCard = (props:  RecipeCardProps | string) => {
    const meal = props;
    
    const searchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
      } catch (err) {
        console.log("Error from recipe search: ", err);
        return Promise.reject("Could not fetch recipe");
      }
    };
    const instructions = searchRecipe();
    return instructions;
}
export default RecipeCard;
