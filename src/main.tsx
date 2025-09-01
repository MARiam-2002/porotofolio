
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import APP_CONFIG from './config/app'
import './index.css'

// Create a client with optimized settings for performance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: APP_CONFIG.cache.staleTime,
            cacheTime: APP_CONFIG.cache.cacheTime,
            refetchOnMount: false,
            refetchOnReconnect: false,
        },
        mutations: {
            retry: 1,
        },
    },
})

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
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
)
