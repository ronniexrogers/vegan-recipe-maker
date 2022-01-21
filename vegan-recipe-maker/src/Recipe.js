import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    let { id } = useParams()
    const API_KEY = process.env.REACT_APP_API_KEY
    // const url = `https://api.spoonacular.com/recipes/${id}/card?apiKey=${API_KEY}`
    const ingredientsUrl = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`
    const instructionsUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
    
    const [ingredients, setIngredients] = useState(null)
    const [instructions, setInstructions] = useState(null)

    useEffect(() => {
        fetch(ingredientsUrl)
        .then(res => res.json())
        .then(data => setIngredients(data.ingredients))
      },[])

      useEffect(() => {
        fetch(instructionsUrl)
        .then(res => res.json())
        .then(data =>  console.log(data))
      },[])

      if(!ingredients) {
        return (
          <p>Loading....</p>
        )
      }

    return ( 
        <div className="recipe">
            Ingredients:
            { ingredients.map((ingredient) => (
                <div key={ ingredient.name } className="ingredients">
                        -{ ingredient.name }: { ingredient.amount.us.value } { ingredient.amount.us.unit }
                </div>
            )) }
        </div>
     );
}
 
export default Recipe;
