import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter } from '../../sections'


const Cart = () => {
  return (
    <CartPage>
      <MainHeader />
      <MainNavbar />
      {/* just space to see footer */}
      <JustSpace>
        CartPage
      </JustSpace>
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
const JustSpace = styled.div`
  max-width: 100vw;
  min-height: 30vh;
`


export default Cart