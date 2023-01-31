import React from 'react'
import styled from 'styled-components'

import { CartCoupon, ProductImage, CustomButton } from '../../components'
import tshirt from '../../assets/images/Bitmap.png'
import bag from '../../assets/images/image-26.png'
import chair from '../../assets/images/rasm.png'
import arrowIcon from '../../assets/images/Vector5.png'

const CartPayment = () => {
  return (
    <CartPaymentSection>
        <CartPaymentItems>
            <CartPaymentItemContainer>
                <CartPaymentItem>

                    <CartPaymentItemDetails>
                        <ProductImage image={tshirt} width={80} height={80} bgColor={'#F7F7F7'} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={'#FA3434'} bgColor={'#FFFFFF'}>Remove</CustomButton>
                                <CustomButton fontColor={'#0D6EFD'} bgColor={'#FFFFFF'}>Save for later</CustomButton>
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
                        <ProductImage image={bag} width={80} height={80} bgColor={'#F7F7F7'} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={'#FA3434'} bgColor={'#FFFFFF'}>Remove</CustomButton>
                                <CustomButton fontColor={'#0D6EFD'} bgColor={'#FFFFFF'}>Save for later</CustomButton>
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
                        <ProductImage image={chair} width={80} height={80} bgColor={'#F7F7F7'} />
                        <CartPaymentItemDetailsContent>
                            <DetailsContentTitle>T-shirts with multiple colors, for men and lady</DetailsContentTitle>
                            <DetailsContentparagraph>Size: medium, Color: blue,  Material: PlasticSeller: Artel Market</DetailsContentparagraph>
                            <DetailsContentButtons>
                                <CustomButton fontColor={'#FA3434'} bgColor={'#FFFFFF'}>Remove</CustomButton>
                                <CustomButton fontColor={'#0D6EFD'} bgColor={'#FFFFFF'}>Save for later</CustomButton>
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
                <CustomButton bgColor={'#0D6EFD'} fontColor={'#FFFFFF'}>
                    <ArrowIconImage src={arrowIcon} />
                    Back to shop
                    </CustomButton>
                <CustomButton fontColor={'#0D6EFD'} bgColor={'#FFFFFF'}>Remove all</CustomButton>
            </CartPaymentItemsButtons>
        </CartPaymentItems>

        <CartPaymentMethods>
            <CartCoupon />
            <CartPaymentMethodsCheckout>
                chechout
            </CartPaymentMethodsCheckout>
        </CartPaymentMethods>
    </CartPaymentSection>
  )
}

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
    background: #FFFFFF;

    outline: none;
    border: 1px solid #E3E8EE;
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

    color: #1C1C1C;
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

    color: #8B96A5;
    margin: 6px 0 10px;
`
const DetailsContentTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #1C1C1C;
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
    border-bottom: 1px solid #E3E8EE;
`


const CartPaymentMethodsCheckout = styled.div`
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    height: 302px;
`

const CartPaymentMethods = styled.div`

`
const CartPaymentItemContainer = styled.div`

`
const CartPaymentItems = styled.div`
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`
const CartPaymentSection = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;

    margin-top: 23px;
`

export default CartPayment