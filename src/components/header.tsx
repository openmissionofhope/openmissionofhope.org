'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Container from './container';
import Mark from './mark';

const navigation = [
  { name: 'Our work', href: '/programs' },
  { name: 'In development', href: '/pending' },
  { name: 'Ideas', href: '/brainstorm' },
  { name: 'Transparency', href: '/transparency' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80 sticky top-0 z-40">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Main">
          <Link href="/" className="flex items-center gap-3 -m-1.5 p-1.5" aria-label="Open Mission of Hope, home">
            <Mark />
            <span className="font-serif text-lg font-semibold leading-tight text-ink">Open Mission of Hope</span>
          </Link>

          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink min-h-[44px] min-w-[44px]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:gap-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
                className="text-sm font-semibold leading-6 text-ink hover:text-brand-700 aria-[current=page]:text-brand-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/donate" className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 transition-colors">
              Donate
            </Link>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-line py-3">
            <div className="space-y-1">
              {[...navigation, { name: 'Donate', href: '/donate' }].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className="block rounded-md px-3 py-3 text-base font-semibold text-ink hover:bg-white aria-[current=page]:text-brand-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
