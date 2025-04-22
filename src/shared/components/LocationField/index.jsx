// src/shared/components/LocationField/index.jsx
import React, { useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import usePlacesAutocomplete from 'use-places-autocomplete';

export default function LocationField({ value, onChange, placeholder = 'Anywhere', disabled = false }) {
  const inputRef = useRef(null);
  const {
    ready,
    value: inputValue,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({ requestOptions: { componentRestrictions: { country: 'us' } } });

  useEffect(() => {
    setValue(value || '');
  }, [value]);

  const handleInput = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const handleSelect = (suggestion) => {
    setValue(suggestion, false);
    onChange(suggestion);
    clearSuggestions();
  };

  return (
    <div className="relative w-full min-w-[200px]">
      <div
        className={`h-9 px-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400
          flex items-center gap-2 hover:bg-neutral-100 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <FaMapMarkerAlt className="text-slate-500 w-4 h-4" />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder={placeholder}
          disabled={disabled || !ready}
          className="flex-1 text-sm font-[Montserrat] text-slate-600 placeholder:text-slate-400 bg-transparent border-none outline-none"
        />
      </div>
      {status === 'OK' && data.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border border-slate-300 bg-white shadow-md">
          {data.map(({ place_id, description }) => (
            <div
              key={place_id}
              onClick={() => handleSelect(description)}
              className="px-3 py-2 text-sm font-[Montserrat] text-slate-600 hover:bg-neutral-100 cursor-pointer"
            >
              {description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
