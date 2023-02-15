import React, { useState } from 'react'
import styled from 'styled-components'

const FormInputContainer = ({inputLable,inputPlaceHolder,type,forgotPassword,icon,name,value,handleChange}) => {

    const [isShow,setIsShow] = useState(false);

    const toggleShow = ()=>{
        setIsShow(!isShow)
    }
  return (
    <FormInputContainerDiv>
        <FormLable>{inputLable}</FormLable>
        <FormInput type={isShow? 'text' : type} name={name} value={value} onChange={(e)=> handleChange(e)} placeholder={inputPlaceHolder}></FormInput>
        {forgotPassword && <ForgotPassword>Forgot Password</ForgotPassword>}
        {icon && <EyeIconImage src={icon} onClick={toggleShow} />}
    </FormInputContainerDiv>
  )
}

const EyeIconImage = styled.img`
    display: block;
    width: 22px;
    height: 15px;

    position: absolute;
    right: 10px;
    top: 30px;

    cursor: pointer;
`

const ForgotPassword = styled.h5`
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.h5}rem;
    line-height: 18px;

    letter-spacing: -0.2px;
    color: ${props => props.theme.pallet.blueColor};

    position: absolute;
    right: 3px;
    top: 1px;

    cursor: pointer;
`

const FormInput = styled.input`
    display: block;
    width: 100%;
    height: 2.5rem;
    border: 1px solid #E0E0E0;
    border-radius: 6px;
    padding-left: 10px;

    &::placeholder{
        font-weight: 400;
        font-size: ${props => props.theme.fontSizes.h4}rem;
        line-height: 19px;
        color: ${props => props.theme.pallet.greyColor};
    }

    outline: transparent;
`

const FormLable = styled.label`
    font-size: ${props => props.theme.fontSizes.h4}rem;
    color: ${props => props.theme.pallet.blackColor};

    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.2px;
`

const FormInputContainerDiv = styled.div`
    margin: 1rem 0;
    display: flex;
    flex-direction: column;

    position: relative;
`

export default FormInputContainer