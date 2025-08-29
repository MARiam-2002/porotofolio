# 🚀 Vercel Deployment Guide

## Quick Deploy

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy Frontend
```bash
cd frontend
vercel --prod
```

### 4. Deploy Backend (Optional)
```bash
cd ../backend
vercel --prod
```

---

## Manual Setup

### Frontend Setup
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `frontend` directory

**Build Settings**:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install --legacy-peer-deps`

### Backend Setup (Optional)
1. Create another project in Vercel
2. Select the `backend` directory
3. Vercel will automatically detect it as a Node.js project

---

## Environment Variables

### Frontend Environment Variables
Add in Vercel dashboard:
```
VITE_API_BASE_URL=https://your-backend-url.vercel.app/api
```

### Backend Environment Variables
Add in Vercel dashboard:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

## Project Structure

```
portfolio-website/
├── frontend/          # React + Vite app
│   ├── vercel.json    # Frontend config
│   └── ...
└── backend/           # Node.js API
    ├── vercel.json    # Backend config
    └── ...
```

---

## Troubleshooting

### Dependency Resolution Issues
```bash
# Use legacy peer deps
npm install --legacy-peer-deps

# Or force install
npm install --force
```

### Build Failures
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Check for errors
npm run build
```

### ESLint Issues
The project uses ESLint v8 for compatibility. If you see warnings, they're normal and won't affect deployment.

### Runtime Errors
- Frontend: Make sure `vercel.json` doesn't have invalid runtime settings
- Backend: Ensure all environment variables are set

---

## Configuration Files

### Frontend vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "vite"
}
```

### Backend vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "api/index.js"
    }
  ]
}
```

### .npmrc
```
legacy-peer-deps=true
force=true
auto-install-peers=true
```

---

## Common Issues

### 1. ERESOLVE Error
**Problem**: `npm error ERESOLVE unable to resolve dependency tree`

**Solution**: 
- Use `--legacy-peer-deps` flag
- Check package.json for conflicting versions

### 2. Build Timeout
**Problem**: Build takes too long

**Solution**:
- Optimize bundle size
- Remove unused dependencies
- Use Vercel's build cache

### 3. Environment Variables
**Problem**: API calls failing

**Solution**:
- Add `VITE_API_BASE_URL` in Vercel dashboard
- Ensure backend is deployed and accessible

### 4. Runtime Errors
**Problem**: `Function Runtimes must have a valid version`

**Solution**:
- Remove invalid runtime settings from `vercel.json`
- Use correct framework presets

---

## Performance Tips

### 1. Optimize Bundle
```bash
# Analyze bundle size
npm run build -- --analyze
```

### 2. Use Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor Core Web Vitals

### 3. Enable Caching
- Use Vercel's edge caching
- Configure cache headers

---

## Deployment Checklist

### Frontend
- [ ] Repository is connected to Vercel
- [ ] Build settings are configured
- [ ] Environment variables are set
- [ ] Build completes successfully
- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Mobile responsiveness works

### Backend (Optional)
- [ ] Backend project is created in Vercel
- [ ] All environment variables are set
- [ ] API endpoints are working
- [ ] Database connection is established
- [ ] CORS is configured properly

### Integration
- [ ] Frontend can connect to backend API
- [ ] Environment variables point to correct backend URL
- [ ] All API calls work correctly

---

## Support

If you encounter issues:

1. Check Vercel build logs
2. Review this troubleshooting guide
3. Check Vercel documentation
4. Contact Vercel support

---

## Success!

Once deployed, your sites will be available at:
- **Frontend**: `https://your-frontend-project.vercel.app`
- **Backend**: `https://your-backend-project.vercel.app`

Remember to:
- Test all functionality
- Check mobile responsiveness
- Monitor performance
- Set up analytics
