import React, { useEffect, useState } from 'react';
import './App.scss';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header';
import { SearchFilter } from './components/SearchFilter';
import { CardDetails } from './components/CardDetails';
import { Country } from './components/types/Country';

export const App: React.FC = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isDetailPage, setIsDetailPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch('https://restcountries.com/v2/all').then(
          (response) => response.json(),
        );
        setCountry(data);
        setLoading(false);
      } catch {
        console.log('Error');
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

  return (
    <>
      <Header />
      {isDetailPage ? (
        Object.keys(country)?.length > 0 && (
          <CardDetails country={details as Country} />
        )
      ) : (
        <>
          <SearchFilter />
          <CardList countries={country} loading={loading} setDetails={setDetails}/>
        </>
      )}
    </>
  );
};
