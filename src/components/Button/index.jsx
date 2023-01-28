import React from 'react'
import styled from 'styled-components'

const Button = ({children,fontColor,icon,bgcolor}) => {
  return (
    <ButtonDiv>
        <ButtonContainer fontColor={fontColor} bgcolor={bgcolor}>
          {children} 
        </ButtonContainer>
        <ButtonIcon src={icon}/>
    </ButtonDiv>
  )
}

const ButtonContainer = styled.button`
    width: 100%;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.1px;

    color: ${props => props.fontColor};
    background: ${props => props.bgcolor};
    border: 1px solid ${props => props.theme.pallet.greyColor2};
    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
    cursor: pointer;
    
`
const ButtonIcon = styled.img`
    position: absolute;
    left: 10px;
    top: 9px;
`

const ButtonDiv = styled.div`
    position: relative;
    margin-bottom: 0.7rem;
    cursor: pointer;
`

export default Button