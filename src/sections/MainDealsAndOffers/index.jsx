import React from 'react'
import styled from 'styled-components'

import { ProductImage } from '../../components'

import watchImage from '../../assets/images/image-35.png'
import watchImage2 from '../../assets/images/image-34.png'
import watchImage3 from '../../assets/images/image-28.png'
import watchImage4 from '../../assets/images/image-29.png'
import watchImage5 from '../../assets/images/image-23.png'

const MainDealsAndOffers = () => {
  return (
    <MainDealsAndOffersSection>
        <MainDealsAndOffersContainer>

            <MainDealsAndOffersLeft>
                <MainDealsAndOffersLeftHeader>Deals and offers</MainDealsAndOffersLeftHeader>
                <MainDealsAndOffersLeftText>Hygiene equipments</MainDealsAndOffersLeftText>
                <MainDealsAndOffersLeftDate>
                    <MainDealsAndOffersLeftDateItem>
                        <MainDealsAndOffersLeftDateItemNumber>04</MainDealsAndOffersLeftDateItemNumber>
                        <MainDealsAndOffersLeftDateItemPeriod>Days</MainDealsAndOffersLeftDateItemPeriod>
                    </MainDealsAndOffersLeftDateItem>
                    <MainDealsAndOffersLeftDateItem>
                        <MainDealsAndOffersLeftDateItemNumber>13</MainDealsAndOffersLeftDateItemNumber>
                        <MainDealsAndOffersLeftDateItemPeriod>Hour</MainDealsAndOffersLeftDateItemPeriod>
                    </MainDealsAndOffersLeftDateItem>
                    <MainDealsAndOffersLeftDateItem>
                        <MainDealsAndOffersLeftDateItemNumber>34</MainDealsAndOffersLeftDateItemNumber>
                        <MainDealsAndOffersLeftDateItemPeriod>Min</MainDealsAndOffersLeftDateItemPeriod>
                    </MainDealsAndOffersLeftDateItem>
                    <MainDealsAndOffersLeftDateItem>
                        <MainDealsAndOffersLeftDateItemNumber>56</MainDealsAndOffersLeftDateItemNumber>
                        <MainDealsAndOffersLeftDateItemPeriod>Sec</MainDealsAndOffersLeftDateItemPeriod>
                    </MainDealsAndOffersLeftDateItem>
                </MainDealsAndOffersLeftDate>
            </MainDealsAndOffersLeft>

            <MainDealsAndOffersRight>
                <MainDealsAndOffersRightItem>
                    <MainDealsAndOffersRightItemImage>
                        <ProductImage image={watchImage} imgSize={'90%'} width={'140'} height={'140'} bgColor={' #FFFFFF'} />
                    </MainDealsAndOffersRightItemImage>
                    <MainDealsAndOffersRightItemName>Smart watches</MainDealsAndOffersRightItemName>
                    <MainDealsAndOffersRightItemPrice>
                        <MainDealsAndOffersRightItemPriceText>-25%</MainDealsAndOffersRightItemPriceText>
                    </MainDealsAndOffersRightItemPrice>
                </MainDealsAndOffersRightItem>
                <MainDealsAndOffersRightItem>
                    <MainDealsAndOffersRightItemImage>
                        <ProductImage image={watchImage2} imgSize={'80%'} width={'140'} height={'140'} bgColor={' #FFFFFF'} />
                    </MainDealsAndOffersRightItemImage>
                    <MainDealsAndOffersRightItemName>Laptops</MainDealsAndOffersRightItemName>
                    <MainDealsAndOffersRightItemPrice>
                        <MainDealsAndOffersRightItemPriceText>-15%</MainDealsAndOffersRightItemPriceText>
                    </MainDealsAndOffersRightItemPrice>
                </MainDealsAndOffersRightItem>
                <MainDealsAndOffersRightItem>
                    <MainDealsAndOffersRightItemImage>
                        <ProductImage image={watchImage3}  width={'140'} height={'140'} bgColor={' #FFFFFF'} />
                    </MainDealsAndOffersRightItemImage>
                    <MainDealsAndOffersRightItemName>GoPro cameras</MainDealsAndOffersRightItemName>
                    <MainDealsAndOffersRightItemPrice>
                        <MainDealsAndOffersRightItemPriceText>-40%</MainDealsAndOffersRightItemPriceText>
                    </MainDealsAndOffersRightItemPrice>
                </MainDealsAndOffersRightItem>
                <MainDealsAndOffersRightItem>
                    <MainDealsAndOffersRightItemImage>
                        <ProductImage image={watchImage4} imgSize={'90%'} width={'140'} height={'140'} bgColor={' #FFFFFF'} />
                    </MainDealsAndOffersRightItemImage>
                    <MainDealsAndOffersRightItemName>Headphones</MainDealsAndOffersRightItemName>
                    <MainDealsAndOffersRightItemPrice>
                        <MainDealsAndOffersRightItemPriceText>-25%</MainDealsAndOffersRightItemPriceText>
                    </MainDealsAndOffersRightItemPrice>
                </MainDealsAndOffersRightItem>
                <MainDealsAndOffersRightItem>
                    <MainDealsAndOffersRightItemImage>
                        <ProductImage image={watchImage5} imgSize={'90%'} width={'140'} height={'140'} bgColor={' #FFFFFF'} />
                    </MainDealsAndOffersRightItemImage> 
                    <MainDealsAndOffersRightItemName>Canon camreras</MainDealsAndOffersRightItemName>
                    <MainDealsAndOffersRightItemPrice>
                        <MainDealsAndOffersRightItemPriceText>-25%</MainDealsAndOffersRightItemPriceText>
                    </MainDealsAndOffersRightItemPrice>
                </MainDealsAndOffersRightItem>
            </MainDealsAndOffersRight>

        </MainDealsAndOffersContainer>
    </MainDealsAndOffersSection>
  )
}

const MainDealsAndOffersRightItemPriceText = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #EB001B;

`

const MainDealsAndOffersRightItemPrice = styled.div`
    width: 59px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #FFE3E3;
    border-radius: 29px;

    /* margin-top: 7px; */
`

const MainDealsAndOffersRightItemName = styled.h4`
    font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;
letter-spacing: -0.2px;

/* dark */

color: #1C1C1C;
`

const MainDealsAndOffersRightItemImage = styled.div`
    
`

const MainDealsAndOffersRightItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;

    border-left: 1px solid #E0E0E0;
`


const MainDealsAndOffersLeftDateItemPeriod = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
`
const MainDealsAndOffersLeftDateItemNumber = styled.div`
    font-weight: 700;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #FFFFFF;
`
const MainDealsAndOffersLeftDateItem = styled.div`
    width: 45px;
    height: 50px;

    background: #606060;
    border-radius: 4px;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MainDealsAndOffersLeftDate = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    margin-top: 18px;
`
const MainDealsAndOffersLeftText = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

/* gray-500 */

color: #8B96A5;
`
const MainDealsAndOffersLeftHeader = styled.div`
    font-weight: 600;
font-size: 20px;
line-height: 28px;
/* identical to box height, or 140% */

letter-spacing: -0.2px;

/* base-color/dark */

color: #1C1C1C;
`
const MainDealsAndOffersRight = styled.div`
    display: flex;
    justify-content: space-between;
`
const MainDealsAndOffersLeft = styled.div`
    padding: 20px;
`
const MainDealsAndOffersContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-row: auto; */
`

const MainDealsAndOffersSection = styled.div`
    width: 100%;
    height: 240px;

    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    margin-top: 30px;

    @media screen and (max-width: 1024px) {
        overflow-x: scroll;
    }
`

export default MainDealsAndOffers