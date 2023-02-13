import React from 'react'
import styled from 'styled-components'

import gridIcon from '../../assets/images/grid1.png'
import grid2Icon from '../../assets/images/grid2.png'

const ProductsItemsOptions = ({grid,gridOn,gridOff}) => {
  return (
    <ProductsSectionItemsOptions>
            <ProductsSectionItemsOptionsInfo>
                <ProductsSectionItemsOptionsInfoCount>12,911 items in</ProductsSectionItemsOptionsInfoCount>
                <ProductsSectionItemsOptionsInfoTitle>Mobile accessory</ProductsSectionItemsOptionsInfoTitle>
            </ProductsSectionItemsOptionsInfo>
            <ProductsSectionItemsOptionsinputs>
                <ProductsSectionItemsOptionsinputsCheckboxDiv>
                    <ProductsSectionItemsOptionsinputsCheckbox type='checkbox' />
                    <ProductsSectionItemsOptionsinputsCheckboxLabel>Verified only</ProductsSectionItemsOptionsinputsCheckboxLabel>
                </ProductsSectionItemsOptionsinputsCheckboxDiv>
                <ProductsSectionItemsOptionsinputsSelecor>
                    <ProductsSectionItemsOptionsinputsOptions value='Featured'>Featured</ProductsSectionItemsOptionsinputsOptions>
                </ProductsSectionItemsOptionsinputsSelecor>
                <ProductsSectionItemsOptionsinputsButtons>
                    <ProductsSectionItemsOptionsinputsButtonsGrid  grid={grid} onClick={gridOn} >
                        <ProductsSectionItemsOptionsinputsButtonsGridIcon src={grid2Icon} />    
                    </ProductsSectionItemsOptionsinputsButtonsGrid>
                    <ProductsSectionItemsOptionsinputsButtonsBlock  grid={grid} onClick={gridOff} >
                        <ProductsSectionItemsOptionsinputsButtonsBlockIcon src={gridIcon} />
                    </ProductsSectionItemsOptionsinputsButtonsBlock>
                </ProductsSectionItemsOptionsinputsButtons>
            </ProductsSectionItemsOptionsinputs>
        </ProductsSectionItemsOptions>
  )
}


const ProductsSectionItemsOptionsinputsButtonsBlockIcon = styled.img`

`
const ProductsSectionItemsOptionsinputsButtonsGridIcon = styled.img`

`
const ProductsSectionItemsOptionsinputsButtonsBlock = styled.div`
    display: flex;
    align-items: center;
    background: ${(props)=> props.grid? props.theme.pallet.whiteColor : props.theme.pallet.greyColor5};

    padding: 10px;
    cursor: pointer;
`
const ProductsSectionItemsOptionsinputsButtonsGrid = styled.div`
    display: flex;
    align-items: center;
    background: ${(props)=> props.grid? props.theme.pallet.greyColor5 : props.theme.pallet.whiteColor};

    padding: 10px;
    cursor: pointer;
`

const ProductsSectionItemsOptionsinputsButtons = styled.div`
    display: flex;
    align-items: center;

    margin: 0 10px;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
`

const ProductsSectionItemsOptionsinputsOptions = styled.option`
    
`

const ProductsSectionItemsOptionsinputsSelecor = styled.select`
    width: 172px;
    height: 40px;
    background: ${({theme}) => theme.pallet.whiteColor};

    outline: none;
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    margin-left: 17px;
    padding-left: 10px;
`

const ProductsSectionItemsOptionsinputsCheckboxLabel = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    padding-left:13px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const ProductsSectionItemsOptionsinputsCheckbox = styled.input`
    width: 20px;
height: 20px;

background: ${({theme}) => theme.pallet.blueColor};
border-radius: 5px;
`
const ProductsSectionItemsOptionsinputsCheckboxDiv = styled.div`
    display: flex;
`

const ProductsSectionItemsOptionsInfoTitle = styled.h4`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const ProductsSectionItemsOptionsInfoCount = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.pallet.blackColor};
`
const ProductsSectionItemsOptionsinputs = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 992px) {
        width: 100%;
        justify-content: space-around;
    }
`
const ProductsSectionItemsOptionsInfo = styled.div`
    display: flex;
    gap: 5px;
    padding-left: 1rem;

    @media screen and (max-width: 992px) {
        display: none;
    }
`
const ProductsSectionItemsOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${({theme}) => theme.pallet.whiteColor};
    border: 1px solid #E3E8EE;
    border-radius: 6px;
    padding: 10px 0;

    @media screen and (max-width: 992px) {
        justify-content: center;
    }
`

export default ProductsItemsOptions