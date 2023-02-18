import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global Providers
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';
import ProductProvider from './contexts/productContext';

// routes 
import MainRoutes from './routes';

// Error Boundary
import ErrorBoundary from './Errors/ErrorBoundary';


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <ErrorBoundary>
            <ProductProvider>
              <Routes>
                <Route path="/*" element={<MainRoutes />} />
              </Routes>
            </ProductProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
