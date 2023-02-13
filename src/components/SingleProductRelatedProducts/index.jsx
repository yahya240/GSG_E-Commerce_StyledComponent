import React from 'react'
import styled from 'styled-components'
import { ProductImage } from '../../components'

import jacket1 from '../../assets/images/jacket1.png'
import jacket2 from '../../assets/images/jacket2.png'
import jacket3 from '../../assets/images/jacket3.png'
import jacket4 from '../../assets/images/jacket4.png'
import jacket5 from '../../assets/images/jacket5.png'


const SingleProductRelatedProducts = () => {
  return (
    <SingleProductDetailsRelatedProducts>
        <SingleProductDetailsRelatedProductsHeader>You may Like</SingleProductDetailsRelatedProductsHeader>
        <SingleProductDetailsRelatedProductsList>

            <SingleProductDetailsRelatedProductsItem>
                <SingleProductDetailsRelatedProductsItemImage>
                    <ProductImage image={jacket1}  width={'80'} height={'80'} imgSize={'80%'} bgColor={' #FFFFFF'} />
                </SingleProductDetailsRelatedProductsItemImage>
                <SingleProductDetailsRelatedProductsItemDetails>
                    <SingleProductDetailsRelatedProductsItemDetailsName>Apple Watch Series Space Gray</SingleProductDetailsRelatedProductsItemDetailsName>
                    <SingleProductDetailsRelatedProductsItemDetailsPrice>$7.00 - $99.50</SingleProductDetailsRelatedProductsItemDetailsPrice>
                </SingleProductDetailsRelatedProductsItemDetails>
            </SingleProductDetailsRelatedProductsItem>
            <SingleProductDetailsRelatedProductsItem>
                <SingleProductDetailsRelatedProductsItemImage>
                    <ProductImage image={jacket2}  width={'80'} height={'80'} imgSize={'80%'} bgColor={' #FFFFFF'} />
                </SingleProductDetailsRelatedProductsItemImage>
                <SingleProductDetailsRelatedProductsItemDetails>
                    <SingleProductDetailsRelatedProductsItemDetailsName>Apple Watch Series Space Gray</SingleProductDetailsRelatedProductsItemDetailsName>
                    <SingleProductDetailsRelatedProductsItemDetailsPrice>$7.00 - $99.50</SingleProductDetailsRelatedProductsItemDetailsPrice>
                </SingleProductDetailsRelatedProductsItemDetails>
            </SingleProductDetailsRelatedProductsItem>
            <SingleProductDetailsRelatedProductsItem>
                <SingleProductDetailsRelatedProductsItemImage>
                    <ProductImage image={jacket3}  width={'80'} height={'80'} imgSize={'80%'} bgColor={' #FFFFFF'} />
                </SingleProductDetailsRelatedProductsItemImage>
                <SingleProductDetailsRelatedProductsItemDetails>
                    <SingleProductDetailsRelatedProductsItemDetailsName>Apple Watch Series Space Gray</SingleProductDetailsRelatedProductsItemDetailsName>
                    <SingleProductDetailsRelatedProductsItemDetailsPrice>$7.00 - $99.50</SingleProductDetailsRelatedProductsItemDetailsPrice>
                </SingleProductDetailsRelatedProductsItemDetails>
            </SingleProductDetailsRelatedProductsItem>
            <SingleProductDetailsRelatedProductsItem>
                <SingleProductDetailsRelatedProductsItemImage>
                    <ProductImage image={jacket4}  width={'80'} height={'80'} imgSize={'80%'} bgColor={' #FFFFFF'} />
                </SingleProductDetailsRelatedProductsItemImage>
                <SingleProductDetailsRelatedProductsItemDetails>
                    <SingleProductDetailsRelatedProductsItemDetailsName>Apple Watch Series Space Gray</SingleProductDetailsRelatedProductsItemDetailsName>
                    <SingleProductDetailsRelatedProductsItemDetailsPrice>$7.00 - $99.50</SingleProductDetailsRelatedProductsItemDetailsPrice>
                </SingleProductDetailsRelatedProductsItemDetails>
            </SingleProductDetailsRelatedProductsItem>
            <SingleProductDetailsRelatedProductsItem>
                <SingleProductDetailsRelatedProductsItemImage>
                    <ProductImage image={jacket5}  width={'80'} height={'80'} imgSize={'80%'} bgColor={' #FFFFFF'} />
                </SingleProductDetailsRelatedProductsItemImage>
                <SingleProductDetailsRelatedProductsItemDetails>
                    <SingleProductDetailsRelatedProductsItemDetailsName>Apple Watch Series Space Gray</SingleProductDetailsRelatedProductsItemDetailsName>
                    <SingleProductDetailsRelatedProductsItemDetailsPrice>$7.00 - $99.50</SingleProductDetailsRelatedProductsItemDetailsPrice>
                </SingleProductDetailsRelatedProductsItemDetails>
            </SingleProductDetailsRelatedProductsItem>

        </SingleProductDetailsRelatedProductsList>
        </SingleProductDetailsRelatedProducts>
  )
}


const SingleProductDetailsRelatedProductsItemDetailsPrice = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: -0.2px;

    /* gray-500 */

    color: ${({theme}) => theme.pallet.greyColor4};
`

const SingleProductDetailsRelatedProductsItemDetailsName = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: ${({theme}) => theme.pallet.blackColor};

    @media screen and (max-width: 992px) {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;

        color: ${({theme}) => theme.pallet.greyColor4};
    }
`

const SingleProductDetailsRelatedProductsItemDetails = styled.div`

`

const SingleProductDetailsRelatedProductsItemImage = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};
/* base-color/gray-200 */

border: 1px solid #E0E0E0;
border-radius: 6px;
`

const SingleProductDetailsRelatedProductsItem = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;

    @media screen and (max-width: 992px) {
        flex-direction: column;
    }
`

const SingleProductDetailsRelatedProductsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 14px;

    @media screen and (max-width: 992px) {
        flex-direction: row;
    }
`

const SingleProductDetailsRelatedProductsHeader = styled.div`
font-weight: 600;
font-size: 16px;
line-height: 19px;

/* base-color/dark */

color: ${({theme}) => theme.pallet.blackColor};
`

const SingleProductDetailsRelatedProducts = styled.div`
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    padding: 20px 16px;

    overflow-x: scroll;
`

export default SingleProductRelatedProducts