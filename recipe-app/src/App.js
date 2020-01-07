import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '37867009';
  const APP_KEY = 'cb41b4ace52fa6c20df46bd16bbb13ee';
  const exampleReq = "https://api.edamam.com/search?q=chicken&app_id=${37867009}&app_key=${cb41b4ace52fa6c20df46bd16bbb13ee}"


  return(
    <div className="App">
      <h1>Hello React</h1>

    </div>
  )
}


export default App;
