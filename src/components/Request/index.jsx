import { 
  Card, 
  Color, 
  Container, 
  ContainerCard, 
  HeaderGreen, 
  HeaderYellow, 
  Icon, 
  Line, 
  Link, 
  TextInfor, 
  TitleText, 
  Cor 
} from './styled';
import { Title } from '../Category/styled';
import { AiOutlineArrowLeft } from "react-icons/ai"


function Request() {
  return(
    <Container>
      <HeaderGreen>
        <Color>⠀</Color>
      </HeaderGreen>
      <HeaderYellow>
        <Color>⠀</Color>
      </HeaderYellow>
     I
    <Link href='#'>
    <Icon 
      as={AiOutlineArrowLeft} 
      color="#000"
      size="30"
      />
    </Link>

    <TitleText>
      <Cor>Requisição</Cor>
    </TitleText>

    <ContainerCard>
    <Card>
    <TextInfor>KAYKE</TextInfor>
        <Line />
          <TextInfor>KAYKE</TextInfor>        
        <Line />
         <TextInfor>KAYKE</TextInfor>
        <Line />
         <TextInfor>KAYKE</TextInfor>
      </Card>
      <Card>
         <TextInfor>KAYKE</TextInfor>
        <Line />
          <TextInfor>KAYKE</TextInfor>        
        <Line />
         <TextInfor>KAYKE</TextInfor>
        <Line />
         <TextInfor>KAYKE</TextInfor>
      </Card>
    </ContainerCard>

    <Title>
       Copyright © 2023 - Todos os direitos reservados
    </Title>
    </Container>


  );
}

export default Request;