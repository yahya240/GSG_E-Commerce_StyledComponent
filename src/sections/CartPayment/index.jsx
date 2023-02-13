import React from 'react'
import styled from 'styled-components'

import { CartCoupon, ProductImage, CustomButton, CreditCardImage } from '../../components'

import tshirt from '../../assets/images/Bitmap.png'
import bag from '../../assets/images/image-26.png'
import chair from '../../assets/images/rasm.png'
import arrowIcon from '../../assets/images/Vector5.png'

import paymentIcon from '../../assets/images/payment.png'
import visaIcon from '../../assets/images/visa.png'
import expressIcon from '../../assets/images/express.png'
import amercanIcon from '../../assets/images/amercan.png'


const CartPayment = () => {
  return (
    <CartPaymentSection>
        <CartPaymentItems>
            <CartPaymentItemContainer>
                <CartPaymentItem>

                    <CartPaymentItemDetails>
                        <ProductImage image={tshirt} width={80} height={80} bgColor={({theme}) => theme.pallet.whiteColor} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={({theme}) => theme.pallet.redColor} bgColor={({theme}) => theme.pallet.whiteColor}>Remove</CustomButton>
                                <CustomButton fontColor={({theme}) => theme.pallet.blueColor} bgColor={({theme}) => theme.pallet.whiteColor}>Save for later</CustomButton>
                            </DetailsContentButtons>
                        </CartPaymentItemDetailsContent>
                    </CartPaymentItemDetails>

                    <CartPaymentItemPriceQuantity>
                        <CartPaymentItemPrice>$78.99</CartPaymentItemPrice>
                        <CartPaymentItemQuantity>
                            <CartPaymentItemQuantityOption value='Qty: 1'>Qty: 1</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 2'>Qty: 2</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 9'>Qty: 9</CartPaymentItemQuantityOption>
                        </CartPaymentItemQuantity>
                    </CartPaymentItemPriceQuantity>

                </CartPaymentItem>
            </CartPaymentItemContainer>

            <CartPaymentItemContainer>
                <CartPaymentItem>

                    <CartPaymentItemDetails>
                        <ProductImage image={bag} width={80} height={80} bgColor={({theme}) => theme.pallet.bgPrimary} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={({theme}) => theme.pallet.redColor} bgColor={({theme}) => theme.pallet.whiteColor}>Remove</CustomButton>
                                <CustomButton fontColor={({theme}) => theme.pallet.blueColor} bgColor={({theme}) => theme.pallet.whiteColor}>Save for later</CustomButton>
                            </DetailsContentButtons>
                        </CartPaymentItemDetailsContent>
                    </CartPaymentItemDetails>

                    <CartPaymentItemPriceQuantity>
                        <CartPaymentItemPrice>$78.99</CartPaymentItemPrice>
                        <CartPaymentItemQuantity>
                            <CartPaymentItemQuantityOption value='Qty: 1'>Qty: 1</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 2'>Qty: 2</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 9'>Qty: 9</CartPaymentItemQuantityOption>
                        </CartPaymentItemQuantity>
                    </CartPaymentItemPriceQuantity>

                </CartPaymentItem>
            </CartPaymentItemContainer>

            <CartPaymentItemContainer>
                <CartPaymentItem>

                    <CartPaymentItemDetails>
                        <ProductImage image={chair} width={80} height={80} bgColor={({theme}) => theme.pallet.bgPrimary} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={({theme}) => theme.pallet.redColor} bgColor={({theme}) => theme.pallet.whiteColor}>Remove</CustomButton>
                                <CustomButton fontColor={({theme}) => theme.pallet.blueColor} bgColor={({theme}) => theme.pallet.whiteColor}>Save for later</CustomButton>
                            </DetailsContentButtons>
                        </CartPaymentItemDetailsContent>
                    </CartPaymentItemDetails>

                    <CartPaymentItemPriceQuantity>
                        <CartPaymentItemPrice>$78.99</CartPaymentItemPrice>
                        <CartPaymentItemQuantity>
                            <CartPaymentItemQuantityOption value='Qty: 1'>Qty: 1</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 2'>Qty: 2</CartPaymentItemQuantityOption>
                            <CartPaymentItemQuantityOption value='Qty: 9'>Qty: 9</CartPaymentItemQuantityOption>
                        </CartPaymentItemQuantity>
                    </CartPaymentItemPriceQuantity>

                </CartPaymentItem>
            </CartPaymentItemContainer>
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
/* identical to box height, or 140% */

text-align: right;
letter-spacing: -0.2px;

/* dark */

color: ${({theme}) => theme.pallet.blackColor};
`
const MethodsCheckoutDetailsItemTotalTitle = styled.h4`
    font-weight: 600;
font-size: 16px;
line-height: 19px;

/* dark */

color: ${({theme}) => theme.pallet.blackColor};
`
const MethodsCheckoutDetailsItemAmount = styled.p`
    font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: right;
letter-spacing: -0.2px;

/* gray-600 */

color: ${(props)=> props.fontColor};

`
const MethodsCheckoutDetailsItemTitle = styled.h4`
    font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: -0.2px;

/* gray-600 */

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
    /* background-color: green; */
    /* padding: 20px 16px; */
`
const ArrowIconImage = styled.img`
    
`

const CartPaymentItemsButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
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
    /* identical to box height, or 138% */

    text-align: right;

    /* base-color/dark */

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
    /* align-items: center; */
    gap: 10px;
`
const CartPaymentItem = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 23px 0;
    border-bottom: 1px solid ${({theme}) => theme.pallet.whiteColor2};
`


const CartPaymentMethodsCheckout = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;
    /* height: 302px; */

    padding: 20px 16px;
`

const CartPaymentMethods = styled.div`

`
const CartPaymentItemContainer = styled.div`

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