import styled from "styled-components";
import { FiUser, FiEdit2 } from "react-icons/fi";

export const HeaderGreen = styled.header`
  background-color: #2ab572;
  width: 100%;
  height: 4%;
`;

export const HeaderYellow = styled.header`
  background-color: #ffba00;
  width: 100%;
  height: 4%;
`;

export const Color = styled.div`
  width: 100vw;
`;

export const Nav = styled.div`
  background-color: #2bb573;
  padding: 16px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center !important;
`;

export const Title = styled.h1`
  color: white;
  flex-grow: 1;
`;

export const GreenContainer = styled.div`
  margin-top: 5vh;
  background-color: #2bb573;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  border-top: 10px solid;
  background-color: #dbeee5;
  border: 0px;
  min-height: 100vh;
  width: 100vw;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const ProfileCircleWrapper = styled.div`
  position: relative;
  margin-top: 8vh;
  margin-bottom: 5vh;
  justify-content: center;
  &:hover ${EditOverlay} {
    opacity: 1;
  }
`;

export const ProfileCircle = styled.div`
  width: 200px;
  height: 190px;
  border-radius: 50%;
  background-color: #dadada;
  display: flex
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

export const NoPhotoIcon = styled(FiUser)`
  font-size: 220px;
  color: #989898;
  padding-right: 10px;
  fill: #989898;
`;

export const EditIcon = styled(FiEdit2)`
  font-size: 64px;
  color: white;
`;

export const Input = styled.input`
  width: 80%;
  height: 8vh;
  padding: 8px;
  border-color: black;
  border-radius: 30px;
  background-color: transparent;
  margin-bottom: 8vh;
`;

export const TitleText = styled.h3`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
  color: #000;
  margin-top: 31.4rem;
  height: 2rem;
  width: 100%;
`;
