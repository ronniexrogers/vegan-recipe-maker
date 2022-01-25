import { useRef, useState } from "react";

const SearchBar = () => {

    const [input, setInput] = useState('')
    const submitData = () => {
        setInput(userInput.current.value)
    }

    const userInput = useRef()

    return ( 
        <div className="search-bar">
                <input ref={userInput} type="text" placeholder="Enter Ingredients" ></input>
                <button onClick={submitData}>enter</button>
        </div>
     );
}
 
export default SearchBar