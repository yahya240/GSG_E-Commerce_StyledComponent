import { createContext, useContext } from 'react';
import useCart from '../hooks/useCart';

const productContext = createContext(null);

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductProvider = ({ children }) => {
  const cart = useCart();
  return <productContext.Provider value={cart}>{children}</productContext.Provider>;
};

export default ProductProvider;