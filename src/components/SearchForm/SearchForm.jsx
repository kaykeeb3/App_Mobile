import React from "react"
import IconSearch from "../../assets/Sistema_-_SIBI-removebg-preview.png"
import "./styles/SearchForm.css"

const SearchForm = () => {
    return (
      
    <form className="searchForm">
      <button className="btnSearch">
      <img src={IconSearch} 
      alt="Icon pesquisar"/>
      </button>
      <input className="inputSearch" type="text" placeholder="Pesquisar..." />
    </form>
    
  )
}

export default SearchForm;