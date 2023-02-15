import React from 'react'
import styled from 'styled-components'

import { ExtraServicesCard } from '../../components'

import ServiceBg from '../../assets/images/image-108.png'
import ServiceBg2 from '../../assets/images/product.png'
import ServiceBg3 from '../../assets/images/fly.png'
import ServiceBg4 from '../../assets/images/product2.png'
import ServiceIcon from '../../assets/images/Vector22.png'

const ExtraServices = () => {
  return (
    <ExtraServicesSection>
      <ExtraServicesHeader>Our extra services</ExtraServicesHeader>

      <ExtraServicesCards>
        <ExtraServicesCard
          bgImage={ServiceBg}
          icon={ServiceIcon}
          text='Source from Industry Hubs'
        />
        <ExtraServicesCard
          bgImage={ServiceBg2}
          icon={ServiceIcon}
          text='Source from Industry Hubs'
        />
        <ExtraServicesCard
          bgImage={ServiceBg3}
          icon={ServiceIcon}
          text='Source from Industry Hubs'
        />
        <ExtraServicesCard
          bgImage={ServiceBg4}
          icon={ServiceIcon}
          text='Source from Industry Hubs'
        />
      </ExtraServicesCards>

    </ExtraServicesSection>
  )
}

const ExtraServicesCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 992px) {
    justify-content: space-around;
  }
`

const ExtraServicesHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  margin-bottom: 1.5rem;

  color: ${({theme}) => theme.pallet.blackColor};
`

const ExtraServicesSection = styled.div`
  margin-top: 33px;
`

export default ExtraServices