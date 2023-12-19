import React, { useState } from 'react';
import { Card, Profile } from '../../components';
import { data } from '../../constants/data';
import { Container, CardsContainer, MainContainer } from './styles';
import { iconMap, titleMap } from '../../constants/variables';

export default function MainPage() {
  // state
  const [timeFrame, setTimeFrame] = useState('daily');

  function handleClick(value) {
    setTimeFrame(value);
  }

  return (
    <MainContainer>
      <Container>
        <Profile
          avatar={require('../../img/avatar.png')}
          username={'Hermes Emmanuel'}
          onClick={(value) => handleClick(value)}
          navigationItems={['daily', 'weekly', 'monthly']}
        />
        <CardsContainer>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              timeFramesKind={timeFrame}
              current={item.timeFrames[timeFrame].current}
              previous={item.timeFrames[timeFrame].previous}
              icon="CustomTitle"
              iconMap={iconMap}
              titleMap={titleMap}
            />
          ))}
        </CardsContainer>
      </Container>
    </MainContainer>
  );
}
