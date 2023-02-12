import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {ProductsItemsCard, ProductsItemsCard2, Pagination} from '../'
import { Products } from '../../Mock/Products'


const ProductsItemsCards = ({ grid }) => {
  const [myProducts] = useState(Products)
  const [currentPage,setCurrentPage] = useState(1)
  const [productPerPage,setProductPerPage] = useState(9)
  const [selected,setSelected] = useState(9)

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const CurrentPageProducts = myProducts.slice(indexOfFirstProduct,indexOfLastProduct)

  useEffect(()=>{
    setProductPerPage(Number(selected))
    setCurrentPage(1)
  },[selected])

  if(grid){
    return (
      <ProductsSectionItemsCardsDiv>
        <ProductsSectionItemsCards>
        {CurrentPageProducts.map((item)=>{
          return <ProductsItemsCard 
          key={item.id}
          image={item.image}
          currentPrice = {item.currentPrice}
          pastPrice = {item.pastPrice}
          rating = {item.rating}
          details = {item.details}
        />
        })}
        </ProductsSectionItemsCards>

        <Pagination 
          selected={selected} 
          setSelected={setSelected}  
          productsPerPage={productPerPage} 
          totalProducts={myProducts.length} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />

      </ProductsSectionItemsCardsDiv>
    )
  }
  return (
    <ProductsSectionItemsCardsDiv>

      <ProductsSectionItemsCards2>
      {CurrentPageProducts.map((item)=>{
          return <ProductsItemsCard2 
          key={item.id}
          image={item.image}
          currentPrice = {item.currentPrice}
          pastPrice = {item.pastPrice}
          rating = {item.rating}
          details = {item.details}
          orders = {item.orders}
          shipping = {item.shipping}
          description = {item.description}
        />
        })}
      </ProductsSectionItemsCards2>

      <Pagination 
        selected={selected} 
        setSelected={setSelected} 
        productsPerPage={productPerPage} 
        totalProducts={myProducts.length} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

    </ProductsSectionItemsCardsDiv>
  )
}


const ProductsSectionItemsCardsDiv = styled.div`
  
`

const ProductsSectionItemsCards2 = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    margin-top: 20px;
`
const ProductsSectionItemsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    margin-top: 20px;
`

export default ProductsItemsCards