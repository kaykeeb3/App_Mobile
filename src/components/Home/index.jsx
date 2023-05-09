import { SubLoading, HeaderGreen, HeaderYellow, Img, Loading, Color, Container } from "./styled"
import  Logo  from "../../assets/logo.png"

const Home = () => {
  return (
    <Container>
    <HeaderGreen>
      <Color>⠀</Color>
    </HeaderGreen>

    <HeaderYellow>
      <Color>⠀</Color>
    </HeaderYellow>
      <Img src={Logo}/>
      <SubLoading>
       <a href="#"><Loading /></a>
      </SubLoading>
    </Container>
  

  )
} 

export default Home