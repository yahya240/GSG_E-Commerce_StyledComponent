import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainFooter, DiscountBar, CartPayment, CartPamentFeatures, CartSavedForLater } from '../../sections'
import { Container } from '../../components'


const Cart = () => {
  return (
    <CartPage>
      <MainHeader />
      <Container>
        <CartHeader>My cart (3)</CartHeader>
        <CartPayment />
        <CartPamentFeatures />
        <CartSavedForLater />
      </Container>
      <DiscountBar />
      <MainFooter />

    </CartPage>
  )
}


// main styles 
const CartPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({theme}) => theme.pallet.greyColor3};
`

const CartHeader = styled.h2`
  margin-top: 27px;
`


export default Cart