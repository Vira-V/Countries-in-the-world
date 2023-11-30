import React, { useState } from 'react';
import './App.scss';
import countriesFromServer from './components/api/countries.json';
import { CardList } from './components/CardList/CardList';

export const App: React.FC = () => {
  const [countries] = useState(countriesFromServer);

  return <CardList countries={countries} />;
};

