import { Title, TitleText, Form, Link, Icon, SpanText, DivInfos, DivForm, HeaderGreen, HeaderYellow, Color, Input,InputDate, Label, SubmitButton, Container } from "./styles/styled";
import { AiOutlineArrowLeft } from "react-icons/ai"

const Cadastro = () => {
  return (
    <Container>
      <HeaderGreen>
        <Color>⠀</Color>
      </HeaderGreen>
      <HeaderYellow>
        <Color>⠀</Color>
      </HeaderYellow>
      <Link href='#'>
    <Icon 
      as={AiOutlineArrowLeft} 
      color="#000"
      size="30"
      />
    </Link>
      <Title>CADASTRAR <SpanText>REQUISIÇÃO DE LIVRO</SpanText></Title> 
      <DivForm> 
      <Form>
        <DivInfos> 
          <Label>ALUNO*</Label>
          <Input type="text" placeholder="Informe seu Nome" />
        </DivInfos>

        <DivInfos>
          <Label>SÉRIE/CURSO*</Label>
          <Input type="text" placeholder="Informe sua Série/Curso" />
        </DivInfos>
        
        <DivInfos>
          <Label>LIVRO*</Label>
          <Input type="text" placeholder="Inform o Nome do Livro" />
        </DivInfos>
        
        <DivInfos> 
          <Label>AUTOR*</Label>
          <Input type="text" placeholder="Informe o Autor do Livro" />
        </DivInfos>

        <DivInfos> 
          <Label>DATA DE REQUISIÇÃO*</Label>
          <InputDate type="date" placeholder="Data de Requisição" />
        </DivInfos>

        <DivInfos>
          <Label>DATA DE DEVOLUÇÃO*</Label>
          <InputDate type="date" placeholder="Data de Devolução" />
        </DivInfos>

        <SubmitButton>CADASTRAR</SubmitButton>
      </Form>
      </DivForm>
      <TitleText>
        Copyright © 2023 - Todos os direitos reservados
      </TitleText>
    </Container>
  )
} 

export default Cadastro;
