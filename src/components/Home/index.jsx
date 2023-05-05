import { SubLoading, HeaderGreen, HeaderYellow, Img, Loading } from "./styled"
import  Logo  from "../../assets/logo.png"

const Home = () => {
  return (
    <div>
    <HeaderGreen>
      <h1>⠀</h1>
    </HeaderGreen>

    <HeaderYellow>
      <h1>⠀</h1>
    </HeaderYellow>
      <Img src={Logo}/>
      <SubLoading>
       <a href="#"><Loading /></a>
      </SubLoading>
    </div>
  

  )
} 

export default Home