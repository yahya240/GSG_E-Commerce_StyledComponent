import React from 'react'
import styled from 'styled-components'

import { CustomButton, HomeOutDoorItem } from '../../components'

import electronicsBg from '../../assets/images/image-98.png'
import watch from '../../assets/images/watch.png'
import imgcard7 from '../../assets/images/imgcard7.png'
import imgstore5 from '../../assets/images/imgstore5.png'
import imgstore1 from '../../assets/images/imgstore1.png'
import image32 from '../../assets/images/image-32.png'
import image34 from '../../assets/images/image-34.png'
import image29 from '../../assets/images/image-29.png'


const ElectronicsAndGadgets = () => {
  return (
    <ElectronicsAndGadgetsSection>
        <ElectronicsAndGadgetsContainer>
            <ElectronicsAndGadgetsLeft bgImage={electronicsBg}>
                <ElectronicsAndGadgetsLeftDiv>
                    <ElectronicsAndGadgetsLeftDivContent>Consumer electronics and gadgets</ElectronicsAndGadgetsLeftDivContent>
                    <ElectronicsAndGadgetsLeftDivbutton>
                    <CustomButton bgColor={({theme}) => theme.pallet.whiteColor} fontColor={({theme}) => theme.pallet.blackColor}>Source now</CustomButton>
                    </ElectronicsAndGadgetsLeftDivbutton>
                </ElectronicsAndGadgetsLeftDiv>
            </ElectronicsAndGadgetsLeft>

            <ElectronicsAndGadgetsRight>
                <HomeOutDoorItem 
                    image={watch}
                    title='Smart watches'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={imgcard7}
                    title='Cameras'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={imgstore5}
                    title='Headphones'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={image29}
                    title='Gaming set'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={image34}
                    title='Laptops & PC'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={image29}
                    title='Smartphones'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={image32}
                    title='Electric kattle'
                    text='From USD 19'
                />
                <HomeOutDoorItem 
                    image={imgstore1}
                    title='Smart watches'
                    text='From USD 19'
                />
            </ElectronicsAndGadgetsRight>

        </ElectronicsAndGadgetsContainer>
    </ElectronicsAndGadgetsSection>
  )
}

const ElectronicsAndGadgetsRight = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
`

const ElectronicsAndGadgetsLeftDivbutton = styled.div`
    margin-top: 1.2rem;
`
const ElectronicsAndGadgetsLeftDivContent = styled.h4`
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    
    max-width: 150px;

    color: ${({theme}) => theme.pallet.blackColor};
`

const ElectronicsAndGadgetsLeftDiv = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 232, 186, 0.4), rgba(255, 232, 186, 0.4)), url(.jpg);
    opacity: 0.8;
    
    padding: 20px;
`

const ElectronicsAndGadgetsLeft = styled.div`
    background-image: url(${(props)=> props.bgImage});
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
`


const ElectronicsAndGadgetsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
`

const ElectronicsAndGadgetsSection = styled.div`
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

export default ElectronicsAndGadgets