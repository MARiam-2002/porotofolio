# Mahmoud Ahmed Portfolio - Frontend

This is the frontend application for Mahmoud Ahmed's portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Beautiful and responsive design with Tailwind CSS
- **Multi-language Support**: Arabic and English with RTL support
- **Dark/Light Theme**: Toggle between dark and light modes
- **Animations**: Smooth animations with Framer Motion
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for fast loading

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Axios** - HTTP Client
- **Lucide React** - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MahmoudAbuelazm/portfolio-website.git
cd portfolio-website/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

## 🌐 Environment Variables

Create a `.env.local` file in the frontend directory:

```env
VITE_API_BASE_URL=https://profile-fhvk.vercel.app/api
```

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run deploy:vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to Netlify

## 📁 Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── contexts/     # React contexts
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Page components
│   ├── services/     # API services
│   ├── types/        # TypeScript types
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
Update the content in the components and translation files.

### Styling
Modify the CSS classes in the components to match your design.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌍 Internationalization

The website supports:
- **English** (LTR)
- **Arabic** (RTL)

Translation files are located in `src/contexts/LanguageContext.tsx`.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages
- `npm run deploy:vercel` - Deploy to Vercel

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: mahmoudabuelazem2467@gmail.com
- **GitHub**: [@MahmoudAbuelazm](https://github.com/MahmoudAbuelazm)
- **LinkedIn**: [Mahmoud Abu Elazem](https://linkedin.com/in/mahmoud-abu-elazem)
