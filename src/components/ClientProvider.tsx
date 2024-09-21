"use client";

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
