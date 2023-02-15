import React from 'react'
import styled from 'styled-components'

import { CustomButton, HomeOutDoorItem } from '../../components'

import homeBg from '../../assets/images/image-92.png'
import rasmImage from '../../assets/images/rasm.png'
import chair1 from '../../assets/images/chair1.png'
import chair2 from '../../assets/images/chair2.png'
import gra from '../../assets/images/gra.png'
import mixer from '../../assets/images/mixer.png'
import blinder from '../../assets/images/blinder.png'
import appliance from '../../assets/images/appliance.png'
import tree from '../../assets/images/tree.png'



const MainHomeOutDoor = () => {
  return (
    <MainHomeOutDoorSection>
        <MainHomeOutDoorContainer>

            <MainHomeOutDoorLeft bgImage={homeBg}>
                <MainHomeOutDoorLeftDiv>
                    <MainHomeOutDoorLeftDivContent>Home and outdoor</MainHomeOutDoorLeftDivContent>
                    <MainHomeOutDoorLeftDivbutton>
                    <CustomButton bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blackColor}>Source now</CustomButton>
                    </MainHomeOutDoorLeftDivbutton>
                </MainHomeOutDoorLeftDiv>
            </MainHomeOutDoorLeft>

            <MainHomeOutDoorRight>
                <HomeOutDoorItem 
                    image={rasmImage}
                    title='Sofa chair'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={chair1}
                    title='Sofa & chair'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={chair2}
                    title='Kitchen dishes'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={gra}
                    title='Smart watches'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={mixer}
                    title='Kitchen mixer'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={blinder}
                    title='Blenders'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={appliance}
                    title='Home appliance'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={tree}
                    title='Coffee maker'
                    text='From USD 19'
                />
            </MainHomeOutDoorRight>

        </MainHomeOutDoorContainer>
    </MainHomeOutDoorSection>
  )
}

const MainHomeOutDoorRight = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
`


const MainHomeOutDoorLeftDivbutton = styled.div`
    margin-top: 1.2rem;
`
const MainHomeOutDoorLeftDivContent = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    
    max-width: 130px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const MainHomeOutDoorLeftDiv = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 232, 186, 0.4), rgba(255, 232, 186, 0.4)), url(.jpg);
    opacity: 0.8;
    
    padding: 20px;
`

const MainHomeOutDoorLeft = styled.div`
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`
const MainHomeOutDoorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
`

const MainHomeOutDoorSection = styled.div`
    width: 100%;
    height: 240px;

    background: ${({theme}) => theme.pallet.whiteColor};

    border: 1px solid #E3E8EE;
    border-radius: 6px;

    margin-top: 20px;

    overflow: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export default MainHomeOutDoor