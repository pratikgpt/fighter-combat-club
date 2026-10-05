# fighter-combat-club

A one-page website built for Fighter Combat Club, an MMA gym in Kandivali West, Mumbai.

## What's on the page

- **Hero** with the gym's location and a free-trial call to action
- **Stats bar**: members trained, Google rating, levels and training days
- **Program**: one MMA program that rotates through boxing, Brazilian jiu-jitsu, wrestling and Muay Thai
- **Coach**: the head coach's background and Instagram link
- **Schedule**: a sample week, opening hours, facilities and a photo of the gym
- **Contact**: the free-trial form, phone number, address, map and social links
- A floating WhatsApp button that slides in after two seconds

## Free-trial form

The site has no backend. Submitting the form opens WhatsApp with the visitor's name, phone number and chosen program
filled in, addressed to the gym's number, so the request reaches the gym when the visitor taps send.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open http://localhost:5173. `npm run build` type-checks the code and builds the site into `dist/`, and
`npm run lint` runs oxlint.

## Built with

React 19, TypeScript, Vite 8, Tailwind CSS 4, Framer Motion and lucide-react.

Photos of the gym and the coach belong to Fighter Combat Club.
