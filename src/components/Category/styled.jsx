import styled from "styled-components";


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

export const Text = styled.h1`
  font-family: Bebas Neue;
  font-weight: 400;
  font-size: 32px;
  line-height: 38.4px;
  margin-left: 20px;
  margin-top: 30px;
  color: #000;
`;

export const Search = styled.form`
 display: flex;
 margin-top: 30px;
 justify-content: center;
`;

export const SearchBox = styled.div`
  width: 90%;
  display: flex;
  background-color: #DBEFE4;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #000;
`;

export const Input = styled.input`
  width: 94%;
  background: #DBEFE4;
  border-radius: 30px;
  height: 40px;
  color: #000;
  padding: 10px;
  text-transform: lowercase;
  font-size: max(20px,1vw);
  font-family: Bebas Neue;
  border: none;
  font-size: 23px;
  border-radius: 20px;   
  box-shadow: 0 0 0 0;
  outline: 0;
`;

export const Icon = styled.div`
  color: #000;
  font-weight: 400;
  margin-left: 5px;
`;

export const IconCategory = styled.div`
  color: #000;
  font-weight: 100;

`;

export const ColumnsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  padding: 10px 21px;
`;

export const Card = styled.div`
  width: 140px;
  height: 130px;
  background-color: #2AB572;
  display: grid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  align-items: center;
  justify-content: center;
  border-radius: 18px;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
`;

export const TitleText = styled.h3`
  font-family: Inter;
  color: #000;
  font-weight: 200;
  font-size: 20px;
  text-align: center;
`;

export const IconeText = styled.div`
  width: 120px;
  &:hover {
  filter: blur(2px);
  cursor: pointer;
  /*border: 1px solid #000;*/
  border-radius: 10%;
  height: 100px;
}
`;

export const Line = styled.div`
  border: 1px solid #000;
  opacity: 20%;
  width: 100%;
  margin-top: 15px;
`;

export const Title = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 100;
  color: #000;
  margin-top: 10px;
  line-height: 14.52px;
  text-align: center;
`;
