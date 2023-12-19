import React from 'react';
import {
  CardContainer,
  IconContainer,
  Content,
  Title,
  TimeFrames,
  Current,
  Previous,
} from './styles';

export default function Card({
  title,
  timeFramesKind,
  current = 0,
  previous = 0,
  icon,
  iconMap,
  titleMap,
  defaultIndex = 5,
  // ... outras propriedades personalizáveis
}) {
  const defaultIcon = iconMap ? iconMap.default : null;
  const defaultTitle = titleMap ? titleMap.default : null;

  function selectIcon(value) {
    return iconMap ? iconMap[value] || defaultIcon : null;
  }

  function verifyTitle(value) {
    return titleMap ? titleMap[value] || defaultTitle : null;
  }

  return (
    <CardContainer styleIndex={verifyTitle(title) || defaultIndex} icon={icon}>
      <IconContainer>{selectIcon(title)}</IconContainer>
      <Content>
        <Title>{title}</Title>
        <TimeFrames>
          <Current>{`${current}hrs`}</Current>
          <Previous>{`Last ${timeFramesKind} - ${previous}hrs`}</Previous>
        </TimeFrames>
      </Content>
    </CardContainer>
  );
}
