import React from 'react'
import styled from 'styled-components'

import clothingImg from '../../assets/images/clothing.png'
import clothing1Img from '../../assets/images/clothing1.png'
import clothing2Img from '../../assets/images/clothing2.png'
import clothing3Img from '../../assets/images/clothing3.png'
import clothing4Img from '../../assets/images/clothing4.png'
import clothing5Img from '../../assets/images/clothing5.png'
import clothing6Img from '../../assets/images/clothing6.png'


const SingleProductItemImages = () => {
  return (
    <SingleProductItemImagesDiv>
            <SingleProductItemImagesMainDiv>
                <SingleProductItemImagesMain src={clothingImg} />
            </SingleProductItemImagesMainDiv>
            <SingleProductItemImagesShowDiv>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing1Img}/>
                </SingleProductItemImagesShowContainer>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing2Img}/>
                </SingleProductItemImagesShowContainer>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing3Img}/>
                </SingleProductItemImagesShowContainer>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing4Img}/>
                </SingleProductItemImagesShowContainer>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing5Img}/>
                </SingleProductItemImagesShowContainer>
                <SingleProductItemImagesShowContainer>
                    <SingleProductItemImagesShow src={clothing6Img}/>
                </SingleProductItemImagesShowContainer>
            </SingleProductItemImagesShowDiv>
        </SingleProductItemImagesDiv>
  )
}


const SingleProductItemImagesShow = styled.img`

`
const SingleProductItemImagesShowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    padding: 2px 0;

    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 4px;
`
const SingleProductItemImagesShowDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const SingleProductItemImagesMain = styled.img`

`
const SingleProductItemImagesMainDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    border: 1px solid #E3E8EE;
    border-radius: 6px;
    margin-bottom: 20px;
`
const SingleProductItemImagesDiv = styled.div`

`

export default SingleProductItemImages