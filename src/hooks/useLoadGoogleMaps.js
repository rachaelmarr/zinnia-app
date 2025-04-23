// src/hooks/useLoadGoogleMaps.js
import { useEffect } from 'react';

export const useLoadGoogleMaps = () => {
  useEffect(() => {
    if (window.google) return;

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
};
