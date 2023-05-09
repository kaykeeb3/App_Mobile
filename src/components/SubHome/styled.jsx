import  styled  from 'styled-components'

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


export const Img = styled.img`
  border-radius: 100%;
  margin: 24%;
  width: 280px;
  height: 267px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.h1`
  font-family: Bebas Neue;
  font-weight: 400;
  color: #000;
  font-size: 32px;
  line-height: 38.4px;
  margin-left: 8px;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: blur(2.5px);
    cursor: pointer;
  }
`;

export const Infor = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-top: 15%;
`;

export const SpanText = styled.span`
  background-color: #2AB572;
  width: 147px;
  border-radius: 18px;
  display: inline-block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Circle = styled.div`
  background-color: #2AB572;
  width: 70px;
  height: 65px;
  margin: 3%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  &:hover {
  filter: blur(2px);
  cursor: pointer;
  }
`;

export const SubCircle = styled.div`
  width: 60px;
  height: 50px;
  border-radius: 50%;
  background-color: #FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
`;
export const CircleGreen = styled.div`
  display: flex;
  background-color: #2AB572;
  border-radius: 50%;
  width: 90px;
  height: 85px;
  margin-right: -90%;
  &:hover {
  filter: blur(2px);
  cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const TextInfor = styled.h3`
  color: #000;
  opacity: 60%;
  font-family: Inter;
  font-weight: 400;
  font-size: 18.15px;
  line-height: 38.4px;
  margin-left: 8px;
  margin-top: 50px;
  &:hover {
    filter: blur(1.5px);
    cursor: pointer;
  }
`;


