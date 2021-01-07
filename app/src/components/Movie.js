import React from "react";

const Movie = props => {
  console.log("props from Movie", props);
  return (
    <div className="movie">
      <h2>Movie: {props.title}</h2>
      <h4>Description: {props.description}</h4>
     
    </div>
  );
};

export default Brewery;