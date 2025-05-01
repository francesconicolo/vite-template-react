import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { ThemeProvider } from './shared/context/ThemeContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router/Router.tsx';
import './config/i18n.ts';

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
