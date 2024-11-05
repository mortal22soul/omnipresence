'use client';

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

interface IncidentData {
  incident_type: string;
  location: string;
  time_of_incident: string;
  description: string;
  urgency_level: string;
  witnesses: string;
  additional_comments: string;
  reported_by: string;
  uid: string | null;
}

export default function Orders() {
  const [incidents, setIncidents] = useState<IncidentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/retrieve-incident`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setIncidents(data.retrieved_data.map((item: any) => item.data));
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>View your orders here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Incident Type</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Time of Incident</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Urgency Level</TableHead>
              <TableHead>Witnesses</TableHead>
              <TableHead>Additional Comments</TableHead>
              <TableHead>Reported By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incidents.map((incident, index) => (
              <TableRow key={index}>
                <TableCell>{incident.incident_type}</TableCell>
                <TableCell>{incident.location}</TableCell>
                <TableCell>{incident.time_of_incident}</TableCell>
                <TableCell>{incident.description}</TableCell>
                <TableCell>{incident.urgency_level}</TableCell>
                <TableCell>{incident.witnesses}</TableCell>
                <TableCell>{incident.additional_comments}</TableCell>
                <TableCell>{incident.reported_by}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
