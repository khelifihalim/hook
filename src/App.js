import './App.css';
import MoviesList from './components/MoviesList';


const App = () => {

    return (
      <div className="App">
        <h1>MOVIE APP </h1>
        <div className='container'> 
          
          <MoviesList />  
        </div>
        
      </div>
    );
  
  
}

export default App;
