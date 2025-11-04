import Link from 'next/link';
import Container from '@/components/container';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Open Mission of Hope
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Prayer, knowledge, and transparent mercy.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              We're building open-source tools and communities to serve people in crisis—with
              radical transparency, biblical values, and practical compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Explore Programs
              </Link>
              <Link
                href="/updates"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                Get Updates
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                We believe that humanitarian work should be open, transparent, and rooted in
                biblical principles. Every project we build is open-source, every dollar is
                traceable, and every decision is guided by faith and evidence.
              </p>
              <p>
                From prayer networks that surface global needs, to knowledge commons for health
                and resilience, to blockchain-based transparency tools—we're building
                infrastructure for a new kind of mercy work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you want to pray, contribute skills, or support our work financially,
              there's a place for you in this mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
