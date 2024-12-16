import Link from 'next/link';
import Features from '@/components/Features';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
        <h1 className="text-5xl font-bold md:text-7xl">Omnipresence</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Empowering Safety, Everywhere.
        </p>
        <p className="mt-2 text-md md:text-lg max-w-lg">
          Our tech ecosystem is designed to provide a seamless layer of
          protection for women, leveraging real-time monitoring, intelligent
          alerts, and proactive solutions.
        </p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-purple-600 font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-purple-600 font-semibold hover:bg-opacity-90 transition"
          >
            Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100 text-gray-900">
        {/* <h2 className="text-3xl font-bold text-center">
          Why Choose Omnipresence?
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Real-Time Monitoring</h3>
            <p className="mt-2 text-gray-600">
              Stay informed with real-time location tracking and live alerts
              designed to offer peace of mind.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Active Alerts</h3>
            <p className="mt-2 text-gray-600">
              Intelligent notifications ensure that help is always within reach,
              wherever you are.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p className="mt-2 text-gray-600">
              Our platform uses predictive analytics to identify and mitigate
              potential risks.
            </p>
          </div>
        </div> */}
        <Features></Features>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 bg-purple-600 text-white">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-purple-500 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-lg">
              "Omnipresence has given me the confidence to go anywhere with
              peace of mind!"
            </p>
            <p className="mt-4 font-semibold">- Sarah W.</p>
          </div>
          <div className="p-6 bg-purple-500 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-lg">
              "The real-time alerts are a lifesaver. I feel protected and
              empowered!"
            </p>
            <p className="mt-4 font-semibold">- Priya K.</p>
          </div>
          <div className="p-6 bg-purple-500 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="text-lg">
              "With Omnipresence, I know help is just a tap away. Highly
              recommended!"
            </p>
            <p className="mt-4 font-semibold">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Join Omnipresence Today
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
          Join us in creating a safer world. Start using Omnipresence today and
          experience peace of mind, everywhere.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-block rounded-full bg-purple-600 px-8 py-4 text-white font-semibold hover:bg-purple-700 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
