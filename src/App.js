import './App.css';
import Navigation from './components/Navigation';
import CardComponent from './components/CardComponent';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


function App() {

  const [movies, setMovies] = useState(null);
  
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2d52151a94mshb56579afcc8ebbdp199bd9jsn61a5e2c6e588',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
        .then(response => response.json())
      .then(response => setMovies(response))
      .catch(err => console.error(err));
    }, [])

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <div className="container mx-auto object-contain">
        {movies &&
          <CardComponent
          movies={movies}
        />}
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
