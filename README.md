# LazyStack

**Your Ultimate Developer Toolkit Guide for Modern Workflows**

A curated collection of cutting-edge development, design, and AI tools presented in a beautifully crafted, fully responsive web application. Built with Next.js 14, TypeScript, and Tailwind CSS to help developers discover and access powerful tools that eliminate boilerplate code and supercharge productivity.

![LazyStack Hero](https://img.shields.io/badge/Next.js-14.2.23-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## Project Overview

LazyStack is a comprehensive developer tools directory that showcases 50+ premium tools across three main categories: Development, Design, and AI. The platform features an immersive user experience with GSAP-powered animations, real-time search functionality, and a sophisticated dark/light theme system.

**Target Audience:** Developers, designers, and tech enthusiasts seeking high-quality tools to enhance their workflows and stay updated with modern development ecosystems.

---

## Key Features

### Core Functionality

- **Curated Tool Collection**: 50+ hand-picked tools across Development, Design, and AI categories
- **Advanced Search & Filter**: Real-time search with category filtering and alphabetical sorting
- **Smart Pagination**: Dynamic tool loading with smooth scroll-to-section navigation
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Theme Switching**: Seamless dark/light mode with persistent user preference

### User Experience

- **GSAP Animations**: Fluid, professional-grade animations throughout the interface
- **Loading Screen**: Custom terminal-style loading animation with typewriter effects
- **Interactive Jumbotron**: Animated hero section with parallax mouse tracking and feature cards
- **Tool Cards**: Rich cards with benefits, highlights, categories, and direct links
- **Smooth Scrolling**: Polyfilled smooth scroll behavior across all browsers

### Technical Highlights

- **TypeScript**: Full type safety across the entire codebase
- **Custom Hooks**: Reusable logic for pagination, filtering, animations, and scroll behavior
- **Context API**: Global state management for loading and theme preferences
- **Radix UI**: Accessible, unstyled UI components for dialogs, dropdowns, and more
- **Next.js 14**: Server-side rendering, image optimization, and App Router architecture

---

## Tech Stack

### Core Framework

- **Next.js 14.2.23** - React framework with App Router and SSR
- **React 18** - UI library with modern hooks and concurrent features
- **TypeScript 5** - Static type checking and enhanced IDE support

### Styling & UI

- **Tailwind CSS 3** - Utility-first CSS framework
- **Radix UI** - Headless UI components (Dialog, Dropdown, Accordion, Tabs, etc.)
- **Lucide React** - Beautiful, consistent icon library
- **next-themes** - Theme management with system preference detection
- **class-variance-authority** - Type-safe variant composition
- **tailwind-merge** - Intelligent Tailwind class merging
- **tailwindcss-animate** - Pre-built animation utilities

### Animation & Interaction

- **GSAP 3.12** - Professional-grade animation library
- **react-type-animation** - Typewriter text effects
- **smoothscroll-polyfill** - Cross-browser smooth scrolling

### Additional Libraries

- **cmdk** - Command menu component
- **embla-carousel-react** - Lightweight carousel library
- **react-hook-form** - Performant form validation
- **tempo-devtools** - Development debugging tools

### Development Tools

- **Prettier** - Code formatting with Tailwind plugin
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

---

## Installation & Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/znarf-y/LazyStack.git
   cd LazyStack
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

The optimized production build will be generated in the `.next` directory.

---

## Usage

### Navigation

- **Navbar**: Click category links (Development, Design, AI) to scroll to respective sections
- **Search**: Press `⌘LS` or click the search button to open the global search dialog
- **Theme Toggle**: Switch between dark and light modes using the theme toggle button
- **Tool Cards**: Click "Try Now" on any tool card to visit the tool's website

### Search & Filter

1. Open the search dialog (⌘LS or click search button)
2. Type to search tools by name (minimum 3 characters)
3. Filter by category: Suggested, Development, Design, or AI
4. Toggle alphabetical sorting with the A-Z button
5. Click any result to open the tool in a new tab

### Pagination

- Each category displays 6 tools per page by default
- Use the pagination controls at the bottom of each section
- Page numbers and progress indicators show current position

---

## Architecture Overview

### Folder Structure

```
LazyStack/
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── layout.tsx           # Root layout with providers
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles & CSS variables
│   │
│   ├── components/              # React components (modular)
│   │   ├── Cards/              # ToolCard, CategoryBadge, etc.
│   │   ├── Categories/         # ToolCategories, Pagination
│   │   ├── Footer/             # Footer components
│   │   ├── Jumbotron/          # Hero section components
│   │   ├── Loading/            # LoadingScreen, Terminal
│   │   ├── Navbar/             # Navigation components
│   │   ├── Search-Dialog/      # Search & filter components
│   │   ├── Theme-Provider/     # Theme toggle & provider
│   │   └── ui/                 # Radix UI component wrappers
│   │
│   ├── constants/              # Static data
│   │   ├── data.ts            # Export aggregator
│   │   ├── development-tools.data.ts
│   │   ├── design-tools.data.ts
│   │   └── ai-tools.data.ts
│   │
│   ├── context/               # React Context providers
│   │   └── Loading.tsx        # Loading state management
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCategoryTools.ts      # Pagination logic
│   │   ├── useToolsFilter.ts        # Search & filter logic
│   │   ├── useJumbotronEffects.ts   # GSAP animations
│   │   ├── useNavbarScroll.ts       # Scroll detection
│   │   ├── usePageLoading.ts        # Page load state
│   │   ├── useToolCardAnimation.ts  # Card hover effects
│   │   ├── useTypewriterEffect.ts   # Typewriter animation
│   │   └── useClickOutside.ts       # Outside click detection
│   │
│   ├── types/                 # TypeScript definitions
│   │   ├── tool-types.ts      # Tool & component interfaces
│   │   ├── search-types.ts    # Search-related types
│   │   ├── jumbotron-types.ts # Hero section types
│   │   └── terminal-types.ts  # Terminal animation types
│   │
│   ├── config/               # Configuration files
│   │   ├── jumbotron.ts     # Hero section settings
│   │   └── loading.ts       # Loading screen config
│   │
│   └── lib/                 # Utility functions
│       └── utils.ts        # Class merging utilities
│
├── public/                 # Static assets
│   ├── assets/            # Tool icons & images
│   │   ├── ai/
│   │   ├── design/
│   │   └── development/
│   └── images/
│
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind customization
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies & scripts
```

### Component Hierarchy & Data Flow

```
RootLayout (providers)
└── ThemeProvider
    └── LoadingProvider
        └── SmoothScrollProvider
            └── Page (main)
                ├── Navbar
                │   ├── SearchDialog
                │   │   └── useToolsFilter (search/filter logic)
                │   └── useNavbarScroll (scroll tracking)
                │
                ├── Jumbotron
                │   └── useJumbotronEffects (GSAP animations)
                │
                ├── ToolCategories (x3: Dev, Design, AI)
                │   ├── useCategoryTools (pagination)
                │   └── ToolCard (x6 per page)
                │       └── useToolCardAnimation
                │
                └── Footer
```

### State Management Strategy

**Context API** is used for global application state:

1. **LoadingContext** (`context/Loading.tsx`)

   - Manages initial loading screen visibility
   - Provides `isLoading`, `setIsLoading`, and `showLoadingFor` methods
   - Displays custom terminal animation during app initialization

2. **ThemeProvider** (next-themes)

   - Manages dark/light theme preference
   - Persists user choice to localStorage
   - Provides system theme detection

3. **SmoothScrollProvider**
   - Polyfills smooth scrolling for all browsers
   - Ensures consistent scroll behavior across platforms

**Custom Hooks** encapsulate reusable logic:

- `useCategoryTools` - Pagination state and tool visibility management
- `useToolsFilter` - Search query, category filtering, and sorting logic
- `useJumbotronEffects` - GSAP timeline animations, mouse tracking, typewriter effect
- `useNavbarScroll` - Scroll position tracking, active section detection
- `useToolCardAnimation` - Individual card hover and entrance animations

### Data Architecture

Tools are stored as typed objects in three category-specific files:

```typescript
// src/constants/development-tools.data.ts
export const developmentTools: ToolData[] = [
  {
    title: "Cursor",
    description: "AI-powered code editor...",
    icon: "/assets/development/cursor-icon.png",
    category: "Development",
    benefits: ["AI-driven code prediction", ...],
    highlight: "Predictive",
    link: "https://www.cursor.com/"
  },
  // ... more tools
];
```

**Type Safety:**

- `ToolData` interface defines the source data structure
- `Tool` interface represents the runtime component props
- Data is mapped at the page level to ensure type consistency

**Data Flow:**

1. Static tool data imported from `constants/data.ts`
2. Mapped to `Tool` interface in `page.tsx`
3. Passed to `ToolCategories` component
4. Filtered and paginated via `useCategoryTools` hook
5. Rendered as individual `ToolCard` components

---

## Design System

### Color Palette

- **Primary**: Purple gradient (`#8a3ffc` to `#6023c0`)
- **Background (Dark)**: `#050508`, `#0c0914`, `#080810`
- **Background (Light)**: `#f7f7fa`, `#f0f0f7`, `#e8e8f0`
- **Accent**: Purple `265 89% 70%` (HSL)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale with gradient text effects
- **Body**: Regular weight, optimized for readability

### Spacing & Layout

- **Container**: Max-width 7xl (1280px) with responsive padding
- **Grid**: CSS Grid with responsive columns (1-3 columns)
- **Sections**: Full viewport height hero, auto-height categories

### Animation Principles

- **Duration**: 0.2s - 1s for UI interactions, 2s+ for hero animations
- **Easing**: `power3.out` for GSAP, Tailwind's default for CSS
- **Stagger**: 0.1s - 0.2s delays for sequential element reveals

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use Prettier for code formatting (`npm run format`)
- Maintain component modularity
- Add proper TypeScript types for new features

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Next.js** team for the incredible React framework
- **Vercel** for seamless deployment and hosting
- **Radix UI** for accessible component primitives
- **GSAP** for professional animation capabilities
- All the amazing tool creators featured in LazyStack

---

## Contact

For questions, feedback, or collaboration opportunities, please reach out through:

- **GitHub Issues**: [Submit an issue](https://github.com/znarf-y/LazyStack/issues)
- **Website**: [LazyStack](https://lazystack.vercel.app)

---

**Built with ❤️ by developers, for developers.**
