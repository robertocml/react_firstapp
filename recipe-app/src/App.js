import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '37867009';
  const APP_KEY = 'cb41b4ace52fa6c20df46bd16bbb13ee';  
  const [counter, setCounter] = useState(0);  

  const [recipes, setRecipes] = useState([]);

  useEffect( () =>{
    console.log("Effect has been run");
    getRecipes();

  }, []);

  const getRecipes = async () => {
    const response = await fetch(
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
  } 

  return(
    <div className="App">
      <h1>Hello React</h1>
      <form className="search-from">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          search
        </button>
      </form>
     
      {recipes.map(recipe =>(
        <Recipe 
        key ={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        
        />
      ))}

    </div>
  )
}


export default App;
