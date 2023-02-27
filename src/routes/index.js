import React,{lazy} from 'react'
import {Routes, Route} from 'react-router-dom';

// import { Register, Login, Main, SingleProduct, Products, Cart } from '../pages';
// import NotFound from '../Errors/NotFound'

import { ProtectedRoute } from '../components';
const Register = lazy(()=> import('../pages/Register'));
const Login = lazy(()=> import('../pages/Login'));
const Main = lazy(()=> import('../pages/Main'));
const SingleProduct = lazy(()=> import('../pages/SingleProduct'));
const Products = lazy(()=> import('../pages/Products'));
const Cart = lazy(()=> import('../pages/Cart'));
const NotFound = lazy(()=> import('../Errors/NotFound'));

const MainRoutes = () => {
  return (
    <Routes>
        <Route index element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='products' element={<Products />} />
        <Route path='singleProduct' element={<SingleProduct />} />
        <Route path='cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes