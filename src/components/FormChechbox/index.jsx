import React from 'react'
import styled from 'styled-components'

const FormChechbox = ({name,checked,handleChange,text,text2}) => {
  return (
    <FormChechboxContainer>
        <FormChechboxinput type='checkbox' name={name} checked={checked} onChange={handleChange}></FormChechboxinput>
        <FormChechboxLabel>
          {text}
          <FormChechboxLabelSpan>{text2}</FormChechboxLabelSpan>
        </FormChechboxLabel>
    </FormChechboxContainer>
  )
}

const FormChechboxLabel = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({theme}) => theme.pallet.blackColor};
`

const FormChechboxinput = styled.input`
    width: 17px;
    height: 17px;
    cursor: pointer;
`

const FormChechboxContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;
    margin: 14px 0;
`
const FormChechboxLabelSpan = styled.span`
  font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props)=> props.theme.pallet.blueColor};
    cursor: pointer;
`

export default FormChechbox