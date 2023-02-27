import React, { useState } from 'react';
import axios from 'axios'
// import * as yup from 'yup';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import eyeIcon from '../../assets/images/eye-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import googleIcon from '../../assets/images/google-icon.png';

import { FormPage, FormContainer, FormFooter, FormInputContainer, FormSectionFooter,
     FormButton, FormChechbox, HorizentalLine, Button, FormHeader, FormSection } from '../../components';

import { useAuthContext } from '../../contexts/authContext';
import schema from '../../validation/schema';
// let schema = yup.object().shape({
//     username: yup.string().max(16),
//     email: yup.string().email().required(),
//     password: yup.string().min(3).matches(/[a-z]/, "password must contain SMALL letters" ).required(),
//     password2: yup.string().oneOf([yup.ref('password'), null]),
//     remember: yup.boolean().oneOf([true], "You must check the remember me ")
// }); 

const Login = () => {
    const {setIsAuthorized} = useAuthContext()
    const navigate = useNavigate();
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
        // console.log(formData);
        schema.validate({email:formData.username,password:formData.password})
        .then( async (data) => {
            console.log(data);
            try {
                const res = await axios.post('https://react-tt-api.onrender.com/api/users/login',data)
                if(res){
                    console.log(res.data)
                    setIsAuthorized(true)
                    localStorage.setItem('token',res.data.token)
                    localStorage.setItem('name',res.data.name)
                    navigate('/')
                }
            } catch (error) {
                console.log(error.response.data.message);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <FormPage>

        <FormSection>
            <FormContainer>
                <FormHeader>Sign in</FormHeader>
                <FormInputContainer name='username' type='email' value={formData.username} handleChange={handleChange} inputLable='Username' inputPlaceHolder='Email or phone' />
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



export default Login