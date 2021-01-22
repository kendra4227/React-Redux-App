import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import {getMovie} from '../store/actions';

const MovieList = props => {
    console.log("props from MovieList", props);
    return (
        <div className ="movie">
             {!props.movie && !props.isFetching && <p>Wanna watch a movie?</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
{props.movie && !props.isFetching && <><p>Title: {props.movie}</p><p>Description:{props.description}</p></>}


          <div style={{display: "flex", flexDirection: "row", width: 700, flexWrap: "wrap", margin: "0 auto", backgroundColor: 'white', border: '1px solid black'}}>

        </div>
        <div style={{display: "flex", justifyContent: "space-evenly", width: 500, margin: "2% auto"}}>
                <button onClick={ props.getMovie} style={{fontFamily: 'Roboto Mono, monospace'}}> Click for a Movie  </button>

        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        movie: state.movie,
        description:state.description,
        isFetching:state.isFetching,
        error:state.error
    }
};

export default connect(mapStateToProps,{getMovie})(MovieList);