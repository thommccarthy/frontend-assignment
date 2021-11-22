import React, { useState } from 'react';

export const Search = ({ searchMovies, searchTerm, setSearchTerm }) => {
  const [typingTimeout, setTypingTimeout] = useState('');

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
