'use client';
// pages/index.tsx (or any other page)
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false // Disable server-side rendering for the map
});

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Your Location on the Map
        </h1>
        {/* <Map /> */}
      </div>
    </div>
  );
};

export default HomePage;
