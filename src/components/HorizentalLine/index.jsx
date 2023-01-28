import React from 'react'
import styled from 'styled-components'

const HorizentalLine = () => {
  return (
    <HorizentalLineDiv>or</HorizentalLineDiv>
  )
}

const HorizentalLineDiv = styled.div`
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.2px;
    color: ${props => props.theme.pallet.greyColor};
    text-transform: uppercase;
    position: relative;
    margin: 1.5rem 0;

    &::after{
        content:'';
        position: absolute;
        height: 2px;
        width: 45%;
        right: 0;
        top: 50%;
        background-color: ${props => props.theme.pallet.greyColor2};
    }

    &::before{
        content:'';
        position: absolute;
        height: 2px;
        width: 45%;
        left: 0;
        top: 50%;
        background-color: ${props => props.theme.pallet.greyColor2};
    }
`

export default HorizentalLine