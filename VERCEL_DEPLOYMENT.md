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

### 3. Deploy
```bash
vercel --prod
```

---

## Manual Setup

### 1. Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the `frontend` directory

### 2. Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install --legacy-peer-deps`

### 3. Environment Variables
Add these in Vercel dashboard:
```
VITE_API_BASE_URL=https://profile-fhvk.vercel.app/api
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

---

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "vite"
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

- [ ] Repository is connected to Vercel
- [ ] Build settings are configured
- [ ] Environment variables are set
- [ ] Backend API is deployed and accessible
- [ ] Build completes successfully
- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Mobile responsiveness works
- [ ] Custom domain is configured (optional)

---

## Support

If you encounter issues:

1. Check Vercel build logs
2. Review this troubleshooting guide
3. Check Vercel documentation
4. Contact Vercel support

---

## Success!

Once deployed, your site will be available at:
- `https://your-project.vercel.app`
- Custom domain (if configured)

Remember to:
- Test all functionality
- Check mobile responsiveness
- Monitor performance
- Set up analytics
