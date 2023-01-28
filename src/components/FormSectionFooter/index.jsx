import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FormSectionFooter = ({path,text,text2}) => {
  return (
    <FormSectionFooterDiv>
        <FormSectionFooterH3>{text}</FormSectionFooterH3>
        <Link to={path}>{text2}</Link>
    </FormSectionFooterDiv>
  )
}

const FormSectionFooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0.2rem;
    margin: 1.5rem 0 0;

    a{
      text-decoration:none;
      color: ${props => props.theme.pallet.blueColor};
    }
`
const FormSectionFooterH3 = styled.h3`
    font-weight: 500;
    font-size: ${props => props.theme.fontSizes.h4}rem;
    line-height: 24px;
    color: ${props => props.theme.pallet.blackColor2};
`

// const FormSectionFooterLink = styled(Link)`

// `

export default FormSectionFooter