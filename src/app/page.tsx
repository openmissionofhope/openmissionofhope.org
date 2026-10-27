import Link from 'next/link';
import Container from '@/components/container';
import { GITHUB, IN_DEVELOPMENT, LIVE_PROJECTS, domainOf } from '@/lib/projects';

const PRINCIPLES = [
  {
    title: 'Open by default',
    text: 'The code for our live projects is public. Anyone can read it, check it, improve it, or run it themselves.',
  },
  {
    title: 'Honest about limits',
    text: 'We show uncertainty, label what has not been verified, and say plainly when a service cannot help yet.',
  },
  {
    title: 'Help for everyone',
    text: 'Help never depends on anyone’s faith, background or ability to pay. Nobody is asked to believe anything to receive it.',
  },
  {
    title: 'Dignity and privacy',
    text: 'We collect as little as we can and never sell data. People in need are neighbors, not a market.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">A Christian, open-source humanitarian mission</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl">
                Prayer, knowledge, and transparent mercy.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                We build free tools for people in crisis — outbreak monitoring, life-saving health messages,
                safer food, addresses for the unmapped, and neighbor-to-neighbor help — and we publish the code so
                anyone can check our work.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className="btn-primary">See what’s live</a>
                <a href={GITHUB} className="btn-secondary">Read the code</a>
              </div>
            </div>

            <aside className="lg:col-span-5" aria-labelledby="live-now">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
                <h2 id="live-now" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  </span>
                  Live now
                </h2>
                <ul className="mt-5 divide-y divide-line">
                  {LIVE_PROJECTS.filter((p) => p.site !== p.source).map((p) => (
                    <li key={p.name}>
                      <a href={p.site} className="group flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <span className="shrink-0 font-semibold text-ink group-hover:text-brand-700">{p.name}</span>
                        <span className="break-all text-sm text-muted group-hover:text-brand-700 sm:truncate">{domainOf(p.site)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Live projects */}
      <section id="work" className="scroll-mt-20 border-y border-line bg-white py-16 sm:py-24" aria-labelledby="work-title">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Our work</p>
            <h2 id="work-title" className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Tools people can use today
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Each one is free to use and built in the open.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIVE_PROJECTS.map((p) => (
              <li key={p.name} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{p.area}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-muted">{p.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                  {p.site !== p.source ? (
                    <>
                      <a href={p.site} className="text-brand-700 hover:text-brand-900">
                        {domainOf(p.site)} <span aria-hidden="true">→</span>
                      </a>
                      <a href={p.source} className="text-muted hover:text-ink">
                        Source<span className="sr-only"> code for {p.name}</span>
                      </a>
                    </>
                  ) : (
                    <a href={p.source} className="text-brand-700 hover:text-brand-900">
                      Read the license <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-24" aria-labelledby="how-title">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 id="how-title" className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Mercy you can check
            </h2>
          </div>
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="border-t-2 border-brand-700 pt-5">
                <dt className="font-serif text-lg font-semibold text-ink">
                  <span className="mr-2 text-brand-700" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  {p.title}
                </dt>
                <dd className="mt-3 leading-7 text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-brand-900 py-16 text-white sm:py-24" aria-labelledby="why-title">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="why-title" className="eyebrow !text-brand-200">Why we do this</h2>
            <figure className="mt-6">
              <blockquote className="font-serif text-2xl leading-snug sm:text-3xl">
                “He has shown you, O man, what is good. And what does the LORD require of you but to act justly,
                to love mercy, and to walk humbly with your God?”
              </blockquote>
              <figcaption className="mt-4 text-brand-200">Micah 6:8 (Berean Standard Bible)</figcaption>
            </figure>
            <div className="mt-10 space-y-4 text-lg leading-8 text-brand-100">
              <p>
                We are Christians, and this work is how we try to love our neighbors as Christ loved us: practically,
                honestly, and without asking anything in return.
              </p>
              <p>
                Everyone is welcome to use what we build, whatever their faith or none. No one is ever asked to pray,
                attend anything or share our beliefs in order to receive help.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-flex font-semibold text-white underline decoration-brand-200 underline-offset-4 hover:decoration-white">
              More about who we are
            </Link>
          </div>
        </Container>
      </section>

      {/* In development */}
      <section className="py-16 sm:py-24" aria-labelledby="dev-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">In development</p>
              <h2 id="dev-title" className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                What we are building next
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Not launched yet. We will say so plainly until each one is ready to rely on.
              </p>
              <Link href="/pending" className="mt-6 inline-flex font-semibold text-brand-700 hover:text-brand-900">
                All projects in development <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            <ul className="divide-y divide-line border-y border-line lg:col-span-8">
              {IN_DEVELOPMENT.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="group grid gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                    <span className="font-semibold text-ink group-hover:text-brand-700">{p.name}</span>
                    <span className="text-muted sm:col-span-2">{p.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Get involved */}
      <section className="border-t border-line bg-white py-16 sm:py-24" aria-labelledby="join-title">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Get involved</p>
            <h2 id="join-title" className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              There is a place for you in this
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-semibold">Help a neighbor</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">
                Offer a ride, a meal or an hour of your time to people near you through Agape. You choose what, when
                and whether.
              </p>
              <a href="https://agape.openmissionofhope.org/volunteer" className="btn-primary mt-6 self-start">Volunteer with Agape</a>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-semibold">Build with us</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">
                Developers, translators, health workers and reviewers: every project takes contributions on GitHub,
                and native-speaker review is especially needed.
              </p>
              <a href={GITHUB} className="btn-secondary mt-6 self-start">Contribute on GitHub</a>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-serif text-xl font-semibold">Pray</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">
                Pray for the people these tools serve, for the volunteers who carry them, and for wisdom to build them
                well.
              </p>
              <Link href="/about" className="btn-secondary mt-6 self-start">Our beliefs</Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
