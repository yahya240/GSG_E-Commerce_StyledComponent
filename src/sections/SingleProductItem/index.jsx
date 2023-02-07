import React from 'react'
import styled from 'styled-components'

// import flagicon from '../../assets/images/flag.png'
// import worldwide from '../../assets/images/worldwide.png'
// import verify from '../../assets/images/verify.png'
// import clothing3Img from '../../assets/images/clothing3.png'
// import clothing4Img from '../../assets/images/clothing4.png'
// import clothing5Img from '../../assets/images/clothing5.png'
// import clothing6Img from '../../assets/images/clothing6.png'

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

    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding: 20px 20px 40px;
`

export default SingleProductItem