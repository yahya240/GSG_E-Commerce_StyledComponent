import React from 'react'
import styled from 'styled-components'

import heartIcon from '../../assets/images/likeCard.png'
import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'
import { useProductContext } from '../../contexts/productContext'


const ProductsItemsCard2 = ({currentPrice, pastPrice, rating, details,orders,shipping,description,image, item}) => {
    const {addToCart,state} = useProductContext();

    const handleAddProduct = ()=>{
        addToCart(item)
        console.log(state.products);
    }

  return (
    <ProductsSectionItemsCard>

    <ProductsSectionItemsCardImageDiv>
        <ProductsSectionItemsCardImage src={image} />
    </ProductsSectionItemsCardImageDiv>

    <ProductsSectionItemsCardContent>

        <ProductsSectionItemsCardContentInfo>
            <ProductsSectionItemsCardContentInfoDetails>{details}</ProductsSectionItemsCardContentInfoDetails>
            <ProductsSectionItemsCardContentInfoPrice>
                <ProductsSectionItemsCardContentInfoPriceCurrent>${currentPrice}</ProductsSectionItemsCardContentInfoPriceCurrent>
                <ProductsSectionItemsCardContentInfoPricePast>${pastPrice}</ProductsSectionItemsCardContentInfoPricePast>
            </ProductsSectionItemsCardContentInfoPrice>
            <ProductsSectionItemsCardContentInfoStars>
                <ProductsSectionItemsCardContentInfoStarsIcons>
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={starIcon} />
                    <ProductsSectionItemsCardContentInfoStarsIcon src={greyStarIcon} />
                </ProductsSectionItemsCardContentInfoStarsIcons>
                <ProductsSectionItemsCardContentInfoStarsRate>{rating}</ProductsSectionItemsCardContentInfoStarsRate>
                <ProductsSectionItemsCardContentInfoStarsOrders>{orders} orders</ProductsSectionItemsCardContentInfoStarsOrders>
                <ProductsSectionItemsCardContentInfoStarsShipping>{shipping}</ProductsSectionItemsCardContentInfoStarsShipping>
            </ProductsSectionItemsCardContentInfoStars>
            <ProductsSectionItemsCardContentInfoDescription>{description}</ProductsSectionItemsCardContentInfoDescription>
            <ProductsSectionItemsCardContentInfoViewMore>View details</ProductsSectionItemsCardContentInfoViewMore>
        </ProductsSectionItemsCardContentInfo>

        <ProductsSectionItemsCardContentHeard>
            <ProductsSectionItemsCardContentHeardIcon src={heartIcon} onClick={handleAddProduct} />
        </ProductsSectionItemsCardContentHeard>

    </ProductsSectionItemsCardContent>
    </ProductsSectionItemsCard>

  )
}


const ProductsSectionItemsCardContentInfoViewMore = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.blueColor};
`
const ProductsSectionItemsCardContentInfoDescription = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.greyColor6};
`
const ProductsSectionItemsCardContentInfoStarsShipping = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.greenColor};

`
const ProductsSectionItemsCardContentInfoStarsOrders = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.greyColor4};
`
const ProductsSectionItemsCardContentInfoStarsIcon = styled.img`
    
`
const ProductsSectionItemsCardContentInfoStarsRate = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.orangeColor};

`
const ProductsSectionItemsCardContentInfoStarsIcons = styled.div`
    min-width: max-content;
`
const ProductsSectionItemsCardContentHeardIcon = styled.img`
    
`
const ProductsSectionItemsCardContentHeard = styled.div`
    cursor: pointer;
`
const ProductsSectionItemsCardContentInfoDetails = styled.p`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color:${({theme}) => theme.pallet.blackColor};

`
const ProductsSectionItemsCardContentInfoStars = styled.div`
    display: flex;
    gap: 6px;

    @media screen and (max-width: 600px) {
    flex-direction: column;
    }
`
const ProductsSectionItemsCardContentInfoPricePast = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;

    color: ${({theme}) => theme.pallet.greyColor4};
`
const ProductsSectionItemsCardContentInfoPriceCurrent = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const ProductsSectionItemsCardContentInfoPrice = styled.div`
    display: flex;
    gap: 8px;
`
const ProductsSectionItemsCardContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ProductsSectionItemsCardContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
const ProductsSectionItemsCardImage = styled.img`
    width: 100%;
    object-fit: scale-down;
`
const ProductsSectionItemsCardImageDiv = styled.div`
    width: 210px;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

`
const ProductsSectionItemsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`

export default ProductsItemsCard2