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
              We build open-source tools and communities to serve people in crisis—with
              radical transparency, biblical values, and practical compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                See Our Work
              </Link>
              <Link
                href="/transparency"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
              >
                Transparency
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What We Do</h2>

            {/* COSL */}
            <div className="rounded-lg border border-gray-200 p-6 mb-6 hover:shadow-md transition-shadow">
              <Link href="/programs/cosl" className="group">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  Christian Open Source License
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A biblically inspired license family that guards against value drift while preserving openness.
                </p>
              </Link>
            </div>

            {/* Maisha-sphere */}
            <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50/30 p-6 mb-6">
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-2">
                  Maisha-sphere
                </span>
                <p className="text-sm text-gray-600">
                  Practical knowledge for health and resilience in Sub-Saharan Africa, curated by the people who need it most.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/programs/maisha" className="group block rounded-lg border border-emerald-200 bg-white p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Maisha</h4>
                  <p className="text-sm text-gray-600">Open knowledge commons for health, WASH, and community resilience.</p>
                </Link>
                <Link href="/programs/cassava" className="group block rounded-lg border border-emerald-200 bg-white p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Cassava</h4>
                  <p className="text-sm text-gray-600">Spreading Howard Bradbury's wetting method to make cassava safe.</p>
                </Link>
              </div>
            </div>

            {/* Community Addresses */}
            <div className="rounded-lg border border-gray-200 p-6 mb-6 hover:shadow-md transition-shadow">
              <Link href="/programs/community-addresses" className="group">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  Community Addresses
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  An unofficial OpenStreetMap address overlay so every home and business can be found.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* In the Pipeline */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">In the Pipeline</h2>
            <p className="text-gray-600">
              Projects we're actively developing toward launch.
            </p>
          </div>
          <div className="mx-auto max-w-3xl flex flex-wrap gap-3 justify-center">
            {[
              { name: 'Toivo', href: '/pending#toivo', desc: 'On-chain transparency' },
              { name: 'Heartbeat', href: '/pending#heartbeat', desc: 'Alive/safe check-ins' },
              { name: 'Prayer Site', href: '/pending#prayer', desc: 'AI-curated prayer alerts' },
              { name: 'NaloxoneForAll', href: '/pending#naloxoneforall', desc: 'Overdose response' },
              { name: 'PurrBuild', href: '/pending#purrbuild', desc: 'Rebuilding simulation' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center rounded-full bg-yellow-50 border border-yellow-200 px-4 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-100 transition-colors"
                title={item.desc}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/pending"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View all pending projects →
            </Link>
          </div>
        </Container>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-white">
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
