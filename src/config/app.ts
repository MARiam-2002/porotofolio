// Application configuration
export const APP_CONFIG = {
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // App info
  name: 'Mahmoud Ahmed Portfolio',
  version: '1.0.0',
  
  // API configuration
  api: {
    baseURL: process.env.VITE_API_BASE_URL || 'https://portfolio-backend-chi-tan.vercel.app/api',
    timeout: 10000,
  },
  
  // Cache settings
  cache: {
    staleTime: 10 * 60 * 1000, // 10 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
  },
  
  // Error handling
  errorReporting: {
    enabled: process.env.NODE_ENV === 'production',
    logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
  },
  
  // Feature flags
  features: {
    serviceWorker: true,
    offlineMode: true,
    errorBoundary: true,
    performanceMonitoring: process.env.NODE_ENV === 'production',
  },
}

export default APP_CONFIG
