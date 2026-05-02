import React from 'react';
import { Globe } from 'lucide-react';

export default function CountrySelector({ countries, selectedCountry, onSelect }) {
  return (
    <div className="country-selector">
      <div className="selector-container">
        <Globe className="selector-icon" size={20} />
        <select 
          value={selectedCountry} 
          onChange={(e) => onSelect(e.target.value)}
          className="selector-dropdown"
        >
          {countries.map(country => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
