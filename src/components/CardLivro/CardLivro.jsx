import { ContainerLivro, Livro, Info, LivroTitulo, LivroAutor, LivroStatus, Availability, LivroQuant } from './styles/CardLivroStyled.jsx'

const CardLivro = (props) => {
 
 let backgroundColor;

  if (props.quant === 0) {
    backgroundColor = '#FF3131';
  } else if (props.quant === 1) {
    backgroundColor = '#FFBA00';
  } else {
    backgroundColor = '#2AB572';
  }
 
  return (
    <>
    <ContainerLivro>
      <Livro>
        <Info>
          <LivroTitulo>
          {props.titulo}
          </LivroTitulo>
          <LivroAutor>
          {props.autor}
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