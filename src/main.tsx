
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import './index.css'

// Loading fallback component
const LoadingFallback = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Loading Portfolio...</p>
        </div>
    </div>
)

// Create a client with optimized settings for performance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0, // Disable retries to prevent infinite loops
            refetchOnWindowFocus: false,
            staleTime: 10 * 60 * 1000, // 10 minutes
            cacheTime: 30 * 60 * 1000, // 30 minutes
            refetchOnMount: false,
            refetchOnReconnect: false,
            retryOnMount: false,
        },
        mutations: {
            retry: 0,
        },
    },
})

// Initialize app with error handling
const initializeApp = () => {
    try {
        const rootElement = document.getElementById('root')
        if (!rootElement) {
            throw new Error('Root element not found')
        }

        const root = ReactDOM.createRoot(rootElement)
        root.render(
            <React.StrictMode>
                <Suspense fallback={<LoadingFallback />}>
                    <QueryClientProvider client={queryClient}>
                        <BrowserRouter basename="/">
                            <App />
                            <Toaster
                                position="top-right"
                                toastOptions={{
                                    duration: 4000,
                                    style: {
                                        background: 'var(--toast-bg)',
                                        color: 'var(--toast-color)',
                                        border: '1px solid var(--toast-border)',
                                    },
                                    success: {
                                        iconTheme: {
                                            primary: '#10b981',
                                            secondary: '#ffffff',
                                        },
                                    },
                                    error: {
                                        iconTheme: {
                                            primary: '#ef4444',
                                            secondary: '#ffffff',
                                        },
                                    },
                                }}
                            />
                        </BrowserRouter>
                    </QueryClientProvider>
                </Suspense>
            </React.StrictMode>
        )
    } catch (error) {
        console.error('Failed to initialize app:', error)
        // Fallback: Show error message in the root element
        const rootElement = document.getElementById('root')
        if (rootElement) {
            rootElement.innerHTML = `
                <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); font-family: system-ui, -apple-system, sans-serif;">
                    <div style="text-align: center; padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 400px;">
                        <div style="width: 48px; height: 48px; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                            <span style="color: white; font-size: 24px;">⚠</span>
                        </div>
                        <h1 style="color: #1f2937; margin-bottom: 0.5rem; font-size: 1.5rem; font-weight: bold;">Loading Error</h1>
                        <p style="color: #6b7280; margin-bottom: 1.5rem;">Unable to load the portfolio. Please refresh the page.</p>
                        <button onclick="window.location.reload()" style="background: #3b82f6; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 500; cursor: pointer;">
                            Refresh Page
                        </button>
                    </div>
                </div>
            `
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp)
} else {
    initializeApp()
}
