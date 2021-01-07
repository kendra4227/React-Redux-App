import axios from 'axios';
//import {connect} from 'react-redux';

export const FETCH_MOVIE_DATA_START = 'FETCH_MOVIE_DATA_START';
export const FETCH_MOVIE_DATA_SUCCESS = 'FETCH_MOVIE_DATA_SUCCESS';
export const FETCH_MOVIE_DATA_FAILURE = 'FETCH_MOVIE_DATA_FAILURE';

export const fetchMovie = () => dispatch =>{
 
        dispatch ({ type: FETCH_MOVIE_DATA_START});
        axios 
        .get('https://ghibliapi.herokuapp.com/films')
        .then((res) => {
            
            dispatch ({type: FETCH_MOVIE_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err);
            dispatch ({type: FETCH_MOVIE_DATA_FAILURE, payload: err.response});
        })
    };
   /* export const nextMovie = (currentURL) => dispatch => {
        console.log("in actions.js " + currentURL);
        axios
            .get(currentURL)
            .then(res => {
                console.log(res);
                dispatch({
                    type: FETCH_MOVIE_DATA_SUCCESS,
                    payload: res.data
                })
            })
    };
    
const mapStateToProps = state => {
    return {
        url:state.url
    }
};

export default connect (
    mapStateToProps, {}
)(fetchMovie);*/