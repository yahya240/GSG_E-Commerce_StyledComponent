import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainFooter, DiscountBar, CartPayment } from '../../sections'
import { Container } from '../../components'


const Cart = () => {
  return (
    <CartPage>
      <MainHeader />
      <Container>
        <CartHeader>My cart (3)</CartHeader>
        <CartPayment />
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

// just space to see footer
const CartHeader = styled.h2`
  margin-top: 27px;
`


export default Cart