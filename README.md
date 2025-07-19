# Siscora Platform

A modern web application built with Next.js 13+ and TypeScript, featuring Progressive Web App (PWA) capabilities for an enhanced user experience.

## Features

- 🚀 Next.js 13+ with App Router
- ⚡ Progressive Web App (PWA) support
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Offline support with service workers
- 📦 Optimized for production

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/siscora-platform.git
   cd siscora-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Generate app icons (required for PWA):
   ```bash
   npm run generate-icons
   # or
   yarn generate-icons
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## PWA Features

This application is a Progressive Web App with the following features:

- 📱 Installable on mobile and desktop
- 🔄 Offline support
- ⚡ Fast loading with service workers
- 🎨 Custom splash screens
- 🔔 Push notifications (ready to be implemented)

For more details about the PWA implementation, see [PWA-README.md](./PWA-README.md).

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Other Platforms

This application can be deployed to any platform that supports Node.js and static file serving. Make sure to:

1. Set `NODE_ENV=production` in your environment variables
2. Run `npm run build` before starting the server
3. Ensure HTTPS is properly configured for PWA features

## Learn More

To learn more about the technologies used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Next.js PWA Documentation](https://github.com/shadowwalker/next-pwa) - PWA plugin for Next.js
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style your app with Tailwind CSS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
