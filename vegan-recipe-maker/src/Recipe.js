import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Spinner,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Recipe = (data) => {
  let { id } = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const ingredientsUrl = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`;
  const instructionsUrl = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`;

  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetch(ingredientsUrl)
      .then((res) => res.json())
      .then((data) => setIngredients(data.ingredients));
  }, []);

  useEffect(() => {
    fetch(instructionsUrl)
      .then((res) => res.json())
      .then((data) => setInstructions(data[0].steps));
  }, []);

  if (!ingredients) {
    return (
      <Spinner color="black" size="">
        Loading...
      </Spinner>
    );
  }

  return (
    <div>
      <Card>
        <CardImg alt="recipe" src={`https://spoonacular.com/recipeImages/${ id }-312x231.jpg`} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">Ingredients</CardTitle>
          <CardText>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                •{ingredient.name}: {ingredient.amount.us.value}{" "}
                {ingredient.amount.us.unit}
              </div>
            ))}
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Instructions</CardTitle>
          <CardText>
            {instructions.map((instruction) => (
              <div key={instruction.number}>•{instruction.step}</div>
            ))}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Recipe;
