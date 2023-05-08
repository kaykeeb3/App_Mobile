import { 
    Card, 
    ColumnsCard,
    HeaderGreen, 
    HeaderYellow, 
    Icon, 
    Input, 
    Search, 
    SearchBox, 
    Text, 
    IconCategory, 
    Link, 
    TitleText,
    IconeText,
    Line,
    Title
  } from './styled'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPersonPlusFill, BsFillBookFill} from 'react-icons/bs'
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc'
import { BiLogOutCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

function Category() {
  return (
    <div>      
      <HeaderGreen>
      <h1>⠀</h1>
    </HeaderGreen>

    <HeaderYellow>
      <h1>⠀</h1>
    </HeaderYellow>

    <Text>
      SIBI - GERARDO JOSÉ
    </Text>

    <Search
       method='POST'
    >
      <SearchBox>
      <Icon 
        as={AiOutlineSearch}
        color="#000"
        size={30}
      />
        <Input type="search" placeholder="Pesquisar..."  />
      </SearchBox>

    </Search>

    <ColumnsCard>
    <Card>
      <Link href='#'>
      <IconeText>
        <IconCategory
          as={BsFillPersonPlusFill}
          color="#000"
          size={60}
        />
        <TitleText>
          Início
        </TitleText>
      </IconeText>
      </Link>
    </Card>
    <Card>

    <Link href='#'>
      <IconeText>
        <IconCategory
          as={BsFillBookFill}
          color="#000"
          size={60}
        />
        <TitleText>
          Livros
        </TitleText>
      </IconeText>
      </Link>
    </Card>

    </ColumnsCard>

    <ColumnsCard>
    <Card>
    <Link href='#'>
      <IconeText>
        <IconCategory
          as={VscGitPullRequestGoToChanges}
          color="#000"
          size={60}
        />
        <TitleText>
          Requisição
        </TitleText>
      </IconeText>
      </Link>
    </Card>
    <Card>
    <Link href='#'>
      <IconeText>
        <IconCategory
          as={BiLogOutCircle}
          color="#000"
          size={60}
        />
        <TitleText>
          Sair
        </TitleText>
      </IconeText>
      </Link>
    </Card>
    </ColumnsCard>

    <ColumnsCard>
    <Card>
    <Link href='#'>
      <IconeText>
        <IconCategory
          as={CgProfile}
          color="#000"
          size={60}
        />
        <TitleText>
          Meu Perfil
        </TitleText>
      </IconeText>
      </Link>
    </Card>
    </ColumnsCard>

    <Line />

    <Title>
       Copyright © 2023 - Todos os direitos reservados
    </Title>


    </div>
  )
}

export default Category;