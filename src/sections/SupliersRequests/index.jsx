import React from 'react'
import styled from 'styled-components'

import supliersBg from '../../assets/images/image-102.png'

import { CustomButton } from '../../components'

const SupliersRequests = () => {
  return (
    <SupliersRequestsSection bgImage={supliersBg} >
        <SupliersRequestsSectionMask>

            <SupliersRequestsContent>
                <SupliersRequestsContentHeader>An easy way to send requests to all suppliers</SupliersRequestsContentHeader>
                <SupliersRequestsContentDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</SupliersRequestsContentDetails>
                <SupliersRequestsContentButton>
                    <CustomButton bgColor={({theme}) => theme.pallet.blueColor} fontColor={({theme}) => theme.pallet.whiteColor}>Send inquiry</CustomButton>
                </SupliersRequestsContentButton>
            </SupliersRequestsContent>

            <SupliersRequestsForm>
                <SupliersRequestsFormHeader>Send quote to suppliers</SupliersRequestsFormHeader>
                <SupliersRequestsFormInput placeholder='What item you need?' />
                <SupliersRequestsFormTextarea placeholder='Type more details' rows='6'/>
                <SupliersRequestsFormQuantity>
                    <SupliersRequestsFormQuantityInput placeholder='Quantity' />
                    <SupliersRequestsFormQuantitySelector>
                        <SupliersRequestsFormQuantityOption value='Pcs'>Pcs</SupliersRequestsFormQuantityOption>
                        <SupliersRequestsFormQuantityOption value='Pcs2'>Pcs2</SupliersRequestsFormQuantityOption>
                    </SupliersRequestsFormQuantitySelector>
                </SupliersRequestsFormQuantity>
                <SupliersRequestsFormButton>
                    <CustomButton bgColor={({theme}) => theme.pallet.blueColor} fontColor={({theme}) => theme.pallet.whiteColor}>Send inquiry</CustomButton>
                </SupliersRequestsFormButton>
            </SupliersRequestsForm>
        </SupliersRequestsSectionMask>
    </SupliersRequestsSection>
  )
}

const SupliersRequestsContentButton =styled.div`
    margin-top: 1rem;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`
const SupliersRequestsFormQuantityOption =styled.option`
    
`
const SupliersRequestsFormButton =styled.div`
    margin-top: 20px;
`

const SupliersRequestsFormQuantitySelector =styled.select`
    width: 111px;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding-left: 10px;
    margin-top: 1rem;
`

const SupliersRequestsFormQuantityInput =styled.input`
    width: 100%;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding-left: 10px;
    margin-top: 1rem;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        /* gray-500 */

        color: ${({theme}) => theme.pallet.greyColor4};
    }
`

const SupliersRequestsFormQuantity =styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px;
`

const SupliersRequestsFormTextarea =styled.textarea`
    width: 100%;
    margin-top: 20px;
    padding-left: 10px;

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        /* gray-500 */

        color: ${({theme}) => theme.pallet.greyColor4};
    }
`

const SupliersRequestsFormInput =styled.input`
    width: 100%;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding-left: 10px;
    margin-top: 1rem;

    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        /* gray-500 */

        color: ${({theme}) => theme.pallet.greyColor4};
    }
`

const SupliersRequestsFormHeader =styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const SupliersRequestsForm =styled.form`
    width: 50%;
    padding: 23px 20px;
    background: ${({theme}) => theme.pallet.whiteColor};
    /* shadow-md */

    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
    border-radius: 6px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const SupliersRequestsContentDetails =styled.p`
    font-weight: 400;
    font-size: 16px;
    color: ${({theme}) => theme.pallet.whiteColor};

    max-width: 390px;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const SupliersRequestsContentHeader =styled.h2`
    font-weight: 600;
font-size: 32px;

max-width: 440px;

color: ${({theme}) => theme.pallet.whiteColor};
`

const SupliersRequestsContent =styled.div`
    
`

const SupliersRequestsSectionMask =styled.div`
    height: 100%;
    background: linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%);

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 30px;
`
const SupliersRequestsSection =styled.div`
    /* height: 420px; */
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;

    border: 1px solid #E0E0E0;
    border-radius: 6px;

    margin-top:20px;
`

export default SupliersRequests