import React from 'react'
import styled from 'styled-components'

import heartIcon from '../../assets/images/likeCard.png'
import storeImage from '../../assets/images/imgstore1.png'
import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'


const ProductsItemsCard = () => {
  return (
    <ProductsSectionItemsCard>

    <ProductsSectionItemsCardImageDiv>
        <ProductsSectionItemsCardImage src={storeImage} />
    </ProductsSectionItemsCardImageDiv>

    <ProductsSectionItemsCardContent>

        <ProductsSectionItemsCardContentInfo>
            <ProductsSectionItemsCardContentInfoPrice>
                <ProductsSectionItemsCardContentInfoPriceCurrent>$99.50</ProductsSectionItemsCardContentInfoPriceCurrent>
                <ProductsSectionItemsCardContentInfoPricePast>$1128.00</ProductsSectionItemsCardContentInfoPricePast>
            </ProductsSectionItemsCardContentInfoPrice>
            <ProductsSectionItemsCardContentInfoStars>
                <ProductsSectionItemsCardContentInfoStarsIcons>
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={greyStarIcon} />
                </ProductsSectionItemsCardContentInfoStarsIcons>
                <ProductsSectionItemsCardContentInfoStarsRate>7.5</ProductsSectionItemsCardContentInfoStarsRate>
            </ProductsSectionItemsCardContentInfoStars>
            <ProductsSectionItemsCardContentInfoDetails>GoPro HERO6 4K Action Camera - Black</ProductsSectionItemsCardContentInfoDetails>
        </ProductsSectionItemsCardContentInfo>

        <ProductsSectionItemsCardContentHeard>
            <ProductsSectionItemsCardContentHeardIcon src={heartIcon} />
        </ProductsSectionItemsCardContentHeard>

    </ProductsSectionItemsCardContent>
</ProductsSectionItemsCard>
  )
}


const ProductsSectionItemsCardContentInfoStarsIcon = styled.img`
    
`
const ProductsSectionItemsCardContentInfoStarsRate = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

/* base-color/orange */

color: #FF9017;

`
const ProductsSectionItemsCardContentInfoStarsIcons = styled.div`
    
`
const ProductsSectionItemsCardContentHeardIcon = styled.img`
    
`
const ProductsSectionItemsCardContentHeard = styled.div`
    
`
const ProductsSectionItemsCardContentInfoDetails = styled.p`
    font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

letter-spacing: -0.2px;

/* base-color/gray-800 */

color: #606060;

`
const ProductsSectionItemsCardContentInfoStars = styled.div`
    display: flex;
    gap: 6px;
`
const ProductsSectionItemsCardContentInfoPricePast = styled.span`
    font-weight: 400;
font-size: 16px;
line-height: 19px;
text-decoration-line: line-through;

/* gray-500 */

color: #8B96A5;
`
const ProductsSectionItemsCardContentInfoPriceCurrent = styled.h4`
    font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */


/* dark */

color: #1C1C1C;
`
const ProductsSectionItemsCardContentInfoPrice = styled.div`
    display: flex;
    gap: 8px;
`
const ProductsSectionItemsCardContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ProductsSectionItemsCardContent = styled.div`
    display: flex;
    padding: 20px;
`
const ProductsSectionItemsCardImage = styled.img`
    
`
const ProductsSectionItemsCardImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const ProductsSectionItemsCard = styled.div`
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`

export default ProductsItemsCard