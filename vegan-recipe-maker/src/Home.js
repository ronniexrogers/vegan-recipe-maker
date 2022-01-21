import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Home = (props) => {

    const [input, setInput] = useState('')
    const submitData = () => {
        setInput(userInputRef.current.value)
    }
    const userInputRef = useRef()

    let navigate = useNavigate()

    const handleClick = () => {
        submitData()
        navigate("/recipes-list")
        // passInfo()
    }

    console.log(props)

    // const passInfo = () => {
    //     props.setUserInput(input)
    // }

    return ( 
    <div className="home">
        yo i'm the home page
        <div className="search-bar">
                <input ref={userInputRef} type="text" placeholder="Enter Ingredients" ></input>
                <button onClick={handleClick} >enter</button>
        </div>
    </div> );
}
 
export default Home;

{/* <button onClick={() => navigate("/about")}>About page</button> */}