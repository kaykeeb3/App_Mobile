import styled from 'styled-components'

export const ContainerLivro = styled.div`
  display: flex;
  width: auto;
  margin-left: 18px;
  margin-bottom: 30px;
`;
export const Livro = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid #2AB572;
  border-radius: 20px;
  width: 260.92px;
  max-width: 260.92px;
  padding-top: 15px;
  padding-bottom: 13px;
  background-color: white;
`;
export const Info = styled.div`
  width: 240px;
  max-width: 240px;
`;
export const LivroTitulo = styled.p`
  margin-left: 13.01px;
  text-align: left;
  font-size: 15px;
  font-family: "Inter";
  font-weight: 600;
`;
export const LivroAutor = styled.p`
  margin-left: 13.01px;
  text-align: left;
  color: rgba(0, 0, 0, 0.7);
  font-size: 15px;
  font-family: "Inter";
  font-weight: 400;
`;
export const LivroStatus = styled.div`
  padding-top: 6px;
  margin-left: 10px;
  border-radius: 15px;
  width: 64px;
  height: 66.98px;
  text-align: center;
  color: white;
  font-family: "Inter";
`;
export const Availability = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #D9D9D9;
`;
export const LivroQuant = styled.p`
  margin-top: 15px;
  font-weight: 500;
  font-size: 21.7px;
  color: #DBEFE4;
`;