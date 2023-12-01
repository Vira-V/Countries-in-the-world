import React, { useState } from 'react';
import './SearchFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export const SearchFilter: React.FC = () => {
  const [options, setOptions] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState<string | null>(null);

  const onFilter = (event: React.MouseEvent<HTMLLIElement>) => {
    const selectedFilter = event.currentTarget.textContent;
    setFilter(selectedFilter);
  };

  return (
    <div className="section">
      <div className="section__search">
        <FontAwesomeIcon icon={faSearch} className="section__search--icon" />
        <input
          type="text"
          name="input"
          className="section__search--input"
          placeholder="Search for a country..."
        />
      </div>
      <div className="section__filter" onClick={() => setOptions(!options)}>
        <p>Filter by Region</p>
        <FontAwesomeIcon icon={faAngleDown} />
        {options && (
          <div className="section__filter--options">
            <ul className="section__filter--list">
              <li className="section__filter--item" onClick={onFilter}>
                Africa
              </li>
              <li className="section__filter--item" onClick={onFilter}>
                America
              </li>
              <li className="section__filter--item" onClick={onFilter}>
                Asia
              </li>
              <li className="section__filter--item" onClick={onFilter}>
                Europe
              </li>
              <li className="section__filter--item" onClick={onFilter}>
                Oceania
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
