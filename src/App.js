import { Suspense } from 'react';
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

// components
import { Loading } from './components';


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <ErrorBoundary>
            <ProductProvider>
              <AuthProvider>
                <Routes>
                  <Route path="/*" element={<Suspense fallback={<Loading />}><MainRoutes /> </Suspense>} />
                </Routes>
              </AuthProvider>
            </ProductProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
