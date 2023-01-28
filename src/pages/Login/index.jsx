import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import eyeIcon from '../../assets/images/eye-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import googleIcon from '../../assets/images/google-icon.png';

import { FormPage, FormContainer, FormFooter, FormInputContainer, FormSectionFooter,
     FormButton, FormChechbox, HorizentalLine, Button, FormHeader, FormSection } from '../../components';

const Login = () => {

    const [formData,setFormData] = useState({username:'',password:'',remember:false});

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // console.log(name,value);

        setFormData({...formData,[name]:value})
        // console.log(formData);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }


  return (
    <FormPage>

        <FormSection>
            <FormContainer>
                <FormHeader>Sign in</FormHeader>
                <FormInputContainer name='username' value={formData.username} handleChange={handleChange} inputLable='Username' inputPlaceHolder='Email or phone' />
                <FormInputContainer 
                    name='password'
                    type='password'
                    value={formData.password}
                    handleChange={handleChange}
                    inputLable='Password'
                    inputPlaceHolder='Type here'
                    forgotPassword={true}
                    icon={eyeIcon}
                />
                <FormChechbox name='remember' text='Remember me' checked={formData.remember} handleChange={handleChange} />
                <FormButton type='submit' onClick={handleSubmit}>Log in</FormButton>
                <HorizentalLine />
                <Button 
                    fontColor={props => props.theme.pallet.blackColor2} 
                    bgcolor={props => props.theme.pallet.whiteColor} 
                    icon={googleIcon}>Continue with Google
                </Button>
                <Button 
                    fontColor={props => props.theme.pallet.whiteColor} 
                    bgcolor={props => props.theme.pallet.blueColor2} 
                    icon={facebookIcon}>Continue with Facebook
                </Button>

                <FormSectionFooter path='/register' text='Don’t have an account?' text2='Register now' />

            </FormContainer>
        </FormSection>

        <FormFooter />

    </FormPage>
  )
}

// const FormSectionFooter = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap:0.2rem;
//     margin: 1.5rem 0 0;

//     a{
//         text-decoration:none;
//         color: ${props => props.theme.pallet.blueColor};
//     }
// `
// const FormSectionFooterH3 = styled.h3`
//     font-weight: 500;
//     font-size: ${props => props.theme.fontSizes.h4}rem;
//     line-height: 24px;
//     color: ${props => props.theme.pallet.blackColor2};
// `

// const FormSectionFooterLink = styled(Link)`

// `

// const FormHeader = styled.h3`
//     color: ${props => props.theme.pallet.blackColor};
//     font-size: ${props => props.theme.fontSizes.h3}rem;
//     font-weight: 600;
//     line-height: 32px;
// `

// const FormSection = styled.form`
//     width: 387px;
//     min-height: 361px;
//     background-color: ${props => props.theme.pallet.whiteColor};

//     box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
//     border-radius: 6px;
// `


export default Login