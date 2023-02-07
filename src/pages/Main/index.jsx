import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, Subscribe, MainHero, RecommendedItems, SupliersRequests, 
  MainDealsAndOffers, MainHomeOutDoor, ElectronicsAndGadgets, SuppliersByRegion, ExtraServices } from '../../sections'
import { Container } from '../../components'

// import usFlagIcon from '../../assets/images/us-flag.png'
// import dropUpIcon from '../../assets/images/Vector3.png'
// import linkedinIcon from '../../assets/images/linkedin.png'
// import facebookIcon from '../../assets/images/facebook.png'
// import twitterIcon from '../../assets/images/twitter.png'
// import instegramIcon from '../../assets/images/instegram.png'
// import youtubeIcon from '../../assets/images/youtube.png'
// import bergurIcon from '../../assets/images/Vector2.png'


const Main = () => {
  return (
    <MainPage>
      <MainHeader />
      <MainNavbar />
      <Container>
        <MainHero />
        <MainDealsAndOffers />
        <MainHomeOutDoor />
        <ElectronicsAndGadgets />
        <SupliersRequests />
        <RecommendedItems />
        <ExtraServices />
        <SuppliersByRegion />
      </Container>
      <Subscribe />
      <MainFooter />

    </MainPage>
  )
}



// main styles 
const MainPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({theme}) => theme.pallet.greyColor3};
`


export default Main