import { 
  Color, 
  Container, 
  Form, 
  HeaderGreen, 
  HeaderYellow, 
  ContainerInput, 
  InputUser, 
  TextTitle, 
  Title, 
  InputPassword, 
  Button, 
  ButtonContainer, 
  TitleText  
} from "./styled";

function Login() {
  return (
    <Container>
      <HeaderGreen>
        <Color>⠀</Color>
      </HeaderGreen>

      <HeaderYellow>
        <Color>⠀</Color>
      </HeaderYellow>

      <Title>
      SEJA BEM-VINDO(A)
      </Title>

      <TextTitle>
        Entra com a sua matrícula
      </TextTitle>

      <Form action="POST">
        <ContainerInput>
          <InputUser 
            type="user" 
            placeholder="Usuário*" 
            required 
          />
        </ContainerInput>
        <ContainerInput>
          <InputPassword 
            type="passoword"
            placeholder="Senha*" 
            required
          />
        </ContainerInput>
        <ButtonContainer>
          <Button>
             ENTRAR
          </Button>
        </ButtonContainer>
      </Form>

      <TitleText>
        Copyright © 2023 - Todos os direitos reservados
      </TitleText>
    </Container>



  );
}

export default Login;