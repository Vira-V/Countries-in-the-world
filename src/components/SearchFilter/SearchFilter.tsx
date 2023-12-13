import React, { useState, useEffect } from 'react';
import './SearchFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [options, setOptions] = useState(false);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, onSearch]);

  const onFilter = (event: React.MouseEvent<HTMLLIElement>) => {
    const selectedFilter = event.currentTarget.textContent;
    setOptions(false);
    setQuery('');
    if (selectedFilter !== null) {
      onSearch(selectedFilter);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const clearSearch = () => {
    setQuery('');
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
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <button className="clear-button" onClick={clearSearch}>
            X
          </button>
        )}
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
