import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/auth/authContext.tsx'
import { KanbanProvider } from './context/kanban/kanbanContext.tsx'
import { ThemeProvider } from './context/theme-context.tsx'
import './index.css'
import { RoutesApp } from './router.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <KanbanProvider>
          <ThemeProvider>
            <BrowserRouter>
              <RoutesApp />
            </BrowserRouter>
          </ThemeProvider>
        </KanbanProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
