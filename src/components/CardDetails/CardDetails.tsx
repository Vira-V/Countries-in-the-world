import React from 'react';
import './CardDetails.scss';
import { Country } from '../types/Country';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

type DetailsProps = {
  country: Country;
};

export const CardDetails: React.FC<DetailsProps> = ({ country }) => {
  return (
    <div className="details">
      <div className="details__header">
        <button className="details__button">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <div className="details__data">
        <div className="details__image">
          <img src={country.flags.png} alt="The flag of country" />
        </div>
        <div className="details__description">
          <h1 className="details__description--name">{country.name}</h1>
          <div className="details__block">
            <div className="details__block--left">
              <p>
                <span className="details__name">Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span className="details__name">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="details__name">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="details__name">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="details__name">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="details__block--right">
              {country?.topLevelDomain?.length > 0 && (
                <p>
                  <span className="details__name">Top Level Domain: </span>
                  {country?.topLevelDomain.join(',')}
                </p>
              )}
              {country?.currencies?.length > 0 && (
                <p>
                  <span className="details__name">Currencies: </span>
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(',')}
                </p>
              )}
              {country?.languages?.length > 0 && (
                <p>
                  <span className="details__name">Languages: </span>
                  {country.languages.map((language) => language.name).join(',')}
                </p>
              )}
            </div>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div className="details__borders">
              <span className="details__name">Border Countries: </span>
              {country.borders.map((borderName) => (
                <div className="details__button" key={country.numericCode}>
                  {borderName}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
