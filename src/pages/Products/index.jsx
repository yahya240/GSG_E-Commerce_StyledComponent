import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, Subscribe, ProductsPath, ProductsSection } from '../../sections'

import { Container } from '../../components'

const Products = () => {
  return (
    <ProductsPage>
      <MainHeader />
      <MainNavbar />
      <Container>
        <ProductsPath />
        <ProductsSection />
      </Container>
      <Subscribe />
      <MainFooter />
    </ProductsPage>
  )
}


// main styles 
const ProductsPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({theme}) => theme.pallet.greyColor3};
`


export default Products