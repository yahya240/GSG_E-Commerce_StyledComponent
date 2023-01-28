import React from 'react'
import styled from 'styled-components'
import paymentIcon from '../../assets/images/payment.png'
import visaIcon from '../../assets/images/visa.png'
import expressIcon from '../../assets/images/express.png'
import amercanIcon from '../../assets/images/amercan.png'

const FormFooter = () => {
  return (
    <FormFooterContainer>
      <CreditCards>
        <CreditCardImage src={paymentIcon}/>
        <CreditCardImage src={visaIcon}/>
        <CreditCardImage src={expressIcon}/>
        <CreditCardImage src={amercanIcon}/>
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
const CreditCardImage = styled.img`
  padding: 0 5px;
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
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.pallet.whiteColor};
`

export default FormFooter