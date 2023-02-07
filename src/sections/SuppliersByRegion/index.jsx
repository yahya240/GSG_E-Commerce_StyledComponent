import React from 'react'
import styled from 'styled-components'

import usFlagIcon from '../../assets/images/us-flag.png'

const SuppliersByRegion = () => {
  return (
    <SuppliersByRegionSection>
        <SuppliersByRegionHeader>Suppliers by region</SuppliersByRegionHeader>
        <SuppliersByRegionFlags>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

            <SuppliersByRegionFlag>
                <SuppliersByRegionFlagImage src={usFlagIcon} />
                <SuppliersByRegionFlagText>
                    <SuppliersByRegionFlagTextCountry>United States</SuppliersByRegionFlagTextCountry>
                    <SuppliersByRegionFlagTextWebsite>shopname.ae</SuppliersByRegionFlagTextWebsite>
                </SuppliersByRegionFlagText>
            </SuppliersByRegionFlag>

        </SuppliersByRegionFlags>
    </SuppliersByRegionSection>
  )
}

const SuppliersByRegionFlagTextWebsite = styled.p`
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */


/* gray-500 */

color: ${({theme}) => theme.pallet.greyColor4};

`

const SuppliersByRegionFlagTextCountry = styled.h4`
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: -0.2px;

/* dark */

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

const SuppliersByRegionFlags = styled.div`
    width: 100%;
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 10px;
`

const SuppliersByRegionHeader = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    letter-spacing: -0.2px;

    /* base-color/dark */

    color: ${({theme}) => theme.pallet.blackColor};
`

const SuppliersByRegionSection = styled.div`
    margin: 30px 0 40px;
`

export default SuppliersByRegion