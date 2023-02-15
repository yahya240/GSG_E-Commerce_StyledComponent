import React from 'react'
import styled from 'styled-components'

const HomeOutDoorItem = ({image,title,text}) => {
  return (
    <MainHomeOutDoorRightItem>
        <MainHomeOutDoorRightItemText>
            <MainHomeOutDoorRightItemTextHeader>{title}</MainHomeOutDoorRightItemTextHeader>
            <MainHomeOutDoorRightItemTextPharagraph>{text}</MainHomeOutDoorRightItemTextPharagraph>
        </MainHomeOutDoorRightItemText>

        <MainHomeOutDoorRightItemImageDiv>
            <MainHomeOutDoorRightItemImage src={image} />
        </MainHomeOutDoorRightItemImageDiv>
    </MainHomeOutDoorRightItem>
  )
}

const MainHomeOutDoorRightItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`
const MainHomeOutDoorRightItemImageDiv = styled.div`
    width: 82px;
    height: 82px;
    
    display: flex;
    justify-content: center;
    align-items: center;
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
    min-width: max-content;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

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
    padding: 0 0.5rem;
`


export default HomeOutDoorItem