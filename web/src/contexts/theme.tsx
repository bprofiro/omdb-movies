import { createContext } from 'react';

import { PropsWithRequiredChildren } from '@common/types';
import { GlobalStyle, theme } from '@styles';
import { ThemeProvider } from 'styled-components';

export const AppThemeContext = createContext({});

export const AppThemeProvider = ({ children }: PropsWithRequiredChildren) => {
  return (
    <ThemeProvider theme={theme.dark}>
      <AppThemeContext.Provider value={{}}>{children}</AppThemeContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
