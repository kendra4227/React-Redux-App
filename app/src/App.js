import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import axios from 'axios';
import React from "react";


const App =()=> {

  axios 
  .get("https://ghibliapi.herokuapp.com/films")
  .then((res) =>{
    console.log(res);
  })
  return (
    <div className ="App">
      <Header/>
    <Movie/>
    </div>
    
  );
}

export default App;



