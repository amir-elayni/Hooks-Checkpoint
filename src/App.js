
import React,{ useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import {v4 as uuidv4} from 'uuid';
import Search from './Search';


function App() {

  const [keyword,setKeyword]=useState("")

  const [newRate,setNewRate]=useState(1)

  const [movies,setMovies]= useState([



    { id:uuidv4(),
      main_img:"bond.png",
      title:"007 James Bond",
      duration:"2HR 09MIN",
      date:"2021,Cary Joji Fukunaga",
      rate:5,
      genre:"Action,Adventure",
      description:"Bond a quitté les services secrets, mais son repos est de courte durée lorsque son vieil ami Felix Leiter de la CIA lui demande son aide, ce qui entraîne Bond sur la piste d'un ennemi armé de nouvelles armes technologiques redoutables. "


    },

    { id:uuidv4(),
      main_img:"italian.png",
      title:"The italian Job",
      duration:"1h 51min",
      date:"2003,F. Gary Gray",
      rate:4,
      genre:"Action,thriller",
      description:"Après avoir été trahi et laissé pour mort en Italie, Charlie Croker et son équipe planifient un braquage élaboré contre leur ancien allié."

    },


    { id:uuidv4(),
      main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      title:"Tomb Raider",
      duration:"125 min",
      date:"2018, Roar Uthaug",
      rate:3,
      genre:"Action, Fantasy",
      description:"Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared"

    },{ id:uuidv4(),
      main_img:"https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      title:"Black Panther",
      duration:"134 min",
      date:"2018,Ryan Coogler",
      rate:1,
      genre:"Action, Adventure, Sci-Fi",
      description:"T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake."

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

  
     <Search search={search} setRate={setRate} newRate={newRate}  />
    <MovieList addMovie={addMovie} movies={movies.filter(el =>el.rate <= newRate && el.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase().trim()))}/>
   
    
   

    </div>
  );
}

export default App;
