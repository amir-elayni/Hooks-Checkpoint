import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';




const Search = ({search,setRate,newRate}) => {

 const [rating,setRating]=useState (1)

 const onStarClick=(nextValue,prevValue,name)=>{

  setRate(nextValue);
 }


  return (
    <div>
     

<div class="row height d-flex justify-content-center align-items-center">

  <div class="col-md-6">

    <div class="form">
      <i class="fa fa-search"></i>
      <input type="text" class="form-control form-input" placeholder="Search your favourite Movie... "onChange={(e)=>search(e.target.value)}/>
      <span class="left-pan"> <i class="fa fa-microphone"></i></span>
    </div>
    
  </div>
  
</div>

<div>
  
<span id="fil">Or you can Filter By Stars </span>



</div>  
<br></br>

<div id='stars'>

  
    <StarRatingComponent
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
          starColor={"GOLD"}
        
  
        />
      </div> 


      
      
     <span id="sh">Share a new movie here !! : </span>


     
    </div>
  )
}

export default Search
