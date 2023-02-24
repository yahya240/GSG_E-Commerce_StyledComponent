import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global Providers
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';
import ProductProvider from './contexts/productContext';
import AuthProvider from './contexts/authContext';
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
              <AuthProvider>
                <Routes>
                  <Route path="/*" element={<MainRoutes />} />
                </Routes>
              </AuthProvider>
            </ProductProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
