import React from 'react'
import styled from 'styled-components'

import { ProductImage } from '../../components'

import cardImage from '../../assets/images/image-32.png'
import cardImage2 from '../../assets/images/image-22.png'
import cardImage3 from '../../assets/images/image-35.png'
import cardImage4 from '../../assets/images/image-34.png'


const RelatedProducts = () => {
  return (
    <RelatedProductsContaienr>
        <RelatedProductsHeader>Related products</RelatedProductsHeader>

        <RelatedProductsCards>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>

            </RelatedProductsCard>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage2} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>
                
            </RelatedProductsCard>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage3} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>
                
            </RelatedProductsCard>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage4} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>
                
            </RelatedProductsCard>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>
                
            </RelatedProductsCard>

            <RelatedProductsCard>
                <ProductImage width={'172'} height={'172'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage2} />
                <RelatedProductsCardTextContainer>
                    <RelatedProductsCardText>Xiaomi Redmi 8 </RelatedProductsCardText>
                    <RelatedProductsCardText>Original </RelatedProductsCardText>
                </RelatedProductsCardTextContainer>
                <RelatedProductsCardPrice>$32.00-$40.00</RelatedProductsCardPrice>
                
            </RelatedProductsCard>

        </RelatedProductsCards>

    </RelatedProductsContaienr>
  )
}



const RelatedProductsCardText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: ${({theme}) => theme.pallet.greyColor6};

`
const RelatedProductsCardPrice = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* gray-500 */

color: #8B96A5;

margin: 9px 0;
`

const RelatedProductsCardTextContainer = styled.div`
    margin-top: 14px;
`
const RelatedProductsCard = styled.div`

`
const RelatedProductsCards = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4,1fr); */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
`

const RelatedProductsHeader = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const RelatedProductsContaienr = styled.div`
    width: 100%;
    background: ${({theme}) => theme.pallet.whiteColor};
    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;

    padding: 20px;
`

export default RelatedProducts