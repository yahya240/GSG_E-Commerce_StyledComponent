import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, Subscribe } from '../../sections'

const Products = () => {
  return (
    <ProductsPage>
      <MainHeader />
      <MainNavbar />
      {/* just space to see footer */}
      <JustSpace>
        ProductsPage
      </JustSpace>
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

// just space to see footer
const JustSpace = styled.div`
  max-width: 100vw;
  min-height: 30vh;
`

export default Products