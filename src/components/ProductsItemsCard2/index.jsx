import React from 'react'
import styled from 'styled-components'

import heartIcon from '../../assets/images/likeCard.png'
import storeImage from '../../assets/images/imgstore1.png'
import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'


const ProductsItemsCard2 = () => {
  return (
    <ProductsSectionItemsCard>

    <ProductsSectionItemsCardImageDiv>
        <ProductsSectionItemsCardImage src={storeImage} />
    </ProductsSectionItemsCardImageDiv>

    <ProductsSectionItemsCardContent>

        <ProductsSectionItemsCardContentInfo>
            <ProductsSectionItemsCardContentInfoDetails>GoPro HERO6 4K Action Camera - Black</ProductsSectionItemsCardContentInfoDetails>
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
                <ProductsSectionItemsCardContentInfoStarsOrders>154 orders</ProductsSectionItemsCardContentInfoStarsOrders>
                <ProductsSectionItemsCardContentInfoStarsShipping>Free Shipping</ProductsSectionItemsCardContentInfoStarsShipping>
            </ProductsSectionItemsCardContentInfoStars>
            <ProductsSectionItemsCardContentInfoDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</ProductsSectionItemsCardContentInfoDescription>
            <ProductsSectionItemsCardContentInfoViewMore>View details</ProductsSectionItemsCardContentInfoViewMore>
        </ProductsSectionItemsCardContentInfo>

        <ProductsSectionItemsCardContentHeard>
            <ProductsSectionItemsCardContentHeardIcon src={heartIcon} />
        </ProductsSectionItemsCardContentHeard>

    </ProductsSectionItemsCardContent>
    </ProductsSectionItemsCard>

  )
}


const ProductsSectionItemsCardContentInfoViewMore = styled.div`
    font-weight: 500;
font-size: 16px;
line-height: 19px;

/* base-color/blue */

color: #0D6EFD;
`
const ProductsSectionItemsCardContentInfoDescription = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

letter-spacing: -0.2px;

/* gray-600 */

color: #505050;
`
const ProductsSectionItemsCardContentInfoStarsShipping = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #00B517;

`
const ProductsSectionItemsCardContentInfoStarsOrders = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

/* gray-500 */

color: #8B96A5;
`
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
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 138% */


/* dark */

color: #1C1C1C;

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
    justify-content: space-between;
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
    display: grid;
    grid-template-columns: 1fr 5fr;
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`

export default ProductsItemsCard2