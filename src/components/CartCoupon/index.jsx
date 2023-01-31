import React from 'react'
import styled from 'styled-components'

const CartCoupon = () => {
  return (
    <CartPaymentMethodsCoupon>
        <CouponHeader>Have a coupon?</CouponHeader>
        <CouponApply>
            <CouponApplyInput placeholder='Add coupon' />
            <CouponApplyButton>Apply</CouponApplyButton>
        </CouponApply>
    </CartPaymentMethodsCoupon>
  )
}

const CouponApplyButton = styled.button`
    min-width: 85px;
    height: 40px;
    color: #0D6EFD;
    font-weight: 500;
    font-size: 16px;

    text-align: center;

    background: #FFFFFF;
    border-left: none;
    border: 1px solid #E3E8EE;
    cursor: pointer;

    border-top-right-radius:6px;
    border-bottom-right-radius:6px;
`
const CouponApplyInput = styled.input`
    width:100%;
    min-width: 110px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    padding-left: 10px;

    border-top-left-radius:6px;
    border-bottom-left-radius:6px;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #8B96A5;
    }
`
const CouponApply = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 9px;
`
const CouponHeader = styled.p`
    font-weight: 400;
    font-size: 16px;

    color: #505050;
`
const CartPaymentMethodsCoupon = styled.div`
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    margin-bottom: 20px;
    padding: 20px 16px;
`

export default CartCoupon