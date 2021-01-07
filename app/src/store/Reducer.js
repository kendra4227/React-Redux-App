import {FETCH_MOVIE_DATA_START, FETCH_MOVIE_DATA_SUCCESS,FETCH_MOVIE_DATA_FAILURE} from './actions';
// creating initial state
const initialState = {
    movie:null,
    decription:null,
    error:(""),
    isFetching:false
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
               movie: action.payload.movieTitle,
               description:action.payload.movieDescription,
               error:(""),
               isFetching:false,
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