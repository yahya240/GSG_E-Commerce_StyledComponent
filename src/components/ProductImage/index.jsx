import React from 'react'
import styled from 'styled-components'

const ProductImage = ({image,height,width,bgColor}) => {
  return (
    <CartPaymentItemDetailsImageContainer width={width} height={height} bgColor={bgColor}>
        <CartPaymentItemDetailsImage src={image} />
    </CartPaymentItemDetailsImageContainer>
  )
}

const CartPaymentItemDetailsImage = styled.img`
  height: 70%;
    
`
const CartPaymentItemDetailsImageContainer = styled.div`
    width: ${(props)=> props.width}px;
    height: ${(props)=> props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${(props)=> props.bgColor};

    border: 1px solid #E0E0E0;
    border-radius: 6px;
`

export default ProductImage