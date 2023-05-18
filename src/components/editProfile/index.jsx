import React from "react";
import { FiArrowLeft, FiEdit2, FiUser, FiBook, FiEdit3 } from "react-icons/fi";
import {
  GreenContainer,
  HeaderGreen,
  HeaderYellow,
  Color,
  Nav,
  Title,
  ProfileCircleWrapper,
  Container,
  ProfileCircle,
  NoPhotoIcon,
  EditIcon,
  EditOverlay,
  Input,
  TitleText,
} from "./styled";

const EditProfile = () => {
  return (
    <>
      <HeaderGreen>
        <Color>⠀</Color>
      </HeaderGreen>

      <HeaderYellow>
        <Color>⠀</Color>
      </HeaderYellow>
      <GreenContainer>
        <Nav>
          <FiArrowLeft size={26} />
          <Title>MEU PERFIL</Title>
        </Nav>
        <Container>
          <ProfileCircleWrapper>
            <ProfileCircle>
              <NoPhotoIcon />
              <EditOverlay>
                <EditIcon as={FiEdit2} />
              </EditOverlay>
            </ProfileCircle>
          </ProfileCircleWrapper>
          <Input type="text" placeholder="Nome Completo" />
          <Input type="text" placeholder="Série/Curso" />
          <Input type="text" placeholder="Matrícula" />
          <TitleText>Copyright © 2023 - Todos os direitos reservados</TitleText>
        </Container>
      </GreenContainer>
    </>
  );
};

export default EditProfile;
