import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import profileIcon from '../../assets/images/profile.png'
import messageIcon from '../../assets/images/message.png'
import orderIcon from '../../assets/images/order.png'
import cartIcon from '../../assets/images/cart.png'
import cartMobileIcon from '../../assets/images/cart-mobile.png'
import profileMobileIcon from '../../assets/images/profile-moblie.png'
// import burgerMobileIcon from '../../assets/images/burger-mobile.png'

import { Container, Logo } from '../../components'

const MainHeader = () => {
  return (
    <MainHeaderSection>
        <Container>
          <MainHeaderContainer>

            <MainHeaderLogo>
              <Logo />
              <MainHeaderLogoIcons>
                <MainHeaderLogoIcon src={cartMobileIcon} />
                <MainHeaderLogoIcon src={profileMobileIcon} />
              </MainHeaderLogoIcons>
            </MainHeaderLogo>

            <MainHeaderSearchBar>
              <SearchBarInput placeholder='Search' />
              <SearchBarCategory>
                <SearchBarCategoryOption value='All category'>All category</SearchBarCategoryOption>
                <SearchBarCategoryOption value='Hot offers'>Hot offers</SearchBarCategoryOption>
              </SearchBarCategory>
              <SearchBarButton>Search</SearchBarButton>
            </MainHeaderSearchBar>

            <MainHeaderIcons>

              <HeaderIconsDiv>
                <HeaderIconImage src={profileIcon} />
                <HeaderIconTitle><Link to='/login'>Profile</Link></HeaderIconTitle>
              </HeaderIconsDiv>
              <HeaderIconsDiv>
                <HeaderIconImage src={messageIcon} />
                <HeaderIconTitle><Link to='/singleProduct'>Message</Link></HeaderIconTitle>
              </HeaderIconsDiv>
              <HeaderIconsDiv>
                <HeaderIconImage src={orderIcon} />
                <HeaderIconTitle><Link to='/products'>Orders</Link></HeaderIconTitle>
              </HeaderIconsDiv>
              <HeaderIconsDiv>
                <HeaderIconImage src={cartIcon} />
                <HeaderIconTitle><Link to='/cart'>My cart</Link></HeaderIconTitle>
              </HeaderIconsDiv>

            </MainHeaderIcons>

          </MainHeaderContainer>
        </Container>
      </MainHeaderSection>
  )
}

const MainHeaderLogoIcon = styled.img`
  
`
const MainHeaderLogoIcons = styled.div`
  
  display: none;

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

const HeaderIconTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  
  min-width: 44px;
  padding-top: 5px;
  text-align: center;
  color: ${({theme}) => theme.pallet.greyColor4};
`
const HeaderIconImage = styled.img`
  
`
const HeaderIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SearchBarButton = styled.button`
  color: ${({theme}) => theme.pallet.whiteColor};
  background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);

  width: 100px;
  height: 40px;

  border-top-right-radius: 5px ;
  border-bottom-right-radius: 5px ;
  border: 1px solid ${({theme}) => theme.pallet.blueColor};

  @media screen and (max-width: 992px) {
    display: none;
  }
`
const SearchBarCategory = styled.select`
  height: 40px;
  border: 1px solid ${({theme}) => theme.pallet.blueColor};
  outline: none;
  border-left: none;
  padding: 0 10px;

  @media screen and (max-width: 992px) {
    display: none;
  }
`

const SearchBarCategoryOption = styled.option`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #1C1C1C;
`

const SearchBarInput = styled.input`
  height: 40px;
  border: 1px solid ${({theme}) => theme.pallet.blueColor};
  border-top-left-radius: 5px ;
  border-bottom-left-radius: 5px ;
  outline: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${({theme}) => theme.pallet.greyColor4};
  padding-left: 10px;
`

const MainHeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`
const MainHeaderSearchBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 150px 100px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`
const MainHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MainHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  align-items: center;
  gap: 5%;

  padding: 1.2rem 0;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
const MainHeaderSection = styled.div`
  background-color: ${({theme}) => theme.pallet.whiteColor};
`


export default MainHeader