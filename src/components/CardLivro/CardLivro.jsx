import React, { useState } from "react"
import { ContainerLivro, Livro, Info, LivroTitulo, LivroAutor, LivroStatus, Availability, LivroQuant } from './styles/CardLivroStyled.jsx'

const CardLivro = (props) => {
  const { titulo, autor, quant } = props;
  const [backgroundColor, setBackgroundColor] = useState('#2AB572');
  
  
  
  return (
    <>
    <ContainerLivro>
      <Livro>
        <Info>
          <LivroTitulo>
          {titulo}
          </LivroTitulo>
          <LivroAutor>
          {autor}
          </LivroAutor>
        </Info>
      </Livro>
      <LivroStatus style={{ backgroundColor }}>
        <Availability>
          Disponível
        </Availability>
        <LivroQuant>
        {props.quant}
        </LivroQuant>
      </LivroStatus>
    </ContainerLivro>
    </>
  )
}

export default CardLivro