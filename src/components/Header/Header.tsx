import React, { useEffect, useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

export const Header: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const getTheme = () => {
    setIsDarkTheme(JSON.parse(localStorage.getItem('darkTheme') || 'false'));
  };

  const setTheme = (theme: boolean) => {
    localStorage.setItem('darkTheme', JSON.stringify(theme));
    setIsDarkTheme(theme);
  };

  useEffect(() => {
    window.addEventListener('load', getTheme);
    return () => window.removeEventListener('load', getTheme);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('theme__dark');
    } else {
      document.body.classList.remove('theme__dark');
    }
  }, [isDarkTheme]);

  return (
    <div className="header">
      <h1 className="header__title">Where in the world?</h1>
      <div
        className="header__theme"
        onClick={() => {
          setTheme(!isDarkTheme);
        }}
      >
        {isDarkTheme ? (
          <FontAwesomeIcon icon={faSun} className="header__theme--icon" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="header__theme--icon" />
        )}
        <p className="header__theme--icon">
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </p>
      </div>
    </div>
  );
};
