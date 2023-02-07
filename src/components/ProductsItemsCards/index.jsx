import React from 'react'
import styled from 'styled-components'

import {ProductsItemsCard, ProductsItemsCard2} from '../'




const ProductsItemsCards = ({ grid }) => {
  if(grid){
    return (
      <ProductsSectionItemsCards>
          <ProductsItemsCard />
          <ProductsItemsCard />
          <ProductsItemsCard />
          <ProductsItemsCard />
          <ProductsItemsCard />
          <ProductsItemsCard />
      </ProductsSectionItemsCards>
    )
  }
  return (
    <ProductsSectionItemsCards2>
        <ProductsItemsCard2 />
        <ProductsItemsCard2 />
        <ProductsItemsCard2 />
        <ProductsItemsCard2 />
        <ProductsItemsCard2 />
        <ProductsItemsCard2 />
    </ProductsSectionItemsCards2>
  )
}




const ProductsSectionItemsCards2 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    } */

    margin-top: 20px;
`
const ProductsSectionItemsCards = styled.div`
    /* display: grid;
    grid-template-columns: 1fr;
    gap: 10px; */

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    margin-top: 20px;
`

export default ProductsItemsCards