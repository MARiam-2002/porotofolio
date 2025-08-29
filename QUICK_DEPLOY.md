# 🚀 Quick Deployment Guide

## GitHub Pages (Recommended)

### 1. Setup Repository
```bash
# Make sure repository is public
# Go to Settings > Pages > Source: GitHub Actions
```

### 2. Deploy
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Access Site
- URL: `https://mahmoudabuelazm.github.io/portfolio-website`
- Custom Domain: `https://mahmoudabuelazm.github.io`

---

## Vercel

### 1. Install CLI
```bash
npm install -g vercel
```

### 2. Deploy
```bash
cd frontend
vercel --prod
```

---

## Netlify

### 1. Build
```bash
cd frontend
npm run build
```

### 2. Deploy
- Drag `dist` folder to Netlify
- Or connect GitHub repository

---

## Firebase

### 1. Install CLI
```bash
npm install -g firebase-tools
```

### 2. Setup
```bash
cd frontend
firebase login
firebase init hosting
```

### 3. Deploy
```bash
npm run build
firebase deploy
```

---

## Environment Variables

Create `.env.local` in frontend directory:
```env
VITE_API_BASE_URL=https://profile-fhvk.vercel.app/api
```

---

## 🛠️ Troubleshooting

### NPM Warnings (Common)
```bash
# These warnings are normal and don't affect functionality
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory
```

### Build Issues
```bash
# Clean install
npm run clean
npm install

# Or use the reinstall script
npm run reinstall
```

### TypeScript Errors
```bash
# Install missing types
npm install --save-dev @types/node

# Check for errors
npx tsc --noEmit
```

### API Issues
- Verify backend is running
- Check CORS settings
- Ensure environment variables are set

### Routing Issues
- Check `vercel.json` or `_redirects` files
- Ensure SPA routing is enabled

### Memory Issues
```bash
# Increase memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

## ✅ Checklist

- [ ] Backend API is deployed and accessible
- [ ] Environment variables are set
- [ ] Build completes successfully
- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are present
- [ ] Analytics is configured (optional)
- [ ] Custom domain is set up (optional)

---

## 📞 Support

If you encounter issues:
1. Check the main `DEPLOYMENT.md` file
2. Check the `TROUBLESHOOTING.md` file
3. Review platform documentation
4. Check GitHub Issues
5. Contact support

---

## 🚨 Emergency Recovery

If everything is broken:
```bash
# Complete reset
rm -rf node_modules package-lock.json dist
git checkout package.json
npm install
npm run build
```
