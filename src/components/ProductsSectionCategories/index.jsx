import React from 'react'
import styled from 'styled-components'

import starIcon from '../../assets/images/fillstar.png'
import greyStarIcon from '../../assets/images/star.png'

import { CustomButton, ProductsCategories } from '../../components'


const ProductsSectionCategories = () => {
  return (
    
    <ProductsSectionCategoriesContainer>
    <ProductsCategories title='Category'>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText>Mobile accessory</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText>Electronics</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText>Smartphones </ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText>Modern tech</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText textColor={({theme}) => theme.pallet.blueColor}>See all</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
    </ProductsCategories>
    <ProductsCategories title='Brands'>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Samsung</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Apple</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Huawei</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Pocco</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Lenovo</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText textColor={({theme}) => theme.pallet.blueColor}>See all</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
    </ProductsCategories>
    <ProductsCategories title='Features'>
    <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Metallic</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Plastic cover</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>8GB Ram</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Super power</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemText>Large Memory</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemText textColor={({theme}) => theme.pallet.blueColor}>See all</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
    </ProductsCategories>
    <ProductsCategories title='Price range'>
        <ProductsCategoriesRangeDiv>
        <ProductsCategoriesListItemRange type='range'  />
        <ProductsCategoriesListItemRange type='range'  />
        </ProductsCategoriesRangeDiv>
        <ProductsCategoriesRangeInputsDiv>
            <ProductsCategoriesRangeInputsContainer>
                <ProductsCategoriesRangeInputText>Min</ProductsCategoriesRangeInputText>
                <ProductsCategoriesRangeInputs type='text' placeholder='0'/>
            </ProductsCategoriesRangeInputsContainer>
            <ProductsCategoriesRangeInputsContainer>
                <ProductsCategoriesRangeInputText>Max</ProductsCategoriesRangeInputText>
                <ProductsCategoriesRangeInputs type='text' placeholder='9999'/>
            </ProductsCategoriesRangeInputsContainer>
        </ProductsCategoriesRangeInputsDiv>
        <ProductsCategoriesRangeButtonDiv>
        <CustomButton height={'30px'} width={'100%'} bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blueColor}>Apply</CustomButton>
        </ProductsCategoriesRangeButtonDiv>
    </ProductsCategories>
    <ProductsCategories title='Condition'>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemRadio type='radio' name='products-radio' />
            <ProductsCategoriesListItemText>Any</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemRadio type='radio' name='products-radio' />
            <ProductsCategoriesListItemText>Refurbished</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemRadio type='radio' name='products-radio' />
            <ProductsCategoriesListItemText>Brand new</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemRadio type='radio' name='products-radio' />
            <ProductsCategoriesListItemText>Old items</ProductsCategoriesListItemText>
        </ProductsCategoriesListItem>
    </ProductsCategories>
    
    <ProductsCategories title='Ratings'>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemStars>
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
            </ProductsCategoriesListItemStars>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemStars>
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
            </ProductsCategoriesListItemStars>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemStars>
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
            </ProductsCategoriesListItemStars>
        </ProductsCategoriesListItem>
        <ProductsCategoriesListItem>
            <ProductsCategoriesListItemCheckbox type='checkbox' />
            <ProductsCategoriesListItemStars>
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={starIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
                <ProductsCategoriesListItemStarIcon src={greyStarIcon} />
            </ProductsCategoriesListItemStars>
        </ProductsCategoriesListItem>
    </ProductsCategories>
</ProductsSectionCategoriesContainer>
  )
}



const ProductsCategoriesRangeInputText = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* dark */

color: #1C1C1C;
`
const ProductsCategoriesRangeInputsContainer = styled.div`
    width: 100%;
`
const ProductsCategoriesRangeButtonDiv = styled.div`
    margin-top: 8px;
`

const ProductsCategoriesRangeInputs = styled.input`
width:110px;
height:40px;
background: #FFFFFF;

border: 1px solid #E3E8EE;
border-radius: 6px;
padding-left: 10px;

&::placeholder{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #BBBCBE;
}
`

const ProductsCategoriesRangeInputsDiv = styled.div`
    width: 100%;
    display: flex;
`

const ProductsCategoriesListItemRange = styled.input`
    width: 100%;
    height: 4px;
    color: #AFD0FF;
    background: #AFD0FF;
    border-radius: 2px;
    position: absolute;

    &::-webkit-slider-thumb{
        height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 3px solid #1b53c0;
  background-color: #fff;
  pointer-events: auto;
  -webkit-appearance: none;
    }
`
const ProductsCategoriesRangeDiv = styled.div`
    position: relative;
    margin-bottom: 20px;
`

const ProductsCategoriesListItemStarIcon = styled.img`

`
const ProductsCategoriesListItemStars = styled.div`

`
const ProductsCategoriesListItemText = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    padding: 0.7rem 0;

    color: ${(props) => props.textColor? props.textColor : '#505050'};
`
const ProductsCategoriesListItemRadio = styled.input`
width: 20px;
height: 20px;

background: #979797;
mix-blend-mode: normal;
opacity: 0.54;
`
const ProductsCategoriesListItemCheckbox = styled.input`
    width: 1rem;
    height: 1rem;

    background-color: #BDBDBD;
    border: 2px solid #BDBDBD;
    border-radius: 5px;
`
const ProductsCategoriesListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`

const ProductsSectionCategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default ProductsSectionCategories