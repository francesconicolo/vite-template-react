import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ThemeProvider } from './components/hooks/theme-provider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router/router.tsx';
import './i18n/i18n.ts';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
