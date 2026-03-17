# Overview

This is a portfolio website built as a full-stack web application showcasing the work and skills of Devivaraprasad Killampudi, a web developer. The application features a modern React frontend with a Node.js/Express backend, designed to present personal information, projects, skills, and contact details in an attractive, responsive format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme with accent colors
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload setup with Vite integration for development mode
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful API structure with `/api` prefix routing

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Schema**: User management system with username/password authentication
- **Database**: Configured for Neon Database (PostgreSQL-compatible)
- **Migrations**: Automated schema management through Drizzle Kit

## Styling and Design System
- **Component System**: Radix UI primitives wrapped with custom styling
- **Theme**: Dark theme with custom color palette including accent (#158f76) and primary (#2756eb) colors
- **Typography**: Inter font family with support for multiple weights
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS-based animations and transitions for smooth user experience

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack React Query for state management
- **Build Tools**: Vite with React plugin, TypeScript compilation, PostCSS for CSS processing
- **Backend**: Express.js, Neon Database serverless PostgreSQL driver

## UI and Styling
- **Component Library**: Comprehensive set of Radix UI primitives (accordion, dialog, dropdown, toast, etc.)
- **CSS Framework**: Tailwind CSS with autoprefixer, custom CSS variables theming system
- **Icons**: Lucide React icons, React Icons for brand icons (GitHub, LinkedIn, etc.)
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## Data and Validation
- **ORM**: Drizzle ORM with Drizzle Zod integration for type-safe database operations
- **Validation**: Zod schema validation, React Hook Form resolvers for form handling
- **Database**: Neon Database serverless PostgreSQL, connect-pg-simple for session management

## Development Tools
- **Type Safety**: TypeScript throughout the stack with comprehensive type definitions
- **Code Quality**: ESLint and Prettier configurations (implied by project structure)
- **Development**: Replit-specific development plugins and runtime error handling
- **Utilities**: Class Variance Authority for component variants, clsx and Tailwind Merge for className handling

## External Services Integration
- **Form Handling**: Formspree integration for contact form submissions
- **Image Hosting**: Unsplash for profile images and placeholder content
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

## Specialized Libraries
- **Carousel**: Embla Carousel React for image/content carousels
- **Command Palette**: cmdk for search and command functionality
- **Date Handling**: date-fns for date manipulation and formatting
- **Utilities**: nanoid for unique ID generation, various utility libraries for enhanced functionality