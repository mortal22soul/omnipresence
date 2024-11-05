import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>View your dashboard here.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
