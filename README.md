# Aspire Card Management App

A modern React TypeScript application for managing company cards, built with performance and accessibility in mind.

## Deployment

This application is deployed on Netlify. The production build is automatically deployed when changes are pushed to the main branch.

[![Netlify Status](https://api.netlify.com/api/v1/badges/853ed0aa-398b-4936-b44f-ccbefad0490e/deploy-status)](https://app.netlify.com/projects/aspire-card/deploys)

## Features

- 💳 Card management dashboard
- 🔄 Real-time balance updates
- 📱 Responsive design for mobile and desktop
- ♿ Accessibility-first approach
- ⚡ Performance optimized
- 🎨 Modern UI with Tailwind CSS

## Live Demo

Check out the live application at: [https://aspire-card.netlify.app/](https://aspire-card.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn (v1.22 or higher)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/nitishmittal1990/aspire.git
cd aspire
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## Project Structure

```
aspire-app/
├── src/
│   ├── api/          # API services and mock data
│   ├── components/   # React components
│   │   ├── common/   # Shared components
│   │   └── domain/   # Feature-specific components
│   ├── hooks/        # Custom React hooks
│   ├── interface/    # TypeScript interfaces
│   ├── layout/       # Layout components
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main application component
│   └── main.tsx      # Application entry point
├── public/           # Static assets
└── index.html        # HTML template
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- Prettier
