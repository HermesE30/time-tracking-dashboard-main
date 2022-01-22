import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  gap: 27px;

  @media(max-width: 540px) {
    width: 100vw;
    height: 100vh;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardsContainer = styled.div`
  max-width: 825px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px 27px;
`;
