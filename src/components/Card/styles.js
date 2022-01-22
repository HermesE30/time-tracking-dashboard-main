import styled from 'styled-components';
import { defaultTheme, borderRadius } from '../../theme';

const colorText = '#FFF';

const SelectStyle = {
  work: {
    background: defaultTheme.colorlightOrange,
  },
  play: {
    background: defaultTheme.colorSoftBlue,
  },
  study: {
    background: defaultTheme.colorLightRed,
  },
  exercise: {
    background: defaultTheme.colorLimeGreen,
  },
  social: {
    background: defaultTheme.colorViolet,
  },
  selfCare: {
    background: defaultTheme.colorSoftGrange,
  },
};

export const CardContainer = styled.div`
  width: 257px;
  height: 244px;
  max-height: 254px;
  display: flex;
  align-items: flex-end;
  border-radius: ${borderRadius.bRadius};
  position: relative;
  overflow: hidden;
  ${(props) => {
    switch (props.styleIndex) {
      case 0: return SelectStyle.work;
      case 1: return SelectStyle.play;
      case 2: return SelectStyle.study;
      case 3: return SelectStyle.exercise;
      case 4: return SelectStyle.social;
      default: return SelectStyle.selfCare;
    }
  }}
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -7px;
  right: 10px;
`;

export const Content = styled.div`
  width: 257px;
  height: 200px;
  max-height: 200px;
  padding: 28px 30px;
  z-index: 2;
  border-radius: ${borderRadius.bRadius};
  background: ${defaultTheme.colorDarkBlue};

  &:hover {
    background: ${defaultTheme.colorDesaturatedBlue};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colorText};
`;

export const Timeframes = styled.div`
  margin-top: 24px;
`;

export const Current = styled.p`
  font-size: 56px;
  font-weight: 300;
  margin-bottom: 5px;
  color: ${colorText};
`;

export const Previous = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: ${defaultTheme.colorPaleBlue};
`;
