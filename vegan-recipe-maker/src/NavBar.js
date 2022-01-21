import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="nav-bar">
            <Link to="/">Home </Link>
             | 
            <Link to="/about"> About </Link>
            <Link to="/recipes-list"> | Recipe List </Link>
            <Link to="/recipe/test"> | Recipe </Link>
        </nav>
     );
}
 
export default NavBar;