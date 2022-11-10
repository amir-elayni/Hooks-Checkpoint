import React, { useState } from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Add';


const MovieList = ({movies,addMovie}) => {

  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div> 
        <br></br>
        <br></br>
        <br></br>

        <button type="button" class="btn btn-dark" id="bt" onClick={handleShow}>ADD NEW Movie NOW</button>


            <Add  addMovie={addMovie} show={show} handleClose={handleClose} />
            {movies.map(el => <MovieCard movie={el}/>)}
        
      
    </div>
  )
}   

export default MovieList
