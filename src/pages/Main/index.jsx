import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter, Subscribe, MainHero, RecommendedItems, SupliersRequests, 
MainDealsAndOffers, MainHomeOutDoor, ElectronicsAndGadgets, SuppliersByRegion, ExtraServices } from '../../sections'

import { Container } from '../../components'


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