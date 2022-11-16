 import React from 'react'
import { Link } from 'react-router-dom';

import StarRatingComponent from 'react-star-rating-component';





const MovieCard = ({movie,movies,}) => {
  return (

<>
<Link style={{color: "transparent"}} to={`/Trailer/${movie.id}`}>

  
<a className="link" href="https://codepen.io/simoberny/pen/qxxOqj" target="_blank"></a>
<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      
      <img className="locandina" src={movie.main_img}/>
      <h1>{movie.title} </h1>
      

      <h4>{movie.date}</h4>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        
        />



      <span className="minutes">{movie.duration}</span>
      <p className="type">{movie.genre}</p>
    </div>



    <div className="movie_desc">
      <p className="text">
        {movie.description}
      </p>
    </div>

      

    <div className="movie_social">
 

    </div>
  </div>

</div>


</Link>
</>
     
)}

export default MovieCard;
