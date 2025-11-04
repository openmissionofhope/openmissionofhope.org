# Open Mission of Hope

> Prayer, knowledge, and transparent mercy.

A Next.js static website for Open Mission of Hope—a Christian, open-source humanitarian initiative. Built with radical transparency, biblical values, and practical compassion.

## Tech Stack

- **Next.js 14+** (App Router) with static export
- **TypeScript** for type safety
- **TailwindCSS** with Typography plugin for styling
- **Contentlayer** for MDX content management
- **next-seo** for SEO optimization

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

The site will be available at `http://localhost:3000`

## Project Structure

```
/content
  /programs       # Active program MDX files
  /ideas          # Incubator idea MDX files
  /updates        # Blog post MDX files
/src
  /app            # Next.js app router pages
  /components     # Reusable React components
  /styles         # Global styles
```

## Active Programs

1. **Prayer Site** - Weekly prayer alerts for global emergencies
2. **Maisha** - Knowledge commons for health and community resilience
3. **NaloxoneForAll** - Community-led overdose response

## Incubator Projects

Key incubating projects include:
- **Toivo** - Blockchain-based transparency platform (Priority 0, pinned)
- **Christian Open Source License** - Mission-aligned licensing
- **PurrBuild** - Educational simulation game
- **Project Elisha** - Open-source prefab housing

## Adding Content

### New Program

Create a new `.mdx` file in `content/programs/`:

```mdx
---
title: "Program Name"
slug: "program-slug"
summary: "Brief description"
status: "active"
owner: "Organization Name"
---

Your program content here...
```

### New Idea

Create a new `.mdx` file in `content/ideas/`:

```mdx
---
title: "Idea Name"
slug: "idea-slug"
summary: "Brief description"
stage: "incubating" # or "brainstorm"
priority: 10 # lower = higher priority (0 = pinned)
owner: "Owner Name"
tags: ["tag1", "tag2"]
---

Your idea content here...
```

### New Update

Create a new `.mdx` file in `content/updates/`:

```mdx
---
title: "Update Title"
slug: "update-slug"
date: 2024-01-15
summary: "Brief summary"
---

Your update content here...
```

## Building for Production

```bash
# Build the static site
npm run build
```

The static site will be generated in the `out` directory, ready for deployment to any static hosting platform (Vercel, Netlify, Cloudflare Pages, etc.).

## Accessibility

This site is built with accessibility in mind:
- Semantic HTML structure
- Keyboard navigation support
- Skip-to-content link
- Focus indicators
- WCAG AA compliance target

## License

All code is open-source. Content is © Open Mission of Hope.

## Contact

- General: hello@openmissionhope.org
- Transparency: transparency@openmissionhope.org
- Finance: finance@openmissionhope.org

## Mission

We believe humanitarian work should be radically transparent, completely open-source, and rooted in biblical values. Every project we build is open-source, every dollar is traceable, and every decision is guided by faith and evidence.
