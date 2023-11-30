import React from 'react';
import './CardList.scss';
import { Country } from '../types/Country';
import { Card } from '../Card/Card';

interface ListProps {
  countries: Country[];
}

export const CardList: React.FC<ListProps> = ({ countries }) => (
  <div className="countries-container">
    {countries.map((country) => (
      <Card key={country.numericCode} country={country} />
    ))}
  </div>
);