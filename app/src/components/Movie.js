import React from 'react';
import { connect } from 'react-redux';

import {fetchMovie} from '../store/actions';
import Loader from 'react-loader-spinner';
const Movie = props => {
    
    return (
        <div className ="movie">
            {!props.movie && !props.isFetching && <p>Wanna watch a movie?</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
{props.movie && !props.isFetching && <><p>{props.title}</p><p>- {props.description}</p></>}
           
        
          <div style={{display: "flex", flexDirection: "row", width: 700, flexWrap: "wrap", margin: "0 auto", backgroundColor: 'white', border: '1px solid black'}}>
               
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly", width: 500, margin: "2% auto"}}>
                <button onClick={ props.fetchMovie} style={{fontFamily: 'Roboto Mono, monospace'}}> Click for a Movie Title </button>
            
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

export default connect(mapStateToProps,{fetchMovie})(Movie);