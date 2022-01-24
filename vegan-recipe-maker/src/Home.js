import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import banner from "/Users/Ronnie/Desktop/SEIR1213/Unit2/Projects/vegan-recipe-maker/vegan-recipe-maker/src/vegan-food-banner.jpeg";

const Home = (props) => {
  const userInputRef = useRef();

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipes-list");
    props.setUserInput(userInputRef.current.value);
  };

  return (
    <div className="home">
      <div className="banner-div">
        <img className="home-banner" src={banner} alt="vegan food banner" />
        <div className="banner-text">Vegan Recipe Finder</div>
      </div>
      <div className="input-group mb-3">
        <input
          ref={userInputRef}
          type="text"
          className="form-control"
          placeholder="e.g. carrots, tofu, etc."
        />
        <button
          onClick={handleClick}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Find Recipes!
        </button>
      </div>
      <div>
        <Card body color="light">
          <CardBody>
            <CardTitle tag="h5"> How Does It Work?</CardTitle>
            <CardText>
              Do you have groceries laying around that you're not sure what to do with? Don't let them go to waste!  Using this quick and easy search tool, you can easily find recipes to make with ingredients that you specify.
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Home;
