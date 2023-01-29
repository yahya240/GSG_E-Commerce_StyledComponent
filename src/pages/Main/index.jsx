import React from 'react'
import styled from 'styled-components'

import { MainHeader, MainNavbar, MainFooter } from '../../sections'
// import { Container, Logo } from '../../components'

// import usFlagIcon from '../../assets/images/us-flag.png'
// import dropUpIcon from '../../assets/images/Vector3.png'
// import linkedinIcon from '../../assets/images/linkedin.png'
// import facebookIcon from '../../assets/images/facebook.png'
// import twitterIcon from '../../assets/images/twitter.png'
// import instegramIcon from '../../assets/images/instegram.png'
// import youtubeIcon from '../../assets/images/youtube.png'
// import bergurIcon from '../../assets/images/Vector2.png'


const Main = () => {
  return (
    <MainPage>
      <MainHeader />
      <MainNavbar />
      {/* just space to see footer */}
      <JustSpace />
      <MainFooter />

    </MainPage>
  )
}



// main styles 
const MainPage = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({theme}) => theme.pallet.greyColor3};
`

// just space to see footer
const JustSpace = styled.div`
  max-width: 100vw;
  min-height: 30vh;
`

export default Main