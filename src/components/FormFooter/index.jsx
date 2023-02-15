import React from 'react'
import styled from 'styled-components'
import paymentIcon from '../../assets/images/payment.png'
import visaIcon from '../../assets/images/visa.png'
import expressIcon from '../../assets/images/express.png'
import amercanIcon from '../../assets/images/amercan.png'

import { CreditCardImage } from '../'

const FormFooter = () => {
  return (
    <FormFooterContainer>
      <CreditCards>
        <CreditCardImage image={paymentIcon}/>
        <CreditCardImage image={visaIcon}/>
        <CreditCardImage image={expressIcon}/>
        <CreditCardImage image={amercanIcon}/>
      </CreditCards>
      <SupportLinks>
        <SupportLink>Support</SupportLink>
        <SupportLink>Privacy & Cookies</SupportLink>
        <SupportLink>Accessibility</SupportLink>
      </SupportLinks>
    </FormFooterContainer>
  )
}

const CreditCards = styled.div`

`

const SupportLinks = styled.div`
  display: flex;
  gap: 30px;
`
const SupportLink = styled.p`

`

const FormFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7%;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.pallet.whiteColor};

  @media screen and (max-width: 576px){
    display: none;
  }
`

export default FormFooter