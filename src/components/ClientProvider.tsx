"use client";

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

import { ReactNode } from 'react';

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  return (
    <ThemeProvider theme={theme} >
      {children}
    </ThemeProvider>
  );
}
