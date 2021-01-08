import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import React from "react";


const App =()=> {

  return (
    <div className ="App">
      <Header/>
    <MovieList/>
    </div>
    
  );
}

export default App;



