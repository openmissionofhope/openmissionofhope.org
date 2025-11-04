import Container from '@/components/container';

export const metadata = {
  title: 'Donate | Open Mission of Hope',
  description: 'Support transparent, faith-driven humanitarian work.',
};

export default function DonatePage() {
  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Support Our Work</h1>

          <div className="prose prose-lg mx-auto mb-12">
            <p>
              Every dollar you give supports open-source humanitarian tools, transparent
              operations, and faith-driven service to people in crisis.
            </p>
            <p>
              We're committed to radical transparency. Once our Toivo blockchain receipt system
              launches, you'll be able to trace every donation from contribution to impact.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Make a Donation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
                title="Coming soon"
              >
                Donate via Stripe
              </button>
              <button
                className="inline-flex items-center justify-center rounded-md bg-[#0070ba] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#005a93] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
                title="Coming soon"
              >
                Donate via PayPal
              </button>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Payment integration coming soon
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Bank Transfer</h3>
                <p className="text-sm">
                  Contact us at{' '}
                  <a href="mailto:finance@openmissionhope.org" className="text-blue-600 hover:text-blue-700">
                    finance@openmissionhope.org
                  </a>{' '}
                  for wire transfer details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Cryptocurrency</h3>
                <p className="text-sm">
                  We accept donations in cryptocurrency. Email us for wallet addresses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Tax Receipts</h3>
                <p className="text-sm">
                  Tax acknowledgment letters are provided manually while we build our automated
                  system. Please allow 2-3 weeks after your donation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Questions about giving? We're happy to talk.
            </p>
            <a
              href="mailto:hello@openmissionhope.org"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              hello@openmissionhope.org
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
