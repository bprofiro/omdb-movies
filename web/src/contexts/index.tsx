import { BrowserRouter as Router } from 'react-router-dom';
import { PropsWithRequiredChildren } from '@common/types';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './auth';
import { MoviesProvider } from './movies';
import { AppThemeProvider } from './theme';

import 'react-toastify/dist/ReactToastify.css';

export const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <AppThemeProvider>
    <Router>
      <AuthProvider>
        <MoviesProvider>{children}</MoviesProvider>
      </AuthProvider>
      <ToastContainer />
    </Router>
  </AppThemeProvider>
);
