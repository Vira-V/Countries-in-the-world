import React from 'react';
import './CardList.scss';
import { Country } from '../types/Country';
import { Card } from '../Card/Card';

interface ListProps {
  countries: Country[];
  loading: boolean;
  setDetails: (details: Country) => void;
}

export const CardList: React.FC<ListProps> = ({ countries, loading, setDetails }) => (
  <div className="countries-container">
    {loading || countries.map((country) => (
      <Card key={country.numericCode} country={country} setDetails={setDetails}/>
    ))}
  </div>
);