
import React,{ useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import {v4 as uuidv4} from 'uuid';
import Search from './Search';
import {Routes, Route, Link } from "react-router-dom";
import Trailer from './Trailer'
import image from "./images/best-movies-prime-video-feature.png"




function App() {

  const [keyword,setKeyword]=useState("")

  const [newRate,setNewRate]=useState(1)

  const [movies,setMovies]= useState([



    { id:uuidv4(),
      main_img:"./bond.png",
      title:"007 James Bond",
      duration:"2HR 09MIN",
      date:"2021,Cary Joji Fukunaga",
      rate:5,
      genre:"Action,Adventure",
      description:"Resumé: Bond a quitté les services secrets, mais son repos est de courte durée lorsque son vieil ami Felix Leiter de la CIA lui demande son aide, ce qui entraîne Bond sur la piste d'un ennemi armé de nouvelles armes technologiques redoutables. ",
      trailer: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BIhNsAtPbPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    },

    { id:uuidv4(),
      main_img:"./italian.png",
      title:"The italian Job",
      duration:"1h 51min",
      date:"2003,F. Gary Gray",
      rate:4,
      genre:"Action,thriller",
      description:"Resumé: Le plan audacieux et sans défaut, le braquage exécuté de main de maître, la fuite à travers les canaux de Venise nette et sans bavure. Charlie Croker, son mentor John Bridger et leurs hommes n'auraient pas assez d'une vie pour savourer les fruits amplement mérités de ce casse historique. Cependant, la bande hébergeait à son insu un traître, qui ruina d'un coup tout ses espoirs",
      trailer: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6BS9Fjyq5F0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },


    { id:uuidv4(),
      main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      title:"Tomb Raider",
      duration:"125 min",
      date:"2018, Roar Uthaug",
      rate:3,
      genre:"Action, Fantasy",
      description:"Resumé: Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared",
      trailer: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8ndhidEmUbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    },{ id:uuidv4(),
      main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      title:"Black Panther",
      duration:"134 min",
      date:"2018,Ryan Coogler",
      rate:1,
      genre:"Action, Adventure, Sci-Fi",
      description:"Resumé: T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      trailer: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xjDjIWPwcPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    }


  

  ])

  const search=(text)=>{

      setKeyword(text)
  }

      const setRate =(rate)=>{

        setNewRate (rate)

      }

      const addMovie=(movie)=>{

        setMovies(movies.concat(movie))
      }

    

  
  return (


    <div className="App">
      
      <div className="navup" >
            
            <Link style={{textDecoration: 'none',color:'white',fontSize:'50px',marginRight:'10px'}}  to="/"><li style={{color:'white'}}>Home</li></Link>
            <Link style={{textDecoration: 'none',color:'white',fontSize:'50px',marginRight:'10px'}}  to="/movie"><li style={{color:'white'}}>Movies</li></Link>
           
          </div>


  
 

<Routes>
   
<Route path="/" element={<> <h1 style={{color: "White",textAlign:"center",fontSize:"40px",backgroundColor:'#1a5f89',margin:'0px'}}>Home page</h1> <img src='header-prime-video-suisse.jpg' style={{width:"1600px"}} /> </> }/> 
    
<>
<Route path='/movie' element={<> <Search search={search} setRate={setRate} newRate={newRate}  />  <MovieList addMovie={addMovie} movies={movies.filter(el =>el.rate <= newRate && el.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase().trim()))}/>    </>} />
<Route path="/trailer/:id" element={<Trailer movies={movies} />}/> 
</>
    </Routes>
  
   

    </div>
  );
}

export default App;
