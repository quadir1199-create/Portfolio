# Portfolio Website for Abdul Quadir

## Overview

This is a portfolio website for Abdul Quadir, a Senior Software Engineer and Mobile Team Lead with 11+ years of expertise in Android and Flutter development. The application is built as a single-page application showcasing professional experience, skills, projects, education, and contact information. The website features an innovative, modern design with smooth animations, interactive elements, and his professional photo prominently displayed.

## Recent Changes (August 2025)

- **Enhanced Design**: Transformed from standard template to innovative modern portfolio with advanced animations and interactive elements
- **Professional Photo Integration**: Added Abdul's professional photo to hero section with animated floating tech icons and decorative effects
- **Interactive Features**: Implemented rotating job titles, animated skill progress bars, glassmorphism project cards, and smart navigation with active section tracking
- **Updated Role**: Changed "Tech Lead" to "Mobile Team Lead" throughout the website
- **Projects Update**: Replaced Tapestri project with Postfit fitness application
- **Modern Styling**: Added backdrop blur effects, gradient animations, and responsive mobile design

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:

- **Component Structure**: Organized into reusable UI components using shadcn/ui design system with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming and consistent design tokens
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Build System**: Vite for development and production builds with TypeScript support

### Backend Architecture
The backend follows a minimal REST API approach:

- **Framework**: Express.js with TypeScript for the server
- **Architecture Pattern**: Simple route-based architecture with middleware for logging and error handling
- **File Serving**: Static file serving for resume downloads and asset management
- **Development Setup**: Vite middleware integration for hot reloading in development

### Data Storage Solutions
The application uses a hybrid storage approach:

- **Database Schema**: Drizzle ORM with PostgreSQL dialect for potential user management features
- **In-Memory Storage**: MemStorage class implementation for development and simple data persistence
- **Static Assets**: File-based storage for resume PDF and other attached assets

### Authentication and Authorization
Currently implements a basic user schema with:

- **User Model**: Simple username/password structure using Drizzle schema definitions
- **Storage Interface**: IStorage interface pattern allowing for easy switching between storage implementations
- **Session Management**: Infrastructure in place for future session handling (connect-pg-simple dependency)

### Development and Build Pipeline
The application uses a monorepo structure with shared configurations:

- **TypeScript Configuration**: Shared tsconfig with path aliases for clean imports
- **Build Process**: Separate client and server build processes with ESM modules
- **Development Server**: Integrated development setup with Vite serving the frontend and Express serving the API
- **Asset Management**: Structured asset organization with proper file serving capabilities

The architecture prioritizes simplicity and maintainability while providing a solid foundation for future enhancements such as contact forms, project galleries, or blog functionality.

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript for component development
- **UI Components**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS for utility-first styling with PostCSS processing
- **Icons**: Font Awesome for icon sets and Lucide React for additional icons
- **State Management**: TanStack React Query for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation
- **Utilities**: clsx and class-variance-authority for conditional styling

### Backend Dependencies
- **Server Framework**: Express.js for REST API and static file serving
- **Database**: Drizzle ORM with PostgreSQL support (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution and Vite integration

### Build and Development Tools
- **Build System**: Vite for frontend bundling and development server
- **Database Management**: Drizzle Kit for schema management and migrations
- **TypeScript**: Full TypeScript support across client and server
- **Replit Integration**: Specialized Vite plugins for Replit development environment

### External Services
- **Database Provider**: Configured for Neon Database (PostgreSQL-compatible serverless database)
- **Asset Hosting**: Local file serving for resume downloads and static assets
- **Font Loading**: Google Fonts integration for Inter font family
- **CDN Resources**: Font Awesome icons loaded via CDN