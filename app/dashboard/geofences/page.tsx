'use client';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

interface GeofenceData {
  id: number;
  created_at: string;
  center_lat: number;
  center_long: number;
  radius_meters: number;
}

export default function Geofences() {
  const [geofences, setGeofences] = useState<GeofenceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeofences = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/geofence_coordinates`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setGeofences(data.geofences);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeofences();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col  gap-2">
            <CardTitle>Geofences</CardTitle>
            <CardDescription>
              View the geofence coordinates here.
            </CardDescription>
          </div>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <Link
              className="sr-only sm:not-sr-only sm:whitespace-nowrap"
              href="/dashboard/add-geofence"
            >
              Add Geofences
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Center Latitude</TableHead>
              <TableHead>Center Longitude</TableHead>
              <TableHead>Radius (Meters)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {geofences.map((geofence) => (
              <TableRow key={geofence.id}>
                <TableCell>{geofence.id}</TableCell>
                <TableCell>
                  {new Date(geofence.created_at).toLocaleString()}
                </TableCell>
                <TableCell>{geofence.center_lat}</TableCell>
                <TableCell>{geofence.center_long}</TableCell>
                <TableCell>{geofence.radius_meters}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
