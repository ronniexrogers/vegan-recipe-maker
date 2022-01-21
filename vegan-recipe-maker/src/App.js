import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import RecipesList from './RecipesList';
import Recipe from './Recipe';
import About from './About';
import Home from './Home';
import ErrorPage from './ErrorPage';

function App() {

const [recipeData, setRecipeData] = useState([])
const [userInput, setUserInput] = useState('')

const API_KEY = process.env.REACT_APP_API_KEY
// const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=vegan&number=2`
const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=apples,+flour,+sugar&number=2`


useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => setRecipeData(data))
},[])


if(!recipeData) {
  return (
    <p>Loading....</p>
  )
}

  console.log(userInput)

  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" setUserInput={setUserInput} element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/recipe/:id" element={ <Recipe data={ recipeData } /> } />
        <Route path="/recipes-list" element={ <RecipesList data={ recipeData } /> }/>
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
