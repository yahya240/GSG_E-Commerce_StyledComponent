import React from 'react'
import styled from 'styled-components'

const ProductImage = ({image,height,width,bgColor,imgSize}) => {
  return (
    <CartPaymentItemDetailsImageContainer  width={width} height={height} bgColor={bgColor}>
        <CartPaymentItemDetailsImage imgSize={imgSize} src={image} />
    </CartPaymentItemDetailsImageContainer>
  )
}

const CartPaymentItemDetailsImage = styled.img`
  height: ${(props)=> props.imgSize? props.imgSize : '70%'};
  mix-blend-mode: multiply;
  filter: contrast(1);
    
`
const CartPaymentItemDetailsImageContainer = styled.div`
    width: ${(props)=> props.width}px;
    height: ${(props)=> props.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${(props)=> props.bgColor};

    border: 1px solid ${(props)=> props.bgColor};
    border-radius: 6px;
`

export default ProductImage