const SearchBar = () => {
    return ( 
        <div className="search-bar">
                <input type="text" placeholder="Enter Ingredients" ></input>
                <button onClick={() => console.log("button clicked")}>enter</button>
        </div>
     );
}
 
export default SearchBar