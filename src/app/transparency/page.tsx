import Container from '@/components/container';
import Link from 'next/link';

export const metadata = {
  title: 'Transparency | Open Mission of Hope',
  description: 'Our commitment to open, accountable humanitarian work.',
};

export default function TransparencyPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Transparency</h1>

          <div className="prose prose-lg mx-auto mb-12">
            <p>
              Transparency isn't optional for us—it's foundational. We believe that those who
              give to humanitarian work deserve to know exactly where their money goes and what
              impact it creates.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Toivo: Coming Soon</h2>
            <p className="text-gray-700 mb-4">
              We're building <strong>Toivo</strong>, our blockchain-based transparency platform
              that will provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Instant blockchain receipts for every donation</li>
              <li>Real-time tracking of fund disbursements</li>
              <li>Public dashboards showing program spending</li>
              <li>Milestone-based fund releases with verification</li>
              <li>Immutable records that can't be altered</li>
            </ul>
            <Link
              href="/pending#toivo"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn more about Toivo →
            </Link>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitments</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Open Source</h3>
                  <p className="text-gray-700">
                    All our tools and platforms are open-source, allowing anyone to audit our
                    code and verify our operations.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Public Reporting</h3>
                  <p className="text-gray-700">
                    We publish regular updates on program progress, challenges, and outcomes—not
                    just successes, but lessons learned.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Financial Accountability</h3>
                  <p className="text-gray-700">
                    Every dollar is tracked from donation to disbursement, with clear
                    documentation of how funds are used.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Community Governance</h3>
                  <p className="text-gray-700">
                    Major decisions are made in consultation with our community, with clear
                    communication about priorities and trade-offs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Interim Reporting</h2>
              <p className="text-gray-700 mb-4">
                While we build Toivo, we're committed to manual transparency:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Quarterly financial reports via email to donors</li>
                <li>Program updates posted to our blog</li>
                <li>Annual summary reports published publicly</li>
                <li>Direct communication available anytime</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Questions about our finances or operations?
            </p>
            <a
              href="mailto:transparency@openmissionhope.org"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              transparency@openmissionhope.org
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
