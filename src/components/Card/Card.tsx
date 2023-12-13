import React from 'react';
import './Card.scss';
import { Country } from '../types/Country';

type CardProps = {
  country: Country;
  setDetails: (details: Country) => void;
};

export const Card: React.FC<CardProps> = ({ country, setDetails }) => (
  <div className="card">
    <div className="card__image" onClick={() => setDetails(country)}>
      <img src={country.flags.svg} alt="image of flag" />
    </div>
    <div className="card__content">
      <h3 className="card__title">{country.name}</h3>

      <div className="card__details">
        <div className="card__details--population">
          <p className="detail__title">Population:</p>
          <p className="detail__value">{country.population}</p>
        </div>
        <div className="card__details--region">
          <p className="detail__title">Region:</p>
          <p className="detail__value">{country.region}</p>
        </div>
        <div className="card__details--capital">
          <p className="detail__title">Capital:</p>
          <p className="detail__value">{country.capital}</p>
        </div>
      </div>
    </div>
  </div>
);
