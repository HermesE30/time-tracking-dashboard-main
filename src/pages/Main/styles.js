import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    align-items: start;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  gap: 10px; /* Espaço entre as células do grid, ajuste conforme necessário */

  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* Espaço entre as células do grid, ajuste conforme necessário */

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
