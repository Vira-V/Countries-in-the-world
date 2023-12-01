import React, { useEffect, useState } from 'react';
import './App.scss';
import { CardList } from './components/CardList/CardList';
import { Header } from './components/Header';

export const App: React.FC = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <Header />
      <CardList countries={country} loading={loading} />
    </>
  );
};
