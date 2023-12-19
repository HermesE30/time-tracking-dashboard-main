import styled from 'styled-components';
import { defaultTheme, borderRadius } from '../../theme';

const colorText = '#FFF';

export const CardContainer = styled.div`
  width: 257px;
  height: 498px;
  max-height: 498px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${borderRadius.bRadius};
  background: ${defaultTheme.colorDarkBlue};

  @media (max-width: 820px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border: 2px solid ${colorText};
  border-radius: 50%;
`;

export const User = styled.div`

`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${defaultTheme.colorPaleBlue};
`;

export const Username = styled.p`
  font-size: 42px;
  font-weight: 300;
  color: ${colorText};
`;

export const Content = styled.div`
  width: 257px;
  height: 356px;
  max-height: 356px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  border-radius: ${borderRadius.bRadius};
  background: ${defaultTheme.colorBlue};

  @media (max-width: 820px) {
    width: 100%;
    height: fit-content;
    flex-direction: row;
    align-items: center;
    gap: 22px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 820px) {
    width: 100%;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Item = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => (props.active ? colorText : defaultTheme.colorPaleBlue)};
  font-weight: ${(props) => (props.active ? 400 : 300)};
  
  &:hover {
    color: ${colorText};
    cursor: pointer;
  }
`;
