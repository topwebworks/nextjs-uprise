# TWW Next.js Client Site Template

A Next.js site template built on the Resonance theme (Bootstrap 5). Clone this repo to start a new client site.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Commands

```bash
npm run dev
npm run build
npm run start
```

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build locally.

## Project Structure

- `app/` - site pages and route-level files
- `components/` - reusable page sections and UI components
- `data/` - site settings, navigation, services, and content helpers
- `public/` - images, fonts, CSS, and static assets
- `lib/` and `utils/` - shared utilities

## Common Updates

All business information (phone, email, address, social links, services) is set in `data/settings.js` — that is the only file to edit for a new client.

Navigation and footer links are driven automatically from `data/settings.js`.

Images and static assets are stored in `public/assets/tww-assets/`.

## Deployment

Build the project before deploying:

```bash
npm run build
```

This site is designed to be deployed as a standard Next.js application.
