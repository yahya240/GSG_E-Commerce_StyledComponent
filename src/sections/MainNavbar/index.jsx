import React from 'react'
import styled from 'styled-components'

import { Container } from '../../components'

import flagIcon from '../../assets/images/flag.png'
import dropIcon from '../../assets/images/Vector.png'
import bergurIcon from '../../assets/images/Vector2.png'

const MainNavbar = () => {
  return (
    <MainNavbarSection>
        <Container>
          <NavbarContainer>
            <NavbarCategorys>
              <NavbarItem>
                <NavbarItemIcon src={bergurIcon} height='12' />
                <NavbarItemText>All category</NavbarItemText>
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Hot offers</NavbarItemText>
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Gift boxes</NavbarItemText>
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Projects</NavbarItemText>
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Menu item</NavbarItemText>
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Help</NavbarItemText>
                <NavbarItemIcon src={dropIcon} height='7.41' />
              </NavbarItem>
            </NavbarCategorys>

            <NavbarLanguage>
              <NavbarItem>
                <NavbarItemText>English, USD</NavbarItemText>
                <NavbarItemIcon src={dropIcon} height='7.41' />
              </NavbarItem>
              <NavbarItem>
                <NavbarItemText>Ship to</NavbarItemText>
                <NavbarItemIcon src={flagIcon} height='18' />
                <NavbarItemIcon src={dropIcon} height='7.41' />
              </NavbarItem>
            </NavbarLanguage>
          </NavbarContainer>
        </Container>
      </MainNavbarSection>
  )
}

const NavbarItemIcon = styled.img`
  height: ${(props)=>props.height}px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`
const NavbarItemText = styled.h4`
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSizes.h4}rem;
  line-height: 22px;

  color: ${({theme}) => theme.pallet.blackColor};

  @media screen and (max-width: 1200px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #0D6EFD;
  }
`
const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  @media screen and (max-width: 1200px) {
    width: max-content;
    background: #EFF2F4;
    border-radius: 6px;
    padding: 9px 10px 8px;
    gap: 4px;
  }
`
const NavbarLanguage = styled.div`
  display: flex;
  gap: 2rem;
`

const NavbarCategorys = styled.div`
  display: flex;
  gap: 1.5rem;
`

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media screen and (max-width: 1200px) {
    overflow-x: scroll;
  }

  &::-webkit-scrollbar {
  display: none;
  }
`

const MainNavbarSection = styled.div`
  background-color: ${({theme}) => theme.pallet.whiteColor};
  border-top: 1px solid ${({theme}) => theme.pallet.greyColor2};
  border-bottom: 1px solid ${({theme}) => theme.pallet.greyColor2};
`


export default MainNavbar