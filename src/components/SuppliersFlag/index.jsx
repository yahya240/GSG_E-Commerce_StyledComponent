import React from 'react'
import styled from 'styled-components'

const SuppliersFlag = ({icon,country, website}) => {
  return (
    <SuppliersByRegionFlag>
        <SuppliersByRegionFlagImage src={icon} />
        <SuppliersByRegionFlagText>
            <SuppliersByRegionFlagTextCountry>{country}</SuppliersByRegionFlagTextCountry>
            <SuppliersByRegionFlagTextWebsite>{website}</SuppliersByRegionFlagTextWebsite>
        </SuppliersByRegionFlagText>
    </SuppliersByRegionFlag>
  )
}


const SuppliersByRegionFlagTextWebsite = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: ${({theme}) => theme.pallet.greyColor4};
`

const SuppliersByRegionFlagTextCountry = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const SuppliersByRegionFlagText = styled.div`

`

const SuppliersByRegionFlagImage = styled.img`

`

const SuppliersByRegionFlag = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
`

export default SuppliersFlag