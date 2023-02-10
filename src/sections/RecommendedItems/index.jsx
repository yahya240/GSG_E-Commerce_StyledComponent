import React from 'react'
import styled from 'styled-components'

import tShirt from '../../assets/images/Bitmap22.png'

const RecommendedItems = () => {
  return (
    <RecommendedItemsSection>
        <RecommendedItemsHeader>Recommended items</RecommendedItemsHeader>
        <RecommendedItemsCards>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

            <RecommendedItemsCard>
                <RecommendedItemsCardImageDiv>
                    <RecommendedItemsCardImage src={tShirt} />
                </RecommendedItemsCardImageDiv>
                <RecommendedItemsCardPrice>$10.30</RecommendedItemsCardPrice>
                <RecommendedItemsCardText>T-shirts with multiple colors, for men</RecommendedItemsCardText>
            </RecommendedItemsCard>

        </RecommendedItemsCards>
    </RecommendedItemsSection>
  )
}

const RecommendedItemsCardText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;

/* max-width: 160px; */
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

`
const RecommendedItemsCardImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 10px 10px 14px;
    padding: 1rem 1.5rem;
`
const RecommendedItemsCard = styled.div`
/* width: 220px; */
background: ${({theme}) => theme.pallet.whiteColor};

border: 1px solid #E0E0E0;
border-radius: 6px;
`
const RecommendedItemsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 20px;

    @media screen and (max-width:1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width:992px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:576px) {
        grid-template-columns: 1fr;
    }
`
const RecommendedItemsHeader = styled.h3`
font-weight: 600;
font-size: 24px;
line-height: 32px;

margin-bottom: 1.5rem;

color: ${({theme}) => theme.pallet.blackColor};
`
const RecommendedItemsSection = styled.div`
    margin-top: 30px;
`

export default RecommendedItems