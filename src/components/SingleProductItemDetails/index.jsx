import React from 'react'
import styled from 'styled-components'

import trueIcon from '../../assets/images/true.png'
import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'
import soldIcon from '../../assets/images/sold.png'
import msg1Icon from '../../assets/images/msg1.png'

const SingleProductItemDetails = () => {
  return (
    <SingleProductItemProductDetails>
        <SingleProductItemProductDetailsInStock>
            <SingleProductItemProductDetailsInStockIconDiv>
                <SingleProductItemProductDetailsInStockIcon src={trueIcon} />
            </SingleProductItemProductDetailsInStockIconDiv>
            <SingleProductItemProductDetailsInStockText>In stock</SingleProductItemProductDetailsInStockText>
        </SingleProductItemProductDetailsInStock>

        <SingleProductItemProductDetailsHeader>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</SingleProductItemProductDetailsHeader>

        <SingleProductItemProductDetailsStars>
                <SingleProductItemProductDetailsStarsIcons>
                    <SingleProductItemProductDetailsStarsIcon src={starIcon} />
                    <SingleProductItemProductDetailsStarsIcon src={starIcon} />
                    <SingleProductItemProductDetailsStarsIcon src={starIcon} />
                    <SingleProductItemProductDetailsStarsIcon src={starIcon} />
                    <SingleProductItemProductDetailsStarsIcon src={greyStarIcon} />
                </SingleProductItemProductDetailsStarsIcons>
                <SingleProductItemProductDetailsStarsRate>9.3</SingleProductItemProductDetailsStarsRate>
                <SingleProductItemProductDetailsDot></SingleProductItemProductDetailsDot>
                <SingleProductItemProductDetailsStarsDiv>
                  <SingleProductItemProductDetailsStarsIconDiv>
                    <SingleProductItemProductDetailsStarsIcon src={msg1Icon} />
                  </SingleProductItemProductDetailsStarsIconDiv>
                  <SingleProductItemProductDetailsStarsOrders>32 reviews</SingleProductItemProductDetailsStarsOrders>
                </SingleProductItemProductDetailsStarsDiv>
                <SingleProductItemProductDetailsDot></SingleProductItemProductDetailsDot>
                <SingleProductItemProductDetailsStarsDiv>
                  <SingleProductItemProductDetailsStarsIconDiv>
                    <SingleProductItemProductDetailsStarsIcon src={soldIcon} />
                  </SingleProductItemProductDetailsStarsIconDiv>
                  <SingleProductItemProductDetailsStarsOrders>154 sold</SingleProductItemProductDetailsStarsOrders>
                </SingleProductItemProductDetailsStarsDiv>
            </SingleProductItemProductDetailsStars>

            <SingleProductItemProductDetailsPrices>
              <SingleProductItemProductDetailsPrice target="true">
                <SingleProductItemProductDetailsPriceValue target="true">$98.00</SingleProductItemProductDetailsPriceValue>
                <SingleProductItemProductDetailsPriceinfo>50-100 pcs</SingleProductItemProductDetailsPriceinfo>
              </SingleProductItemProductDetailsPrice>
              <SingleProductItemProductDetailsPrice>
                <SingleProductItemProductDetailsPriceValue>$90.00</SingleProductItemProductDetailsPriceValue>
                <SingleProductItemProductDetailsPriceinfo>50-100 pcs</SingleProductItemProductDetailsPriceinfo>
              </SingleProductItemProductDetailsPrice>
              <SingleProductItemProductDetailsPrice>
                <SingleProductItemProductDetailsPriceValue>$98.00</SingleProductItemProductDetailsPriceValue>
                <SingleProductItemProductDetailsPriceinfo>50-100 pcs</SingleProductItemProductDetailsPriceinfo>
              </SingleProductItemProductDetailsPrice>
            </SingleProductItemProductDetailsPrices>

            <SingleProductItemProductDetailsDescription>
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Price: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Negotiable </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionLine />
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Type: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Classic  shoes </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Material:</SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Plastic material </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Design: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Modern nice </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionLine />
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Customization: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Customized logo and design custom packages </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Protection: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>Refund Policy </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionItem>
                <SingleProductItemProductDetailsDescriptionItemName>Warranty: </SingleProductItemProductDetailsDescriptionItemName>
                <SingleProductItemProductDetailsDescriptionItemValue>2 years full warranty </SingleProductItemProductDetailsDescriptionItemValue>
              </SingleProductItemProductDetailsDescriptionItem>
              <SingleProductItemProductDetailsDescriptionLine />
            </SingleProductItemProductDetailsDescription>

    </SingleProductItemProductDetails>
  )
}

const SingleProductItemProductDetailsDescriptionLine = styled.hr`
  border: 1px solid #E0E0E0;
  margin-bottom: 1rem;
`

const SingleProductItemProductDetailsDescriptionItemValue = styled.h4`
font-weight: 400;
font-size: 16px;

max-width: 189px;

color: #505050;
`

const SingleProductItemProductDetailsDescriptionItemName = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* gray-500 */

color: #8B96A5;
`

const SingleProductItemProductDetailsDescriptionItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  margin-bottom: 1rem;
`

const SingleProductItemProductDetailsDescription = styled.div`

`

const SingleProductItemProductDetailsPriceinfo = styled.p`
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */


/* base-color/gray-800 */

color: #606060;
`
const SingleProductItemProductDetailsPriceValue = styled.h3`
font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */


/* base-color/dark */

color: ${(props)=> props.target?  '#FA3434': '#1C1C1C'};
`
const SingleProductItemProductDetailsPrice = styled.div`
border-left: ${(props)=> props.target === 'true'? '' : '1px solid #BDC1C8'};
padding: 0 40px 0 10px;
`
const SingleProductItemProductDetailsPrices = styled.div`
  display: flex;
  align-items: center;
  background: #FFF0DF;
  padding: 1rem 1rem 0.8rem;
  margin: 11px 0 21px;
`
const SingleProductItemProductDetailsDot= styled.div`
width: 6px;
height: 6px;

border-radius: 50%;
background: #DBDBDB;
`
const SingleProductItemProductDetailsStarsIconDiv = styled.div`

`
const SingleProductItemProductDetailsStarsDiv = styled.div`
  display: flex;
  gap: 9px;
`

const SingleProductItemProductDetailsStarsOrders = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* base-color/gray-500 */

color: #787A80;

`

const SingleProductItemProductDetailsStarsIcon = styled.img`
    
`
const SingleProductItemProductDetailsStarsRate = styled.div`
    font-weight: 400;
font-size: 16px;
line-height: 19px;

/* base-color/orange */

color: #FF9017;

`
const SingleProductItemProductDetailsStarsIcons = styled.div`
    
`

const SingleProductItemProductDetailsStars = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 9px;
`

const SingleProductItemProductDetailsHeader = styled.h2`
font-weight: 600;
font-size: 20px;
max-width: 384px;

color: #1C1C1C;
margin-top: 5px;
`
const SingleProductItemProductDetailsInStockText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: -0.2px;

/* base-color/green */

color: #00B517;

`
const SingleProductItemProductDetailsInStockIcon = styled.img`

`
const SingleProductItemProductDetailsInStockIconDiv = styled.div`
  
    
`
const SingleProductItemProductDetailsInStock = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`
const SingleProductItemProductDetails = styled.div`

`

export default SingleProductItemDetails