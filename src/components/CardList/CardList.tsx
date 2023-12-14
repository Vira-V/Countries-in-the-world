import React, { useEffect, useRef, useState } from 'react';
import './CardList.scss';
import { Country } from '../types/Country';
import { Card } from '../Card/Card';

interface ListProps {
  countries: Country[];
  loading: boolean;
  setDetails: (details: Country) => void;
}

export const CardList: React.FC<ListProps> = ({
  countries,
  loading,
  setDetails,
}) => {
  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    updateVisibleCountries();
  }, [countries]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateVisibleCountries();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCountries]);

  const updateVisibleCountries = () => {
    const cardHeight = 320;
    const visibleCount = Math.ceil(window.innerHeight / cardHeight);

    const newVisibleCountries = countries.slice(0, visibleCount);

    setVisibleCountries((prevVisible) => [
      ...prevVisible,
      ...newVisibleCountries,
    ]);
  };

  return (
    <div className="countries-container">
      {loading ||
        countries.map((country) => (
          <Card
            key={country.numericCode}
            country={country}
            setDetails={setDetails}
          />
        ))}
    </div>
  );
};
