import React from 'react'
import styled from 'styled-components'

const ExtraServicesCard = ({bgImage,icon,text}) => {
  return (
    <ExtraServicesCardDiv>
      <ExtraServicesCardImageDiv bgImage={bgImage} >
        <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
      </ExtraServicesCardImageDiv>
      <ExtraServicesCardContent>{text}</ExtraServicesCardContent>
      <ExtraServicesCardIconDiv>
        <ExtraServicesCardIcon src={icon} />
      </ExtraServicesCardIconDiv>
    </ExtraServicesCardDiv>
  )
}


const ExtraServicesCardImageMask = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`
const ExtraServicesCardIcon = styled.img`

`
const ExtraServicesCardIconDiv = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  
  background: #D1E7FF;
  border: 2px solid #FFFFFF;

  right: 1.5rem;
  top: 45%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ExtraServicesCardContent = styled.div`
    font-weight: 600;
font-size: 16px;
line-height: 22px;

margin: 16px 20px 20px;
max-width: 140px;

color: ${({theme}) => theme.pallet.blackColor};
`

const ExtraServicesCardImageDiv = styled.div`
  height: 60%;
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`

const ExtraServicesCardDiv = styled.div`
  background: ${({theme}) => theme.pallet.whiteColor};
  width:280px;
  height:200px;

  border: 1px solid #E0E0E0;
  border-radius: 6px;

  position: relative;

  @media screen and (max-width: 992px) {
    margin-bottom: 1rem;
  }
`

export default ExtraServicesCard