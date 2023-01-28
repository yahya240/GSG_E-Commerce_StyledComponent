import { ThemeProvider } from 'styled-components';
import {Routes, Route} from 'react-router-dom';

// global styles
import { lightTheme } from './global/themes';
import GlobalStyle from './global/globalStyle';

// pages
import { Register,Login } from './pages';
// import { Login } from './pages';


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {/* <h1>styled component project</h1>
         */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        
      </ThemeProvider>
    </>
  );
}

export default App;
