'use client';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    // Get user's current location using geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error(error);
          alert('Error fetching location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  if (!location) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-gray-500">Loading map...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-96">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
