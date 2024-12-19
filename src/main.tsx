import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoute from './routes/app-route.tsx'
import { Toaster } from 'sonner'
import { Page as LazyPage } from './components/lazy/index.tsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LazyPage />}>
        <AppRoute />
      </Suspense>
      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>,
)
