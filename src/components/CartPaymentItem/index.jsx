import React from 'react'
import styled from 'styled-components'

import { ProductImage, CustomButton } from '../'

const CartPaymentItem = ({id,image,title,text,price,handleRemove}) => {
  return (
    <CartPaymentItemContainer>
        <CartPaymentItemDiv>
            <CartPaymentItemDetails>
                <ProductImage image={image} width={80} height={80} bgColor={({theme}) => theme.pallet.whiteColor} />
                <CartPaymentItemDetailsContent>
                    <DetailsContentTitle>{title}</DetailsContentTitle>
                    <DetailsContentparagraph>{text}</DetailsContentparagraph>
                    <DetailsContentButtons>
                        <CustomButton fontColor={({theme}) => theme.pallet.redColor} bgColor={({theme}) => theme.pallet.whiteColor} onClick={()=>handleRemove(id)}>Remove</CustomButton>
                        <CustomButton fontColor={({theme}) => theme.pallet.blueColor} bgColor={({theme}) => theme.pallet.whiteColor}>Save for later</CustomButton>
                    </DetailsContentButtons>
                </CartPaymentItemDetailsContent>
            </CartPaymentItemDetails>

            <CartPaymentItemPriceQuantity>
                <CartPaymentItemPrice>${price}</CartPaymentItemPrice>
                <CartPaymentItemQuantity>
                    <CartPaymentItemQuantityOption value='Qty: 1'>Qty: 1</CartPaymentItemQuantityOption>
                    <CartPaymentItemQuantityOption value='Qty: 2'>Qty: 2</CartPaymentItemQuantityOption>
                    <CartPaymentItemQuantityOption value='Qty: 9'>Qty: 9</CartPaymentItemQuantityOption>
                </CartPaymentItemQuantity>
            </CartPaymentItemPriceQuantity>
        </CartPaymentItemDiv>
    </CartPaymentItemContainer>
  )
}

const CartPaymentItemDiv = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 23px 0;
    border-bottom: 1px solid ${({theme}) => theme.pallet.whiteColor2};
`


const CartPaymentItemContainer = styled.div`

`
const CartPaymentItemQuantityOption = styled.option`

`

const CartPaymentItemQuantity = styled.select`
    width: 123px;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};

    outline: none;
    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;
    padding-right: 1rem;
    margin-top: 12px;
`

const CartPaymentItemPrice = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    text-align: right;

    color: ${({theme}) => theme.pallet.blackColor};
`

const CartPaymentItemPriceQuantity = styled.div`

`

const DetailsContentButtons = styled.div`
    display: flex;
    gap: 6px;
`
const DetailsContentparagraph = styled.p`
    max-width: 360px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.greyColor4};
    margin: 6px 0 10px;
`
const DetailsContentTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const CartPaymentItemDetailsContent = styled.div`
    
`

const CartPaymentItemDetails = styled.div`
    display: flex;
    gap: 10px;
`

export default CartPaymentItem