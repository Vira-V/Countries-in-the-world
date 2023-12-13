import React, { useEffect, useState } from 'react';
import './SearchFilter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (region: string) => void;
  resetSearch: () => void;
}

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export const SearchFilter: React.FC<SearchFilterProps> = ({
  onSearch,
  onFilter,
  resetSearch,
}) => {
  const [query, setQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    setSelectedRegion(null);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedRegion(selectedValue);

    if (selectedValue === '') {
      resetSearch();
    } else {
      onFilter(selectedValue);
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
        value={selectedRegion || ''}
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
    </div>
  );
};
