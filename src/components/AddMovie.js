import React, {useState} from 'react';


const AddMovie =({addNewMovie}) => {

  const  [movie,setMovie] = useState("") 
        
  const handleClick = (e) => {
    e.preventDefault()
    addNewMovie(movie)
  }
 
   return (
     <div className='add'>
           <form onSubmit={handleClick}>
             <label >title:<input type="text" name="title" palceholder="" required value={movie}onChange={(e)=> setMovie(e.target.value)}></input></label>
             <label >poster:<input type="text" name="poster" palceholder="" required ></input></label>
             <label >description:<input type="text" name="description" palceholder="" required ></input></label>
             <label >rate:<input type="text" name="rate" palceholder="" required ></input></label>
             <input type ='submit'  /> 
           </form>
 
     </div>
   )
 
   
 }

export default AddMovie
