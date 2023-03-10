import React from 'react'
import styled from 'styled-components'

const CustomButton = ({children,fontColor,bgColor,width,height,fontSize,onClick}) => {
  return (
    <CustomButtonContainer onClick={onClick} fontColor={fontColor} fontSize={fontSize} bgColor={bgColor} height={height} width={width}>{children}</CustomButtonContainer>
  )
}

const CustomButtonContainer = styled.button`
  width: ${(props)=> props.width};
  height: ${(props)=> props.height};
  font-weight: 500;
  font-size: ${(props)=> props.fontSize? props.fontSize : '13px'};
  line-height: 16px;

  text-align: center;

  color: ${(props)=> props.fontColor};
    
  background: ${(props)=> props.bgColor};

  border: 1px solid #E3E8EE;

  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
    
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`

export default CustomButton