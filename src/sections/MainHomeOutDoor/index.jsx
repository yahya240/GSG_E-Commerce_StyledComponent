import React from 'react'
import styled from 'styled-components'

import { CustomButton } from '../../components'

import homeBg from '../../assets/images/image-92.png'
import rasmImage from '../../assets/images/rasm.png'

const MainHomeOutDoor = () => {
  return (
    <MainHomeOutDoorSection>
        <MainHomeOutDoorContainer>

            <MainHomeOutDoorLeft bgImage={homeBg}>
                <MainHomeOutDoorLeftDiv>
                    <MainHomeOutDoorLeftDivContent>Home and outdoor</MainHomeOutDoorLeftDivContent>
                    <MainHomeOutDoorLeftDivbutton>
                    <CustomButton bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blackColor}>Source now</CustomButton>
                    </MainHomeOutDoorLeftDivbutton>
                </MainHomeOutDoorLeftDiv>
            </MainHomeOutDoorLeft>

            <MainHomeOutDoorRight>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>
                

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

                <MainHomeOutDoorRightItem>
                    <MainHomeOutDoorRightItemText>
                        <MainHomeOutDoorRightItemTextHeader>Soft chairs</MainHomeOutDoorRightItemTextHeader>
                        <MainHomeOutDoorRightItemTextPharagraph>From USD 19</MainHomeOutDoorRightItemTextPharagraph>
                    </MainHomeOutDoorRightItemText>

                    <MainHomeOutDoorRightItemImageDiv>
                        <MainHomeOutDoorRightItemImage src={rasmImage} />
                    </MainHomeOutDoorRightItemImageDiv>
                </MainHomeOutDoorRightItem>

            </MainHomeOutDoorRight>

        </MainHomeOutDoorContainer>
    </MainHomeOutDoorSection>
  )
}

const MainHomeOutDoorRightItemImage = styled.img`
    
`
const MainHomeOutDoorRightItemImageDiv = styled.div`
    
`
const MainHomeOutDoorRightItemTextPharagraph = styled.p`
    font-weight: 400;
font-size: 13px;
line-height: 16px;

margin-top: 9px;
max-width: 50px;

color: ${({theme}) => theme.pallet.greyColor4};
`
const MainHomeOutDoorRightItemTextHeader = styled.h4`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

/* base-color/dark */

color: ${({theme}) => theme.pallet.blackColor};
`
const MainHomeOutDoorRightItemText = styled.div`
    
`
const MainHomeOutDoorRightItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    border: 1px solid #E0E0E0;
`

const MainHomeOutDoorRight = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
`


const MainHomeOutDoorLeftDivbutton = styled.div`
    margin-top: 1.2rem;
`
const MainHomeOutDoorLeftDivContent = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    
    max-width: 130px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const MainHomeOutDoorLeftDiv = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 232, 186, 0.4), rgba(255, 232, 186, 0.4)), url(.jpg);
    opacity: 0.8;
    
    padding: 20px;
`

const MainHomeOutDoorLeft = styled.div`
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
const MainHomeOutDoorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* grid-row: auto; */
`

const MainHomeOutDoorSection = styled.div`
    width: 100%;
    height: 240px;

    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    margin-top: 20px;
`

export default MainHomeOutDoor