import  styled, { keyframes }from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SubLoading = styled.div`
  height: 30vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -8%;
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

export const Img = styled.img`
  border-radius: 100%;
  margin: 26%;
  width: 45%;
  height: 40%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Loading = styled.div`
  height: 90px;
  width: 90px;
  text-align: center;
  border-radius: 50%;
  border: 7px solid #2AB572;
  border-left: 7px solid #DBEFE4;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;