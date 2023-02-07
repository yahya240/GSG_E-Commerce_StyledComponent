import React from 'react'
import {Routes, Route} from 'react-router-dom';

import { Register, Login, Main, SingleProduct, Products, Cart } from '../pages';
import NotFound from '../Errors/NotFound'

const MainRoutes = () => {
  return (
    <Routes>
        <Route index element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='products' element={<Products />} />
        <Route path='singleProduct' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes