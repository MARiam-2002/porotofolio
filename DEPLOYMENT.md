# 🚀 Deployment Guide

This guide will help you deploy the frontend application to various platforms.

## 📋 Prerequisites

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Git** repository set up
4. **Backend API** deployed and accessible

## 🔧 Environment Setup

### 1. Environment Variables

Create a `.env.local` file in the frontend directory:

```env
VITE_API_BASE_URL=https://profile-fhvk.vercel.app/api
```

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to verify everything works.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Step 1: Prepare Repository

1. Make sure your repository is public
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"

#### Step 2: Configure GitHub Actions

The workflow file `.github/workflows/deploy.yml` is already configured.

#### Step 3: Deploy

```bash
# Push to main branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The GitHub Action will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

#### Step 4: Access Your Site

Your site will be available at:
- `https://mahmoudabuelazm.github.io/portfolio-website` (if using repository name)
- `https://mahmoudabuelazm.github.io` (if using custom domain)

### Option 2: Vercel

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Deploy

```bash
cd frontend
vercel --prod
```

#### Step 3: Configure

Follow the prompts:
- Set project name
- Set build command: `npm run build`
- Set output directory: `dist`
- Set install command: `npm install`

### Option 3: Netlify

#### Step 1: Build Locally

```bash
cd frontend
npm run build
```

#### Step 2: Deploy

1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect your GitHub repository

#### Step 3: Configure

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: `frontend`

### Option 4: Firebase Hosting

#### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

#### Step 2: Initialize Firebase

```bash
cd frontend
firebase init hosting
```

#### Step 3: Configure

- Select your project
- Set public directory: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

#### Step 4: Deploy

```bash
npm run build
firebase deploy
```

## 🔧 Custom Domain Setup

### GitHub Pages

1. Go to repository Settings > Pages
2. Add custom domain
3. Create CNAME file in `public/` directory
4. Configure DNS records

### Vercel

1. Go to project dashboard
2. Settings > Domains
3. Add custom domain
4. Configure DNS records

### Netlify

1. Go to site settings
2. Domain management
3. Add custom domain
4. Configure DNS records

## 🛠️ Troubleshooting

### Common Issues

#### 1. Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. API Connection Issues

- Verify `VITE_API_BASE_URL` is correct
- Check CORS settings on backend
- Ensure backend is accessible

#### 3. Routing Issues

- Verify `vercel.json` or `_redirects` file exists
- Check base path configuration
- Ensure SPA routing is enabled

#### 4. Environment Variables

- Ensure `.env.local` is in frontend directory
- Variables must start with `VITE_`
- Rebuild after changing environment variables

### Debug Commands

```bash
# Check build output
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## 📊 Performance Optimization

### 1. Build Optimization

```bash
# Analyze bundle size
npm run build -- --analyze
```

### 2. Image Optimization

- Use WebP format
- Implement lazy loading
- Optimize image sizes

### 3. Code Splitting

- Use React.lazy() for route-based splitting
- Implement dynamic imports

## 🔒 Security Considerations

### 1. Environment Variables

- Never commit `.env` files
- Use build-time environment variables
- Validate API URLs

### 2. Content Security Policy

Add CSP headers in deployment platform settings.

### 3. HTTPS

- Enable HTTPS on all platforms
- Redirect HTTP to HTTPS

## 📈 Monitoring

### 1. Analytics

- Google Analytics
- Vercel Analytics
- Netlify Analytics

### 2. Error Tracking

- Sentry
- LogRocket
- Bugsnag

## 🔄 Continuous Deployment

### GitHub Actions

The workflow automatically deploys on push to main branch.

### Vercel

Automatically deploys on push to main branch.

### Netlify

Automatically deploys on push to main branch.

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section
2. Review platform documentation
3. Check GitHub Issues
4. Contact support

## 🎉 Success!

Once deployed, your portfolio will be live and accessible to the world!

Remember to:
- Test all functionality
- Check mobile responsiveness
- Verify API connections
- Monitor performance
- Set up analytics
