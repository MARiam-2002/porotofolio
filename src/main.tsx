
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ErrorBoundary>
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
    </ErrorBoundary>,
)
