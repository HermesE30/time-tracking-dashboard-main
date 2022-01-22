import React, { useState } from 'react';
import * as Contants from '../../constants/variables';
import * as Icon from '../Icons';
import * as Styled from './styles';

export default function Card({
  /** title of card */
  title,
  /** timeframes */
  timeframeKind,
  /** current value of timeframes */
  current = 0,
  /** previous value of timeframes */
  previous = 0,
}) {
  /**
   * verifica se o valor informado se correponde à string 'Work'
   */
  function isWork(value) {
    if (value === Contants.TITLE_OF_CARD_01) {
      return true;
    }
    return false;
  }

  /**
     * verifica se o valor informado se correponde à string 'play'
     */
  function isPlay(value) {
    if (value === Contants.TITLE_OF_CARD_02) return true;
    return false;
  }

  /**
   * verifica se o valor informado se correponde à string 'study'
   */
  function isStudy(value) {
    if (value === Contants.TITLE_OF_CARD_03) return true;
    return false;
  }

  /**
   * verifica se o valor informado se correponde à string 'exercise'
   */
  function isExercise(value) {
    if (value === Contants.TITLE_OF_CARD_04) return true;
    return false;
  }

  /**
     * verifica se o valor informado se correponde à string 'social'
     */
  function isSocial(value) {
    if (value === Contants.TITLE_OF_CARD_05) return true;
    return false;
  }

  /**
   * verifica titulo do componente e retorna
   * um index para seleção de cor no estilo
   */
  function verifyTitle(value) {
    if (isWork(value)) return 0;
    if (isPlay(value)) return 1;
    if (isStudy(value)) return 2;
    if (isExercise(value)) return 3;
    if (isSocial(value)) return 4;
    return 5;
  }

  // seleciona o icone de acordo com o titulo
  function selectIcon(value) {
    switch (value) {
      case Contants.TITLE_OF_CARD_01:
        return (
          <Icon.Work />
        );
      case Contants.TITLE_OF_CARD_02:
        return (
          <Icon.Play />
        );
      case Contants.TITLE_OF_CARD_03:
        return (
          <Icon.Study />
        );
      case Contants.TITLE_OF_CARD_04:
        return (
          <Icon.Exercise />
        );
      case Contants.TITLE_OF_CARD_05:
        return (
          <Icon.Social />
        );
      default:
        return (
          <Icon.SelfCare />
        );
    }
  }

  return (
    <Styled.CardContainer
      styleIndex={verifyTitle(title)}
      icon={title}
    >
      <Styled.IconContainer>
        {selectIcon(title)}
      </Styled.IconContainer>
      <Styled.Content>
        <Styled.Title>
          {title}
          <Icon.Elipse />
        </Styled.Title>
        <Styled.Timeframes>
          <Styled.Current>
            {`${current}hrs`}
          </Styled.Current>
          <Styled.Previous>
            {`Last ${timeframeKind} - ${previous}hrs`}
          </Styled.Previous>
        </Styled.Timeframes>
      </Styled.Content>
    </Styled.CardContainer>
  );
}
