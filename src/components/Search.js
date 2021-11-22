import React, { useState } from 'react';
import searchStyles from './Search.module.css';

export const Search = ({ searchMovies, searchTerm, setSearchTerm }) => {
  const [typingTimeout, setTypingTimeout] = useState('');

  // debounced call to search movies while typing
  const onChange = (e) => {
    clearTimeout(typingTimeout);
    setSearchTerm(e.target.value);
    const timeout = setTimeout(() => {
      searchMovies(searchTerm);
    }, 200);

    setTypingTimeout(timeout);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search for a movie'
        id='search'
        name='search'
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};
