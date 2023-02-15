import React from 'react'
import styled from 'styled-components'

const RecommendedItemsCard = ({image,price,text}) => {
  return (
    <RecommendedItemsCardDiv>
        <RecommendedItemsCardImageDiv>
            <RecommendedItemsCardImage src={image} />
        </RecommendedItemsCardImageDiv>
        <RecommendedItemsCardPrice>${price}</RecommendedItemsCardPrice>
        <RecommendedItemsCardText>{text}</RecommendedItemsCardText>
    </RecommendedItemsCardDiv>
  )
}

const RecommendedItemsCardText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    padding: 0 16px 9px;

    color: ${({theme}) => theme.pallet.greyColor4};
`
const RecommendedItemsCardPrice = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    padding: 0 16px;

    color: ${({theme}) => theme.pallet.blackColor};

`
const RecommendedItemsCardImage = styled.img`
    object-fit: contain;
`
const RecommendedItemsCardImageDiv = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px 0 14px;
    padding: 1rem 1.5rem;
`
const RecommendedItemsCardDiv = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E0E0E0;
    border-radius: 6px;

    @media screen and (max-width: 578px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default RecommendedItemsCard