import React from "react"
import { FormSearch, BtnSearch, Img, InputSearch } from './styles/SearchFormStyled.jsx'
import IconSearch from "../../assets/Sistema_-_SIBI-removebg-preview.png"

const SearchForm = () => {
    return (
      
    <FormSearch>
      <BtnSearch>
      <Img src={IconSearch} 
      alt="Icon pesquisar"/>
      </BtnSearch>
      <InputSearch type="text" placeholder="Pesquisar..." />
    </FormSearch>
    
  )
}

export default SearchForm;