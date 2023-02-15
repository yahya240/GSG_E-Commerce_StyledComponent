import React from 'react'
import styled from 'styled-components'

import { CartCoupon, CustomButton, CreditCardImage, CartPaymentItem } from '../../components'
import { cartData  } from '../../Mock/cartData'

import arrowIcon from '../../assets/images/Vector5.png'
import paymentIcon from '../../assets/images/payment.png'
import visaIcon from '../../assets/images/visa.png'
import expressIcon from '../../assets/images/express.png'
import amercanIcon from '../../assets/images/amercan.png'


const CartPayment = () => {
  return (
    <CartPaymentSection>
        <CartPaymentItems>
            {cartData.map((item)=>{
                return <CartPaymentItem 
                    image={item.image}
                    title={item.title}
                    text={item.text}
                    price={item.price}
                />
            })}
            <CartPaymentItemsButtons>
                <CustomButton bgColor={({theme}) => theme.pallet.blueColor} fontColor={({theme}) => theme.pallet.whiteColor}>
                    <ArrowIconImage src={arrowIcon} />
                        Back to shop
                    </CustomButton>
                <CustomButton fontColor={({theme}) => theme.pallet.blueColor} bgColor={({theme}) => theme.pallet.whiteColor}>Remove all</CustomButton>
            </CartPaymentItemsButtons>
        </CartPaymentItems>

        <CartPaymentMethods>
            <CartCoupon />
            <CartPaymentMethodsCheckout>
                <CartPaymentMethodsCheckoutContainer>
                    <CartPaymentMethodsCheckoutDetails>
                        <MethodsCheckoutDetailsItem>
                            <MethodsCheckoutDetailsItemTitle>Subtotal:</MethodsCheckoutDetailsItemTitle>
                            <MethodsCheckoutDetailsItemAmount fontColor={({theme}) => theme.pallet.blackColor}>$1403.97</MethodsCheckoutDetailsItemAmount>
                        </MethodsCheckoutDetailsItem>
                        <MethodsCheckoutDetailsItem>
                            <MethodsCheckoutDetailsItemTitle>Discount:</MethodsCheckoutDetailsItemTitle>
                            <MethodsCheckoutDetailsItemAmount fontColor={({theme}) => theme.pallet.redColor}>- $60.00</MethodsCheckoutDetailsItemAmount>
                        </MethodsCheckoutDetailsItem>
                        <MethodsCheckoutDetailsItem>
                            <MethodsCheckoutDetailsItemTitle>Tax:</MethodsCheckoutDetailsItemTitle>
                            <MethodsCheckoutDetailsItemAmount fontColor={({theme}) => theme.pallet.greenColor}>+ $14.00</MethodsCheckoutDetailsItemAmount>
                        </MethodsCheckoutDetailsItem>
                        <MethodsCheckoutDetailsLine />
                        <MethodsCheckoutDetailsItem>
                            <MethodsCheckoutDetailsItemTotalTitle>Total:</MethodsCheckoutDetailsItemTotalTitle>
                            <MethodsCheckoutDetailsItemTotalAmount>$1357.97</MethodsCheckoutDetailsItemTotalAmount>
                        </MethodsCheckoutDetailsItem>
                    </CartPaymentMethodsCheckoutDetails>
                    <CustomButton fontColor={({theme}) => theme.pallet.whiteColor} fontSize={'18px'} bgColor={({theme}) => theme.pallet.greenColor} width={'100%'} height={'54px'}>Checkout</CustomButton>
                    <CartPaymentMethodsCheckoutCreditCards>
                        <CreditCardImage image={amercanIcon} />
                        <CreditCardImage image={expressIcon} />
                        <CreditCardImage image={visaIcon} />
                        <CreditCardImage image={paymentIcon} />
                        <CreditCardImage image={visaIcon} />
                    </CartPaymentMethodsCheckoutCreditCards>
                </CartPaymentMethodsCheckoutContainer>
            </CartPaymentMethodsCheckout>
        </CartPaymentMethods>
    </CartPaymentSection>
  )
}

const CartPaymentMethodsCheckoutCreditCards = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 18px;
`

const MethodsCheckoutDetailsLine = styled.hr`
    background: ${({theme}) => theme.pallet.greyColor7};
    margin: 12px 0;
    border: none;
    height: 1px;
`
const MethodsCheckoutDetailsItemTotalAmount = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    text-align: right;


    color: ${({theme}) => theme.pallet.blackColor};
`
const MethodsCheckoutDetailsItemTotalTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const MethodsCheckoutDetailsItemAmount = styled.p`
    font-size: 16px;
    line-height: 24px;

    text-align: right;
    letter-spacing: -0.2px;

    color: ${(props)=> props.fontColor};
`
const MethodsCheckoutDetailsItemTitle = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.greyColor6};
`
const MethodsCheckoutDetailsItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`
const CartPaymentMethodsCheckoutDetails = styled.div`
    width: 100%;
    margin-bottom: 22px;
`
const CartPaymentMethodsCheckoutContainer = styled.div`
    width: 100%;
    height: 100%;

`
const ArrowIconImage = styled.img`
    
`

const CartPaymentItemsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`

const CartPaymentMethodsCheckout = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;

    padding: 20px 16px;
`

const CartPaymentMethods = styled.div`

`

const CartPaymentItems = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;
`
const CartPaymentSection = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;

    margin-top: 23px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export default CartPayment