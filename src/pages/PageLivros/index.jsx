import React from "react"
import { Main, HeaderGreen, HeaderYellow, Header, ImgBack, Title, DivForm, Section } from "./styles/pageLivrosStyled"
import SearchForm from "../../components/SearchForm/SearchForm.jsx"
import CardLivro from "../../components/CardLivro/CardLivro.jsx"
import MenuLivro from "../../components/MenuLivro/MenuLivro.jsx"
import IconBack from "../../assets/Sistema_-_SIBI__6_-removebg-preview.png"

const PageLivros = () => {
  
  return (
    <Main>
    <HeaderGreen />
    <HeaderYellow />
    
    <Header>
    <a href="#">
    <ImgBack src={IconBack}/>
    </a>
     <Title>LIVROS</Title>
    <MenuLivro />
    
    </Header>
    
    <DivForm>
      <SearchForm />
    </DivForm>
    <Section>
      <CardLivro
        titulo="Dom Casmurro"
        autor="Machado de Assis"
        quant={2}
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
    </Section>
    </Main>
 )
}

export default PageLivros