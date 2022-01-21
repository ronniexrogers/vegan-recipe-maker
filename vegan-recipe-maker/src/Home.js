import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Home = () => {

    let navigate = useNavigate()

    return ( 
    <div className="home">
        yo i'm the home page
        <SearchBar />
    </div> );
}
 
export default Home;

{/* <button onClick={() => navigate("/about")}>About page</button> */}