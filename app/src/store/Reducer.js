import {FETCH_MOVIE_DATA_START, FETCH_MOVIE_DATA_SUCCESS,FETCH_MOVIE_DATA_FAILURE} from '../store/actions';
// creating initial state
const initialState = {
    title:[],
    error:(""),
    isFetching:false,
    nextURL:"https://ghibliapi.herokuapp.com/films",
    lastURL:"https://ghibliapi.herokuapp.com/films"

};

const reducer = (state = initialState, action) => {
   switch (action.type) {
       case FETCH_MOVIE_DATA_START:
           return {
               ...state,
               error:(""),
               isFetching: true
           }
           case FETCH_MOVIE_DATA_SUCCESS: 
           return{
               ...state,
               title: action.payload.results,
               error:(""),
               isFetching:false,
               nextURL: action.payload.next,
               lastURL:action.payload.previous
           }
           case FETCH_MOVIE_DATA_FAILURE:
               return {
                   ...state,
                   error:action.payload,
                   isFetching: false
               }
               default:
                   return state;
   } 
};

export default reducer