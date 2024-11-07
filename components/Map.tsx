'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

// Fix for the default marker icon path issue with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

export default function MapWithGeofence() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Card className="p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">
        User Location with 500m Geofence
      </h2>
      {location ? (
        <MapContainer
          center={location}
          zoom={15}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location} />
          <Circle
            center={location}
            radius={500}
            pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.2 }}
          />
        </MapContainer>
      ) : (
        <p>Loading location...</p>
      )}
    </Card>
  );
}
