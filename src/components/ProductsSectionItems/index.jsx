import React, { useState } from 'react'
import styled from 'styled-components'

import { ProductsItemsOptions, ProductsItemsCards} from '../'

const ProductsSectionItems = () => {
    const [grid,setGrid] = useState(true)

    const gridOn = () =>{
        setGrid(true)
    }

    const gridOff = () =>{
        setGrid(false)
    }
  return (
    <ProductsSectionItemsContainer>
        <ProductsItemsOptions grid={grid} gridOn={gridOn} gridOff={gridOff}/>
        <ProductsItemsCards grid={grid} />
    </ProductsSectionItemsContainer>
  )
}


const ProductsSectionItemsContainer = styled.div`

`

export default ProductsSectionItems