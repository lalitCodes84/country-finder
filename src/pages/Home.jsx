import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries
    .filter((country) => (filter ? country.region === filter : true))
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === 'asc'
        ? a.population - b.population
        : b.population - a.population;
    });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-md bg-white dark:bg-gray-800"
        >
          <option value="">All Regions</option>
          {Array.from(new Set(countries.map((c) => c.region))).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <div>
          <button
            onClick={() => setSortOrder('asc')}
            className="px-4 py-2 bg-green-500 text-white rounded-md mx-2"
          >
            Sort Asc
          </button>
          <button
            onClick={() => setSortOrder('desc')}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Sort Desc
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;