import React from 'react';

const Movies = (props)=> {
    return (
        <div>
            <h4>{props.title}</h4>
            <h4>{props.release_date}</h4>
            <h4>{props.description}</h4>
        </div>
    )
}
export default Movies;