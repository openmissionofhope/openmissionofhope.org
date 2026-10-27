// Projects shown on the home page and in the footer. Keep these factual: only
// list a project as live when its site is up, and describe what it does today.

export interface LiveProject {
  name: string;
  area: string;
  summary: string;
  site: string;
  source: string;
}

export const LIVE_PROJECTS: LiveProject[] = [
  {
    name: 'Agape',
    area: 'Mutual aid',
    summary:
      'Help freely asked, help freely given. Neighbors in the United States ask for a meal, a ride, a jump start or a place to stay, and volunteers offer it. No payments, no strings.',
    site: 'https://agape.openmissionofhope.org',
    source: 'https://github.com/openmissionofhope/agape',
  },
  {
    name: 'Ebola Watch',
    area: 'Public health',
    summary:
      'Evidence-based monitoring, burden estimates and forecasts for Ebola outbreaks, in 13 languages, with the uncertainty shown on every number.',
    site: 'https://ebolawatch.openmissionofhope.org',
    source: 'https://github.com/openmissionofhope/ebola-watch',
  },
  {
    name: 'Maisha',
    area: 'Health knowledge',
    summary:
      'Short, life-saving messages on health, water and safety, written to work in print, by SMS and on the radio where the internet does not reach.',
    site: 'https://maisha.work',
    source: 'https://github.com/openmissionofhope/maisha-site',
  },
  {
    name: 'Cassava',
    area: 'Food safety',
    summary:
      'Howard Bradbury’s wetting method, explained simply in dozens of languages: a way to remove most of the cyanide from cassava flour with only water and time.',
    site: 'https://cassava.live',
    source: 'https://github.com/openmissionofhope/cassava-wetting',
  },
  {
    name: 'Community Addresses',
    area: 'Addressing',
    summary:
      'Unofficial, community-made addresses on top of OpenStreetMap, so homes and services can be found where official addresses do not exist.',
    site: 'https://communityaddresses.org',
    source: 'https://github.com/openmissionofhope/community_address',
  },
  {
    name: 'Christian Open Source License',
    area: 'Licensing',
    summary:
      'A license that keeps software open while asking that it be used in ways consistent with its purpose. Most of our projects use it.',
    site: 'https://github.com/openmissionofhope/cosl',
    source: 'https://github.com/openmissionofhope/cosl',
  },
];

export const IN_DEVELOPMENT = [
  { name: 'Toivo', summary: 'Transparent donations, receipts and disbursements for mercy work.', href: '/pending#toivo' },
  { name: 'NaloxoneForAll', summary: 'Community-led overdose response: awareness, kits and honest reporting.', href: '/pending#naloxoneforall' },
  { name: 'Heartbeat', summary: 'Alive-and-safe check-ins for people in crisis zones, with records that cannot be altered.', href: '/pending#heartbeat' },
  { name: 'Prayer', summary: 'Weekly prayer alerts for emergencies around the world, edited by a person.', href: '/pending#prayer' },
  { name: 'PurrBuild', summary: 'A free game about rebuilding trust, infrastructure and health in fragile places.', href: '/pending#purrbuild' },
];

export const GITHUB = 'https://github.com/openmissionofhope';

export function domainOf(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}
