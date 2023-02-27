import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import schema from '../../validation/schema';
import { useAuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router';

import { 
  FormPage, FormContainer, FormFooter, FormInputContainer, FormSectionFooter,
  FormButton, FormChechbox, FormHeader, FormSection 
} from '../../components';


const Register = () => {
  const {setIsAuthorized} = useAuthContext();
  const navigate = useNavigate()
  const [formData,setFormData] = useState({name:'',surname:'',email:'',password:'',password2:'',terms:false});

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

    schema.validate({name:formData.name,surname:formData.surname,email:formData.email,password:formData.password,password2:formData.password2,terms:formData.terms})
    .then(async (res)=> {
      // console.log(res)
      const data = {name:`${res.name} ${res.surname}`,email:res.email,password:res.password}
      // console.log('data', data);
      try {
        const response = await axios.post('https://react-tt-api.onrender.com/api/users/signup',data)
        if(response){
          console.log(response)
          setIsAuthorized(true)
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('name',response.data.name)
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    })
    .catch((err)=> console.log(err))
  }


return (
  <FormPage>

      <FormSection>
          <FormContainer>
              <FormHeader>Register</FormHeader>
              <DoubleinputDiv>
                <FormInputContainer 
                  name='name' 
                  value={formData.username} 
                  handleChange={handleChange} 
                  inputLable='Name' 
                  inputPlaceHolder='Type here' 
                />
                <FormInputContainer 
                  name='surname' 
                  value={formData.username} 
                  handleChange={handleChange} 
                  inputLable='Surname' 
                  inputPlaceHolder='Type here' 
                />
              </DoubleinputDiv>
              <FormInputContainer 
                name='email' 
                type='email' 
                value={formData.username} 
                handleChange={handleChange} 
                inputLable='Your e-mail ' 
                inputPlaceHolder='example@mail.com' 
              />
              <FormInputContainer 
                  name='password'
                  type='password'
                  value={formData.password}
                  handleChange={handleChange}
                  inputLable='Password'
                  inputPlaceHolder='At least 6 characters.'
              />
              <FormInputContainer 
                  name='password2'
                  type='password'
                  value={formData.password2}
                  handleChange={handleChange}
                  inputLable='Repeat password'
                  inputPlaceHolder='Type here'
              />
              <FormButton type='submit' onClick={handleSubmit}>Register now</FormButton>
              <FormChechbox name='terms' text='I agree with ' text2='Terms and Conditions' checked={formData.terms} handleChange={handleChange} />
              <RegisterHorizentalLine />
              <FormSectionFooter path='/login' text='Already have an accaunt?' text2='Logn in' />

          </FormContainer>
      </FormSection>

      <FormFooter />

  </FormPage>
)
}

const RegisterHorizentalLine = styled.hr`
  border: 1px solid ${(props)=> props.theme.pallet.greyColor2};
  margin-top: 1.5rem;
`

const DoubleinputDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

export default Register