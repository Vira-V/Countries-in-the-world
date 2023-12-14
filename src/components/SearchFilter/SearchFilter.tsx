import React, { useState, useEffect } from 'react';
import './SearchFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../types/Country';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (region: string) => void;
  resetSearch: () => void;
  filterData: Country[];
}

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onFilter,
  resetSearch,
  filterData
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
    setSelectedRegion('');
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedRegion(value);

    if (!value) {
      resetSearch();
    } else {
      onFilter(value);
      setQuery('');
    }
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
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
      <select
        value={selectedRegion}
        onChange={handleRegionChange}
        className="section__filter"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {selectedRegion && filterData.length === 0 && !query && (
        <div className="no-countries-message">
          No countries from this region.
        </div>
      )}
    </div>
  );
};
