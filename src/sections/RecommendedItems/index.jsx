import React from 'react'
import styled from 'styled-components'

import { RecommendedItemsCard } from '../../components'

import tShirt from '../../assets/images/Bitmap22.png'
import sweetir from '../../assets/images/sweetir.png'
import bag from '../../assets/images/bag.png'
import jeansshort from '../../assets/images/jeansshort.png'
import jacket from '../../assets/images/jacket.png'
import jzdan from '../../assets/images/jzdan.png'
import imgstore5 from '../../assets/images/imgstore5.png'

const RecommendedItems = () => {
  return (
    <RecommendedItemsSection>
        <RecommendedItemsHeader>Recommended items</RecommendedItemsHeader>
        <RecommendedItemsCards>
            <RecommendedItemsCard 
                image={tShirt}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={sweetir}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={jacket}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={jzdan}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={bag}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={jeansshort}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={imgstore5}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={bag}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={jacket}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
            <RecommendedItemsCard 
                image={sweetir}
                price ='10.30'
                text='T-shirts with multiple colors, for men'
            />
        </RecommendedItemsCards>
    </RecommendedItemsSection>
  )
}

const RecommendedItemsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 20px;

    @media screen and (max-width:1260px) {
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
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default RecommendedItems