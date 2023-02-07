import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <NotFoundPage>
        <NotFoundHeader>404</NotFoundHeader>
        <NotFoundText>Page Not Found!</NotFoundText>
        <NotFoundDetails>looks like you may have taken the wrong turn. there is no page with this direction</NotFoundDetails>
        <NotFoundButton onClick={()=>navigate('/')}>go back to the home page</NotFoundButton>
      </NotFoundPage>
  )
}

const NotFoundButton = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.pallet.whiteColor};
  background-color: ${({theme}) => theme.pallet.orangeColor};
  border: none;
  width: 20rem;
  padding: 0.6rem;
  cursor: pointer;
  margin: 1rem 0;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

const NotFoundDetails = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`

const NotFoundText = styled.h4`
  font-size: 3rem;
  font-weight: 300;
`

const NotFoundHeader = styled.h2`
  font-size: 10rem;

  @media screen and (max-width: 576px) {
    font-size: 6rem;
  }
`

const NotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({theme}) => theme.pallet.blackColor4};
  background-color: ${({theme})=> theme.pallet.bgPrimary};
  text-align: center;
`

export default NotFound