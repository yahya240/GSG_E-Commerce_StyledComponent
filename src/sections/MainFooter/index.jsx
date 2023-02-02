import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Container, Logo } from '../../components'

import usFlagIcon from '../../assets/images/us-flag.png'
import dropUpIcon from '../../assets/images/Vector3.png'
import linkedinIcon from '../../assets/images/linkedin.png'
import facebookIcon from '../../assets/images/facebook.png'
import twitterIcon from '../../assets/images/twitter.png'
import instegramIcon from '../../assets/images/instegram.png'
import youtubeIcon from '../../assets/images/youtube.png'
import googleStoreIcon from '../../assets/images/google-store.png'
import appleStoreIcon from '../../assets/images/apple-store.png'

const MainFooter = () => {
  return (
    <MainFooterSection>
        <FooterContent>
          <Container>
              <FooterContentContainer>

                <CompanyInfo>
                  <Logo />
                  <CompanyInfoText>Best information about the company gies here but now lorem ipsum is</CompanyInfoText>
                  <CompanyInfoSocial>
                    <CompanyInfoSocialIcon src={linkedinIcon} />
                    <CompanyInfoSocialIcon src={facebookIcon} />
                    <CompanyInfoSocialIcon src={twitterIcon} />
                    <CompanyInfoSocialIcon src={instegramIcon} />
                    <CompanyInfoSocialIcon src={youtubeIcon} />
                  </CompanyInfoSocial>
                </CompanyInfo>

                <FooterContentDetails>
                  <ContentDetailItem>
                    <ContentDetailItemHeader>About</ContentDetailItemHeader>
                    <ContentDetailItemContent>
                      <ContentDetailSingleItem>About Us</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Find store</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Categories</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Blogs</ContentDetailSingleItem>
                    </ContentDetailItemContent>
                  </ContentDetailItem>
                </FooterContentDetails>
                
                <FooterContentDetails>
                  <ContentDetailItem>
                    <ContentDetailItemHeader>Partnership</ContentDetailItemHeader>
                    <ContentDetailItemContent>
                      <ContentDetailSingleItem>About Us</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Find store</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Categories</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Blogs</ContentDetailSingleItem>
                    </ContentDetailItemContent>
                  </ContentDetailItem>
                </FooterContentDetails>
               
                <FooterContentDetails>
                  <ContentDetailItem>
                    <ContentDetailItemHeader>Information</ContentDetailItemHeader>
                    <ContentDetailItemContent>
                      <ContentDetailSingleItem>Help Center</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Money Refund</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Shipping</ContentDetailSingleItem>
                      <ContentDetailSingleItem>Contact us</ContentDetailSingleItem>
                    </ContentDetailItemContent>
                  </ContentDetailItem>
                </FooterContentDetails>
                
                <FooterContentDetails>
                  <ContentDetailItem>
                    <ContentDetailItemHeader>For users</ContentDetailItemHeader>
                    <ContentDetailItemContent>
                      <Link to='/login'><ContentDetailSingleItem>Login</ContentDetailSingleItem></Link>
                      <Link to='/register'><ContentDetailSingleItem>Register</ContentDetailSingleItem></Link>
                      <Link to='/products'><ContentDetailSingleItem>Settings</ContentDetailSingleItem></Link>
                      <Link to='/singleProduct'><ContentDetailSingleItem>My Orders</ContentDetailSingleItem></Link>
                    </ContentDetailItemContent>
                  </ContentDetailItem>
                </FooterContentDetails>
               
                <FooterContentDetails>
                  <ContentDetailItem>
                    <ContentDetailItemHeader>Get app</ContentDetailItemHeader>
                    <ContentDetailItemContent>
                        <ContentDetailImage>
                            <ContentDetailSingleImage src={appleStoreIcon} />
                        </ContentDetailImage>
                        <ContentDetailImage>
                            <ContentDetailSingleImage src={googleStoreIcon} />
                        </ContentDetailImage>
                    </ContentDetailItemContent>
                  </ContentDetailItem>
                </FooterContentDetails>
                
              </FooterContentContainer>
          </Container>
        </FooterContent>

        <FooterCopyRights>
          <Container>
            <FooterCopyRightsContainer>
              <CopyRightsText>© 2023 Ecommerce.</CopyRightsText>
              <CopyRightsLanguage>
                  <CopyRightsLanguageIcon src={usFlagIcon} height='18' />
                  <CopyRightsLanguageText>English</CopyRightsLanguageText>
                  <CopyRightsLanguageIcon src={dropUpIcon} height='7.41' />
              </CopyRightsLanguage>
            </FooterCopyRightsContainer>
          </Container>
        </FooterCopyRights>

      </MainFooterSection>
  )
}

const ContentDetailSingleImage = styled.img`
    /* width: 123px;
    height: 42px;
    border-radius: 6px;
    background-color: black; */
`
const ContentDetailImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 123px;
    height: 42px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.pallet.blackColor3};
    margin-bottom: 8px;
`

const ContentDetailSingleItem = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: -0.2px;

  /* gray-500 */

  color: ${({theme}) => theme.pallet.greyColor4};
`
const ContentDetailItemContent = styled.div`
  margin-top: 10px;

  a{
    text-decoration: none;
  }
`
const ContentDetailItemHeader = styled.h3`
  font-weight:600;
  font-size: 16px;
  line-height: 22px;

  color: ${({theme}) => theme.pallet.blackColor};
`
const ContentDetailItem = styled.div`
  
`
const FooterContentDetails = styled.div`
  
`
const CompanyInfoSocialIcon = styled.img`
  
`
const CompanyInfoSocial = styled.div`
  display: flex;
  gap:12px;
`
const CompanyInfoText = styled.h4`
  max-width: 250px;
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSizes.h4}rem;
  line-height: 24px;
  letter-spacing: -0.2px;

  padding: 1rem 0;
  color: ${({theme}) => theme.pallet.greyColor6};
`
const CompanyInfo = styled.div`
  
`
const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;
`


const CopyRightsLanguageIcon = styled.img`
  height: ${(props)=>props.height}px;
`
const CopyRightsLanguageText = styled.h4`
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSizes.h4}rem;
  line-height: 22px;

  color: ${({theme}) => theme.pallet.blackColor};
`
const CopyRightsLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`

const CopyRightsText = styled.h4`
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSizes.h4}rem;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${({theme}) => theme.pallet.blackColor2};
`
const FooterCopyRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`

const FooterCopyRights = styled.div`
  max-width: 100%;
  /* height: 68px; */
  background-color: ${({theme}) => theme.pallet.greyColor5};
  
`
const FooterContent = styled.div`
  max-width: 100%;
  /* height: 256px; */
  background-color: ${({theme}) => theme.pallet.whiteColor};
`
const MainFooterSection = styled.div`
  
`


export default MainFooter