import React from "react";
import {useParams, useNavigate} from 'react-router-dom'




const Trailer = ({movies}) => {
    const params = useParams() ; 
    const navigation = useNavigate() ; 
    const movie = movies.find(el=>el.id===params.id)
   
    return (
        
     <div className="trailer">
        <div className="description">
        <h1 style={{color: "gold",marginLeft:"650px" }} >{movie.title}</h1>
        <p style={{color: "gold",fontSize:"20px", marginLeft:'100px' }}>{movie.description}</p>
        
        </div>
        

        <div style={{marginLeft:'500px' }} >{movie.trailer}</div>
        <button style={{marginLeft:'700px'}} class="btn btn-warning"  variant="danger" onClick={()=>navigation(-2) }>Go Back to Home page </button>
    </div>
    )
}

export default Trailer ;