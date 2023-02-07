import React from 'react'
import styled from 'styled-components'

import BannerImage from '../../assets/images/Banner.png'
import avatarImage from '../../assets/images/avatar.png'

import { CustomButton } from '../../components'

const MainHero = () => {
  return (
    <MainHeroSection>
        <MainHeroSectionContainer>
            <MainHeroMenu>
                <MainHeroMenuItem type='header'>Automobiles</MainHeroMenuItem>
                <MainHeroMenuItem>Clothes and wear</MainHeroMenuItem>
                <MainHeroMenuItem>Home interiors</MainHeroMenuItem>
                <MainHeroMenuItem>Computer and tech</MainHeroMenuItem>
                <MainHeroMenuItem>Tools, equipments</MainHeroMenuItem>
                <MainHeroMenuItem>Sports and outdoor</MainHeroMenuItem>
                <MainHeroMenuItem>Animal and pets</MainHeroMenuItem>
                <MainHeroMenuItem>Machinery tools</MainHeroMenuItem>
                <MainHeroMenuItem>More category</MainHeroMenuItem>
            </MainHeroMenu>

            <MainHeroImage bgImage={BannerImage}>
                <MainHeroImageContent>
                    <MainHeroImageTitle>Latest trending</MainHeroImageTitle>
                    <MainHeroImageText>Electronic items</MainHeroImageText>
                    <CustomButton bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blackColor}>Learn More</CustomButton>
                </MainHeroImageContent>
            </MainHeroImage>

            <MainHeroUser>

                <MainHeroUserCard>
                    <MainHeroUserCardHeader>
                        <MainHeroUserCardHeaderAvatarDiv>
                            <MainHeroUserCardHeaderAvatar src={avatarImage} />
                        </MainHeroUserCardHeaderAvatarDiv>
                        <MainHeroUserCardHeaderContentDiv>
                        <MainHeroUserCardHeaderContent>Hi, user </MainHeroUserCardHeaderContent>
                        <MainHeroUserCardHeaderContent>let’s get stated</MainHeroUserCardHeaderContent>
                        </MainHeroUserCardHeaderContentDiv>
                    </MainHeroUserCardHeader>
                    <MainHeroUserCardHeaderButtons>
                        <CustomButton height={'30px'} width={'100%'} bgColor={({theme}) => theme.pallet.blueColor} fontColor={({theme}) => theme.pallet.whiteColor}>Join now</CustomButton>
                        <CustomButton height={'30px'} width={'100%'} bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blueColor}>Log in</CustomButton>
                    </MainHeroUserCardHeaderButtons>
                </MainHeroUserCard>

                <MainHeroUserDeal>
                    <MainHeroUserquotesText>Get US $10 off</MainHeroUserquotesText>
                    <MainHeroUserquotesText>with a new</MainHeroUserquotesText>
                    <MainHeroUserquotesText>supplier</MainHeroUserquotesText>
                </MainHeroUserDeal>

                <MainHeroUserquotes>
                    <MainHeroUserquotesText>Send quotes with</MainHeroUserquotesText>
                    <MainHeroUserquotesText>supplier</MainHeroUserquotesText>
                    <MainHeroUserquotesText>preferences</MainHeroUserquotesText>
                </MainHeroUserquotes>
            </MainHeroUser>
        </MainHeroSectionContainer>
    </MainHeroSection>
  )
}

const MainHeroUserquotesText = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* white */

color: ${({theme}) => theme.pallet.whiteColor};
`
const MainHeroUserCardHeaderContent = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* dark */

color: #1C1C1C;
`
const MainHeroUserCardHeaderContentDiv = styled.div`

`
const MainHeroUserCardHeaderButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`
const MainHeroUserCardHeaderAvatar = styled.img`

`
const MainHeroUserCardHeaderAvatarDiv = styled.div`
width: 44px;
height: 44px;
background: #91B1E7;
border-radius: 50%;
border: 1px solid rgba(0, 0, 0, 0.12);
/* opacity: 0.5; */

display: flex;
justify-content: center;
align-items: center;
`
const MainHeroUserCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap:9px;
    margin-bottom: 14px;
`

const MainHeroUserquotes = styled.div`
width: 100%;
/* width: 200px; */
height: 95px;

background: #55BDC4;
border-radius: 6px;
padding: 16px;

`

const MainHeroUserDeal = styled.div`
width: 100%;
height: 95px;

background: #F38332;
border-radius: 6px;
padding: 16px;
margin-bottom: 10px;
`

const MainHeroUserCard = styled.div`
width: 100%;
/* height: 150px; */
left: 1090px;
top: 182px;

background: #E3F0FF;
border-radius: 6px;

padding: 12px 10px;
margin-bottom: 10px;
`


const MainHeroMenuItem = styled.div`
    padding: 10px;

    font-weight: ${(props)=> props.type? 600 : 400};
    font-size: 16px;
    line-height: 19px;

    /* gray-600 */

    color: ${(props)=> props.type? '#1C1C1C' : '#505050'};

    background: ${(props)=> props.type? '#E5F1FF' : '#FFFFFF'};
    /* gray-300

    Borders, dividers
    */
    /* border: 1px solid #E3E8EE; */
    border-radius: 6px;
`


const MainHeroImageText = styled.div`
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


/* base-color/dark */

color: #1C1C1C;

margin-bottom: 15px;
`
const MainHeroImageTitle = styled.div`
font-weight: 400;
font-size: 28px;
line-height: 34px;
/* identical to box height */


/* base-color/dark */

color: #1C1C1C;
`
const MainHeroImageContent = styled.div`
    margin: 4rem 0 0 3rem;
`
const MainHeroUser = styled.div`

    @media screen and (max-width:768px) {
        display: none;
    }
`
const MainHeroImage = styled.div`
    background-image: url(${(props)=> props.bgImage});

    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
const MainHeroMenu = styled.div`

    @media screen and (max-width:768px) {
        display: none;
    }
`
const MainHeroSectionContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: minmax(200px, 22%) 1fr minmax(150px, 17%);
    grid-row: 100%;
    gap: 13px;

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }
`

const MainHeroSection = styled.div`
    width: 100%;
    height: 400px;
    background: ${({theme}) => theme.pallet.whiteColor};

    margin-top: 20px;
    padding: 20px;
    /* gray-300

    Borders, dividers
    */
    border: 1px solid #E3E8EE;
    border-radius: 6px;

    @media screen and (max-width:768px) {
        padding: 0;
    }
`

export default MainHero