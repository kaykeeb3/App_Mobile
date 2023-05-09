import  Logo  from "../../assets/Jovens-estudando.png"
import { 
    Circle, 
    ContainerImg,
    HeaderGreen,
    HeaderYellow, 
    Img, 
    Infor, 
    SpanText, 
    SubCircle, 
    Text, 
    Icon, 
    CircleGreen, 
    TextInfor,
    Container,
    Color
  } from "./styled"

import { FiArrowRight } from 'react-icons/fi'


const SubHome = () => {
  return (
    <Container>
       <HeaderGreen>
      <Color>⠀</Color>
    </HeaderGreen>

    <HeaderYellow>
      <Color>⠀</Color>
    </HeaderYellow>
      <ContainerImg>
        <Img src={Logo} />
      </ContainerImg>
      <Infor>
      <Text>seja bem vindo(a) <br /> 
        SIBI - <SpanText>GERARDO JOSÉ</SpanText>
        </Text>
        <a href="#">
        <Circle>
          <SubCircle>
            <Icon 
              as={FiArrowRight} 
              color="#000"
              size={50}
              />
          </SubCircle>
          <CircleGreen />
        </Circle>
        </a>
      </Infor>
      <TextInfor>
         Deslize para a direita para começar
      </TextInfor>
    </Container>
  )
} 

export default SubHome