import React from 'react'
import styled from 'styled-components'

import lockIcon from '../../assets/images/lock.png'
import chatIcon from '../../assets/images/chat.png'
import deliveryIcon from '../../assets/images/delivery.png'

const CartPamentFeatures = () => {
  return (
    <CartPamentFeaturesContainer>

        <CartPamentFeaturesDiv>
            <CartPamentFeaturesImageDiv>
              <CartPamentFeaturesImage src={lockIcon} />
            </CartPamentFeaturesImageDiv>
            <CartPamentFeaturesContentDiv>
              <CartPamentFeaturesTitle>Secure payment</CartPamentFeaturesTitle>
              <CartPamentFeaturesText>Have you ever finally just </CartPamentFeaturesText>
            </CartPamentFeaturesContentDiv>
          </CartPamentFeaturesDiv>
          
        <CartPamentFeaturesDiv>
            <CartPamentFeaturesImageDiv>
              <CartPamentFeaturesImage src={chatIcon} />
            </CartPamentFeaturesImageDiv>
            <CartPamentFeaturesContentDiv>
              <CartPamentFeaturesTitle>Customer support</CartPamentFeaturesTitle>
              <CartPamentFeaturesText>Have you ever finally just </CartPamentFeaturesText>
            </CartPamentFeaturesContentDiv>
          </CartPamentFeaturesDiv>
        
        <CartPamentFeaturesDiv>
            <CartPamentFeaturesImageDiv>
              <CartPamentFeaturesImage src={deliveryIcon} />
            </CartPamentFeaturesImageDiv>
            <CartPamentFeaturesContentDiv>
              <CartPamentFeaturesTitle>Free delivery</CartPamentFeaturesTitle>
              <CartPamentFeaturesText>Have you ever finally just </CartPamentFeaturesText>
            </CartPamentFeaturesContentDiv>
          </CartPamentFeaturesDiv>

    </CartPamentFeaturesContainer>
  )
}


const CartPamentFeaturesText = styled.p`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.greyColor};
`
const CartPamentFeaturesTitle = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const CartPamentFeaturesImage = styled.img`
  object-fit: contain;
`
const CartPamentFeaturesContentDiv = styled.div`

`
const CartPamentFeaturesImageDiv = styled.div`
    min-width: 48px;
    height: 48px;

    border-radius: 50%;
    background: ${({theme}) => theme.pallet.whiteColor2};

    display: flex;
    justify-content: center;
    align-items: center;
`
const CartPamentFeaturesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const CartPamentFeaturesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 54px;

    margin: 30px 0;

    @media screen and (max-width: 768px){
      justify-content: center;
    }
`

export default CartPamentFeatures