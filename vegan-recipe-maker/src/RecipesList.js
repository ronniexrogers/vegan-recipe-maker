import { useNavigate } from "react-router-dom";

const RecipesList = (data) => {
    const recipeData = data.data
    console.log(recipeData)
    let navigate = useNavigate()

    return ( 
        <div className="recipes-list">
            <b>Click on a recipe to view more info!</b>
            { recipeData.map((recipe) => (
                <div onClick={() => navigate(`/recipe/${recipe.id}`)} key={recipe.id}  className="recipe-card">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}

        </div>
     );
}
 
export default RecipesList;

// "https://spoonacular.com/"+recipe.title.trim().split(/\s+/).join('-')+"-"+recipe.id