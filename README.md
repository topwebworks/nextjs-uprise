# AMW Hardscape Solutions Website

A Next.js website for AMW Hardscape Solutions.

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

Business information such as phone number, email, service areas, social links, and legal details can be updated in `data/site.js`.

Navigation and footer links can be updated in the files inside `data/`.

Images and static assets are stored in `public/assets/`.

## Deployment

Build the project before deploying:

```bash
npm run build
```

This site is designed to be deployed as a standard Next.js application.
