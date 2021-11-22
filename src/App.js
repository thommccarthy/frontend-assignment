import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Movies from './components/Movies';
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLatest, setShowLatest] = useState(true);

  // function to search for movies based on a search term
  const searchMovies = async (searchTerm) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=popularity.desc&query=${searchTerm}`
    );
    setMovies(res.data.results);
  };

  // call the getLatestMovies function once on render
  useEffect(() => {
    getLatestMovies();
  }, []);

  const currentDate = moment().toDate().toISOString().slice(0, 10);

  const getLatestMovies = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&sort_by=release_date.desc&region=US&release_date.lte=${currentDate}&with_release_type=2`
      )
      .then((res) => {
        const newMovies = res.data.results;
        setLatestMovies(newMovies);
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  return (
    <div className='App'>
      <Header
        searchMovies={searchMovies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        movies={movies}
      />
      <Movies
        latestMovies={latestMovies}
        movies={movies}
        searchTerm={searchTerm}
        showLatest={showLatest}
        setShowLatest={setShowLatest}
      />
    </div>
  );
}

export default App;
