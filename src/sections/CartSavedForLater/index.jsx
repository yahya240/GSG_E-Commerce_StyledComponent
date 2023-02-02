import React from 'react'
import styled from 'styled-components'

import { ProductImage, CustomButton } from '../../components'

import cardImage from '../../assets/images/image-32.png'
import cardImage2 from '../../assets/images/image-22.png'
import cardImage3 from '../../assets/images/image-35.png'
import cardImage4 from '../../assets/images/image-34.png'
import Vector6 from '../../assets/images/Vector6.png'

const CartSavedForLater = () => {
  return (
    <CartSavedForLaterContaienr>
        <CartSavedForLaterHeader>Saved for later</CartSavedForLaterHeader>

        <CartSavedForLaterCards>

            <CartSavedForLaterCard>
                <ProductImage width={'270'} height={'240'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage} />
                <CartSavedForLaterCardPrice>$99.50</CartSavedForLaterCardPrice>
                <CartSavedForLaterCardText>GoPro HERO6 4K Action</CartSavedForLaterCardText>
                <CartSavedForLaterCardText>Camera - Black</CartSavedForLaterCardText>
                <CartSavedForLaterCardButton>
                    <CustomButton fontColor={({theme}) => theme.pallet.blueColor}  bgColor={({theme}) => theme.pallet.whiteColor}>
                        <CartSavedForLaterCardIcon src={Vector6} />
                        Move to cart
                    </CustomButton>
                </CartSavedForLaterCardButton>
            </CartSavedForLaterCard>

            <CartSavedForLaterCard>
                <ProductImage width={'270'} height={'240'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage2} />
                <CartSavedForLaterCardPrice>$99.50</CartSavedForLaterCardPrice>
                <CartSavedForLaterCardText>GoPro HERO6 4K Action</CartSavedForLaterCardText>
                <CartSavedForLaterCardText>Camera - Black</CartSavedForLaterCardText>
                <CartSavedForLaterCardButton>
                    <CustomButton fontColor={({theme}) => theme.pallet.blueColor}  bgColor={({theme}) => theme.pallet.whiteColor}>
                        <CartSavedForLaterCardIcon src={Vector6} />
                        Move to cart
                    </CustomButton>
                </CartSavedForLaterCardButton>
            </CartSavedForLaterCard>

            <CartSavedForLaterCard>
                <ProductImage width={'270'} height={'240'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage3} />
                <CartSavedForLaterCardPrice>$99.50</CartSavedForLaterCardPrice>
                <CartSavedForLaterCardText>GoPro HERO6 4K Action</CartSavedForLaterCardText>
                <CartSavedForLaterCardText>Camera - Black</CartSavedForLaterCardText>
                <CartSavedForLaterCardButton>
                    <CustomButton fontColor={({theme}) => theme.pallet.blueColor}  bgColor={({theme}) => theme.pallet.whiteColor}>
                        <CartSavedForLaterCardIcon src={Vector6} />
                        Move to cart
                    </CustomButton>
                </CartSavedForLaterCardButton>
            </CartSavedForLaterCard>

            <CartSavedForLaterCard>
                <ProductImage width={'270'} height={'240'} bgColor={({theme}) => theme.pallet.greyColor8} image={cardImage4} />
                <CartSavedForLaterCardPrice>$99.50</CartSavedForLaterCardPrice>
                <CartSavedForLaterCardText>GoPro HERO6 4K Action</CartSavedForLaterCardText>
                <CartSavedForLaterCardText>Camera - Black</CartSavedForLaterCardText>
                <CartSavedForLaterCardButton>
                    <CustomButton fontColor={({theme}) => theme.pallet.blueColor}  bgColor={({theme}) => theme.pallet.whiteColor}>
                        <CartSavedForLaterCardIcon src={Vector6} />
                        Move to cart
                    </CustomButton>
                </CartSavedForLaterCardButton>
            </CartSavedForLaterCard>

        </CartSavedForLaterCards>

    </CartSavedForLaterContaienr>
  )
}

const CartSavedForLaterCardButton = styled.div`
    margin-top: 12px;
`
const CartSavedForLaterCardText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 24px;

letter-spacing: -0.2px;

color: ${({theme}) => theme.pallet.blackColor2};

`
const CartSavedForLaterCardPrice = styled.h4`
font-weight: 600;
font-size: 18px;
line-height: 22px;

color: ${({theme}) => theme.pallet.blackColor};

margin: 10px 0;
`
const CartSavedForLaterCardIcon = styled.img`

`
const CartSavedForLaterCard = styled.div`

`
const CartSavedForLaterCards = styled.div`
    /* display: grid;
    grid-template-columns: repeat(4,1fr); */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 22px;
`

const CartSavedForLaterHeader = styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const CartSavedForLaterContaienr = styled.div`
    width: 100%;
    background: ${({theme}) => theme.pallet.whiteColor};
    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;

    padding: 20px;
`
export default CartSavedForLater