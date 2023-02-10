import React from 'react'
import styled from 'styled-components';

const Pagination = ({productsPerPage, totalProducts, currentPage, setCurrentPage}) => {

  let pageNumbers = [];
  const numberOfPages = Math.ceil(totalProducts/productsPerPage);

  for(let i = 1; i <= numberOfPages; i++){
    pageNumbers.push(i)
  }

  const handlePageBack = ()=> {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  const handlePageForword = ()=> {
    if(currentPage< numberOfPages){
      setCurrentPage(currentPage+1)
    }
  }

  return (
    <ProductsSectionPagination>
    <ProductsSectionPaginationSelect>
        <ProductsSectionPaginationOption>Show 10</ProductsSectionPaginationOption>
    </ProductsSectionPaginationSelect>
    <ProductsSectionPaginationPages>
      {console.log(typeof(currentPage))}
        <ProductsSectionPaginationPageBack currentPage={currentPage} onClick={handlePageBack} >{'<'}</ProductsSectionPaginationPageBack>
        {pageNumbers.map((number)=>{
          return <ProductsSectionPaginationPage key={number} number={number} currentPage={currentPage} onClick={()=>setCurrentPage(number)}>{number}</ProductsSectionPaginationPage>
        })}
        <ProductsSectionPaginationPageForword numberOfPages={numberOfPages} currentPage={currentPage} onClick={handlePageForword} >{'>'}</ProductsSectionPaginationPageForword>
    </ProductsSectionPaginationPages>
  </ProductsSectionPagination>
  )
}


const ProductsSectionPaginationPageForword = styled.div`
  width: 44px;
  height: 40px;

  background: ${(props)=> props.currentPage===props.numberOfPages? '#EFF2F4' : '#FFFFFF' };
  border: 1px solid #E3E8EE;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  cursor: pointer;
`

const ProductsSectionPaginationPageBack = styled.div`
  width: 44px;
  height: 40px;

  background: ${(props)=> props.currentPage === 1? '#EFF2F4' : '#FFFFFF' };
  border: 1px solid #E3E8EE;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  cursor: pointer;
`
const ProductsSectionPaginationPage = styled.div`
  width: 44px;
  height: 40px;

  background: ${(props)=> props.currentPage===props.number? '#EFF2F4' : '#FFFFFF' };
  border: 1px solid #E3E8EE;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props)=> props.currentPage===props.number? '#8B96A5' : '#1C1C1C' };

  cursor: pointer;
`
const ProductsSectionPaginationPages = styled.div`
  display: flex;
  align-items: center;
`

const ProductsSectionPaginationOption = styled.option`
  
`

const ProductsSectionPaginationSelect = styled.select`
  width: 125px;
  height: 40px;

  background: #FFFFFF;

  padding: 0 10px;
  outline: none;
  border: 1px solid #E3E8EE;
  border-radius: 6px;

  cursor: pointer;
`

const ProductsSectionPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;

  margin-top: 30px;

`

export default Pagination