import React, { useState } from 'react';
import { Card, Profile } from '../../components';
import { data } from '../../constants/data';
import * as Styled from './styles';

export default function MainPage() {
  // state
  const [timeframe, setTimeframe] = useState('daily');

  /**
   * manipula evento de click para setar o tipo de timeframe
   * selecionado
   */
  function handleClick(value) {
    setTimeframe(value);
  }

  /**
   * veifica qual é o timeframe selecionado
   * para passar no tipo do component
   */
  function defineTimeframes() {
    switch (timeframe) {
      case 'daily':
        return 'day';
      case 'weekly':
        return 'week';
      default:
        return 'month';
    }
  }

  return (
    <Styled.Container>
      <Profile
        avatar={require('../../img/avatar.png')}
        username={'Jeremy Robson'}
        onClick={(value) => handleClick(value)}
        navigationItems={['daily', 'weekly', 'monthly']}
      />
      <Styled.CardsContainer>
        {
          data.map((item) => (
            <Card
              title={item.title}
              timeframeKind={defineTimeframes()}
              current={item.timeframes[timeframe].current}
              previous={item.timeframes[timeframe].previous}
            />
          ))
        }
      </Styled.CardsContainer>
    </Styled.Container>
  );
}
