import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, DiscountBar, RelatedProducts, ProductsPath, SingleProductItem, SingleProductDetails } from '../../sections'
import { Container } from '../../components'

const SingleProduct = () => {
  return (
    <SingleProductPage>
      <MainHeader />
      <MainNavbar />
      <Container>
        <ProductsPath />
        <SingleProductItem />
        <SingleProductDetails />
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


export default SingleProduct