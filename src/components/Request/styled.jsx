import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const HeaderGreen = styled.header`
  background-color: #2AB572;
  width: 100%;
  height: 4%;
`;

export const HeaderYellow = styled.header`
  background-color: #FFBA00;
  width: 100%;
  height: 4%;
`;

export const Color = styled.div`
  width: 100vw;
`;
export const Link = styled.a`
  text-decoration: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
  filter: blur(2px);
  cursor: pointer;
  }
`;

export const Icon = styled.a`
  display: flex;
  font-weight: 900;
  margin-top: 3px;
  margin-left: 12px;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Card = styled.div`
  width: 22rem;
  height: 29rem;
  margin: 17px;
  background: #E1E1E1;
  border: 1px solid #000;
  opacity: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    filter: blur(.8px);
  }
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 71px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TextInfor = styled.h2`
  font-family: Bebas Neue;
  font-size: 30px;
  color: #000;
  line-height: 14.8px;
  margin-left: 10px;
  margin-top: 30px;
`;

export const TitleText = styled.h1`
  font-family: Bebas Neue;
  font-size: 30px;
  line-height: 1px;
  font-weight: 400;
  text-align: center;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Cor= styled.h1`
  margin-bottom: 20px;
  border-radius: 20px;
  margin-top: 10px;
  height: 1rem;
  background-color: #FFBA00;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    filter: blur(1.9px);
  }

`;