import React from 'react'
import styled from 'styled-components'

import ArrowUp from '../../assets/images/Vector3.png'

const ProductsCategories = ({children,title}) => {
  return (
    <ProductsCategoriesList>
        <ProductsCategoriesListHeader>
            <ProductsCategoriesListHeaderText>{title}</ProductsCategoriesListHeaderText>
            <ProductsCategoriesListHeaderIconDiv>
                <ProductsCategoriesListHeaderIcon src={ArrowUp} />
            </ProductsCategoriesListHeaderIconDiv>
        </ProductsCategoriesListHeader>
        {children}
    </ProductsCategoriesList>
  )
}


// const ProductsCategoriesListItemText = styled.h4`
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 19px;

//     padding: 0.7rem 0;

//     color: #505050;
// `
// const ProductsCategoriesListItem = styled.div`

// `
const ProductsCategoriesListHeaderIcon = styled.img`

`
const ProductsCategoriesListHeaderIconDiv = styled.div`

`
const ProductsCategoriesListHeaderText = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 19px;

padding: 1rem 0;

color: #1C1C1C;
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