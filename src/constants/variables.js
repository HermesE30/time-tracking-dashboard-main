import React from 'react';
import {
  Work,
  Play,
  Exercise,
  Study,
  Social,
  SelfCare,
} from '../components/Icons';

export const TITLE_OF_CARD_01 = 'Work';
export const TITLE_OF_CARD_02 = 'Play';
export const TITLE_OF_CARD_03 = 'Study';
export const TITLE_OF_CARD_04 = 'Exercise';
export const TITLE_OF_CARD_05 = 'Social';
export const TITLE_OF_CARD_06 = 'Self Care';

export const iconMap = {
  default: <SelfCare />,
  Work: <Work />,
  Play: <Play />,
  Study: <Study />,
  Exercise: <Exercise />,
  Social: <Social />,
};

export const titleMap = {
  default: 5,
  Work: 0,
  Play: 1,
  Study: 2,
  Exercise: 3,
  Social: 4,
};
