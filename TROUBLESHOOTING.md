# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. NPM Warnings and Deprecation Messages

#### Problem:
```
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
```

#### Solution:
```bash
# Clean install with updated packages
npm run clean
npm install

# Or use the reinstall script
npm run reinstall
```

### 2. TypeScript Errors

#### Problem:
```
Cannot find module 'path' or its corresponding type declarations
Cannot find name '__dirname'
```

#### Solution:
```bash
# Install @types/node
npm install --save-dev @types/node

# Or update the package.json and reinstall
npm run reinstall
```

### 3. Build Failures

#### Problem:
```
Build failed with errors
```

#### Solution:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npx tsc --noEmit

# Check linting errors
npm run lint
```

### 4. ESLint Errors

#### Problem:
```
ESLint configuration errors
```

#### Solution:
```bash
# Update ESLint to latest version
npm install --save-dev eslint@latest

# Update TypeScript ESLint
npm install --save-dev @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

# Run lint with auto-fix
npm run lint -- --fix
```

### 5. Vite Configuration Issues

#### Problem:
```
Vite configuration errors
```

#### Solution:
```bash
# Check Vite version
npm list vite

# Update Vite
npm install --save-dev vite@latest

# Clear Vite cache
rm -rf node_modules/.vite
```

### 6. Memory Issues

#### Problem:
```
JavaScript heap out of memory
```

#### Solution:
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"

# Or add to package.json scripts
"build": "NODE_OPTIONS='--max-old-space-size=4096' tsc && vite build"
```

### 7. Network Issues

#### Problem:
```
Network timeout or connection errors
```

#### Solution:
```bash
# Use a different npm registry
npm config set registry https://registry.npmjs.org/

# Clear npm cache
npm cache clean --force

# Use yarn instead
npm install -g yarn
yarn install
```

### 8. Permission Issues

#### Problem:
```
EACCES: permission denied
```

#### Solution:
```bash
# Fix npm permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

# Or use nvm to manage Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

### 9. Port Already in Use

#### Problem:
```
Port 5173 is already in use
```

#### Solution:
```bash
# Kill process using the port
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### 10. Environment Variables Not Working

#### Problem:
```
Environment variables not loading
```

#### Solution:
```bash
# Create .env.local file
echo "VITE_API_BASE_URL=https://profile-fhvk.vercel.app/api" > .env.local

# Restart development server
npm run dev
```

## Performance Optimization

### 1. Reduce Bundle Size

```bash
# Analyze bundle
npm run build -- --analyze

# Use dynamic imports
import { lazy } from 'react'
const LazyComponent = lazy(() => import('./Component'))
```

### 2. Optimize Images

```bash
# Use WebP format
# Implement lazy loading
# Use responsive images
```

### 3. Code Splitting

```bash
# Route-based splitting
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
```

## Debug Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check TypeScript version
npx tsc --version

# Check Vite version
npx vite --version

# Check all dependencies
npm list --depth=0

# Check for outdated packages
npm outdated

# Update all packages
npm update
```

## Getting Help

1. **Check the logs** - Look for specific error messages
2. **Search GitHub Issues** - Check if others have the same problem
3. **Check documentation** - Review official docs for the packages
4. **Ask for help** - Create an issue with detailed information

## Prevention Tips

1. **Keep packages updated** - Regularly update dependencies
2. **Use lock files** - Commit package-lock.json
3. **Test locally** - Always test before deploying
4. **Use CI/CD** - Automate testing and deployment
5. **Monitor performance** - Use tools like Lighthouse

## Emergency Recovery

If everything is broken:

```bash
# Complete reset
rm -rf node_modules package-lock.json dist
git checkout package.json
npm install
npm run build
```

## Contact Support

If you can't resolve the issue:

1. Check this troubleshooting guide
2. Search GitHub Issues
3. Ask in the community
4. Contact the maintainers
