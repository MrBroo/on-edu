'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '../theme/index';

const ClientThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <ThemeProvider 
        theme={createTheme({
          direction: 'ltr',
          responsiveFontSizes: true,
          mode: 'light',
        })}
      >
      <CssBaseline />
        {children}
      </ThemeProvider>
    );
  };
  
  export default ClientThemeProvider;