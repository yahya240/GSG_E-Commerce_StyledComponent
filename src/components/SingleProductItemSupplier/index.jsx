import React from 'react'
import styled from 'styled-components'

import flagicon from '../../assets/images/flag.png'
import worldwide from '../../assets/images/worldwide.png'
import verify from '../../assets/images/verify.png'
import likeIcon from '../../assets/images/likee.png'


import { CustomButton } from '../../components'


const SingleProductItemSupplier = () => {
  return (
    <SingleProductItemSupplierDiv>
    <SingleProductItemSupplierContent>

        <SingleProductItemSupplierContentHeader>
            <SingleProductItemSupplierContentHeaderImage>R</SingleProductItemSupplierContentHeaderImage>
            <SingleProductItemSupplierContentHeaderText>
                <SingleProductItemSupplierContentHeaderName>Supplier</SingleProductItemSupplierContentHeaderName>
                <SingleProductItemSupplierContentHeaderCompany>Guanjoi Trading LLC</SingleProductItemSupplierContentHeaderCompany>
            </SingleProductItemSupplierContentHeaderText>
        </SingleProductItemSupplierContentHeader>
        <SingleProductItemSupplierContentLine />

        <SingleProductItemSupplierContentInfo>
            <SingleProductItemSupplierContentInfoItem>
                <SingleProductItemSupplierContentInfoItemImageDiv>
                    <SingleProductItemSupplierContentInfoItemImage src={flagicon} />
                </SingleProductItemSupplierContentInfoItemImageDiv>
                <SingleProductItemSupplierContentInfoItemText>Germany, Berlin</SingleProductItemSupplierContentInfoItemText>
            </SingleProductItemSupplierContentInfoItem>
            <SingleProductItemSupplierContentInfoItem>
                <SingleProductItemSupplierContentInfoItemImageDiv>
                    <SingleProductItemSupplierContentInfoItemImage src={verify} />
                </SingleProductItemSupplierContentInfoItemImageDiv>
                <SingleProductItemSupplierContentInfoItemText>Verified Seller</SingleProductItemSupplierContentInfoItemText>
            </SingleProductItemSupplierContentInfoItem>
            <SingleProductItemSupplierContentInfoItem>
                <SingleProductItemSupplierContentInfoItemImageDiv>
                    <SingleProductItemSupplierContentInfoItemImage src={worldwide} />
                </SingleProductItemSupplierContentInfoItemImageDiv>
                <SingleProductItemSupplierContentInfoItemText>Worldwide shipping</SingleProductItemSupplierContentInfoItemText>
            </SingleProductItemSupplierContentInfoItem>
        </SingleProductItemSupplierContentInfo>

        <SingleProductItemSupplierContentButtons>
            <CustomButton height={'40px'} width={'100%'} bgColor={({theme}) => theme.pallet.blueColor} fontColor={({theme}) => theme.pallet.whiteColor}>Send inquiry</CustomButton>
            <CustomButton height={'40px'} width={'100%'} bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blueColor}>Seller???s profile</CustomButton>
        </SingleProductItemSupplierContentButtons>

    </SingleProductItemSupplierContent>
    
    <SingleProductItemSupplierSaveforLater>
        <SingleProductItemSupplierSaveforLaterIconDiv>
            <SingleProductItemSupplierSaveforLaterIcon src={likeIcon} />
        </SingleProductItemSupplierSaveforLaterIconDiv>
        <SingleProductItemSupplierSaveforLaterText>Save for later</SingleProductItemSupplierSaveforLaterText>
    </SingleProductItemSupplierSaveforLater>
</SingleProductItemSupplierDiv>
  )
}


const SingleProductItemSupplierSaveforLaterText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.blueColor};

`

const SingleProductItemSupplierSaveforLaterIcon = styled.img`

`

const SingleProductItemSupplierSaveforLaterIconDiv = styled.div`

`

const SingleProductItemSupplierSaveforLater = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 1.5rem;
    cursor: pointer;
`


const SingleProductItemSupplierContentInfoItemText = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.greyColor4};
`
const SingleProductItemSupplierContentInfoItemImage = styled.img`

`
const SingleProductItemSupplierContentInfoItemImageDiv = styled.div`
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SingleProductItemSupplierContentInfoItem = styled.div`
    display: flex;
    gap: 18px;

    margin-bottom: 8px;
`
const SingleProductItemSupplierContentInfo = styled.div`
    margin: 13px 0 28px;
`
const SingleProductItemSupplierContentButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const SingleProductItemSupplierContentLine = styled.div`
    height: 1px;
    background-color: ${({theme}) => theme.pallet.greyColor2};
`

const SingleProductItemSupplierContentHeaderCompany = styled.div`
    font-weight: 400;
    font-size: 16px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const SingleProductItemSupplierContentHeaderName = styled.div`
    font-weight: 400;
    font-size: 16px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const SingleProductItemSupplierContentHeaderText = styled.div`

`
const SingleProductItemSupplierContentHeaderImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    background: #C6F3F1;
    border-radius: 4px;
    font-weight: 600;
    font-size: 28px;
    line-height: 24px;

    letter-spacing: -0.2px;

    color: rgba(76, 167, 167, 0.6);
`
const SingleProductItemSupplierContentHeader = styled.div`
    display: flex;
    align-items: center;
    gap:11px;
    margin-bottom: 20px;
`

const SingleProductItemSupplierContent = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    padding: 20px 16px;

`

const SingleProductItemSupplierDiv = styled.div`

`

export default SingleProductItemSupplier