import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img
        className="w-32 h-32 object-cover rounded-md"
        src={country.flags.svg}
        alt={country.name.common}
      />
      <h3 className="text-lg font-bold mt-2">{country.name.common}</h3>
      <p className="text-sm">Population: {country.population}</p>
      <p className="text-sm">Region: {country.region}</p>
      <p className="text-sm">Capital: {country.capital}</p>
      <Link to={`/${country.name.common}`}>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default CountryCard;