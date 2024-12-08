import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, [countryName]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{country.name.common}</h2>
      <p>Native Name: {Object.values(country.name.nativeName)[0].common}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Currency: {Object.values(country.currencies)[0].name}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <p>Borders: {country.borders?.join(', ') || 'None'}</p>
    </div>
  );
};

export default CountryDetails;