# Web Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite. It presents professional experience, selected projects, activities, technical tools, a downloadable resume, and a contact form.

## Features

- Responsive single-page portfolio layout
- Smooth scrolling powered by Lenis
- Scroll-triggered animations with Motion
- Sections for About, Projects, Activities, Resume, and Contact
- Contact form validation with React Hook Form
- Email delivery through EmailJS
- Google reCAPTCHA protection for the contact form
- Toast notifications with Sonner
- Tailwind CSS styling with shadcn/ui components
- Downloadable CV served from `public/Nattasak_CV.pdf`

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lenis
- React Hook Form
- EmailJS
- Google reCAPTCHA
- ESLint and Prettier

## Requirements

- Node.js 20 or newer recommended
- npm

## Getting started

1. Clone the repository and enter the project directory.

   ```bash
   git clone https://github.com/Nattasak-Chonmanat/web-portfolio
   cd web-portfolio
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and add the contact form configuration:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

   These values are used by the browser-side contact form. Configure the matching EmailJS service/template and reCAPTCHA site key in their respective dashboards. Never commit private credentials or secret keys.

4. Start the development server.

   ```bash
   npm run dev
   ```

   Vite will print the local URL, typically `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
public/             Static images, icons, and downloadable CV
src/
  components/       Portfolio sections and reusable UI components
  constants/        Navigation, project, activity, education, and tool data
  lib/              Shared utilities and animation helpers
  types/            TypeScript data types
  App.tsx           Main page composition
  index.css         Global styles and Tailwind theme
  main.tsx          Application entry point
```

## Customizing the portfolio

- Update portfolio content in `src/constants/index.tsx`.
- Replace images and static files in `public/`.
- Replace `public/Nattasak_CV.pdf` with the current resume, keeping the same filename or updating the resume component accordingly.
- Update social links and navigation items in `src/constants/index.tsx`.
- Update the EmailJS template so its variables match the fields submitted by `src/components/Contact.tsx`.

## Production build

Run the following commands to validate and build the site:

```bash
npm run lint
npm run build
npm run preview
```

The generated static site is placed in `dist/` and can be deployed to any static hosting provider, such as Vercel, Netlify, GitHub Pages, or an equivalent service. Add the `VITE_*` environment variables in the hosting provider's project settings before deploying.

## License

This project is a personal portfolio. Add or replace this section with the license terms you want to apply before redistributing the source code or assets.
