import React from 'react';
import './CardDetails.scss';
import { Country } from '../types/Country';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

type DetailsProps = {
  country: Country;
  onBackClick: () => void;
};

export const CardDetails: React.FC<DetailsProps> = ({
  country,
  onBackClick,
}) => {
  return (
    <div className="country__details">
      <div className="country__details--header">
        <button className="back__button detail__button" onClick={onBackClick}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </div>
      <div className="country__data">
        <div className="country__data--image">
          {country.flags && country.flags.png && (
            <img src={country.flags.png} alt="Country image" />
          )}
        </div>
        <div className="country__description">
          <h1 className="country__description--name">{country.name}</h1>
          <div className="country__description--panel">
            <div className="left__panel">
              <p className="panel__paragraph">
                <span className="panel__paragraph--name">Native Name: </span>
                {country.nativeName}
              </p>
              <p className="panel__paragraph">
                <span className="panel__paragraph--name">Population: </span>
                {country.population}
              </p>
              <p className="panel__paragraph">
                <span className="panel__paragraph--name">Region: </span>
                {country.region}
              </p>
              <p className="panel__paragraph">
                <span className="panel__paragraph--name">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="panel__paragraph">
                <span className="panel__paragraph--name">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="right__panel">
              {country?.topLevelDomain?.length > 0 && (
                <p className="panel__paragraph">
                  <span className="panel__paragraph--name">
                    Top Level Domain:{' '}
                  </span>
                  {country?.topLevelDomain.join(',')}
                </p>
              )}
              {country?.currencies?.length > 0 && (
                <p className="panel__paragraph">
                  <span className="panel__paragraph--name">Currencies: </span>
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(',')}
                </p>
              )}
              {country?.languages?.length > 0 && (
                <p className="panel__paragraph">
                  <span className="panel__paragraph--name">Languages: </span>
                  {country.languages
                    .map((language) => language.name)
                    .join(', ')}
                </p>
              )}
            </div>
          </div>
          {country.borders && country.borders.length > 0 && (
            <div className="country__borders">
              <span className="panel__paragraph--name">Border Countries: </span>
              {country.borders.map((borderName, numericCode) => (
                <div className="detail__button" key={numericCode}>
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
