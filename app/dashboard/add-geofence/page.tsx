'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastProvider } from '@/components/ui/toast';
import { useToast } from '@/components/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function LocationForm() {
  const [formData, setFormData] = useState({
    location: '',
    radius: ''
  });

  const { toast } = useToast(); // ShadCN Toast hook to handle messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const location = formData.location;
    const radius_meters = formData.radius;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/add-geofence`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            location,
            radius_meters
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to add geofence: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Geofence added successfully:', result);

      toast({
        title: 'Success',
        description: 'Geofence added successfully!'
      });

      // Clear the form fields after successful submission
      setFormData({ location: '', radius: '' });
    } catch (error) {
      console.error('Error adding geofence:', error);

      toast({
        title: 'Error',
        description: 'Failed to add geofence. Please try again.',
        variant: 'destructive'
      });
    }
  };

  return (
    <>
      <ToastProvider>
        <Card>
          <CardHeader>
            <CardTitle>Add Geofence</CardTitle>
            <CardDescription>Add a new geofence location.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center min-h-20">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 shadow-md rounded-lg max-w-md w-full"
              >
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="radius">Radius (meters)</Label>
                  <Input
                    type="number"
                    step="any"
                    id="radius"
                    name="radius"
                    placeholder="Enter radius"
                    value={formData.radius}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full mt-4">
                  Submit
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </ToastProvider>
      <Toaster />
    </>
  );
}
