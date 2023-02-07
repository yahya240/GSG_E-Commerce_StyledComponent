import React from 'react'
import styled from 'styled-components'

import {SingleProductFeature} from '../'

const SingleProductDetailsInfo = () => {
  return (
    <SingleProductDetailsInfoDiv>
            <SingleProductDetailsInfoHeader>
                <SingleProductDetailsInfoHeaderItem>Description</SingleProductDetailsInfoHeaderItem>
                <SingleProductDetailsInfoHeaderItem>Reviews</SingleProductDetailsInfoHeaderItem>
                <SingleProductDetailsInfoHeaderItem>Shipping</SingleProductDetailsInfoHeaderItem>
                <SingleProductDetailsInfoHeaderItem>About company</SingleProductDetailsInfoHeaderItem>
            </SingleProductDetailsInfoHeader>
            
            <SingleProductDetailsInformationDiv>
                <SingleProductDetailsInformation>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </SingleProductDetailsInformation>
            </SingleProductDetailsInformationDiv>

            <SingleProductDetailsInfoTable>
                
                <SingleProductDetailsInfoTableItem>
                    <SingleProductDetailsInfoTableItemName>
                        <SingleProductDetailsInfoTableItemNameText>Model</SingleProductDetailsInfoTableItemNameText>
                    </SingleProductDetailsInfoTableItemName>
                    <SingleProductDetailsInfoTableItemValue>
                        <SingleProductDetailsInfoTableItemValueText>#8786867</SingleProductDetailsInfoTableItemValueText>
                    </SingleProductDetailsInfoTableItemValue>
                </SingleProductDetailsInfoTableItem>

                <SingleProductDetailsInfoTableItem>
                    <SingleProductDetailsInfoTableItemName>
                        <SingleProductDetailsInfoTableItemNameText>Style</SingleProductDetailsInfoTableItemNameText>
                    </SingleProductDetailsInfoTableItemName>
                    <SingleProductDetailsInfoTableItemValue>
                        <SingleProductDetailsInfoTableItemValueText>Classic style</SingleProductDetailsInfoTableItemValueText>
                    </SingleProductDetailsInfoTableItemValue>
                </SingleProductDetailsInfoTableItem>

                <SingleProductDetailsInfoTableItem>
                    <SingleProductDetailsInfoTableItemName>
                        <SingleProductDetailsInfoTableItemNameText>Certificate</SingleProductDetailsInfoTableItemNameText>
                    </SingleProductDetailsInfoTableItemName>
                    <SingleProductDetailsInfoTableItemValue>
                        <SingleProductDetailsInfoTableItemValueText>ISO-898921212</SingleProductDetailsInfoTableItemValueText>
                    </SingleProductDetailsInfoTableItemValue>
                </SingleProductDetailsInfoTableItem>

                <SingleProductDetailsInfoTableItem>
                    <SingleProductDetailsInfoTableItemName>
                        <SingleProductDetailsInfoTableItemNameText>Size</SingleProductDetailsInfoTableItemNameText>
                    </SingleProductDetailsInfoTableItemName>
                    <SingleProductDetailsInfoTableItemValue>
                        <SingleProductDetailsInfoTableItemValueText>34mm x 450mm x 19mm</SingleProductDetailsInfoTableItemValueText>
                    </SingleProductDetailsInfoTableItemValue>
                </SingleProductDetailsInfoTableItem>

                <SingleProductDetailsInfoTableItem>
                    <SingleProductDetailsInfoTableItemName>
                        <SingleProductDetailsInfoTableItemNameText>Memory</SingleProductDetailsInfoTableItemNameText>
                    </SingleProductDetailsInfoTableItemName>
                    <SingleProductDetailsInfoTableItemValue>
                        <SingleProductDetailsInfoTableItemValueText>36GB RAM</SingleProductDetailsInfoTableItemValueText>
                    </SingleProductDetailsInfoTableItemValue>
                </SingleProductDetailsInfoTableItem>

            </SingleProductDetailsInfoTable>

            <SingleProductDetailsInfoFeatures>
                <SingleProductFeature text='Some great feature name here' />
                <SingleProductFeature text='Lorem ipsum dolor sit amet, consectetur ' />
                <SingleProductFeature text='Duis aute irure dolor in reprehenderit' />
                <SingleProductFeature text='Some great feature name here' />
            </SingleProductDetailsInfoFeatures>

        </SingleProductDetailsInfoDiv>
  )
}




const SingleProductDetailsInfoFeatures = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 26px 20px 28px;
`


const SingleProductDetailsInfoTableItemValueText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 24px;

padding-left: 10px;

color: #505050;
`
const SingleProductDetailsInfoTableItemValue = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
const SingleProductDetailsInfoTableItemNameText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 19px;

padding-left: 10px;

color: #505050;
`

const SingleProductDetailsInfoTableItemName = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    background: #EFF2F4;
`

const SingleProductDetailsInfoTableItem = styled.div`
    height: 36px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    border-bottom: 1px solid #E0E7E9;;
`

const SingleProductDetailsInfoTable = styled.div`
    max-width: 70%;
    margin: 23px 0 0 20px;
    border: 1px solid #E0E7E9;
`

const SingleProductDetailsInformation = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #505050;
`

const SingleProductDetailsInformationDiv = styled.div`
    max-width: 90%;
    margin: 18px 0 0 20px;
`


const SingleProductDetailsInfoHeaderItem = styled.h4`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    padding:    16px 16px 13px;
    color: #8B96A5;
    /* color: #0D6EFD; */
`

const SingleProductDetailsInfoHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #E3E8EE;
`

const SingleProductDetailsInfoDiv = styled.div`
    background: #FFFFFF;

    border: 1px solid #E3E8EE;

    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
`

export default SingleProductDetailsInfo