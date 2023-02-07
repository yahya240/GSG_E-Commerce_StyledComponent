import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global styles
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';

// routes 
import MainRoutes from './routes';

// pages
// import { Register, Login, Main, SingleProduct, Products, Cart } from './pages';
// import NotFound from './Errors/NotFound'


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
