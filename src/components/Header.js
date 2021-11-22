import React from 'react';
import { Search } from './Search';
import logo from '../images/logo.svg';
import headerStyles from './Header.module.css';

const Header = ({ searchMovies, searchTerm, setSearchTerm, movies }) => {
  return (
    <div className={headerStyles.headerWrapper}>
      <img
        alt='timescale logo'
        className={headerStyles.timescaleLogo}
        src={logo}
      />
      <Search
        className={headerStyles.searchBox}
        searchMovies={searchMovies}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        movies={movies}
      />
    </div>
  );
};

export default Header;
