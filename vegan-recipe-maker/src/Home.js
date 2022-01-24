import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = (props) => {
  const userInputRef = useRef();

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipes-list");
    props.setUserInput(userInputRef.current.value);
  };

  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
