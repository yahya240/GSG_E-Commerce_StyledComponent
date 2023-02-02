import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, DiscountBar, RelatedProducts } from '../../sections'
import { Container } from '../../components'

const SingleProduct = () => {
  return (
    <SingleProductPage>
      <MainHeader />
      <MainNavbar />
      <Container>
        {/* just space to see footer */}
        <JustSpace>
          SingleProductPage
        </JustSpace>
        <RelatedProducts />
      </Container>
      <DiscountBar />
      <MainFooter />

    </SingleProductPage>
  )
}

// main styles 
const SingleProductPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({theme}) => theme.pallet.greyColor3};
`

// just space to see footer
const JustSpace = styled.div`
  max-width: 100vw;
  min-height: 30vh;
`


export default SingleProduct