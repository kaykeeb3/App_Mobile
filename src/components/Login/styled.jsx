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

export const Title = styled.h1`
  color: #000;
  font-family: Bebas Neue;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  margin-top: 45px;
`;

export const TextTitle = styled.h3`
  font-family: Inter;
  font-weight: 400;
  color: #2AB572;
  text-align: center;
  margin-top: 66px;
  font-size: 14px;
  line-height: 14.5px;
`;

export const Form = styled.form`
  position: absolute;
  margin-top: -10px;
  transition: .5s;
  width: 100%;
  height: 50%;
`;

export const InputUser = styled.input`
  margin-top: 51px;
  border-radius: 20px;
  padding: 24px 0px 16px 10px;
  outline: none;
  width: 263px;
  text-align: initial;
  border: none;
  height: 30px;
  background-color: #FAFAFA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    filter: blur(.9px);
  }
`;

export const InputPassword = styled.input`
  margin-top: 51px;
  border: none;
  border-radius: 20px;
  padding: 24px 0px 16px 10px;
  outline: none;
  width: 263px;
  text-align: initial;
  height: 30px;
  background-color: #FAFAFA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    filter: blur(.9px);
  }
`;


export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2AB572;
  width: 146px;
  height: 28px;
  color: #FFFF;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    filter: blur(.9px);
    background-color: #2AB572;
    opacity: 70%;
  }
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
