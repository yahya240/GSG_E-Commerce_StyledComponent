import React from 'react'
import styled from 'styled-components'

import arrowRightIcon from '../../assets/images/Vector4.png'

const ProductsPath = () => {
  return (
    <ProductsPathSection>
        <ProductsPathText>Home</ProductsPathText>
        <ProductsPathDiv>
            <ProductsPathIconDiv>
                <ProductsPathIcon src={arrowRightIcon} />
            </ProductsPathIconDiv>
            <ProductsPathText>Clothings</ProductsPathText>
        </ProductsPathDiv>
        <ProductsPathDiv>
            <ProductsPathIconDiv>
                <ProductsPathIcon src={arrowRightIcon} />
            </ProductsPathIconDiv>
            <ProductsPathText>Men’s wear</ProductsPathText>
        </ProductsPathDiv>
        <ProductsPathDiv>
            <ProductsPathIconDiv>
                <ProductsPathIcon src={arrowRightIcon} />
            </ProductsPathIconDiv>
            <ProductsPathText>Summer clothing</ProductsPathText>
        </ProductsPathDiv>
    </ProductsPathSection>
  )
}

const ProductsPathDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const ProductsPathIcon = styled.img`
    
`
const ProductsPathIconDiv = styled.div`
    
`

const ProductsPathText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.greyColor4};
    margin-right: 10px;

    cursor: pointer;
`
const ProductsPathSection = styled.div`
    display: flex;
    align-items: center ;
    margin: 20px 0;
`

export default ProductsPath