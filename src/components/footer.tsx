import Link from 'next/link';
import { GITHUB, LIVE_PROJECTS } from '@/lib/projects';
import Container from './container';
import Mark from './mark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Mark className="h-8 w-8" />
              <span className="font-serif text-lg font-semibold">Open Mission of Hope</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">Prayer, knowledge, and transparent mercy.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Live projects</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {LIVE_PROJECTS.map((p) => (
                <li key={p.name}>
                  <a href={p.site} className="text-muted hover:text-brand-700">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">The mission</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted hover:text-brand-700">About</Link></li>
              <li><Link href="/pending" className="text-muted hover:text-brand-700">In development</Link></li>
              <li><Link href="/brainstorm" className="text-muted hover:text-brand-700">Ideas</Link></li>
              <li><Link href="/transparency" className="text-muted hover:text-brand-700">Transparency</Link></li>
              <li><Link href="/updates" className="text-muted hover:text-brand-700">Updates</Link></li>
              <li><Link href="/donate" className="text-muted hover:text-brand-700">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-ink">Open source</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={GITHUB} className="text-muted hover:text-brand-700">All code on GitHub</a></li>
              <li><a href="https://github.com/openmissionofhope/cosl" className="text-muted hover:text-brand-700">Christian Open Source License</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line py-6 text-sm text-muted">© {currentYear} Open Mission of Hope</div>
      </Container>
    </footer>
  );
}
