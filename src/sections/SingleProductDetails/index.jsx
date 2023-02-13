import React from 'react'
import styled from 'styled-components'

import { SingleProductRelatedProducts, SingleProductDetailsInfo } from '../../components'


const SingleProductDetails = () => {
  return (
    <SingleProductDetailsSection>
        <SingleProductDetailsInfo />
        <SingleProductRelatedProducts />
    </SingleProductDetailsSection>
  )
}

const SingleProductDetailsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 17.5rem;
    gap: 20px;

    margin: 20px 0;

    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
    }
`

export default SingleProductDetails