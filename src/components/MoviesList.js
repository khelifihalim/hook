import React, { useState } from 'react'
import AddMovie from './AddMovie'


function MoviesList() {

    
       const [Movies,setMovies] = useState([
                {
                  title: `The godfather`,
                  poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
                  description: `The aging patriarch of an organized crime 
                         dynasty transfers control of his clandestine 
                         empire to his reluctant son.`,
                  rate: 5,
                },
                {
                  title: `Fight club`,
                  poster: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
                  description: `An insomniac office worker and 
                         a devil-may-care soapmaker form an underground
                          fight club that evolves into something much, 
                          much more.`,
                  rate: 5,
                },
                {
                  title: `The illusinist`,
                  poster: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
                  description: `In turn-of-the-century Vienna, 
                         a magician uses his abilities to secure the 
                         love of a woman far above his social standing.`,
                  rate: 4,
                },
                {
                  title: `American History X`,
                  poster: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
                  description: `A former neo-nazi skinhead
                          tries to prevent his younger brother 
                          from going down the same wrong path that he did.`,
                  rate: 5,
                }
              ]  
        
       );



/*-------------------------------------------------------*/
       const myMovies = Movies.map( (Movie, i) => {
        //console.log(Movies.filter((movie,i)=>movie.title.toLowerCase().includes("the")))
            return (
             
                <div key={i} className='container'>
                    <h3 className='title'>{Movie.title}</h3>
                    <img className='fluid ' src ={Movie.poster} alt = 'film' />
                    <p className='descript'>{Movie.description}</p>
                    <button className='rate' >{Movie.rate}</button>
                </div>  
  
            )
       })
/*---------------------------------------------------------*/
       const addNewMovie = (newMovie) => {
        setMovies([...Movies, {
          Movie: newMovie,
        }])
        
       }

/*----------------------------------------------------------*/      
     
        
    
return (
      <div>
            
            
            <h2 className='h2'>Movies List</h2>
           
            <div className='grid container'>{myMovies}</div>
            <hr/>
            <AddMovie  addNewMovie={addNewMovie} />
      </div>
                
  )
}

export default MoviesList;
