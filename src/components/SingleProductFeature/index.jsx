import React from 'react'
import styled from 'styled-components'

import trueIcon from '../../assets/images/truee.png'

const SingleProductFeature = ({text}) => {
  return (
    <SingleProductDetailsInfoFeature>
        <SingleProductDetailsInfoFeatureIconDiv>
            <SingleProductDetailsInfoFeatureIcon src={trueIcon} />
        </SingleProductDetailsInfoFeatureIconDiv>
        <SingleProductDetailsInfoFeatureText>{text}</SingleProductDetailsInfoFeatureText>
    </SingleProductDetailsInfoFeature>
  )
}

const SingleProductDetailsInfoFeatureText = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #505050;
`

const SingleProductDetailsInfoFeatureIcon = styled.img`

`

const SingleProductDetailsInfoFeatureIconDiv = styled.div`

`

const SingleProductDetailsInfoFeature = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export default SingleProductFeature