import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global styles
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';

// pages
import { Register, Login, Main, SingleProduct, Products, Cart, NotFound } from './pages';



function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/singleProduct' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        
      </ThemeProvider>
    </>
  );
}

export default App;
