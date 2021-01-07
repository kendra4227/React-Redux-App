import React from 'react';
import { connect } from 'react-redux';

import {getMovie} from '../store/actions';

const Movie = props => {
    
    return (
        <div className ="movie">
            <p>Wanna watch a movie?</p>
             
            
        
          <div style={{display: "flex", flexDirection: "row", width: 700, flexWrap: "wrap", margin: "0 auto", backgroundColor: 'white', border: '1px solid black'}}>
               
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly", width: 500, margin: "2% auto"}}>
                <button onClick={ props.getMovie} style={{fontFamily: 'Roboto Mono, monospace'}}> Click for a Movie Title </button>
            
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        discription:state.discription,
        isFetching:state.isFetching,
        error:state.error
    }
};

export default connect(mapStateToProps,{getMovie})(Movie);