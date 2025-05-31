<!-- preferred project structure -->

my-app/
├── public/
│ └── vite.svg # Static assets (favicon, etc.)
├── src/
│ ├── assets/ # Images, fonts, animations
│ ├── components/ # Reusable UI components (Button, Header, etc.)
│ ├── features/ # Feature-based folders (e.g. auth, blog)
│ ├── pages/ # Route-level components (Home, About, etc.)
│ ├── layouts/ # Page layout components (Navbar + Footer wrapper)
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions (e.g. dateFormat.ts)
│ ├── styles/ # Tailwind config overrides or global styles
│ ├── types/ # TypeScript types/interfaces
│ ├── App.tsx # Main app component
│ ├── main.tsx # React DOM rendering + entry point
│ └── index.css # Tailwind imports
├── .eslintrc.cjs # ESLint config
├── .prettierrc # Prettier config
├── tailwind.config.js # Tailwind setup
├── tsconfig.json # TypeScript config
├── vite.config.ts # Vite config
└── package.json
