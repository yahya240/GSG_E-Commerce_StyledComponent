import React from 'react'
import styled from 'styled-components'

const CreditCardImage = ({image}) => {
  return (
    <CreditCard src={image}/>
  )
}

const CreditCard = styled.img`
  padding: 0 5px;
`

export default CreditCardImage