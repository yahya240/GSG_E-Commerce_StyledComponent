import React from 'react'
import styled from 'styled-components'

import heartIcon from '../../assets/images/likeCard.png'
import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'


const ProductsItemsCard = ({currentPrice, pastPrice, rating, details, image}) => {
  return (
    <ProductsSectionItemsCard>

    <ProductsSectionItemsCardImageDiv>
        <ProductsSectionItemsCardImage src={image} />
    </ProductsSectionItemsCardImageDiv>

    <ProductsSectionItemsCardContent>

        <ProductsSectionItemsCardContentInfo>
            <ProductsSectionItemsCardContentInfoPrice>
                <ProductsSectionItemsCardContentInfoPriceCurrent>{currentPrice}</ProductsSectionItemsCardContentInfoPriceCurrent>
                <ProductsSectionItemsCardContentInfoPricePast>{pastPrice}</ProductsSectionItemsCardContentInfoPricePast>
            </ProductsSectionItemsCardContentInfoPrice>
            <ProductsSectionItemsCardContentInfoStars>
                <ProductsSectionItemsCardContentInfoStarsIcons>
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={greyStarIcon} />
                </ProductsSectionItemsCardContentInfoStarsIcons>
                <ProductsSectionItemsCardContentInfoStarsRate>{rating}</ProductsSectionItemsCardContentInfoStarsRate>
            </ProductsSectionItemsCardContentInfoStars>
            <ProductsSectionItemsCardContentInfoDetails>{details}</ProductsSectionItemsCardContentInfoDetails>
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

    color: ${({theme}) => theme.pallet.orangeColor};
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

    color: ${({theme}) => theme.pallet.blackColor2};
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

    color: ${({theme}) => theme.pallet.greyColor4};
`
const ProductsSectionItemsCardContentInfoPriceCurrent = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: ${({theme}) => theme.pallet.blackColor};
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
    width: 100%;
    object-fit: scale-down;
`
const ProductsSectionItemsCardImageDiv = styled.div`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const ProductsSectionItemsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`

export default ProductsItemsCard