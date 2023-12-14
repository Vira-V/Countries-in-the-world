import React, { useEffect, useState } from 'react';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header';
import { SearchFilter } from './components/SearchFilter';
import { CardDetails } from './components/CardDetails';
import { Country } from './components/types/Country';
import { Loader } from './components/Loader';

export const App: React.FC = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [searchData, setSearchData] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>('');
  const [filterData, setFilterData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch('https://restcountries.com/v2/all').then(
          (response) => response.json(),
        );
        setCountry(data);
        setSearchData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Object.keys(details).length > 0) {
      setIsDetailPage(true);
    } else {
      setIsDetailPage(false);
    }
  }, [details]);

  useEffect(() => {
    if (query.length <= 0) {
      setSearchData(country);
      setFilterData([]);
      return;
    }

    const filteredData = country.filter((data) =>
      data.name.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchData(filteredData);
    setFilterData(filteredData);
  }, [query, country]);

  const filterByRegion = (region: string) => {
    if (region === '') {
      setSearchData(country);
      setFilterData([]);
    } else {
      const filteredByRegion = country.filter((data) => data.region === region);
      setSearchData(filteredByRegion);
      setFilterData(filteredByRegion);
    }
  };

  const resetSearch = () => {
    setSearchData(country);
    setQuery('');
    setFilterData([]);
  };

  const handleBorderCountryClick = async (countryCode: string) => {
    try {
      const borderCountry = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`,
      ).then((response) => response.json());

      setDetails(borderCountry);
    } catch (error) {
      console.error('Error fetching border country data:', error);
    }
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {isDetailPage ? (
            country.length > 0 && (
              <CardDetails
                country={details as Country}
                onBackClick={() => setDetails({})}
                onBorderCountryClick={handleBorderCountryClick}
              />
            )
          ) : (
            <>
              <SearchFilter
                onSearch={(searchQuery) => setQuery(searchQuery)}
                onFilter={filterByRegion}
                resetSearch={resetSearch}
                filterData={filterData}
              />
              <CardList
                countries={searchData}
                loading={loading}
                setDetails={setDetails}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
