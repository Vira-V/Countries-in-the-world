import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export const Header: React.FC = () => (
  <div className="header">
    <h1 className="header__title">Where in the world?</h1>
    <div className="header__theme">
      <FontAwesomeIcon icon={faMoon} className="header__theme--icon" />
      <p className="header__theme--text">Dark Mode</p>
    </div>
  </div>
);