import React from "react"
import "./styles/pageLivros.css"
import { HeaderGreen, HeaderYellow, Header } from "./styles/pageLivrosStyled"
import SearchForm from "../../components/SearchForm/SearchForm.jsx"
import CardLivro from "../../components/CardLivro/CardLivro.jsx"
import IconBack from "../../assets/Sistema_-_SIBI__6_-removebg-preview.png"
import IconFilter from "../../assets/Sistema_-_SIBI__9_-removebg-preview.png"

const PageLivros = () => {
  
  return (
    <main>
    <HeaderGreen />
    <HeaderYellow />
    
    <Header>
    <a className="btnBack">
    <img src={IconBack}/>
    </a>
     <h1 className="titlePage">LIVROS</h1>
    <button className="btnFilter">
    <img src={IconFilter}/>
    </button>
    </Header>
    
    <div className="divForm">
      <SearchForm />
    </div>
    <div className="section">
      <CardLivro
        titulo="Dom Casmurro"
        autor="Machado de Assis"
        quant="2"
      />
      <CardLivro 
        titulo="As Crônicas de Nárnia"
        autor="C.W. Lewis"
        quant={1}
      />
      <CardLivro 
        titulo="As Aventuras de PI"
        autor="Yann Martel"
        quant={0}
      />
      <CardLivro 
        titulo="Mais Esperto que o Diabo"
        autor="Napoleon Hill"
        quant="3"
      />
    </div>
    
    </main>
 )
}

export default PageLivros