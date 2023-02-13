import React from 'react'
import styled from 'styled-components'

import { ProductsSectionCategories,ProductsSectionItems } from '../../components'


const ProductsSection = () => {
  return (
    <ProductsSectionContainer>
        <ProductsSectionCategories />
        <ProductsSectionItems />
    </ProductsSectionContainer>
  )
}



const ProductsSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 12px;

  margin-bottom: 10rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`


export default ProductsSection