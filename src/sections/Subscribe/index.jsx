import React from 'react'
import styled from 'styled-components'

import message2 from '../../assets/images/message2.png'

const Subscribe = () => {
  return (
    <SubscribeSection>
        <SubscribeContainer>
            <SubscribeContent>
                <SubscribeContentHeader>Subscribe on our newsletter</SubscribeContentHeader>
                <SubscribeContentText>Get daily news on upcoming offers from many suppliers all over the world</SubscribeContentText>
                <SubscribeContentEmail>
                    <SubscribeContentEmailIcon src={message2} />
                    <SubscribeContentEmailInput placeholder='Email' />
                    <SubscribeContentEmailButton>Subscribe</SubscribeContentEmailButton>
                </SubscribeContentEmail>
            </SubscribeContent>
        </SubscribeContainer>
    </SubscribeSection>
  )
}

const SubscribeContentEmailIcon = styled.img`
    position: absolute;
    left: 4.4rem;
    top: 10px;
`
const SubscribeContentEmailButton = styled.button`
    width: 110px;
    height: 40px;
    color: ${({theme}) => theme.pallet.whiteColor};
    background: linear-gradient(180deg, ${({theme}) => theme.pallet.blueColor3} 0%, ${({theme}) => theme.pallet.blueColor4} 100%);

    border: 1px solid ${({theme}) => theme.pallet.blueColor};
    border-radius: 6px;
    cursor: pointer;
`
const SubscribeContentEmailInput = styled.input`
    width: 274px;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};
    border: 1px solid ${({theme}) => theme.pallet.whiteColor2};
    border-radius: 6px;
    outline: none;
    padding-left: 36px;
    margin: 0 8px;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: ${({theme}) => theme.pallet.greyColor4};
    }
`
const SubscribeContentEmail = styled.div`
    position: relative;
    margin-top: 21px;
`
const SubscribeContentText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.blackColor2};
`
const SubscribeContentHeader = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    text-align: center;
    letter-spacing: -0.2px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const SubscribeContent = styled.div`
    text-align: center;
`

const SubscribeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
`
const SubscribeSection = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.pallet.greyColor5};
`

export default Subscribe