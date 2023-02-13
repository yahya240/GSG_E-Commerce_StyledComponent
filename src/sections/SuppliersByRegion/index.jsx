import React from 'react'
import styled from 'styled-components'

import usFlagIcon from '../../assets/images/us-flag.png'
import flag from '../../assets/images/flag.png'
import flag1 from '../../assets/images/flag1.png'
import flag2 from '../../assets/images/flag2.png'
import flag3 from '../../assets/images/flag3.png'
import flag4 from '../../assets/images/flag4.png'
import flag5 from '../../assets/images/flag5.png'
import flag6 from '../../assets/images/flag6.png'
import flag7 from '../../assets/images/flag7.png'
import flag8 from '../../assets/images/flag8.png'
import { SuppliersFlag } from '../../components'

const SuppliersByRegion = () => {
  return (
    <SuppliersByRegionSection>
        <SuppliersByRegionHeader>Suppliers by region</SuppliersByRegionHeader>
        <SuppliersByRegionFlags>
            <SuppliersFlag icon={usFlagIcon} country='United States' website='shopname.ae' />
            <SuppliersFlag icon={flag} country='Germany' website='shopname.ae' />
            <SuppliersFlag icon={flag1} country='Arabic Emirates' website='shopname.ae' />
            <SuppliersFlag icon={flag2} country='Australia' website='shopname.ae' />
            <SuppliersFlag icon={flag3} country='China' website='shopname.ae' />
            <SuppliersFlag icon={flag4} country='Denmark' website='shopname.ae' />
            <SuppliersFlag icon={flag5} country='France' website='shopname.ae' />
            <SuppliersFlag icon={flag6} country='Great Britain' website='shopname.ae' />
            <SuppliersFlag icon={flag7} country='Italy' website='shopname.ae' />
            <SuppliersFlag icon={flag8} country='Russia' website='shopname.ae' />
        </SuppliersByRegionFlags>
    </SuppliersByRegionSection>
  )
}

const SuppliersByRegionFlags = styled.div`
    width: 100%;
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 10px;

    @media screen and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }

    @media screen and (max-width: 576px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }
`

const SuppliersByRegionHeader = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const SuppliersByRegionSection = styled.div`
    margin: 30px 0 40px;
`

export default SuppliersByRegion