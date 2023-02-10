import React from 'react'
import styled from 'styled-components'


import { SingleProductItemImages, SingleProductItemSupplier, SingleProductItemDetails } from '../../components'

const SingleProductItem = () => {
  return (
    <SingleProductItemSection>
        <SingleProductItemImages />
        <SingleProductItemDetails />
        <SingleProductItemSupplier />
    </SingleProductItemSection>
  )
}


const SingleProductItemSection = styled.div`
    display: grid;
    grid-template-columns: 30% 42% 1fr;
    gap: 20px;

    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding: 20px 20px 40px;
`

export default SingleProductItem