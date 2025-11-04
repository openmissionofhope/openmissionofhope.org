import Container from '@/components/container';

export const metadata = {
  title: 'About | Open Mission of Hope',
  description: 'Our mission, values, and approach to humanitarian work.',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Us</h1>

          <div className="prose prose-lg mx-auto">
            <h2>Our Mission</h2>
            <p>
              Open Mission of Hope exists to serve people in crisis through open-source tools,
              transparent operations, and biblical values. We believe that humanitarian work
              should be radically open—every line of code, every dollar, every decision visible
              and accountable.
            </p>

            <h2>Our Values</h2>

            <h3>Faith-Driven</h3>
            <p>
              We're Christians who take both the Great Commission and the Great Commandment
              seriously. Our work is motivated by biblical love and justice, and we're committed
              to integrity even when it's costly.
            </p>

            <h3>Radically Transparent</h3>
            <p>
              Transparency isn't a feature—it's foundational. We build systems where honesty is
              the default, where tracking is automatic, and where anyone can verify what we say
              we're doing.
            </p>

            <h3>Open Source</h3>
            <p>
              All our tools are open-source because mercy work is too important for proprietary
              lock-in. Anyone should be able to audit, fork, improve, or deploy what we build.
            </p>

            <h3>Evidence-Informed</h3>
            <p>
              Good intentions aren't enough. We build on evidence, learn from failure, measure
              outcomes honestly, and adapt when something isn't working.
            </p>

            <h3>Community-Led</h3>
            <p>
              The people closest to a problem usually know the most about solving it. We provide
              infrastructure and standards; local leaders provide knowledge and implementation.
            </p>

            <h2>Our Approach</h2>
            <p>
              We don't operate programs directly in most cases. Instead, we build infrastructure
              that enables others to serve well:
            </p>
            <ul>
              <li>
                <strong>Tools:</strong> Open-source platforms for prayer, knowledge management,
                and transparency
              </li>
              <li>
                <strong>Standards:</strong> Frameworks that protect mission integrity while
                preserving openness
              </li>
              <li>
                <strong>Support:</strong> Technical infrastructure and coordination for
                community-led programs
              </li>
              <li>
                <strong>Transparency:</strong> Systems that make accountability automatic rather
                than aspirational
              </li>
            </ul>

            <h2>Leadership</h2>
            <p>
              Open Mission of Hope is led by a small team of developers, designers, and
              practitioners with backgrounds in software, humanitarian work, and ministry. We're
              supported by advisors with deep expertise in theology, law, public health, and
              international development.
            </p>

            <h2>Our Creed</h2>
            <blockquote>
              <p>
                We believe in one God—Father, Son, and Holy Spirit—and in Jesus Christ as the
                only way to salvation. We affirm the authority of Scripture, the power of prayer,
                and the church's calling to serve "the least of these" with both word and deed.
              </p>
              <p>
                We believe that mercy without transparency breeds corruption, that good systems
                can amplify good intentions, and that open source is a practical expression of
                biblical stewardship.
              </p>
              <p>
                We work for a day when every dollar given for mercy work can be traced from donor
                to impact, when knowledge flows freely to those who need it most, and when the
                global church coordinates its compassion with both faith and evidence.
              </p>
            </blockquote>

            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you—whether you want to contribute, partner, or just learn
              more.
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@openmissionhope.org">hello@openmissionhope.org</a>
            </p>
            <p>
              <strong>Press inquiries:</strong>{' '}
              <a href="mailto:press@openmissionhope.org">press@openmissionhope.org</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
