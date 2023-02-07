import React from 'react'
import styled from 'styled-components'

import ServiceBg from '../../assets/images/image-108.png'
import ServiceIcon from '../../assets/images/Vector22.png'

const ExtraServices = () => {
  return (
    <ExtraServicesSection>
      <ExtraServicesHeader>Our extra services</ExtraServicesHeader>

      <ExtraServicesCards>

        <ExtraServicesCard>
          <ExtraServicesCardImageDiv bgImage={ServiceBg} >
            <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
          </ExtraServicesCardImageDiv>
          <ExtraServicesCardContent>Source from Industry Hubs</ExtraServicesCardContent>
          <ExtraServicesCardIconDiv>
            <ExtraServicesCardIcon src={ServiceIcon} />
          </ExtraServicesCardIconDiv>
        </ExtraServicesCard>

        <ExtraServicesCard>
          <ExtraServicesCardImageDiv bgImage={ServiceBg} >
            <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
          </ExtraServicesCardImageDiv>
          <ExtraServicesCardContent>Source from Industry Hubs</ExtraServicesCardContent>
          <ExtraServicesCardIconDiv>
            <ExtraServicesCardIcon src={ServiceIcon} />
          </ExtraServicesCardIconDiv>
        </ExtraServicesCard>

        <ExtraServicesCard>
          <ExtraServicesCardImageDiv bgImage={ServiceBg} >
            <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
          </ExtraServicesCardImageDiv>
          <ExtraServicesCardContent>Source from Industry Hubs</ExtraServicesCardContent>
          <ExtraServicesCardIconDiv>
            <ExtraServicesCardIcon src={ServiceIcon} />
          </ExtraServicesCardIconDiv>
        </ExtraServicesCard>

        <ExtraServicesCard>
          <ExtraServicesCardImageDiv bgImage={ServiceBg} >
            <ExtraServicesCardImageMask></ExtraServicesCardImageMask>
          </ExtraServicesCardImageDiv>
          <ExtraServicesCardContent>Source from Industry Hubs</ExtraServicesCardContent>
          <ExtraServicesCardIconDiv>
            <ExtraServicesCardIcon src={ServiceIcon} />
          </ExtraServicesCardIconDiv>
        </ExtraServicesCard>

      </ExtraServicesCards>

    </ExtraServicesSection>
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

color: #1C1C1C;
`

const ExtraServicesCardImageDiv = styled.div`
  height: 60%;
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`

const ExtraServicesCard = styled.div`
  background: #FFFFFF;
  width:280px;
  height:200px;

  border: 1px solid #E0E0E0;
  border-radius: 6px;

  position: relative;
`

const ExtraServicesCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

const ExtraServicesHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  margin-bottom: 1.5rem;

  color: #1C1C1C;
`

const ExtraServicesSection = styled.div`
  margin-top: 33px;
`

export default ExtraServices