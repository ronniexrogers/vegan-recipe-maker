import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const RecipesList = (data) => {
  const recipeData = data.data.results;
  let navigate = useNavigate();

  useEffect(() => {}, []);

  if (!recipeData) {
    return <p>Loading....</p>;
  }

  return (
    <CardGroup>
      {recipeData.map((recipe) => (
        <Card className="recipe-card" key={recipe.id}>
          <CardImg alt={recipe.title} src={recipe.image} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">{recipe.title}</CardTitle>
            {/* <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText> */}
            <Button className="recipe-button" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              View Recipe
            </Button>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  );
};

export default RecipesList;
