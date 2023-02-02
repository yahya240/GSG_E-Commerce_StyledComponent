import React from 'react'
import styled from 'styled-components'
import brandLogo from '../../assets/images/logo.png'

import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <BrandLogo src={brandLogo} />
    </Link>
  )
}

const BrandLogo = styled.img`
  
`

export default Logo