import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = ( props ) => {

    const userInputRef = useRef()

    let navigate = useNavigate()

    const handleClick = () => {
        navigate("/recipes-list")
        props.setUserInput(userInputRef.current.value)
    }

    return ( 
    <div className="home">
        yo i'm the home page
        <div className="search-bar">
                <h4>Enter key ingredients separated by commas:</h4>
                <input ref={userInputRef} type="text" placeholder="e.g. carrots, tofu, etc." ></input>
                <button onClick={handleClick} >enter</button>
        </div>
    </div> );
}
 
export default Home;

{/* <button onClick={() => navigate("/about")}>About page</button> */}