# The Unfuck'd Paradigm

A coaching practice for men in transition - separation, identity collapse, and the work of rebuilding.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Lucide Icons

## Deploy to Vercel

1. Push this code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Import Project"
4. Connect your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Install dependencies with `pnpm`
- Build the project with `pnpm run build`
- Deploy the `dist` folder
- Provide you with a live URL

## Custom Domain

To use your own domain (e.g., theunfuckdparadigm.com):

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records at your domain provider (Strato, etc.)
5. Vercel provides the DNS records you need

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (won't work in Figma Make, but works locally)
pnpm run dev

# Build for production
pnpm run build
```

## Notes

- All images and video are in `/public` folder
- The site is a static single-page application
- Contact form currently doesn't submit - integrate with a service like Formspree or Netlify Forms
