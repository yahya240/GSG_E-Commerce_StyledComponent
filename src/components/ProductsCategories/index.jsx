import React, { useState } from 'react'
import styled from 'styled-components'

import ArrowUp from '../../assets/images/Vector3.png'

const ProductsCategories = ({children,title}) => {

    const [showContent,setShowContent] = useState(false)

    const toggleShowContent = () => {
        setShowContent(!showContent)
    }

  return (
    <ProductsCategoriesList>
        <ProductsCategoriesListHeader>
            <ProductsCategoriesListHeaderText>{title}</ProductsCategoriesListHeaderText>
            <ProductsCategoriesListHeaderIconDiv onClick={toggleShowContent}>
                <ProductsCategoriesListHeaderIcon showContent={showContent} src={ArrowUp} />
            </ProductsCategoriesListHeaderIconDiv>
        </ProductsCategoriesListHeader>
        {showContent && children}
    </ProductsCategoriesList>
  )
}


const ProductsCategoriesListHeaderIcon = styled.img`
    transform: ${(props)=> props.showContent?  ' ' : "rotate(180deg)"};
`
const ProductsCategoriesListHeaderIconDiv = styled.div`
    margin-right: 14px;
    cursor: pointer;
`
const ProductsCategoriesListHeaderText = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 19px;

padding: 1rem 0;

color: ${({theme}) => theme.pallet.blackColor};
`
const ProductsCategoriesListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProductsCategoriesList = styled.div`
    border-top: 1px solid ${({theme}) => theme.pallet.greyColor2};
`

export default ProductsCategories