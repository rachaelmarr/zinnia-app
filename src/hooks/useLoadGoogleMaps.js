// src/hooks/useLoadGoogleMaps.js
import { useEffect, useState } from 'react';

export const useLoadGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(!!window.google);

  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);

    document.body.appendChild(script);
  }, []);

  return isLoaded;
};
