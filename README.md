# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern UI/UX**: Built with React 18 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Rich UI components using Radix UI
- **Full-Stack**: Express.js backend with React frontend
- **Real-time**: WebSocket support for live features
- **Database**: Drizzle ORM with PostgreSQL support
- **Authentication**: Passport.js integration
- **Form Handling**: React Hook Form with Zod validation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations
- **React Query** - Server state management
- **Wouter** - Lightweight routing

### Backend
- **Express.js** - Fast, unopinionated web framework
- **Node.js** - JavaScript runtime
- **TypeScript** - Type-safe backend development
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Reliable database
- **Passport.js** - Authentication middleware
- **WebSockets** - Real-time communication

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESBuild** - Extremely fast JavaScript bundler
- **Drizzle Kit** - Database migrations and schema management
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📁 Project Structure

```
ResumeSite/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database operations
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schemas
├── attached_assets/        # Portfolio assets (PDFs, images)
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional for full features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ResumeSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_database_url_here
   SESSION_SECRET=your_session_secret_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5000](http://localhost:5000)

## 📝 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm start`** - Start production server
- **`npm run check`** - Run TypeScript type checking
- **`npm run db:push`** - Push database schema changes

## 🌐 Deployment

### Local Development
The development server runs on port 5000 with hot reloading enabled.

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption secret

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `client/src/index.css` for global styles
- Component-specific styles in individual component files

### Content
- Update portfolio information in component files
- Replace assets in `attached_assets/` directory
- Modify sections in `client/src/components/`

### Database
- Update schemas in `shared/schema.ts`
- Modify database operations in `server/storage.ts`
- Run migrations with `npm run db:push`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Replit AI](https://replit.com/ai)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)

## 📞 Contact

Abdul Quadir - [Your Email/Contact Info]

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

⭐ Star this repository if you found it helpful!
