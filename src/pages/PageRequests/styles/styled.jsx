import styled from 'styled-components';  

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderGreen = styled.header`
  background-color: #2AB572;
  width: 100vw;
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
  cursor: pointer;

`;

export const Icon = styled.a`
  font-weight: 900;
  margin-top: 3px;
  margin-left: 12px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 0px;
  font-family: 'Bebas Neue';
  letter-spacing: 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const DivInfos = styled.div `
  display: flex;
  flex-direction:column;
  margin-bottom: 20px;
`;

export const DivForm = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Input = styled.input`
  margin-bottom: 10px;
  border: solid 2px black;
  padding: 10px;
  width: 300px;
  border-radius: 1.2rem;
  background-color: #DBEFE4;
`;

export const InputDate = styled.input`
  margin-bottom: 10px;
  border: solid 2px black;
  padding: 10px;
  width: 150px;
  border-radius: 1.2rem;
  background-color: #DBEFE4;

`;


export const Label = styled.label`
  align-self: flex-start;
  color: #2AB572;
  font-weight: bold;
  font-family: Inter;
`;

export const SubmitButton = styled.button`
  cursor:pointer;
  font-size: 20px;
  font-weight: bold;
  height: 45px;
  width: 300px;
  border: 0px solid;
  background-color: #2AB572;
  background-size: 500% 400%;
  color: white;
  border-radius: 50px;
  transition: 0.6s all;
  display: flex;
  align-items: center;

  justify-content: center;
`;

export const TitleText = styled.h3`
  font-family: Inter;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
  color: #000;
  height: 2rem;
  width: 100%;
  margin-top: 18px;
  margin-bottom:5px;
  
`;

export const SpanText = styled.span`
  width: 147px;
  border-radius: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
      to top, 
      #FFBA00 0%, 
      #FFBA00 50%, 
      #DBEFE4 50%, 
      #DBEFE4 100%
  );
`;