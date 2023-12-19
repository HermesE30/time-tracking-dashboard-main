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
  width: 100%;
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

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -7px;
  right: 10px;
`;

export const Content = styled.div`
  width: 100%;
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

  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colorText};
`;

export const TimeFrames = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media (max-width: 820px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
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
