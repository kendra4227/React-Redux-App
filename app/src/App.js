import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
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
    <MovieList/>
    </div>
    
  );
}

export default App;



