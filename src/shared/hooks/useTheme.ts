import { useContext } from 'react';
import { ThemeProviderContext } from 'src/shared/context/ThemeContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
