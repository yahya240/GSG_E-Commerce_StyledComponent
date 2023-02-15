import React from 'react'
import styled from 'styled-components'

const SomethingWrong = () => {
  return (
    <SomethingWrongPage>
        <SomethingWrongHeader>oops!</SomethingWrongHeader>
        <SomethingWrongText>Something Went Wrong...</SomethingWrongText>
      </SomethingWrongPage>
  )
}


const SomethingWrongText = styled.h4`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 2rem;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`

const SomethingWrongHeader = styled.h2`
  font-size: 8rem;
  margin-top: -10%;

  @media screen and (max-width: 576px) {
    font-size: 3rem;
  }
`

const SomethingWrongPage = styled.div`
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

export default SomethingWrong