import React from "react"
import { HeaderGreen, HeaderYellow, Header, ImgBack, Title, BtnFilter, ImgFilter, DivForm, Section } from "./styles/pageLivrosStyled"
import SearchForm from "../../components/SearchForm/SearchForm.jsx"
import CardLivro from "../../components/CardLivro/CardLivro.jsx"
import IconBack from "../../assets/Sistema_-_SIBI__6_-removebg-preview.png"
import IconFilter from "../../assets/Sistema_-_SIBI__9_-removebg-preview.png"

const PageLivros = () => {
  
  /*function verificaPropriedade(props) {
    React.Children.map(props.children, (child) => {
      if (child.props.quant < 1) {
        setBackgroundColor('red');
      }
      if (child.props.quant === 1) {
        setBackgroundColor('yellow');
      }
    });
  }*/
  
  return (
    <main>
    <HeaderGreen />
    <HeaderYellow />
    
    <Header>
    <a>
    <ImgBack src={IconBack}/>
    </a>
     <Title>LIVROS</Title>
    <BtnFilter>
    <ImgFilter src={IconFilter}/>
    </BtnFilter>
    </Header>
    
    <DivForm>
      <SearchForm />
    </DivForm>
    <Section>
      <CardLivro
        titulo="Dom Casmurro"
        autor="Machado de Assis"
        quant="0"
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
    </Section>
    </main>
 )
}

export default PageLivros