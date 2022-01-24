import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
    let { id } = useParams()
    const API_KEY = process.env.REACT_APP_API_KEY
    const ingredientsUrl = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`
    const instructionsUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
    const summaryUrl = `https://api.spoonacular.com/recipes/${id}/summary?apiKey=${API_KEY}`
    
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([])
    const [summary, setSummary] = useState([])
    const [visualIngredients, setVisualIngredients] = useState('')

    useEffect(() => {
        fetch(ingredientsUrl)
        .then(res => res.json())
        .then(data => setIngredients(data.ingredients))
      },[])

      useEffect(() => {
        fetch(instructionsUrl)
        .then(res => res.json())
        .then(data =>  setInstructions(data[0].steps))
      },[])

      useEffect(() => {
        fetch(summaryUrl)
        .then(res => res.json())
        .then(data =>  setSummary(data))
      },[])

      if(!ingredients) {
        return (
          <p>Loading....</p>
        )
      }

    return ( 
        <div className="recipe">
            <h1> { summary.title } </h1>
            <div className="ingredients">
            Ingredients:
            { ingredients.map((ingredient, index) => (
                <div key={ index }>
                        -{ ingredient.name }: { ingredient.amount.us.value } { ingredient.amount.us.unit }
                </div>
            )) }
            </div>

            <div className="instructions">
            Instructions:
            { instructions.map((instruction) => (
                <div key={ instruction.number }>
                    -{ instruction.step }
                </div>
            ))}
            </div>

        </div>
     );
}
 
export default Recipe;
