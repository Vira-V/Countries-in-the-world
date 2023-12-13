import React, { useEffect, useState } from 'react';
import './App.scss';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header';
import { SearchFilter } from './components/SearchFilter';
import { CardDetails } from './components/CardDetails';
import { Country } from './components/types/Country';

export const App: React.FC = () => {
  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [searchData, setSearchData] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch('https://restcountries.com/v2/all').then(
          (response) => response.json(),
        );
        setCountry(data);
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
      return;
    }

    const filteredData = country.filter((data) =>
      data.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(filteredData);
  }, [query, country]);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {isDetailPage ? (
            country.length > 0 && (
              <CardDetails
                country={details as Country}
                onBackClick={() => setDetails({})}
              />
            )
          ) : (
            <>
              <SearchFilter onSearch={(searchQuery) => setQuery(searchQuery)} />
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
