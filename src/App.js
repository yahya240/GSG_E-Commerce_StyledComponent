import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global styles
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';

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
            <Routes>
              <Route path="/*" element={<MainRoutes />} />
            </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
